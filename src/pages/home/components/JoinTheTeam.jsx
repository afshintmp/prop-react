import React from "react";
import border from "../../../image/border.svg"
export default function JoinTheTeam(){
    return <div className="join-the-team">

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-9">
                    <div className="join-the-team-section position-relative">
                        <img className="join-the-team-section-border" src={border} alt="" />
                            <h4>
                                به تیم بپیوندید
                                از معامله گران با تجربه ما


                            </h4>
                            <p>
                                اگر آماده هستید، چالش FTMO ما را بپذیرید و معامله گر FTMO ما شوید.
                                حتی می‌توانید کل فرآیند را کاملاً رایگان امتحان کنید.
                            </p>

                            <div className="text-center">
                                <button className="btn-blue">
                                    چالش ftmo
                                </button>

                                <button className="btn-gray">
                                    امتحان رایگان
                                </button>

                            </div>
                    </div>
                </div>
            </div>
        </div>


    </div>


}