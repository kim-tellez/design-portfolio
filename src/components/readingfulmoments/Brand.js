import React from "react";
import colors from "../../img/colors.png";
import logo1 from "../../img/logo1.png";
import logo2 from "../../img/logo2.png";
import hifi from "../../img/hifiscreens.png";

export default function Brand() {
    return (
        <div className="container-fluid pt-5 pb-5">
            <div className="container">
                <h3 className="pb-3">Brand Design</h3>
                <p>To remain consistent throughout the design, 
                    I created a Style Guide that denotes the Colors, Fonts, Iconography, UI Elements, and Imagery that are used in the high-fidelity mock-ups and prototypes.</p>
                <div className="row pt-3 pb-5">
                    <div className="col-6">
                    <a href="https://drive.google.com/file/d/1bSEbsoShn7oIwyQOy0totxRf8Ne4KnVT/view?usp=drivesdk" target="_blank" rel="noreferrer" className="btn active button">See Style Guide</a>
                    </div>
                    <div className="col-6">
                    <a href={colors} className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img src={colors} className="img-fluid" alt="Style Guide Colors" /></a>
                    </div>
                </div>
                <h4 className="pb-3">Logo Design</h4>
                <p>One of the most memorable elements of the Readingful Moments design is the mascot and logo. 
                    I was inspired by my early designs, which to me looked like a little robot holding a book. 
                    I got to sketching, seeking feedback, and iterating until I landed on the final design.</p>
                <div className="d-flex justify-content-center pt-4 pb-5">
                <a href={logo1} className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img src={logo1} className="img-fluid" alt="Logo Prototype 1" /></a>
                </div>
                <div className="d-flex justify-content-center pb-4">
                <a href={logo2} target="_blank" rel="noreferrer" className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img src={logo2} className="img-fluid" alt="Logo Transformation" /></a>
                </div>
                <h4 className="pb-4">High-Fidelity Screens</h4>
                <div className="d-flex justify-content-center pb-5"><a href={hifi} target="_blank" rel="noreferrer" className="MagicThumb" data-options="expandEasing:cubic-bezier(.09,.63,0,.99);"><img src={hifi} className="img-fluid" alt="High-Fidelity Screens" /></a></div>
            </div>  
        </div>    
    );
}