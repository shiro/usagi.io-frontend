import * as React from "react";
import cn from "classnames";

import css from "./ProgrammingSection.module.scss";
import SectionTitleComponent from "@/SectionTitleComponent/SectionTitleComponent";
import body from "@/ProgrammingSection/programmingSectionBody.md";
import SectionDescriptionComponent from "@/SectionDescriptionComponent/SectionDescriptionComponent";
import Carousel from "@/MeSite/Carousel/Carousel";



export interface IProgrammingSection {
}


const ProgrammingSection: React.FC<IProgrammingSection> = (props) => {
    return (
        <section className={cn(css.section)}>
            <SectionTitleComponent title="Software Engineering" variant="dark"/>

            <SectionDescriptionComponent>
                {body}
            </SectionDescriptionComponent>

            <Carousel />
        </section>
    );
};


export default ProgrammingSection;
