import * as React from "react";
import logo from "./assets/logoF5.png";
import {Link} from "react-router-dom";
import "../../scss/NavBarStyles.scss";

export const NavBar = () => (

        <nav className={"nav-main"}>
            <div className={"nav-main__item"}>
               <Link to={"/"}><img className={"nav-main__logo"} src={logo}/></Link>
            </div>
            <ul className={"nav-main__list"}>
                <li className={"nav-main__item"}>
                    <Link to={"/Administradores"} className={"nav-main__link nav-main__link--adm"} >Administradores</Link>
                </li>
                <li className={"nav-main__item"}>
                    <Link to={"/CerrarSesion"} className={"nav-main__link nav-main__link--cs"}>Cerrar Sesión</Link>
                </li>
            </ul>
        </nav>
)