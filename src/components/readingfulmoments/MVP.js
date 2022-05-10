import React from "react";
import persona1 from "../../img/persona1.png";
import persona2 from "../../img/persona2.png";

export default function Fun() {
    return (
        <div className="container-fluid header-cust pt-5 pb-5">
            <div className="container">
                <h3>Defining the MVP for Our Users</h3><br />
                <p>
                    Our users are parents with elementary-school-aged (or younger) children. 
                    In some cases, their kids haven't started learning how to read, are learning how to read right now, or have recently become independent readers.
                </p>

                <div className="row">
                    <div className="col-lg-7 col-md-auto col-sm-auto pb-3">
                    <a href={persona1} className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid" alt="Persona 1, Jackie &amp; Jaime!" src={persona1} /></a>
                    </div>
                    <div className="col-lg-4 col-md-auto col-sm-auto align-self-center box-caption mb-5 p-3">
                        <h4 className="text-center">Defining the MVP for <br />Jackie &amp; Jaime:</h4><br/>
                        <ul>
                            <li><b>Find stories.</b> Users need access to stories that will keep their kids engaged.</li><br />
                            <li><b>Read stories.</b> Users need a way to easily read stories with their kids.</li><br />
                            <li><b>Get reminders.</b> Users may forget to keep up the habit of reading and need reminders to stay motivated.</li>
                        </ul>
                    </div>
                </div>
                <div className="row flex-lg-row-reverse flex-md-row flex-sm-row">
                    <div className="col-lg-4 col-md-auto col-sm-auto align-self-center order-1 box-caption mt-5 p-3">
                        <h4 className="text-center">Defining the MVP for <br />Suzanne &amp; Tena:</h4><br/>
                        <ul>
                            <li><b>Set goals.</b> Users need to make decisions about the reading habits they want to or need to build.</li><br />
                            <li><b>Track goals.</b> Users need to see progress toward their goals.</li><br />
                            <li><b>Share progress.</b> Users want to communicate their progress.</li>
                        </ul>
                    </div>
                    <div className="col-lg-7 col-md-auto col-sm-auto d-flex justify-content-lg-end order-0 pt-3">
                    <a href={persona2} className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img className="img-fluid" alt="Persona 2, Suzanne &amp; Tena!" src={persona2} /></a>
                    </div>
                </div>
            </div>    
        </div>
    );
}