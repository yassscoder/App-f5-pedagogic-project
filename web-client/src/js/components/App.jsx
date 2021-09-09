import * as React from 'react';
import {NavBar} from "./NavBar";
import {Footer} from "./Footer";
import {InicioSesion} from "./InicioSesion";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "../../scss/main.scss";
import {TrainingList} from "./TrainingList";
import {TrainingForm} from "./TrainingForm";
import {TrainingApi} from "../API/TrainingApi";
import {CandidateApi} from "../Api/CandidateApi";
import {useEffect, useState} from "react";
import {AddedItem} from "./Addedltem";
import {CandidatesForm} from "./CandidatesForm";
/*import {Candidate} from "./Candidates";*/
import {CandidatesTable} from "./CandidatesTable";


export const App = () => {

    const candidateApi = new CandidateApi()
    const [candidates, setCandidates] = useState([])
    const [updateCandidate, setUpdateCandidate] = useState(true)

    const trainingApi = new TrainingApi()
    const [trainings, setTrainings] = useState([])
    const [updateTraining, setUpdate] = useState(true)

    useEffect(() => {
        if (updateCandidate){
            candidateApi.getCandidates()
                .then(setCandidates)
                .then(_=> setUpdateCandidate(false))
        }
    }, [updateCandidate])

    const saveCandidate = candidate =>
        CandidateApi.saveCandidate(candidate)
            .then(_=> setUpdateCandidate(true))


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

    return    <Router>
        <NavBar/>
        <Switch>
            <Route exact path="/">
                <InicioSesion/>
            </Route>

            <Route path="/training-list">
                <TrainingList trainings={trainings}/>
            </Route>

            <Route path="/candidate-list">
                <CandidatesTable candidates={candidates}/>
            </Route>

            <Route path="/training-form">
                <TrainingForm onSubmit={saveTraining}/>
            </Route>

            <Route path={"/candidate-form"}>
                <CandidatesForm onSubmit={saveCandidate}/>
            </Route>

            <Route path={"/Candidate-added"}>
                <AddedItem/>
            </Route>
        </Switch>
        <Footer/>
    </Router>
}
