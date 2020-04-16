import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import MeSite from "@/MeSite/MeSite";
import GallerySite from "@/GallerySite/GallerySite";

import "./App.module.scss";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/me" exact={true} component={MeSite}/>
                <Route path="/gallery" exact={true} component={GallerySite}/>
                <Route>
                    <Redirect to="/me"/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
