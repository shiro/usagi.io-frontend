import * as React from "react";
import cn from "classnames";

import css from "./DesignSection.module.scss";
import SectionTitleComponent from "@/SectionTitleComponent/SectionTitleComponent";
/* eslint import/no-webpack-loader-syntax: off */
import body from "@/DesignSection/designSectionBody.md";
import SectionDescriptionComponent from "@/SectionDescriptionComponent/SectionDescriptionComponent";


export interface IDesignSection {
}


const DesignSection: React.FC<IDesignSection> = (props) => {
    return (
            <section className={cn(css.section)}>
                <SectionTitleComponent title="Design" variant="white"/>

                <SectionDescriptionComponent children={body} />
            </section>
    );
};


export default DesignSection;
