import * as React from "react";
import cn from "classnames";

import css from "./AboutMeSection.module.scss";
import SectionTitleComponent from "SectionTitleComponent/SectionTitleComponent";


export interface IAboutMeSection {
}


const AboutMeSection: React.FC<IAboutMeSection> = (props) => {
    return (
        <section className={cn(css.section)}>
            <SectionTitleComponent title="About Me"  variant="light"/>

            <p className={cn(css.description)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat lorem sit amet mattis gravida. Etiam vel odio libero. Quisque dignissim felis non
                purus congue pulvinar. Vivamus et arcu ut ex consectetur cursus vitae at erat.
            </p>

            <p className={cn(css.description)}>
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi tempor leo tellus, auctor tempor nibh aliquam id.
            </p>
        </section>
    );
};


export default AboutMeSection;
