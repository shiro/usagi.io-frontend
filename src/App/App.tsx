import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import MeSite from "@/MeSite/MeSite";
import GallerySite from "@/GallerySite/GallerySite";
import { Helmet } from "react-helmet"

import "./App.module.scss";
import BlogSite from "@/BlogSite/BlogSite";

const App = () => {
    return (
        <>
        <Helmet>
            <title>usagi.io</title>
        </Helmet>
        <Switch>
            <Route path="/blog" component={BlogSite}/>
            <Route path="/me" exact={true} component={MeSite}/>
            <Route path="/gallery" exact={true} component={GallerySite}/>
            <Route>
                <Redirect to="/me"/>
            </Route>
        </Switch>
            </>
    );
}

export default App;
