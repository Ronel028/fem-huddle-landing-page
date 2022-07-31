import React from "react";

import FooterLogo from '../assets/images/footer-logo.svg'
import IconEmail from '../assets/images/icon-email.svg'
import IconLocation from '../assets/images/icon-location.svg'
import IconPhone from '../assets/images/icon-phone.svg'

function Footer(){
    return (
        <footer className="footer">
            <div className="footer-container container">

                {/* footer logo */}
                <div className="footer-logo">
                    <img src={FooterLogo} alt="Logo" />
                </div>

                {/* footer contact */}
                <div className="contact-info">
                    <div className="contact">
                        {/* location */}
                        <div className="location">
                            <img src={IconLocation} alt="Location" />
                            <p className="p-font">
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Non consequuntur tempore beatae nihil possimus
                                at veritatis
                            </p>
                        </div>
                        {/* phone */}
                        <div className="phone">
                            <img src={IconPhone} alt="Call" />
                            <p className="p-font">
                                +1-543-123-4567
                            </p>
                        </div>
                        <div className="email">
                            <img src={IconEmail} alt="Email me" />
                            <p className="p-font">
                                example@huddle.com
                            </p>
                        </div>
                    </div>
                    <div className="about-us-1 justify-self-center">
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">What We Do</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="about-us-2">
                        <ul>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="social-media">
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>

                {/* footer copyright */}
                <div className="copyright justify-self-end">
                    <p>&copy; Copyright 2018 Huddle. All right reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;