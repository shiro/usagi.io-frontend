import * as React from "react";
import cn from "classnames";

import css from "./ProgrammingSection.module.scss";
import SectionTitleComponent from "SectionTitleComponent/SectionTitleComponent";
/* eslint import/no-webpack-loader-syntax: off */
import body from "!!raw-loader!ProgrammingSection/programmingSectionBody.md";
import SectionDescriptionComponent from "SectionDescriptionComponent/SectionDescriptionComponent";



export interface IProgrammingSection {
}


const ProgrammingSection: React.FC<IProgrammingSection> = (props) => {
    return (
        <section className={cn(css.section)}>
            <SectionTitleComponent title="Code" variant="dark"/>

            <SectionDescriptionComponent>
                {body}
            </SectionDescriptionComponent>
        </section>
    );
};


export default ProgrammingSection;
