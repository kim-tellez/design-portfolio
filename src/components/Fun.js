import React from "react";
import fun from "../img/fun.png";

export default function Fun() {
    return (
        <>
            <div className="container">
                <div className="row flex-lg-row-reverse flex-md-row flex-sm-row">
                    <div className="col-sm-6 col-md-5 col-lg-3 order-1">
                        <h3>more coming soon!</h3>
                    </div>
                    <div className="col-sm-1 col-md-1 col-lg-1"><p><br /></p></div>
                    <div className="col-sm-6 col-md-6 col-lg-8 order-0 pb-5">
                    <img className="img-fluid" alt="Recent Drawing" src={fun} /><br /><br />
                        <h5>fun</h5><br />
                        <p>
                            I like to have fun! Most of the time, that looks like catching up on anime, 
                            books or RPGs, finding a new brewery in town, or (when possible) traveling 
                            and diving. 
                        </p>
                        <p>
                        Sometimes, inspiration hits and I get a kick out of exercising my creative muscles as well. 
                        As a bonus, I get to create imperfect things that speak to my many facets.
                        </p>
                        <p>
                            This is a gallery of some of the work that I've made for fun. 
                        </p>
                    </div>
                </div>
            </div>    
        </>
    );
}