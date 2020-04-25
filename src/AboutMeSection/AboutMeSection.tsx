import * as React from "react";
import cn from "classnames";

import css from "./AboutMeSection.module.scss";
import SectionTitleComponent from "@/SectionTitleComponent/SectionTitleComponent";
/* eslint import/no-webpack-loader-syntax: off */
import body from "@/AboutMeSection/aboutMeSectionBody.md";
import SectionDescriptionComponent from "@/SectionDescriptionComponent/SectionDescriptionComponent";
import IconGrid from "@/MeSite/IconGrid/IconGrid";


export interface IAboutMeSection {
}


const AboutMeSection: React.FC<IAboutMeSection> = (props) => {
    return (
        <section className={cn(css.section)}>
            <SectionTitleComponent title="About Me" variant="white"/>

            <SectionDescriptionComponent>
                {body}
            </SectionDescriptionComponent>
        </section>
    );
};


export default AboutMeSection;
