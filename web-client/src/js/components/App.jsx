import * as React from 'react';
import {NavBar} from "./NavBar";
import {Footer} from "./Footer";
import {InicioSesion} from "./InicioSesion";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "../../scss/main.scss";
import {Training} from "./Training";


export const App = () => {

    return (
        <Router>
            <NavBar/>

            <Switch>

                <Route exact path="/">
                    <InicioSesion/>
                </Route>

                    <Route path="/trainings">
                        <Training/>

                    </Route>
                    <Route path="/candidates">
                        {/*<Candidates/>*/}
                    </Route>

            </Switch>

            <Footer/>
        </Router>

    );

}