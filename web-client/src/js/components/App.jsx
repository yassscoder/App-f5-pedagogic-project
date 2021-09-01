import * as React from 'react';
import {NavBar} from "./NavBar";
import {Footer} from "./Footer";
import {Training} from "./Training";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "../../scss/main.scss";


export const App = () => {

    return (
        <Router>
                <NavBar/>

                <Switch>

                    <Route exact path="/">
                    </Route>

                    <Route path="/Training">
                        <Training/>
                    </Route>

                </Switch>

                <Footer/>
        </Router>
    );
}