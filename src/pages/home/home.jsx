import React from "react";
import MainSlider from "./components/MainSlider";
import TradingFirm from "./components/TradingFirm";
import EvaluationProcess from "./components/EvaluationProcess";
import Plans from "./components/Plans";
import JoinTheTeam from "./components/JoinTheTeam";
import PayoutSystem from "./components/PayoutSystem";
import InfoCart from "./components/InfoCart";
import FeedBack from "./components/FeedBack";
import JoinUs from "./components/JoinUs";

export default function Home(){
    return <>
        <MainSlider />
        <TradingFirm />
        <EvaluationProcess />
        <Plans />
        <JoinTheTeam />
        <PayoutSystem />
        <InfoCart />
        <FeedBack />
        <JoinUs />
    </>


}