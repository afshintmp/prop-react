import React from "react";
import logo from "../../image/ftmo_logo.svg"
export default function NavBar(){
    return <div id="main-menu" className="">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="menu-list d-none d-md-block">
            <ul>
                <li><a href="/">منو</a></li>
                <li><a href="/">منو</a></li>
                <li><a href="/">منو</a></li>
                <li><a href="/">منو</a></li>
                <li><a href="/">منو</a></li>
            </ul>

        </div>
        <span className="berger-menu d-block d-md-none">
        <span className="berger-element"></span>
         </span>
        <div className="login-btns">
            <button className="btn btn-outline-violet">
                ثبت نام
            </button>
            <button className="btn btn-violet">
                ورود
            </button>
        </div>
    </div>
}