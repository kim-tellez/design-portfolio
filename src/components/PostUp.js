import React from "react";
import Header from "./postup/Header";
import Background from "./postup/Background";
import Day1 from "./postup/Day1";
import Day2 from "./postup/Day2";
import Day3 from "./postup/Day3";
import Day4 from "./postup/Day4";
import Day5 from "./postup/Day5";
import Learnings from "./postup/Learnings";


export default function PostUp() {
    return (
        <>
            <Header />
            <Background />
            <Day1 />
            <Day2 />
            <Day3 />
            <Day4 />
            <Day5 />
            <Learnings />
        </>
    );
}