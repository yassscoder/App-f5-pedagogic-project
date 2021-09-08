import * as React from "react";
import "../../scss/Training.scss";
// import {Link} from "react-router-dom";
import {TrainingCard} from "./TrainingCard";

export const TrainingList = (props) => (

    <section className={"container__cards"}>

        {/*<Link to={"/candidates"}>*/}
            {props.trainings.map(training =>
                <TrainingCard training={training}/>
            )}
        {/*</Link>*/}

    </section>
);

