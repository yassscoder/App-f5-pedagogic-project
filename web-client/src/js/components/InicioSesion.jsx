import * as React from "react";
import "../../scss/InicioSesionStyles.scss";
import fondo from "./assets/fondoF5.jpg";
import fondoNaranja from "./assets/logoNaranjaF5.png";
import usuario from "./assets/usuario.png";
import candado from "./assets/candado.png";
import {useState} from "react";

export const InicioSesion = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState("Email It can't be empty")
    const [passwordError, setPasswordError] = useState("Password It can't be empty")

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('This email Is Incorrect')
        } else {
            setEmailError("")
        }

    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8){
            setPasswordError('min 3 y max 8')
            if (!e.target.value) {
                setPasswordError("Password It can't be empty")
            }
        } else {
            setEmailError("")
        }

    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    /* <div className={"inicioSesion-main"}>
         <div className={"inicioSesion-main__fondo"}>
             <img src={fondo}/>
         </div>*/
    return (
        <div className="container">
            <div className="sub-container">
                <div className="banner-img">
                    <img src={fondoNaranja}/>
                </div>

                <div className="login-form">
                    <div className="title">
                        INICIAR SESION
                    </div>
                    <div className="input-fields">
                        {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                        {/*<img src={usuario}/>*/}
                        <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email'
                               type="text" className="input" placeholder='Administrador...'/>
                    </div>
                    <div className="input-fields">
                        {(passwordError && passwordDirty) && <div style={{color: 'red'}}>{passwordError}</div>}
                        {/*<img src={candado}/>*/}
                        <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type="password"
                               className="input" placeholder='Contrasena...'/>
                        <div className="submit">ENTRAR</div>
                    </div>
                </div>
            </div>

        </div>

    )
}