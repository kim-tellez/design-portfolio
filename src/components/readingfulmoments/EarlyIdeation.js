import React from "react";
import userflows from "../../img/userflows.png";
import sketches from "../../img/sketches.png";
import early from "../../img/earlywireframes.png";
import round1 from "../../img/round1.png";
import round2 from "../../img/round2.png";
import round3pt1 from "../../img/round3pt1.png";
import round3pt2 from "../../img/round3pt2.png";
import round3pt3 from "../../img/round3pt3.png";
import round3pt4 from "../../img/round3pt4.png";

export default function Fun() {
    return (
        <div className="container-fluid ideation pt-5 pb-5">
            <div className="container">
                <h3>Early Ideations</h3><br />
                <p>
                    Our users are parents with elementary-school-aged (or younger) children. 
                    In some cases, their kids haven't started learning how to read, are learning how to read right now, or have recently become independent readers.
                </p>
                <br />
                <a href={userflows} target="_blank" rel="noreferrer" className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid pb-5" alt="User Flows" src={userflows} /></a>
                <h4>Sketches</h4>
                <div className="d-flex justify-content-center"><a href={sketches} target="_blank" rel="noreferrer" className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid" alt="Sketches" src={sketches} /></a></div>
                <h4 className="pt-5 pb-3">Early Wireframes</h4>
                <div className="d-flex justify-content-center"><a href={early} target="_blank" rel="noreferrer" className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid pb-5" alt="Early Wireframes" src={early} /></a></div>
                <h4>Challenges</h4><br />
                <p>
                    During the ideation phase, I became interested in the idea of personifying the AI Coach but wasn't immediately clear about how to design for that. 
                    I ran with the idea, made some mock-ups of different home screens for my wireframes, and sought user feedback with Guerrilla Usability Tests and from Senior UX designers through Springboard.
                </p>

                <div className="d-flex justify-content-center pml">
                    <div className="row pt-5">
                        <div className="col-lg-5 col-md-5 col-sm-auto">
                            <div className="row pml2">
                                <h5 className="normal">Mid-Fi Mock-Ups - Round 1</h5>
                                <div className="w-100"></div>
                                <div className="col-auto pl-0 pb-3">
                                    <svg fill="none" stroke-width="1.5" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.472 20H4.1a.6.6 0 0 1-.6-.6V9.6a.6.6 0 0 1 .6-.6h2.768a2 2 0 0 0 1.715-.971l2.71-4.517a1.631 1.631 0 0 1 2.961 1.308l-1.022 3.408a.6.6 0 0 0 .574.772h4.575a2 2 0 0 1 1.93 2.526l-1.91 7A2 2 0 0 1 16.473 20Z" stroke="#0b4957" stroke-linecap="round" class="stroke-000000"></path>
                                        <path d="M7 20V9" stroke="#0b4957" stroke-linecap="round" stroke-linejoin="round" class="stroke-000000"></path>
                                    </svg> Brand Identity
                                </div>
                                <div className="col-auto">
                                    <svg fill="none" stroke-width="1.5" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.472 3.5H4.1a.6.6 0 0 0-.6.6v9.8a.6.6 0 0 0 .6.6h2.768a2 2 0 0 1 1.715.971l2.71 4.517a1.631 1.631 0 0 0 2.961-1.308l-1.022-3.408a.6.6 0 0 1 .574-.772h4.575a2 2 0 0 0 1.93-2.526l-1.91-7A2 2 0 0 0 16.473 3.5Z" stroke="#0b4957" stroke-linecap="round" class="stroke-000000"></path>
                                        <path d="M7 14.5v-11" stroke="#0b4957" stroke-linecap="round" stroke-linejoin="round" class="stroke-000000"></path>
                                    </svg> Usability
                                </div>
                            </div>
                            <div className="text pb-3 pml2">
                            Pros:
                                    <ul>
                                        <li><b>Memorable &amp; unique:</b> many users commented that they have never seen an app like this before</li>
                                    </ul>
                                    Cons:
                                    <ul>
                                        <li><b>Many usability issues:</b> users struggled to understand the information in the way it was presented, and were unclear on where to click</li>
                                    </ul>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-auto">
                        <a href={round1} target="_blank" rel="noreferrer" className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid" alt="Mid-Fi Mock-Ups - Round 1" src={round1} /></a>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center pml">
                    <div className="row pt-5">
                        <div className="col-lg-5 col-md-5 col-sm-auto">
                            <div className="row pml2">
                                <h5 className="normal">Mid-Fi Mock-Ups - Round 2</h5>
                                <div className="w-100"></div>
                                <div className="col-auto pl-0 pb-3">
                                <svg fill="none" stroke-width="1.5" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.472 3.5H4.1a.6.6 0 0 0-.6.6v9.8a.6.6 0 0 0 .6.6h2.768a2 2 0 0 1 1.715.971l2.71 4.517a1.631 1.631 0 0 0 2.961-1.308l-1.022-3.408a.6.6 0 0 1 .574-.772h4.575a2 2 0 0 0 1.93-2.526l-1.91-7A2 2 0 0 0 16.473 3.5Z" stroke="#0b4957" stroke-linecap="round" class="stroke-000000"></path>
                                        <path d="M7 14.5v-11" stroke="#0b4957" stroke-linecap="round" stroke-linejoin="round" class="stroke-000000"></path>
                                    </svg> Brand Identity
                                </div>
                                <div className="col-auto">
                                    <svg fill="none" stroke-width="1.5" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.472 20H4.1a.6.6 0 0 1-.6-.6V9.6a.6.6 0 0 1 .6-.6h2.768a2 2 0 0 0 1.715-.971l2.71-4.517a1.631 1.631 0 0 1 2.961 1.308l-1.022 3.408a.6.6 0 0 0 .574.772h4.575a2 2 0 0 1 1.93 2.526l-1.91 7A2 2 0 0 1 16.473 20Z" stroke="#0b4957" stroke-linecap="round" class="stroke-000000"></path>
                                        <path d="M7 20V9" stroke="#0b4957" stroke-linecap="round" stroke-linejoin="round" class="stroke-000000"></path>
                                    </svg> Usability
                                </div>
                            </div>
                            <div className="text pb-3 pml2">
                            Pros:
                                    <ul>
                                        <li><b>Improved Usability:</b> users were able to identify the 4 goals and tims and could anticipate what to expect from the bottom navigation</li>
                                    </ul>
                                    Cons:
                                    <ul>
                                        <li><b>Brand identity lost:</b> "you took the fun out of it! It looks like any other dashboard now"</li>
                                    </ul>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-auto pb-5">
                        <a href={round2} target="_blank" rel="noreferrer" className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid" alt="Mid-Fi Mock-Ups - Round 2" src={round2} /></a>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center pml3 pt-2 pb-3">
                    <div className="row">
                        <h5 className="normal">Mid-Fi Mock-Ups - Round 3</h5>
                        <div className="w-100"></div>
                        <div className="col-auto pl-0 pb-3">
                            <svg fill="none" stroke-width="1.5" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.472 20H4.1a.6.6 0 0 1-.6-.6V9.6a.6.6 0 0 1 .6-.6h2.768a2 2 0 0 0 1.715-.971l2.71-4.517a1.631 1.631 0 0 1 2.961 1.308l-1.022 3.408a.6.6 0 0 0 .574.772h4.575a2 2 0 0 1 1.93 2.526l-1.91 7A2 2 0 0 1 16.473 20Z" stroke="#0b4957" stroke-linecap="round" class="stroke-000000"></path>
                                <path d="M7 20V9" stroke="#0b4957" stroke-linecap="round" stroke-linejoin="round" class="stroke-000000"></path>
                            </svg> Brand Identity
                        </div>
                        <div className="col-auto">
                            <svg fill="none" stroke-width="1.5" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.472 20H4.1a.6.6 0 0 1-.6-.6V9.6a.6.6 0 0 1 .6-.6h2.768a2 2 0 0 0 1.715-.971l2.71-4.517a1.631 1.631 0 0 1 2.961 1.308l-1.022 3.408a.6.6 0 0 0 .574.772h4.575a2 2 0 0 1 1.93 2.526l-1.91 7A2 2 0 0 1 16.473 20Z" stroke="#0b4957" stroke-linecap="round" class="stroke-000000"></path>
                                <path d="M7 20V9" stroke="#0b4957" stroke-linecap="round" stroke-linejoin="round" class="stroke-000000"></path>
                            </svg> Usability
                        </div>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-auto pml3">
                        <a href={round3pt1} target="_blank" rel="noreferrer" className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid" alt="Mid-Fi Mock-Ups - Round 3 (On Phone)" src={round3pt1} /></a>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1 pt-5"></div>
                        <div className="col-lg-7 col-md-7 col-sm-auto pt-5">
                        <div className="d-flex justify-content-center"><a href={round3pt2} target="_blank" rel="noreferrer" className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid" alt="Mid-Fi Mock-Ups - Round 3 (Mascot)" src={round3pt2} /></a></div>< br />
                        <p className="pb-3">To maintain a strong brand identity, I decided to create custom 3D illustrations that were inspired by the original design.</p>
                        <div className="d-flex justify-content-center"><a href={round3pt3} target="_blank" rel="noreferrer" className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid" alt="Mid-Fi Mock-Ups - Round 3 (Progress Indicator and Coaching Tip)" src={round3pt3} /></a></div><br />
                        <p className="pb-3">I decided to re-work the progress indicators and coaching tips UI to better match the softly squared edges of the mascot.</p>
                        <div className="d-flex justify-content-center"><a href={round3pt4} target="_blank" rel="noreferrer" className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid" alt="Mid-Fi Mock-Ups - Round 3 (Bottom Nav)" src={round3pt4} /></a></div><br />
                        <p>To maintain an intuitive navigation, I opted for keeping the bottom navigation with icons and short titles.</p>
                        </div>

                    </div>


            </div>
        </div>
    );
}