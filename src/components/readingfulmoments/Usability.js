import React from "react";
import usability from "../../img/usability.png";
import uphone from "../../img/usabilityphone.png";

export default function Usability() {
    return (
        <div className="container-fluid header-cust pt-5 pb-5">
            <div className="container">
                <h3>Finalizing the MVP: Usability Tests</h3><br />
                <p>At this stage, I created a prototype of the Hi-Fi screens in Figma that was tested with potential users. I conducted two rounds of user testing:</p>
                <ul>
                    <li><p><b>Round 1</b> consisted of uncovering major usability issues</p></li>
                    <li><p><b>Round 2</b> consisted of validating my solutions to the usability issues uncovered in Round 1 and documenting findings for future iterations</p></li>
                </ul><br />

                <h4>Usability Test Findings - Round 1</h4>
                <div className="row pt-3 pb-5">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <h5 className="normal pb-3">Sample Usability Issue:</h5>
                        <p><b>Critical Issue: The goals progress indicators are confusing.</b></p>
                        <ul>
                            <li><p>0 out of 5 users were able to immediately identify how the progress indicators worked.</p></li>
                            <li><p>Users interpreted the information on the goal progress indicators differently.</p></li>
                            <li><p>Users were confused about why these were showing up under Coaching Tips on the home page.</p></li>
                        </ul>
                        <p><b>Recommendations:</b></p>
                        <ul>
                            <li><p>Remove the number inside the goal progress indicators, as these are confusing to users.</p></li>
                            <li><p>Create a clear start/endpoint on the progress bar with a clear icon (like a star) that contains the final goal.</p></li>
                            <li><p>Add the goal's icon at the center to make it clear to users what goal each indicator belongs to.</p></li>
                            <li><p>Separate Coaching Tips and the goal progress indicators into their own sections on the home page.</p></li>
                        </ul>

                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    <div className="col-lg-5 col-md-5 col-sm-5">
                        <a href={usability} target="_blank" rel="noreferrer" className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid" alt="Usability Issues, Priorities, and Recommendations" src={usability} /></a>
                    </div>
                </div>

                <h4>Usability Test Findings - Round 2</h4>
                <div className="row pt-3">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <h5 className="normal">Summary:</h5>
                        <ul>
                            <li><p><b>The critical usability issues were resolved. </b>
                            I implemented changes that eliminated a lot of the confusion that users were experiencing when going through the prototype.</p></li>
                            <li><p>New usability issues uncovered/created:</p>
                                <ul>
                                    <li><p><b>Parent/Child profiles:</b> 4 out of the 5 participants expected a children's version/profile.</p></li>
                                    <li><p><b>Branding:</b> All 5 participants recognized the mascot as an iconic part of the app. Several users noted that the strong branding from the homepage is lost throughout the rest of the app. The mascot adds joy and whimsy, and they want to see it on other pages.</p></li>
                                    <li><p><b>Improving reading recommendations:</b> the "Link Apps" button and banner on Explore Page are being completely ignored.</p></li>
                                    <li><p><b>Copy revisions:</b> The copy under the progress indicators in the Weekly Progress part of the home page is too long and the copy of goal descriptors on the Goals page is unclear.</p></li>
                                </ul>
                            </li>
                        </ul>
                        <h5 className="normal">Recommendations for Future Iterations:</h5>
                        <ul>
                            <li><p><b>Add multiple profiles.</b> Build out multiple profiles that are managed by a parent profile.</p></li>
                            <li><p><b>Improve consistent branding.</b> Create more in-house graphics, or find more ways to use the ones that have been created.</p></li>
                            <li><p><b>Improve "Reading Recommendations" location.</b> Keep this as an option under settings.</p></li>
                            <li><p><b>Revise the copy. </b>
                                Find a way to convey the information under Weekly Progress more clearly, 
                                so that long copy is not needed OR re-write the copy to be more succinct and take up no more than 2 lines.</p></li>
                        </ul>

                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    <div className="col-lg-5 col-md-5 col-sm-5 pt-3">
                        <div className="d-flex justify-content-center"><a href="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIQai1EpRWdQyX1pVGwtRcu%2FReadingful-Moments-P2%3Fnode-id%3D2%253A8037%26starting-point-node-id%3D2%253A10623" target="_blank" rel="noreferrer">
                            <img className="img-fluid pb-5" alt="Click for an Interactive Prototype" src={uphone} />
                            <div className="text-center"><p className="btn active button mt-4">See Prototype</p></div>
                        </a></div>
                    </div>
                </div>







            </div>  
        </div>    
    );
}