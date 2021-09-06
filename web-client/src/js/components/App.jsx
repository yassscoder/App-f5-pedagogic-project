import * as React from 'react';
import {NavBar} from "./NavBar";
import {Footer} from "./Footer";
import {InicioSesion} from "./InicioSesion";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import "../../scss/main.scss";
import {TrainingList} from "./TrainingList";
import {TrainingForm} from "./TrainingForm";
import {TrainingApi} from "../API/TrainingApi";
import {AddedItem} from "./AddedItem";

export const App = () => {

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

    const saveTraining = training =>
        trainingApi.saveTraining(training)
            .then(_=> setUpdate(true))

    return <Router>
            <NavBar/>

            <Switch>

                <Route exact path="/">
                    <InicioSesion/>
                </Route>

                    <Route path="/training-list">

                        <TrainingList trainings={trainings}/>

                    </Route>
                    {/*<Route path="/candidates-list">*/}
                    {/*    /!*<Candidates/>*!/*/}
                    {/*</Route>*/}

                    <Route path="/training-form">
                        <TrainingForm onSubmit={saveTraining}/>
                    </Route>

                    <Route path="/training-added">
                        <AddedItem/>
                    </Route>
            </Switch>

            <Footer/>
        </Router>



}