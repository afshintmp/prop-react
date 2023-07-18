import React from "react";
import heroMobile from "../../../image/hero_mobile.png"
export default function MainSlider(){
    return <div className="main-slider">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-12 d-flex align-items-center">
                    <div>
                        <h1 className="main-slider-title">
                            معامله گران فارکس
                            <br />
                                <strong>
                                    می خواهیم
                                </strong>
                        </h1>
                        <p className="main-slider-text">
                            سرمایه شرکت ما را معامله کنید
                            تا 90 درصد سود دریافت کنید، ما زیان را پوشش می دهیم.
                        </p>
                        <div>
                            <div className="mt-50">
                                <button className="btn-transparent">چالش ftmo</button>
                                <button className="btn-blue">امتحان رایگان</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 d-none d-md-block">
                    <img src={heroMobile} alt="" />
                </div>
            </div>
        </div>
    </div>
}