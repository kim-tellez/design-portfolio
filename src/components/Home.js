import React from "react";
import readingful from "../img/readingfulPreview.png";
import postup from "../img/postPreview.png";
import header from "../img/header.gif";
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
        <div className="container">
            <div className="d-flex justify-content-center pb-5">
                <img className="img-fluid" alt="I am an immigrant, non-binary, an educator, a creative, a researcher, a designer! " src={header} />
            </div>
        
            <div className="text-center pb-5">
                <p className="ws">Hi, I'm kim.</p>
                <p className="ws">I think it's important to work toward a more just and stable world while remaining kind to ourselves and others.</p>
                <p>I design because it's a way to work that centers empathy while solving problems.</p>
            </div>
            <h5 className="pb-3">recent work</h5>
            <br />
            <Link className="text-decoration-none" to="/design-portfolio/readingful-moments/">
                <div className="container box-caption1">
                    <div className="row flex-lg-row-reverse flex-md-row-reverse flex-sm-row">
                        <div className="col-lg-4 col-md-5 col-sm-5 d-flex align-items-end justify-content-center pt-5 order-1">
                            <img className="img-fluid" alt="Readingful Moments" src={readingful} />
                        </div>
                        <div className="col-lg-8 col-md-7 col-sm pt-5 pl-5 order-0">
                            <h1 className="pt-5 h12">Readingful Moments</h1><br />
                            <p className="pt-3">How might we make it easier for parents to be intentional about fitting reading with their children into their busy days?</p>
                        </div>
                    </div>
                </div>
            </Link>
            <br /><br />
            <Link className="text-decoration-none" to="/design-portfolio/postup/">
                <div className="container box-caption2">
                    <div className="row flex-lg-row-reverse flex-md-row-reverse flex-sm-row">
                        <div className="col-lg-4 col-md-5 col-sm-5 d-flex align-items-end justify-content-center pt-5 order-1">
                            <img className="img-fluid" alt="PostUp" src={postup} />
                        </div>
                        <div className="col-lg-8 col-md-7 col-sm col-xs-7 pt-5 pl-5 order-0">
                            <h1 className="pt-5 h12">PostUp</h1><br />
                            <p className="pt-3">How might we help people find public spaces to work from remotely?</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
        </>
    );
}