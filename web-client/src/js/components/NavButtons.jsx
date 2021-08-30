import * as React from "react";
import "../../scss/NavButtons.scss";

export const NavButtons = () => (
<ul className={"nav-main__list"}>
    <li className={"nav-main__item"}>
        <Link to={"/Administradores"} className={"nav-main__link nav-main__link--adm"}>Administradores</Link>
    </li>
    <li className={"nav-main__item"}>
        <Link to={"/CerrarSesion"} className={"nav-main__link nav-main__link--cs"}>Cerrar Sesión</Link>
    </li>
</ul>
)