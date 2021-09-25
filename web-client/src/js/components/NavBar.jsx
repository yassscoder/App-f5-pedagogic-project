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
                    <Link to={"/training-form"} className={"nav-main__link nav-main__link--adm"} >Nueva formación</Link>
                </li>
                <li className={"nav-main__item"}>
                    <Link to={"/training-list"} className={"nav-main__link nav-main__link--cs"}>Formaciones</Link>
                </li>
                <li className={"nav-main__item"}>
                    <Link to={"/candidate-form"} className={"nav-main__link nav-main__link--cf"}>Nuevo aspirante</Link>
                </li>
                {/*<li className={"nav-main__item"}>*/}
                {/*    <Link to={"/candidate-list"} className={"nav-main__link nav-main__link--cl"}>Candidate List</Link>*/}
                {/*</li>*/}

                {/*<li className={"nav-main__item"}>*/}
                {/*    <Link to={"/administrator"} className={"nav-main__link nav-main__link--cl"}>Administrator</Link>*/}
                {/*</li>*/}
            </ul>
        </nav>
)