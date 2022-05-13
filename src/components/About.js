import React from "react";
import kim from "../img/about.png";

export default function About() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-5 col-lg-3">
                        <img className="img-fluid about-img" alt="kim tellez" src={kim} /><br /><br />
                        <h5>about</h5><br />
                        <p>
                            I design because I like solving problems. 
                            I first started using design thinking when I trained at Stanford during a gap year program. 
                            I was 18 and it was my mission to transform education. Almost 10 years later, it transformed me instead. 
                            I realized that what I really want is to leave this world better than I found it, work with inspiring people, and meet my and my family's basic needs. 
                        </p>
                    </div>
                    <div className="col-sm-1 col-md-1 col-lg-1"><p><br /></p></div>
                    <div className="col-sm-6 col-md-6 col-lg-8">
                        <h5>(somewhat) fast facts</h5>
                        <br />
                        <p>
                        &#127474;&#127485; &#8596; &#127482;&#127480; I'm transnational too! Forced migration is scary when you're 4 years old, and it is still an experience that I am processing over two decades later. It is not something I romanticize or "take pride in", though I am an unwavering ally to other migrant babies. <br /><br />
                        &#127758; As an adult, I've had the privilege to live in Mexico, the US (MA, NH, CO, TX), Ecuador, Brazil, Czechia, and Guatemala. I've also travelled to 20 other countries. Ask me for travel stories - those are free! <br /><br />
                        &#128568; I'm the luckiest parent to the most perfect angel, Taco Cat. I aim to be as fierce about consent as she is - touch her without it and the claws come out &#128150;. <br /><br />
                        &#127793; I'm also a budding plant parent. I took a leaf of faith and started an herb garden - and so should you. I'm rooting for you! <br /><br />
                        &#129343; Scuba diving is the closet I've gotten to feel magic. Were it not for global pandemics, my life would be measured by the time between dives. <br /><br />
                        &#128218; Reading is the second closest I've come to feeling magic, especially because I love sci-fi and fantasy. Always down to geek out over Octavia Butler novels. <br /><br /> 
                        &#129498; &#129497; Cosplaying is...you guessed it, another opportunity for me to feel magic. There is nothing like being at a convention with other full-grown adults that are decked out in cosplays that took them months to create. The best part is lunchtime, when we have to go to the nearby Panera and this mundane world transforms into our stage.<br /><br />
                        &#129299; Though it is cliche, I am a life-long learner. I'll spend hours on YouTube watching videos on all things design. However, I especially love learning about things I don't normally deal with in the day-to-day. For example, do you know what a zero-knowledge proof is? I do (sort of). Why? Because learning is fun. <br /><br />
                        <b>TL;DR:</b> I'm here, I'm weird, and I like craft beer. I'm a cat and plant parent living their dream life chasing magic. Let's chat about your activism, travel, scuba diving, cosplaying, and sci-fi novels; then let's design something awesome that solves a problem.
                        </p>

                    </div>
                </div>
            </div>    
        </>
    );
}