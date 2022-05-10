import React from "react";
import storyboard1 from "../../img/storyboard1.png";
import storyboard2 from "../../img/storyboard2.png";
import storyboard3 from "../../img/storyboard3.png";
import main from "../../img/mainelement.png";

export default function Day3() {
    return (
        <div className="container-fluid pt-5 pb-5">
            <div className="container">
            <h3 className="mb-4">Design Sprint Day 3: Create a Storyboard</h3>
                <p>I started Day 2 by doing a lightning demo. 
                    I looked at solutions that users are already using to find a public place to post up, such as Google Maps. 
                    I also looked at Zillow and Booking.com because they are also tools that people use to find places.
                </p>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4"><div className="d-flex justify-content-center pt-3"><a href={storyboard1} className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid" alt="Storyboard 1" src={storyboard1} /></a></div></div>
                    <div className="col-lg-4 col-md-4 col-sm-4"><div className="d-flex justify-content-center pt-3"><a href={storyboard2} className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid" alt="Storyboard 2" src={storyboard2} /></a></div></div>
                    <div className="col-lg-4 col-md-4 col-sm-4"><div className="d-flex justify-content-center pt-3"><a href={storyboard3} className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid" alt="Storyboard 3" src={storyboard3} /></a></div></div>
                </div>

                <h4 className="mb-5 mt-5">Aha! Moment</h4>
                <div className="row">
                    <div className="col-lg-4 col-md-auto col-sm-auto">
                    <a href={main} className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid" alt="Main Elements of a Cafe" src={main} /></a>
                    </div>
                    <div className="col-lg-7 col-md-auto col-sm-auto pl-5 mt-4">
                        <p>As I was looking for design inspiration and sketching out ideas, I was also looking through a lot of images of cafes. 
                            I started to notice that most of the spaces I was looking at had several of the same elements.</p>
                        <p>I started to wonder:</p>
                        <p><b>What if we had basic components for each of the common elements found in public spaces and used machine 
                            learning to generate basic floor plans based on publically available images?</b></p>
                        <p>This later became a central piece of the design.</p>
                    </div>
                </div>
            
            
            </div>    
        </div>
    );
}