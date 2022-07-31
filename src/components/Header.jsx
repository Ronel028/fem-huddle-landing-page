import React from "react";

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
                        <h1>Build The Community Your Fans Will Love</h1>
                        <p className="p-font">
                            Huddle re-imagines the way we build Communities. You have a voice, but
                            so thats your audience. Create connections with your users as you engage
                            in genuine discussion.
                        </p>
                        <button className="btn">Get Started For Fee</button>
                    </div>
                    <div className="hero-image">
                        <img src={HeroImage} alt="Illustration Mockups" />
                    </div>
                </main>
                {/* end main */}
            </div>
        </header>
    )
}

export default Header;