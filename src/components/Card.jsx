import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Card(){

    const {ref, inView} = useInView();
    const animation = useAnimation();

    useEffect(function(){
        if(inView){
            animation.start({
                opacity: 1,
                transition: {
                    duration: 0.4,
                    delay: 0.3
                }
            })
        }
        if(!inView){
            animation.start({
                opacity: 0,
            })
        }
    }, [inView])

    return (
        <motion.div 
            ref={ref} 
            className="modal"
            animate={animation}
        >
            <h3>Ready To Build Your Community?</h3>
            <button className="btn">Get Started For Free</button>
        </motion.div>
    )
}

export default Card;