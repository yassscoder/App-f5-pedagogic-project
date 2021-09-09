import * as React from "react";
import logo from "./assets/logoF5.png";
import "../../scss/Administrator.scss";

export const Administrator = () => (

    <div className={"container"}>
        <div className={"box"}>
            <div className={"box__header"}>NUEVO ADMINISTRADOR</div>


            <div className={"box__info"}>
                <h4>Nombre de usario</h4>
                <div>
                    <input type="text" className="box__info__up"/>
                </div>

                <div className={"box__info"}>
                    <h4>Contracena</h4>
                    <div>
                        <input type="text" className="box__info__down"/>
                    </div>
                </div>

                <div className={"box__footer__up"}>
                    <h3>ACCESOS PERMITIDOS</h3>
                </div>

                <div className={"box__footer"}>

                    <div className={"box__footer__down"}>
                        <div className={"box__footer__checkbox"}>
                            <input id={"check__input"} type={"checkbox"}/>
                            <div className={"box__footer__form"}>Formacion</div>
                        </div>
                        <div className={"box__footer__checkbox"}>
                            <input id={"check__input"} type={"checkbox"}/>
                            <div className={"box__footer__form"}>Formacion</div>
                        </div>
                    </div>


                    <div className={"box__footer__down"}>
                        <div className={"box__footer__checkbox"}>
                            <input id={"check__input"} type={"checkbox"}/>
                            <div className={"box__footer__form"}>Formacion</div>
                        </div>
                        <div className={"box__footer__checkbox"}>
                            <input id={"check__input"} type={"checkbox"}/>
                            <div className={"box__footer__form"}>Formacion</div>
                        </div>
                    </div>


                    <div className={"box__footer__down"}>
                        <div className={"box__footer__checkbox"}>
                            <input id={"training"} type={"checkbox"}/>
                            <div className={"box__footer__form"}>Formacion</div>
                        </div>
                        <div className={"box__footer__checkbox"}>
                            <input id={"training"} type={"checkbox"}/>
                            <div className={"box__footer__form"}>Formacion</div>
                        </div>
                    </div>
                </div>
            </div>


            <button type="submit">CREAR</button>
        </div>
    </div>
);