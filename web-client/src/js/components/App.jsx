import * as React from 'react';
import {NavBar} from "./NavBar";
import {Footer} from "./Footer";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "../../scss/main.scss";


export const App = () => {

    return (
        <Router>
                <NavBar/>

                <Switch>

                    <Route exact path="/">
                    </Route>

                </Switch>

                <Footer/>
        </Router>
    );
}