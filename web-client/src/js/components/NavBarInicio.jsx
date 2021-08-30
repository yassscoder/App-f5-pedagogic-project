import * as React from "react";
import logo from "./assets/logoF5.png";
import {Link} from "react-router-dom";
import "../../scss/NavBarStyles.scss";

export const NavBarInicio = () => (

    <nav className={"nav-main"}>
        <div className={"nav-main__item"}>
            <Link to={"/"}><img className={"nav-main__logo"} src={logo}/></Link>
        </div>
    </nav>
)