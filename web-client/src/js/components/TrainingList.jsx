import * as React from "react";
import "../../scss/Training.scss";
import {TrainingCard} from "./TrainingCard";

export const TrainingList = (props) => (

    <section className={"container__cards"}>



            {props.trainings.map(training =>
                <TrainingCard training={training}/>
            )}


    </section>
);

