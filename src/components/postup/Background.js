import React from "react";
import pulogo from "../../img/pulogo.png";

export default function Day1() {
    return (
        <div className="container-fluid pb-5">
            <div className="container">
                <div className="row d-flex justify-content-center p-5">
                    <img className="img-fluid logo" alt="PostUp Logo." src={pulogo} />
                </div>
                <h3>Background</h3>
                <div className="row">
                    <div className="col-sm-8 col-md-8 col-lg-8 pt-4">
                        <h6 className="h62">OVERVIEW</h6>
                        <p className="pr-5">
                        What if you could see the floor plan of a public space before you choose a place to post up and work for a few hours?<br /><br />
                        PostUp is a company imagined by the folks at BitesizeUX. 
                        I was given a design brief and challenged to follow a 5-day Design Sprint. 
                        The goal was to create a solution for people who work remotely to find public spaces to work from. 
                        My hypothesis was that adding a blueprint that shows what users look for (bathrooms, seating, tables) would add value that is currently 
                        missing from other solutions.
                        </p>
                        <a href="https://www.figma.com/proto/Cl0f8TcCO6UliH9abevpaZ/Post-Up-Prototype?node-id=1%3A2&amp;scaling=scale-down&amp;page-id=0%3A1&amp;starting-point-node-id=39%3A2368&amp;show-proto-sidebar=1" target="_blank" rel="noreferrer" className="btn active button mt-3">See Prototype</a>
                    </div>
                    <div className="col-sm-1 col-md-1 col-lg-2"></div>
                    <div className="col-sm-3 col-md-3 col-lg-2 pt-5">
                        <ul className="list-unstyled">
                            <li><h6 className="h62">ROLE</h6></li>
                            <li><b>Product Designer</b></li>
                            <li>UX Research</li>
                            <li>Interaction</li>
                            <li>Visual design</li>
                            <li>Prototyping &amp; Testing</li>
                            <br /><br />
                            <li><h6 className="h62">TIMELINE</h6></li>
                            <li>5 Days</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>  
    );
}