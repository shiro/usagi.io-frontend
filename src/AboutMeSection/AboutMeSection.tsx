import * as React from "react";
import cn from "classnames";

import css from "./AboutMeSection.module.scss";
import SectionTitleComponent from "@/SectionTitleComponent/SectionTitleComponent";
import body from "@/AboutMeSection/aboutMeSectionBody.md";
import SectionDescriptionComponent from "@/SectionDescriptionComponent/SectionDescriptionComponent";
import theme from "config/theme.js";


export interface IAboutMeSection {
}


const AboutMeSection: React.FC<IAboutMeSection> = (props) => {
    return (
        <section className={cn(css.section)}>
            <SectionTitleComponent title="About Me" color={theme.colors.white}/>

            <SectionDescriptionComponent>
                {body}
            </SectionDescriptionComponent>
        </section>
    );
};


export default AboutMeSection;
