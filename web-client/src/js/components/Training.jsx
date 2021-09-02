import * as React from "react";
import "../../scss/Training.scss";
import {Link} from "react-router-dom";


export const Training = () => (
    <div className={"container-cards"}>
        <div className="card__header">
            <div className="card__title">
                <Link to={"/"} className={"card__title-main"} id="cities">Gijon</Link>
            </div>

            <div className="card__subtitle">
                <h1 id="courses">FULL STACK</h1>
                <h2 id="durations">850 H</h2>
            </div>
        </div>

        <div className="card__header">
            <div className="card__title">
                <Link to={"/"} className={"card__title-main"} id="cities">Madrid</Link>
            </div>

            <div className="card__subtitle">
                <h1 id="courses">FULL STACK</h1>
                <h2 id="durations">850 H</h2>
            </div>
        </div>
        <div className="card__header">
            <div className="card__title">
                <Link to={"/"} className={"card__title-main"} id="cities">Barcelona</Link>
            </div>

            <div className="card__subtitle">
                <h1 id="courses">FULL STACK</h1>
                <h2 id="durations">850 H</h2>
            </div>
        </div>

        <div className="card__header">
            <div className="card__title">
                <Link to={"/"} className={"card__title-main"} id="cities">Barcelona</Link>
            </div>

            <div className="card__subtitle">
                <h1 id="courses">Front-End</h1>
                <h2 id="durations">300 H</h2>
            </div>
        </div>
        <div className="card__header">
            <div className="card__title">
                <Link to={"/"} className={"card__title-main"} id="cities">Bilbao</Link>
            </div>

            <div className="card__subtitle">
                <h1 id="courses">FULL STACK</h1>
                <h2 id="durations">1000 H</h2>
            </div>
        </div>

        <div className="card__header">
            <div className="card__title">
                <Link to={"/"} className={"card__title-main"} id="cities">Sevilla</Link>
            </div>

            <div className="card__subtitle">
                <h1 id="courses">FULL STACK</h1>
                <h2 id="durations">1000 H</h2>
            </div>
        </div>
    </div>
)

