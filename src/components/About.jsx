import React from "react";

// component
import Card from './Card';


// images
import GrowTogether from '../assets/images/illustration-grow-together.svg'
import FlowingConvo from '../assets/images/illustration-flowing-conversation.svg'
import YourUsers from '../assets/images/illustration-your-users.svg'

function About(){
    return (
        <section className="about container">
            <div className="card--container">

                <div className="card card-1">
                    <div className="card-text grid-area-text">
                        <h3>Grow Together</h3>
                        <p className="p-font">
                            Generate meaningful discussions with your audience and build a
                            strong, loyal community. Think of the insightful conversations 
                            you miss out on with the feedback form.
                        </p>
                    </div>
                    <div className="card-image justify-self-end grid-area-image">
                        <img src={GrowTogether} alt="Grow together" />
                    </div>
                </div>

                <div className="card card-2">
                    <div className="card-image">
                        <img src={FlowingConvo} alt="Flowing conversation" />
                    </div>
                    <div className="card-text">
                        <h3>Flowing Conversation</h3>
                        <p className="p-font">
                            You wouldn't paginate a conversation in real life, so why
                            do it online? Our threads have just-in-time loading for a
                            more natural flow.
                        </p>
                    </div>
                </div>

                <div className="card card-3">
                    <div className="card-text grid-area-text">
                        <h3>Your Users</h3>
                        <p className="p-font">
                            It takes no time at all to integrate huddle with your app's
                            authentication solution. This means, once signed in to your
                            app, your user can start chatting immediately.
                        </p>
                    </div>
                    <div className="card-image justify-self-end grid-area-image">
                        <img src={YourUsers} alt="Your user" />
                    </div>
                </div>

            </div>

            {/* card */}
            <Card />
            
        </section>
    )
}

export default About 