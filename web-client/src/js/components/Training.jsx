import * as React from "react";
import "../../scss/Training.scss";
import {Link} from "react-router-dom";

export const Training = () => (

    <div className={"container__cards"}>

        <Link to={"/candidates"}>
            <div className={"card"}>
                <div className={"card__title"}>
                    <h2 className={"card__city"}>barcelona</h2>
                </div>
                <div className={"card__body"}>
                    <h3 className={"card__info"}>Full Stack</h3>
                    <h3 className={"card__info"}>850h</h3>
                </div>
            </div>
        </Link>

        <Link to={"/candidates"}>
            <div className={"card"}>
                <div className={"card__title"}>
                    <h2 className={"card__city"}>barcelona</h2>
                </div>
                <div className={"card__body"}>
                    <h3 className={"card__info"}>Full Stack</h3>
                    <h3 className={"card__info"}>850h</h3>
                </div>
            </div>
        </Link>

        <div className={"card"}>
            <div className={"card__title"}>
                <h2 className={"card__city"}>barcelona</h2>
            </div>
            <div className={"card__body"}>
                <h3 className={"card__info"}>Full Stack</h3>
                <h3 className={"card__info"}>850h</h3>
            </div>
        </div>

        <div className={"card"}>
            <div className={"card__title"}>
                <h2 className={"card__city"}>barcelona</h2>
            </div>
            <div className={"card__body"}>
                <h3 className={"card__info"}>Full Stack</h3>
                <h3 className={"card__info"}>850h</h3>
            </div>
        </div>

        <div className={"card"}>
            <div className={"card__title"}>
                <h2 className={"card__city"}>barcelona</h2>
            </div>
            <div className={"card__body"}>
                <h3 className={"card__info"}>Full Stack</h3>
                <h3 className={"card__info"}>850h</h3>
            </div>
        </div>
        {/*<div className={"card__header"}>*/}
        {/*    <Link to={"/candidates"} className={"cards__link"}>*/}
        {/*        <div className={"card__title"}>*/}
        {/*            <h1>BARCELONA</h1>*/}
        {/*        </div>*/}
        {/*        <div className={"card__subtitle"}>*/}
        {/*            <div className={"card__subtitle__text"}>*/}
        {/*                <h1>FULL STACK</h1>*/}
        {/*                <h2>850 H</h2>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </Link>*/}
        {/*</div>*/}

    </div>
)

