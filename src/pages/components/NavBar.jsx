import React from "react";

export default function NavBar(){
    return <div id="main-menu" className="">
        <div className="logo">
            <img src="image/ftmo_logo.svg" alt="" />
        </div>
        <div className="menu-list d-none d-md-block">
            <ul>
                <li><a href="">منو</a></li>
                <li><a href="">منو</a></li>
                <li><a href="">منو</a></li>
                <li><a href="">منو</a></li>
                <li><a href="">منو</a></li>
            </ul>

        </div>
        <span className="berger-menu d-block d-md-none">
        <span className="berger-element"></span>
    </span>
        <div className="search">
            جستجو
        </div>
    </div>
}