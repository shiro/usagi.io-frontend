import * as React from "react";
import cn from "classnames";
import SectionTitleComponent from "@/SectionTitleComponent/SectionTitleComponent";
import body from "@/ProgrammingSection/programmingSectionBody.md";
import SectionDescriptionComponent from "@/SectionDescriptionComponent/SectionDescriptionComponent";
import IconGrid from "@/MeSite/IconGrid/IconGrid";
import css from "./ProgrammingSection.module.scss";



export interface IProgrammingSection {
}


const ProgrammingSection: React.FC<IProgrammingSection> = (props) => {
    return (
        <section className={cn(css.section)}>
            <SectionTitleComponent title="Software Engineering" variant="dark"/>

            <SectionDescriptionComponent>
                {body}
            </SectionDescriptionComponent>

            <IconGrid />
        </section>
    );
};


export default ProgrammingSection;
