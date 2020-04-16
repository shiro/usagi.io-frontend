import * as React from "react";
import PortraitSection from "@/AboutMe/PortraitSection/PortraitSection";
import Header from "@/Header/Header";
import AboutMeSection from "@/AboutMeSection/AboutMeSection";
import ProgrammingSection from "@/ProgrammingSection/ProgrammingSection";
import DesignSection from "@/DesignSection/DesignSection";
import ContactSection from "@/ContactSection/ContactSection";
import Footer from "@/Footer/Footer";


export interface IMeSite {
}


const MeSite: React.FC<IMeSite> = (props) => {
    return (
        <div>
            <Header/>
            <PortraitSection/>
            <AboutMeSection/>
            <ProgrammingSection/>
            <DesignSection/>
            <ContactSection/>
            <Footer />
        </div>
    );
};


export default MeSite;
