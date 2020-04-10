import * as React from "react";
import cn from "classnames";

import css from "./AboutMeSection.module.scss";
import SectionTitleComponent from "SectionTitleComponent/SectionTitleComponent";
import ReactMarkdown from "react-markdown";
/* eslint import/no-webpack-loader-syntax: off */
import body from "!!raw-loader!AboutMeSection/aboutMeSectionBody.md";


export interface IAboutMeSection {
}


const AboutMeSection: React.FC<IAboutMeSection> = (props) => {
    return (
        <section className={cn(css.section)}>
            <SectionTitleComponent title="About Me" variant="light"/>

            <div className={cn(css.description)}>

                <ReactMarkdown source={body} escapeHtml={false}/>
            </div>
        </section>
    );
};


export default AboutMeSection;
