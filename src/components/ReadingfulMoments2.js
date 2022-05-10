import React from "react";
import phones from "../img/phonePreview.png";
import rmlogo from "../img/rmLogo.png";
import thematic1 from "../img/thematic1.png";
import persona1 from "../img/persona1.png";
import persona2 from "../img/persona2.png";
import userflows from "../img/userflows.png";

export default function ReadingfulMoments() {
    return (
        <>
            <div className="container-fluid header-cust">
                <div className="container">
                    <div className="row justify-content-center">
                        <img className="img-fluid" alt="Phones with Prototype Design." src={phones} />
                    </div>
                </div>
            </div>
            <div className="container pt-5 pb-5">
                <div className="row justify-content-center"><div className="logo"><img className="img-fluid" alt="Readingful Moments Logo." src={rmlogo} /></div></div>
                
                <div className="row">
                    <div className="col"><h3>Background</h3></div>
                    <div className="w-100"></div>
                    <div className="col-10 pt-5">
                        <h6>OVERVIEW</h6>
                        <p>
                            Set goals. Track habits. Create meaningful, Readingful Moments.<br /><br />
                            Readingful Moments was created as part of Springboard's UX/UI Design Fellowship. 
                            It is a concept for a mobile app that uses artificial learning to partner with parents in developing a habit of reading with their kids. 
                            Goal setting and coaching tips help parents stay on track, and the ability to link to families' 
                            most used entertainment apps to generate stories keeps kids engaged.
                        </p>
                        <button type="button" className="btn btn-warning">See Prototype</button>
                    </div>
                    <div className="col pt-5">
                        <ul className="list-unstyled">
                            <li><h6>ROLE</h6></li>
                            <li><b>Product Designer</b></li>
                            <li>UX Research</li>
                            <li>Interaction</li>
                            <li>Visual design</li>
                            <li>Prototyping &amp; Testing</li>
                            <br /><br />
                            <li><h6>TIMELINE</h6></li>
                            <li>Jan - Apr 2022</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container-fluid research pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col"><h3>Research</h3></div>
                        <div className="w-100"></div>
                        <div className="col">
                            <p>
                                Nearly 66% of 4th graders read below grade level in the United States, 
                                and research shows that not being read to at home before learning how to read at school is a contributing factor. <br /><br />
                                To better understand parents' needs and pain points in setting up a habit of reading at home, <b>I interviewed 5 parents of elementary-school-aged children:</b>
                            </p>
                            <ul>
                                <li><b>Potential users were recruited and screened with a Screener Survey,</b> resulting in identifying 5 potential users to interview</li>
                                <li><b>Remote user interviews were conducted &amp; recorded via Zoom,</b> resulting in about 3 hrs of recorded interview data</li>
                                <li><b>All interviews were transcribed and coded,</b> resulting in about 30 pages of transcribed data</li>
                            </ul>
                        </div>
                        <div className="w-100"></div>
                        <div className="col pb-3"><h4>Synthesizing My Research</h4></div>
                        <div className="w-100"></div>
                        <div className="col">
                            <div className="row justify-content-center">
                                <figure className="figure">
                                    <img src={thematic1} className="figure-img img-fluid" alt="Thematic Analysis 1." />
                                    <figcaption className="figure-caption">I used Miro to visualize &amp; organize my findings into themes.</figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4">
                            <div className="row justify-content-center">Feelings About Reading</div>
                            <div className="row">
                                <div className="col-6"><b>What users say:</b> "Reading is good"</div>
                                <div className="col-6"><b>What users do:</b> Stream a show instead of read</div>
                            </div>
                        </div>
                        <div className="col-4">
                        <div className="row justify-content-center">Being Busy</div>
                            <div className="row">
                                <div className="col-6">"I don't have time"</div>
                                <div className="col-6">"I don't use my time well"</div>
                            </div>
                        </div>
                        <div className="col-4">
                        <div className="row justify-content-center">At-Home Activities (Other Than Reading)</div>
                            <div className="row">
                                <div className="col-4">Stressful: School/Work</div>
                                <div className="col-4">Fun: Playing, Going Outside</div>
                                <div className="col-4">Relaxing: Watching Shows</div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6 pt-5"><h3>Insight</h3></div>
                        <div className="col-6 pt-5"><h3>How Might We...?</h3></div>
                        <div className="w-100"></div>
                        <div className="col-6 pt-5">
                            <p>
                                Parents are <b>very busy,</b> and often find it difficult to feel present during times spent with their children. 
                                They find themselves <b>defaulting to turning on the TV</b> during free time.<br /><br />
                                
                                Parents tend to categorize activities as <b>'stressful', 'fun',</b> and <b>'relaxing'</b>. 
                                Because reading is seen as school-related, it isn't something that parents turn to when looking to do something 'fun' or 'relaxing' with their kids.
                            </p>
                        </div>
                        <div className="col-6 pt-5">
                            <p>
                                How might we make it <b>easier for parents to be intentional about fitting reading with their children</b> into their busy days?<br /><br />
                                How might we <b>reframe reading</b> as something beyond just a school activity?
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid header-cust pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col"><h3>Defining the MVP for Our Users</h3></div>
                        <div className="w-100"></div>
                        <div className="col-10 pt-5">
                            <p>
                                Our users are parents with elementary-school-aged (or younger) children. 
                                In some cases, their kids haven't started learning how to read, are learning how to read right now, or have recently become independent readers.
                            </p>
                        </div>
                    </div>

                    <div className="row pb-5">
                        <div className="col-lg-6 col-md-7">
                            <img className="img-fluid" alt="Persona 1, Jackie &amp; Jaime!" src={persona1} />
                        </div>
                        <div className="col-lg-6 col-md-5 align-self-center">
                            <div className="box-caption p-3">
                                <h4 className="text-center">Defining the MVP for <br />Jackie &amp; Jaime:</h4><br/>
                                <ul>
                                    <li><b>Find stories.</b> Users need access to stories that will keep their kids engaged.</li><br />
                                    <li><b>Read stories.</b> Users need a way to easily read stories with their kids.</li><br />
                                    <li><b>Get reminders.</b> Users may forget to keep up the habit of reading and need reminders to stay motivated.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-5 align-self-center">
                            <div className="box-caption p-3">
                                <h4 className="text-center">Defining the MVP for <br />Suzanne &amp; Tena:</h4><br/>
                                <ul>
                                    <li><b>Set goals.</b> Users need to make decisions about the reading habits they want to or need to build.</li><br />
                                    <li><b>Track goals.</b> Users need to see progress toward their goals.</li><br />
                                    <li><b>Share progress.</b> Users want to communicate their progress.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-7">
                            <img className="img-fluid" alt="Persona 2, Suzanne &amp; Tena!" src={persona2} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col"><h3>Early Ideations</h3></div>
                        <div className="w-100"></div>
                        <div className="col-10 pt-5">
                            <p>
                                Our users are parents with elementary-school-aged (or younger) children. 
                                In some cases, their kids haven't started learning how to read, are learning how to read right now, or have recently become independent readers.
                            </p>
                        </div>
                        <img className="img-fluid" alt="User Flows" src={userflows} />
                    </div>
                </div>
            </div>








        </>
    );
}

// <iframe title="Readingful Moments Prototype" style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIQai1EpRWdQyX1pVGwtRcu%2FReadingful-Moments-P2%3Fnode-id%3D2%253A8037%26starting-point-node-id%3D2%253A10623" allowfullscreen></iframe>  