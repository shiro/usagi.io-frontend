import React from 'react';
import 'App.scss';
import PortraitSection from "AboutMe/PortraitSection/PortraitSection";
import Header from "Header/Header";
import AboutMeSection from "AboutMeSection/AboutMeSection";


function App() {
    return (
        <div className="App">
            <Header />
            <PortraitSection />
            <AboutMeSection />
        </div>
    );
}

export default App;
