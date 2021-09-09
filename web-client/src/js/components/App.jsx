import * as React from 'react';
import {NavBar} from "./NavBar";
import {Footer} from "./Footer";
import {InicioSesion} from "./InicioSesion";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useEffect, useState} from "react";
import "../../scss/main.scss";
import {TrainingList} from "./TrainingList";
import {TrainingForm} from "./TrainingForm";
import {TrainingApi} from "../API/TrainingApi";
import {CandidateForm} from "./CandidateForm";
import {CandidateApi} from "../API/CandidateApi";
import {CandidateList} from "./CandidateList";
import {Administrator} from "./Administrator";

export const App = () => {

    const trainingApi = new TrainingApi()
    const [trainings, setTrainings] = useState([])
    const [updateTraining, setUpdate] = useState(true)

    const candidateApi = new CandidateApi()
    const [candidates, setCandidates] = useState([])
    const [updateCandidate, setUpdateCandidate] = useState(true)

    useEffect(() => {
        if (updateTraining){
            trainingApi.getTrainings()
                .then(setTrainings)
                .then(_=> setUpdate(false))
        }
    }, [updateTraining])

    useEffect(() => {
        if (updateCandidate){
            candidateApi.getCandidates()
                .then(setCandidates)
                .then(_=> setUpdateCandidate(false))
        }
    }, [updateCandidate])

    const saveTraining = training =>
        trainingApi.saveTraining(training)
            .then(_=> setUpdate(true))

    const saveCandidate = candidate =>
        candidateApi.saveCandidate(candidate)
            .then(_=> setUpdateCandidate(true))

    return <Router>
            <NavBar/>

            <Switch>

                <Route exact path="/">
                    <InicioSesion/>
                </Route>



                <Route path="/administrator">
                    <Administrator/>
                </Route>



                    <Route path="/training-list">
                        <TrainingList trainings={trainings}/>
                    </Route>
                    <Route path="/training-form">
                        <TrainingForm onSubmit={saveTraining}/>
                    </Route>

                    <Route  path="/Candidate-list">
                     <CandidateList candidates={candidates}/>
                    </Route>
                    <Route  path="/Candidate-form">
                        <CandidateForm onSubmit={saveCandidate}/>
                    </Route>

            </Switch>

            <Footer/>
        </Router>



}