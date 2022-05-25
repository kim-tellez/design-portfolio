import React from "react";
import demos from "../../img/demos.png";
import ideation from "../../img/rapidideation.png";
import sketch from "../../img/solutionsketch.png";

export default function Day2() {
    return (
        <div className="container-fluid header-cust2 pt-5 pb-5">
            <div className="container">
                <h3 className="mb-4">Design Sprint Day 2: Sketching the Solution</h3>
                <p>I started Day 2 by doing a lightning demo. 
                    I looked at solutions that users are already using to find a public place to post up, such as Google Maps. 
                    I also looked at Zillow and Booking.com because they are also tools that people use to find places.
                </p>
                <h4 className="mt-5 mb-5">Gathering Inspiration: Solo Lightning Demo</h4>
                <div className="d-flex justify-content-center"><a href={demos} target="_blank" rel="noreferrer" className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid" alt="Solo Lightning Demos" src={demos} /></a></div>
                <p className="pt-4">As I browsed through all of these apps, I was making observations that were relevant to my design brief. I was looking out for:</p>
                <ul>
                    <li>What information is given to users? What's missing?</li>
                    <li>How is information presented? How could that be improved for our users?</li>
                    <li>What are the calls to action? Will they be the same for our users?</li>
                </ul>
                <h4 className="mt-4 mb-4">Sketches</h4>
                <div className="row justify-content-center">
                    <div className="col-lg-1 col-md-0 col-sm-0"></div>
                    <div className="col-lg-4 col-md-6 col-md-6 pb-3">
                        <a href={ideation} target="_blank" rel="noreferrer" className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid" alt="Rapid Ideation" src={ideation} /></a>
                        <h5 className="normal pt-4 pb-3">Round 1: Rapid Ideation</h5>
                        <ul>
                            <li>I timed each initial sketch to 1 minute</li>
                            <li>I went back and refined with thicker and darker markers</li>
                            <li>I borrowed ideas from the apps that I gathered during the lightning demo</li>
                        </ul>

                    </div>
                    <div className="col-lg-1 col-md-0 col-sm-0"></div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <a href={sketch} target="_blank" rel="noreferrer" className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid" alt="Solution Sketch" src={sketch} /></a>
                        <h5 className="normal pt-4 pb-3">Round 2: Create a Solution Sketch</h5>
                        <p>I chose to refine the fourth version of my sketches which features:</p>
                        <ul>
                            <li>A large photo section</li>
                            <li>A dedicated space for a floor plan</li>
                            <li>Quick facts in the initial view of the info card</li>
                        </ul>
                        <p>I then sketched the screens that would come before and after a user selects a location.</p>
                    </div>
                    <div className="col-lg-1 col-md-0 col-sm-0"></div>
                </div>

            
            
            
            </div>    
        </div>
    );
}