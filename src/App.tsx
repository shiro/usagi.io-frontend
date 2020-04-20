import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import MeSite from "@/MeSite/MeSite";
import GallerySite from "@/GallerySite/GallerySite";

import "./App.module.scss";
import BlogSite from "@/BlogSite/BlogSite";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/blog" exact={true} component={BlogSite}/>
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
