import React from "react";
import { motion } from "framer-motion";

// images
import Logo from '../assets/images/logo.svg'
import HeroImage from '../assets/images/illustration-mockups.svg'

function Header(){
    return (
        <header className="header">
            <div className="container">
                {/* nav */}
                <nav className="nav--menu">
                    <a href="#">
                        <img src={Logo} alt="Huddle" />  
                    </a>
                    <button className="btn">Try it Free</button>
                </nav>  
                {/* end nav */}

                {/* main */}
                <main className="hero--section">
                    <div className="hero-text">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1}}
                            transition={{ duration: 0.5, delay: 0.3  }}
                        >
                            Build The Community Your Fans Will Love
                        </motion.h1>
                        <motion.p 
                            className="p-font"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1}}
                            transition={{ duration: 0.5, delay: 0.5  }}
                        >
                            Huddle re-imagines the way we build Communities. You have a voice, but
                            so thats your audience. Create connections with your users as you engage
                            in genuine discussion.
                        </motion.p>
                        <motion.button 
                            className="btn"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1}}
                            transition={{ duration: 0.5, delay: 0.7  }}
                        >
                            Get Started For Fee
                        </motion.button>
                    </div>
                    <motion.div 
                        className="hero-image"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.7}}
                    >
                        <img src={HeroImage} alt="Illustration Mockups" />
                    </motion.div>
                </main>
                {/* end main */}
            </div>
        </header>
    )
}

export default Header;