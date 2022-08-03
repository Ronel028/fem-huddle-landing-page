import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import FooterLogo from '../assets/images/footer-logo.svg'
import IconEmail from '../assets/images/icon-email.svg'
import IconLocation from '../assets/images/icon-location.svg'
import IconPhone from '../assets/images/icon-phone.svg'

function Footer(){

    const {ref, inView} = useInView();
    const animation = useAnimation();

    useEffect(function(){
        if(inView){
            animation.start({
                opacity: 1,
            })
        }
        if(!inView){
            animation.start({
                opacity: 0,
            })
        }
    }, [inView])

    return (
        <footer className="footer">
            <div ref={ref} className="footer-container container">

                {/* footer logo */}
                <motion.div 
                    className="footer-logo"
                    animate={animation}
                    transition={{ delay: 0.3 }}
                >
                    <img src={FooterLogo} alt="Logo" />
                </motion.div>

                {/* footer contact */}
                <div className="contact-info">
                    <div className="contact">
                        {/* location */}
                        <motion.div 
                            className="location"
                            animate={animation}
                            transition={{ delay: 0.5 }}
                        >
                            <img src={IconLocation} alt="Location" />
                            <p className="p-font font-size">
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Non consequuntur tempore beatae nihil possimus
                                at veritatis
                            </p>
                        </motion.div>
                        {/* phone */}
                        <motion.div 
                            className="phone"
                            animate={animation}
                            transition={{ delay: 0.7 }}
                        >
                            <img src={IconPhone} alt="Call" />
                            <p className="p-font font-size">
                                +1-543-123-4567
                            </p>
                        </motion.div>
                        <motion.div 
                            className="email"
                            animate={animation}
                            transition={{ delay: 0.9 }}
                        >
                            <img src={IconEmail} alt="Email me" />
                            <p className="p-font font-size">
                                example@huddle.com
                            </p>
                        </motion.div>
                    </div>
                    <motion.div 
                        className="about-us-1 justify-self-center justify-self-start"
                        animate={animation}
                        transition={{ delay: 0.5 }}
                    >
                        <ul>
                            <li><a href="#" className="font-size">About Us</a></li>
                            <li><a href="#" className="font-size">What We Do</a></li>
                            <li><a href="#" className="font-size">FAQ</a></li>
                        </ul>
                        <ul>
                            <li><a href="#" className="font-size">Career</a></li>
                            <li><a href="#" className="font-size">Blog</a></li>
                            <li><a href="#" className="font-size">Contact Us</a></li>
                        </ul>
                    </motion.div>

                    <motion.div 
                        className="social-media justify-self-center"
                        animate={animation}
                        transition={{ delay: 0.5 }}
                    >
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </motion.div>
                </div>

                {/* footer copyright */}
                <motion.div 
                    className="copyright justify-self-end justify-center text-align"
                    animate={animation}
                    transition={{ delay: 1 }}
                >
                    <p className="p-font font-size">&copy; Copyright 2018 Huddle. All right reserved</p>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer;