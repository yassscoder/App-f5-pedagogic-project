import * as React from "react";
import "../../scss/InicioSesionStyles.scss";
import fondo from "./assets/fondoF5.jpg";
import fondoNaranja from "./assets/logoNaranjaF5.png";
import usuario from "./assets/usuario.png";
import candado from "./assets/candado.png";

export const InicioSesion = () => (


    /* <div className={"inicioSesion-main"}>
         <div className={"inicioSesion-main__fondo"}>
             <img src={fondo}/>
         </div>*/

    <div className="container">
        <div className="sub-container">
                <div className="banner-img">
                    <img className src={fondoNaranja}/>
                </div>

                <div className="login-form">
                    <div className="title">
                        INICIAR SESION
                    </div>
                    <div class="input-fields">
                        {/*<img src={usuario}/>*/}
                        <input name='email' type="text" class="input" placeholder='Administrador...'/>
                    </div>
                    <div class="input-fields">
                        {/*<img src={candado}/>*/}
                        <input name='password' type="password" class="input" placeholder='Contrasena...'/>
                        <div className="submit">ENTRAR</div>
                    </div>
                </div>
        </div>

    </div>

)