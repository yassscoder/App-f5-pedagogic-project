import * as React from "react";
import "../../scss/Training.scss";
import {TrainingCard} from "./TrainingCard";
import {TrainingApi} from "../API/TrainingApi";

const trainingApi=new TrainingApi();

export const TrainingList = ({trainings, onDeleteSuccess}) => {

    const deleteTrainingById = (id) => () => {
            trainingApi.deleteTraining(id)
                .then(onDeleteSuccess)
        }

    return (
        <section className={"container__cards"}>


            {trainings.map((training =>
                    <TrainingCard  training={training}
                                   deleteTrainingById={deleteTrainingById}/>
            ))}


        </section>
    );
}

