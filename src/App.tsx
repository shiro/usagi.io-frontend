import React from 'react';
import PortraitSection from "AboutMe/PortraitSection/PortraitSection";
import Header from "Header/Header";
import AboutMeSection from "AboutMeSection/AboutMeSection";
import ProgrammingSection from "ProgrammingSection/ProgrammingSection";
import DesignSection from "DesignSection/DesignSection";
import ContactSection from "ContactSection/ContactSection";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Footer from "Footer/Footer";


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true}>
                    <div>
                        <Header/>
                        <PortraitSection/>
                        <AboutMeSection/>
                        <ProgrammingSection/>
                        <DesignSection/>
                        <ContactSection/>
                        <Footer />
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
