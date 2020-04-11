import React from 'react';
import 'App.scss';
import PortraitSection from "AboutMe/PortraitSection/PortraitSection";
import Header from "Header/Header";
import AboutMeSection from "AboutMeSection/AboutMeSection";
import ProgrammingSection from "ProgrammingSection/ProgrammingSection";
import DesignSection from "DesignSection/DesignSection";
import ContactSection from "ContactSection/ContactSection";


function App() {
    return (
        <div className="App">
            <Header/>
            <PortraitSection/>
            <AboutMeSection/>
            <ProgrammingSection/>
            <DesignSection/>
            <ContactSection/>
        </div>
    );
}

export default App;
