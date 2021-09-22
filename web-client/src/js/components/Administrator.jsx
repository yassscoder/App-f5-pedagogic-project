import * as React from "react";
import logo from "./assets/logoF5.png";
import "../../scss/Administrator.scss";
import {TrainingList} from "./TrainingList";
import {TrainingApi} from "../API/TrainingApi";
import {useEffect, useState} from "react";


export const Administrator = () => {



const trainingApi = new TrainingApi()
const [trainings, setTrainings] = useState([])
const [updateTraining, setUpdate] = useState(true)



    useEffect(() => {
        if (updateTraining){
            trainingApi.getTrainings()
                .then(setTrainings)
                .then(_=> setUpdate(false))
        }
    }, [updateTraining])

    return (

    <div className={"admin__container"}>
            <h3>NUEVO ADMINISTRADOR</h3>

            <div className={"box__info"}>
                <h4>Nombre de usario</h4>
                <input type="text" className="box__input"/>
                <h4>Contraseña</h4>
                <input type="text" className="box__input"/>
            </div>

            <h3>ACCESOS PERMITIDOS</h3>

            <div className={"box__footer"}>

                <div className={"box_footer_down"}>
                    <div className={"box_footer_checkbox"}>
                        <input id={"check__input"} type={"checkbox"}/>
                        <div className={"box_footer_form"}>Full Stack</div>
                    </div>
                    <div className={"box_footer_checkbox"}>
                        <input id={"check__input"} type={"checkbox"}/>
                        <div className={"box_footer_form"}>Front End</div>
                    </div>
                </div>
            </div>


        <TrainingList trainings={trainings}/>

        <div className={"box_footer_down"}>
            <button className={"button__admin"} type="submit">CREAR</button>
        </div>
    </div>

    );
}
