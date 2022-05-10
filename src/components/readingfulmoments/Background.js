import React from "react";
import rmlogo from "../../img/rmLogo.png";

export default function Background() {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row d-flex justify-content-center p-5">
                    <img className="img-fluid logo" alt="Readingful Moments Logo." src={rmlogo} />
                </div>
                <h3>Background</h3>
                <div className="row">
                    <div className="col-sm-8 col-md-8 col-lg-8 pt-5">
                        <h6>OVERVIEW</h6>
                        <p className="pr-5">
                            Set goals. Track habits. Create meaningful, Readingful Moments.<br /><br />
                            Readingful Moments was created as part of Springboard's UX/UI Design Fellowship. 
                            It is a concept for a mobile app that uses artificial learning to partner with parents in developing a habit of reading with their kids. 
                            Goal setting and coaching tips help parents stay on track, and the ability to link to families' 
                            most used entertainment apps to generate stories keeps kids engaged.
                        </p>
                        <a href="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIQai1EpRWdQyX1pVGwtRcu%2FReadingful-Moments-P2%3Fnode-id%3D2%253A8037%26starting-point-node-id%3D2%253A10623" target="_blank" rel="noreferrer" className="btn active button mt-3">See Prototype</a>
                    </div>
                    <div className="col-sm-1 col-md-1 col-lg-2"></div>
                    <div className="col-sm-3 col-md-3 col-lg-2 pt-5">
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
        </div>   
    );
}