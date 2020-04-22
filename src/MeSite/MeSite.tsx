import * as React from "react";
import PortraitSection from "@/AboutMe/PortraitSection/PortraitSection";
import Header from "@/Header/Header";
import AboutMeSection from "@/AboutMeSection/AboutMeSection";
import ProgrammingSection from "@/ProgrammingSection/ProgrammingSection";
import DesignSection from "@/DesignSection/DesignSection";
import ContactSection from "@/ContactSection/ContactSection";
import Footer from "@/Footer/Footer";
import {Person} from "schema-dts";import {JsonLd} from "react-schemaorg";
import { Helmet } from "react-helmet"

// TODO consolidate all Ld
const AuthorLd = () => <JsonLd<Person>
    item={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Matic Gačar",
        birthDate: "1997-6-1",
        gender: "male",
        birthPlace: "Ptuj, SI",
        nationality: "Slovenian",
        url: "https://usagi.io",
        alternateName: "白兎 (shirousagi)",
        colleague: [
            "https://www.fh-ooe.at/en/"
        ],
        knowsLanguage: [
            "English",
            "German",
            "Slovenian",
        ],
        email: "shiro@usagi.io",
        // image: "profile.jpg",
        jobTitle: "Software Engineer",
        knowsAbout: ["Software Engineering", "UI/UX Design", "Photography"]
    }}/>;


export interface IMeSite {
}


const MeSite: React.FC<IMeSite> = (props) => {
    return (
        <div>
            <Helmet>
                <title>me | usagi.io</title>
            </Helmet>
            <AuthorLd />
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
