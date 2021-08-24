import * as React from "react";
import logo from "./assets/logoF5.png";
import {Link} from "react-router-dom";

export const NavBar = () => (

        <nav className={"nav-main"}>
            <div className={"nav-main__item"}>
                <img className={"nav-main__logo"} src={logo}/>
            </div>
            <ul className={"nav-main__list"}>
                <li className={"nav-main__item"}><Link to={"/Administradores"}>Administradores</Link></li>
                <li className={"nav-main__item"}><Link to={"/CerrarSesion"}>Cerrar Sesión</Link></li>
            </ul>
        </nav>
)