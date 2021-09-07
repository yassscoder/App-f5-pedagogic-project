import * as React from 'react';
import {NavBar} from "./NavBar";
import {Footer} from "./Footer";
import {InicioSesion} from "./InicioSesion";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "../../scss/main.scss";
import {Training} from "./Training";
/*import {TrainingApi} from "../Api/TrainingApi";*/
import {CandidateApi} from "../Api/CandidateApi";
import {useEffect, useState} from "react";

import {AddedItem} from "./AddedItem";
/*import {TrainingForm} from "./TrainingForm";*/
import {CandidatesForm} from "./CandidatesForm";
import {Candidate} from "./Candidates";

export const App = () => {

   /* const trainingApi = new TrainingApi()
    const [trainings, setTrainings] = useState([])
    const [updateTraining, setUpdate] = useState(true)
*/
    const candidateApi = new CandidateApi()
    const [candidates, setCandidates] = useState([])
    const [updateCandidate, setUpdateCandidate] = useState(true)

 /*   useEffect(() => {
        if (updateTraining){
            trainingApi.getTraining()
                .then(setTrainings)
                .then(_=> setUpdate(false))
        }
    }, [updateTraining])

    const saveTraining = training =>
        trainingApi.saveTraining(training)
            .then(_=> setUpdate(true))*/


    useEffect(() => {
        if (updateCandidate){
            candidateApi.getCandidates()
                .then(setCandidates)
                .then(_=> setUpdate(false))
        }
    }, [updateCandidate])

    const saveCandidate = candidate =>
        CandidateApi.saveCandidate(candidate)
            .then(_=> setUpdateCandidate(true))

    return <Router>
        <NavBar/>

        <Switch>

            <Route exact path="/">
                <InicioSesion/>
            </Route>

            <Route path="/training-list">
                <Training trainings={trainings}/>
            </Route>

            <Route path="/candidate-list">
                <CandidatesTable candidates={candidates}/>

            </Route>

            <Route path={"/training-form"}>
                {/*<TrainingReactHookForm onSubmit={saveTraining}/>*/}
                <TrainingForm onSubmit={saveTraining}/>
            </Route>

            <Route path={"/Training-added"}>
                <AddedItem/>
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