import * as React from "react";


export const TrainingCard = (props) =>
    <div className={"card"}>
        <div className={"card__title"}>
            <h2 className={"card__city"}>{ props.training.city }</h2>
        </div>
        <div className={"card__body"}>
            <h3 className={"card__info"}>{props.training.promoName}</h3>
            <h3 className={"card__info"}>{props.training.duration} h</h3>
        </div>
    </div>