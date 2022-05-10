import React from "react";
import usability from "../../img/usabilitytest.png";

export default function Day5() {
    return (
        <div className="container-fluid pt-5 pb-5">
            <div className="container">
            <h3 className="mb-4">Design Sprint Day 5: Test</h3>
                <p>At this stage, I created a prototype of the Hi-Fi screens in Figma that was tested with potential users. 
                    I used the <b>5 Act Interview strategy</b> to test with five different potential users. 
                    These tests were conducted remotely on Zoom.
                </p>

                <h4>Findings</h4>
                <div className="row pt-3">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <p><b>Summary: </b></p>
                        <ul>
                            <li>
                                <p><b>Pinned locations:</b> several users opted for clicking directly on a pin instead of starting with a search.</p>
                                <ul>
                                    <li><p>Some users would have preferred that the pins be different colors in addition to having the different icons.</p></li>
                                </ul>
                            </li>
                            <li>
                                <p><b>Blueprint:</b> 4 out of 5 users found this to be a helpful feature. 3 users noted that being able to see a floor plan of a public 
                                    space could help them when planning for social distancing, encouraging them to consider working more in public spaces again.</p>
                                    <ul>
                                        <li><p>Several users would have liked to see outlets mapped out on the blueprint.</p></li>
                                    </ul>
                            </li>
                            <li>
                                <p><b>Navigation:</b> Users got stuck navigating through the app:</p>
                                <ul>
                                    <li><p>Some users didn't realize that you could scroll through the images</p></li>
                                    <li><p>It took users a couple of tries to figure out to pull up the info card</p></li>
                                </ul>
                            </li>
                        </ul>
                        <p><b>Recommendations for Future Iterations:</b></p>
                        <ul>
                            <li><p><b>Build out the color palette for the pins. </b>
                                Right now, the app pins cafes, libraries, museums, and parks. 
                                Each of these could have their own color in addition to the icons that are already used.</p></li>
                            <li><p><b>Find a way to map outlets. </b> 
                                While it's relatively simple to draw a diagram of a space using photos, outlets don't generally appear in photos. 
                                If users could interact with the blueprint to suggest edits, that could be a way to crowdsource more accurate information for the blueprints.</p></li>
                            <li><p><b>Test with users on a phone. </b> 
                                Because I recorded the tests via Zoom, my participants were interacting with a prototype of a phone app on a computer screen. 
                                By the end of the test, participants reflected that many of the issues they encountered with the navigation may not have come about if they had tested the prototype on their phone.</p></li>
                        </ul>

                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    <div className="col-lg-5 col-md-5 col-sm-5">
                        <div className="d-flex justify-content-center"><a href="https://www.figma.com/proto/Cl0f8TcCO6UliH9abevpaZ/Post-Up-Prototype?node-id=1%3A2&amp;scaling=scale-down&amp;page-id=0%3A1&amp;starting-point-node-id=39%3A2368&amp;show-proto-sidebar=1" target="_blank" rel="noreferrer">
                            <img className="img-fluid pb-3" alt="Click for an Interactive Prototype" src={usability} />
                            <div className="text-center"><p className="btn active button mt-4">See Prototype</p></div>
                        </a></div>
                    
                    </div>
                </div>
            </div>    
        </div>
    );
}