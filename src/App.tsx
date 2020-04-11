import React from 'react';
import 'App.scss';
import PortraitSection from "AboutMe/PortraitSection/PortraitSection";
import Header from "Header/Header";
import AboutMeSection from "AboutMeSection/AboutMeSection";
import ProgrammingSection from "ProgrammingSection/ProgrammingSection";
import DesignSection from "DesignSection/DesignSection";
import ContactSection from "ContactSection/ContactSection";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true}>
                    <div className="App">
                        <Header/>
                        <PortraitSection/>
                        <AboutMeSection/>
                        <ProgrammingSection/>
                        <DesignSection/>
                        <ContactSection/>
                    </div>
                </Route>
                <Route>
                    <Redirect to="/"/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
