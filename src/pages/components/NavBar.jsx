import React from "react";
import logo from "../../image/ftmo_logo.svg"
import {useNavigate} from "react-router-dom";
export default function NavBar(){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/register");
    }



    return <div id="main-menu" className="">
        <div className="logo">
            <img src={logo} alt=""/>
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
        <div className="authenticate-btn">
            <button onClick={handleClick} className="btn btn-outline-violet">
                ثبت نام
            </button>
            <button className="btn btn-violet">
                ورود
            </button>
        </div>
    </div>
}