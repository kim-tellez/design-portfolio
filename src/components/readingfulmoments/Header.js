import React from "react";
import phones from "../../img/phonePreview.png";

export default function Header() {
    return (
        <div className="container-fluid header-cust">
            <div className="container d-flex justify-content-center pt-5">
                <img className="img-fluid" alt="Phones with Prototype Design." src={phones} />
            </div>
        </div>
    );
}