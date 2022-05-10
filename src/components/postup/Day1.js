import React from "react";
import synthesize from "../../img/synthesize.png";
import solution from "../../img/solutionmap.png";

export default function Day1() {
    return (
        <div className="container-fluid pb-5">
            <div className="container">
                <h3 className="mb-4">Design Sprint Day 1: Understand &amp; Map</h3>
                <p>
                BitesizeUX provided notes about previous research, a user persona, and an interview where a potential user walks 
                through the steps she takes to find a place to “post up” to work using Google Maps. I reviewed and coded all prior research 
                and listened to the interview while taking notes. 
                </p>

                <h4 className="mt-5 mb-5">Synthesizing Prior Research</h4>
                <div className="row">
                    <div className="col-lg-5 col-md-auto col-sm-auto pb-3">
                    <a href={synthesize} className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid" alt="Synthesizing Prior Research" src={synthesize} /></a>
                    </div>
                    <div className="col-lg-7 col-md-auto col-sm-auto mb-5">
                        <p>One of the biggest user pain points that I noticed is that users struggle to determine whether a place has the amenities that they need. These include:</p>
                        <ul>
                            <li>Strong WiFi</li>
                            <li>Outlets</li>
                            <li>Bathrooms</li>
                            <li>Ample Seating</li>
                        </ul>
                        <p>They also want information about the overall atmosphere, and whether it is a good fit for what they need to do. 
                            For example, some users want to find places that they can use to have meetings, while others care more about seeing others working on their laptops. </p>
                        <p><b>Currently,</b> users are able to piece together these bits of information by looking through photos and reviews, 
                            but not all places have all of the information that they need. 
                        </p>
                        <p><b>What users need</b> is a solution that has all of the information that they look for easily accessible so that they can quickly review it 
                        and get to work instead of spending a lot of time deciding where to go.
                        </p>
                    </div>
                </div>
                <div className="row flex-lg-row-reverse flex-md-row flex-sm-row">
                    <div className="col-lg-5 col-md-auto col-sm-auto order-1 mt-5">
                        <h4>Mapping the Solution</h4><br/>
                        <p>To end Day 1, I did a mapping exercise to diagram how our users would go through the process of selecting a place to work. </p>
                        <p>
                        Because I was working on this by myself, I needed a way to iterate and improve my ideas. 
                        After I wrote out each map, I took a step back and <span className="red">annotated in red</span> where I thought it could be improved. 
                        I then made a new map that addressed those issues until I landed on a solution that was both viable within the time constraints and innovative.
                        </p>
                        <p>
                        At this stage, I had thought of including a “simple seat/table diagram” as a part of my solution. 
                        This idea grew into adding a modular blueprint on Day 3.
                        </p>
                    </div>
                    <div className="col-lg-7 col-md-auto col-sm-auto d-flex justify-content-lg-end order-0 pt-3">
                    <a href={solution} className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid" alt="Persona 2, Suzanne &amp; Tena!" src={solution} /></a>
                    </div>
                </div>


            </div>
        </div>  
    );
}