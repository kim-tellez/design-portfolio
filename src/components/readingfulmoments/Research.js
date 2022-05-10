import React from "react";
import thematic from "../../img/thematic1.png";

export default function Research() {
    return (
        <>
            <div className="container-fluid research pt-5 pb-5">
                <div className="container">
                    <h3>Research</h3>
                        <div className="whitebg">
                        <p className="mt-4">
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
                    <h4 className="mt-4 mb-4">Synthesizing My Research</h4>
                    <div className="d-flex justify-content-center">
                        <figure className="figure">
                            <a href={thematic} className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img src={thematic} className="figure-img img-fluid" alt="Thematic Analysis 1." /></a>
                            <figcaption className="figure-caption">I used Miro to visualize &amp; organize my findings into themes.</figcaption>
                        </figure>
                    </div>
                </div>
            </div>

                <div className="container pb-5">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <div className="one d-flex justify-content-center"><h5 className="read pt-2 pb-1">Feelings About Reading</h5></div>
                            <div className="row">
                                <div className="col-sm-auto col-md-auto col-lg-6 pt-2"><b>What users say:</b> "Reading is good"</div>
                                <div className="col-sm-auto col-md-auto col-lg-6 pt-2 pb-4"><b>What users do:</b> Stream a show instead of read</div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <div className="two d-flex justify-content-center"><h5 className="read pt-2 pb-1">Being Busy</h5></div>
                            <div className="row">
                                <div className="col-sm-auto col-md-auto col-lg-auto pt-2">"I don't have time"</div>
                                <div className="col-sm-auto col-md-auto col-lg-auto pt-2 pb-4">"I don't use my time well"</div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <div className="three d-flex justify-content-center"><h5 className="read text-center pt-2 pb-1">At-Home Activities</h5></div>
                            <div className="row">
                                <div className="col-sm-auto col-md-auto col-lg-4 pt-2"><b>Stressful:</b> School/Work</div>
                                <div className="col-sm-auto col-md-auto col-lg-4 pt-2"><b>Fun:</b> Playing, Going Outside</div>
                                <div className="col-sm-auto col-md-auto col-lg-4 pt-2"><b>Relaxing:</b> Watching Shows</div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6 col-md-6 col-lg-6 pt-5"><h4>Insight</h4></div>
                        <div className="col-1 col-md-1 col-lg-1"></div>
                        <div className="col-5 col-md-5 col-lg-5 pt-5"><h4>How Might We...?</h4></div>
                        <div className="w-100"></div>
                        <div className="col-6 col-md-6 col-lg-6 pt-3">
                            <p>
                                Parents are <b>very busy,</b> and often find it difficult to feel present during times spent with their children. 
                                They find themselves <b>defaulting to turning on the TV</b> during free time.
                            </p>
                        </div>
                        <div className="col-1 col-md-1 col-lg-1"></div>
                        <div className="col-5 col-md-5 col-lg-5 pt-3">
                            <p>
                                How might we make it <b>easier for parents to be intentional about fitting reading with their children</b> into their busy days?
                            </p>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-6 col-md-6 col-lg-6">
                            <p>
                                
                                Parents tend to categorize activities as <b>'stressful', 'fun',</b> and <b>'relaxing'</b>. 
                                Because reading is seen as school-related, it isn't something that parents turn to when looking to do something 'fun' or 'relaxing' with their kids.
                            </p>
                        </div>
                        <div className="col-1 col-md-1 col-lg-1"></div>
                        <div className="col-5 col-md-5 col-lg-5">
                            <p>
                                How might we <b>reframe reading</b> as something beyond just a school activity?
                            </p>
                        </div>
                    </div>
                </div>
        </>
    );
}