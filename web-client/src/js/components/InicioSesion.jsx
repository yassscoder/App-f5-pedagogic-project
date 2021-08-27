import * as React from "react";
import "../../scss/InicioSesionStyles.scss";
import fondo from "./assets/fondoF5.jpg";
import fondoNaranja from "./assets/logoNaranjaF5.png";
import usuario from "./assets/usuario.png";
import candado from "./assets/candado.png";

export const InicioSesion = () => (

    <div className={"inicioSesion-main"}>
        <div className={"inicioSesion-main__fondo"}>
            <img src={fondo}/>
        </div>
        {/*
        <div className={"inicioSesion-main__item"}>
            <img className={"inicioSesion-main__logoN"} src={fondoNaranja}/>
        </div>

        <div className={"inicioSesion-main__item"}>
            <span>INICIAR SESIÓN</span>
            <section>
                <img src={usuario}/>
                <input/>
            </section>
            <section>

        <img src={candado}/>
                <input/>
            </section>
            <button></button>
        </div>  */}



    </div>

)