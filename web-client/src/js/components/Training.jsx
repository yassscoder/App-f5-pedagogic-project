import * as React from "react";
import "../../scss/Training.scss";
import {Link} from "react-router-dom";


export const Training = () => (

    <div className={"container__cards"}>
        <div className={"card__header"} id={"cards"}>
            <a className={"cards__link"} href={"/candidates"}>
                <div className={"card__title"}>
                    <h1 id={"cities"}>BARCELONA</h1>
                </div>
                <div className={"card__subtitle"}>
                    <div className={"card__subtitle__text"}>
                        <h1 id={"courses"}>FULL STACK</h1>
                        <h2 id={"durations"}>850 H</h2>
                    </div>
                </div>
            </a>
        </div>

        <div className={"card__header"} id={"cards"}>
            <a className={"cards__link"} href={"#"}>
                <div className={"card__title"}>
                    <h1 id={"cities"}>BARCELONA</h1>
                </div>
                <div className={"card__subtitle"}>
                    <div className={"card__subtitle__text"}>
                        <h1 id={"courses"}>FULL STACK</h1>
                        <h2 id={"durations"}>850 H</h2>
                    </div>
                </div>
            </a>
        </div>

        <div className={"card__header"} id={"cards"}>
            <a className={"cards__link"} href={"#"}>
                <div className={"card__title"}>
                    <h1 id={"cities"}>BARCELONA</h1>
                </div>
                <div className={"card__subtitle"}>
                    <div className={"card__subtitle__text"}>
                        <h1 id={"courses"}>FULL STACK</h1>
                        <h2 id={"durations"}>850 H</h2>
                    </div>
                </div>
            </a>
        </div>

        <div className={"card__header"} id={"cards"}>
            <a className={"cards__link"} href={"#"}>
                <div className={"card__title"}>
                    <h1 id={"cities"}>BARCELONA</h1>
                </div>
                <div className={"card__subtitle"}>
                    <div className={"card__subtitle__text"}>
                        <h1 id={"courses"}>FULL STACK</h1>
                        <h2 id={"durations"}>850 H</h2>
                    </div>
                </div>
            </a>
        </div>

    </div>
)

