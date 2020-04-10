import * as React from "react";
import cn from "classnames";

import css from "./ProgrammingSection.module.scss";
import SectionTitleComponent from "SectionTitleComponent/SectionTitleComponent";


export interface IProgrammingSection {
}


const ProgrammingSection: React.FC<IProgrammingSection> = (props) => {
    return (
        <section className={cn(css.section)}>
            <SectionTitleComponent title="Code" variant="light"/>


        </section>
    );
};


export default ProgrammingSection;
