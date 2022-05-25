import React from "react";
import quick from "../../img/quickselect.png";
import search from "../../img/search.png";
import detail from "../../img/detailedview.png";
import blueprint from "../../img/blueprint.png";
import component from "../../img/components.png";

export default function Day4() {
    return (
        <div className="container-fluid header-cust2 pt-5 pb-5">
            <div className="container">
            <h3 className="mb-4">Design Sprint Day 4: Prototype</h3>
                <p>Using my sketches from the prior two days and the list of user needs that I gathered on the first day, I created high-fidelity screens. 
                    For the sake of time and working as efficiently as possible, I used the Material Design System from Google to design the prototype.
                </p>
                <div className="row pt-4">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <p><b>Quick-select: </b>pins show recommended locations nearby.</p>
                        <div className="d-flex justify-content-center"><a href={quick} target="_blank" rel="noreferrer" className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid pb-5" alt="Quick-select" src={quick} /></a></div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <p><b>Search: </b>users can find more specific options by searching.</p>
                        <div className="d-flex justify-content-center"><a href={search} target="_blank" rel="noreferrer" className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid pb-5" alt="Search" src={search} /></a></div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <p><b>Detailed View: </b>users can view a location's images and amentities</p>
                        <div className="d-flex justify-content-center"><a href={detail} target="_blank" rel="noreferrer" className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid pb-5" alt="Detailed View" src={detail} /></a></div>
                    </div>
                </div>
                <h4 className="mb-5">Making Blueprints From Modular Components</h4>
                <div className="d-flex justify-content-center"><a href={blueprint} target="_blank" rel="noreferrer" className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid pb-5" alt="Window Seat Cafe Blueprint" src={blueprint} /></a></div>
                <div className="d-flex justify-content-center"><a href={component} target="_blank" rel="noreferrer" className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid pb-5" alt="Modular Component" src={component} /></a></div>



            </div>    
        </div>
    );
}