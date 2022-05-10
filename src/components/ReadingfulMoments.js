import React from "react";
import Header from "./readingfulmoments/Header";
import Background from "./readingfulmoments/Background";
import Research from "./readingfulmoments/Research";
import MVP from "./readingfulmoments/MVP";
import Early from "./readingfulmoments/EarlyIdeation";
import Brand from "./readingfulmoments/Brand";
import Usability from "./readingfulmoments/Usability";
import Learnings from "./readingfulmoments/Learnings";


export default function ReadingfulMoments() {
    return (
        <>
            <Header />
            <Background />
            <Research />
            <MVP />
            <Early />
            <Brand />
            <Usability />
            <Learnings />
        </>
    );
}