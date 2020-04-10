import * as React from "react";
import cn from "classnames";

import css from "./DesignSection.module.scss";
import SectionTitleComponent from "SectionTitleComponent/SectionTitleComponent";


export interface IDesignSection {
}


const DesignSection: React.FC<IDesignSection> = (props) => {
    return (
            <section className={cn(css.section)}>
                <SectionTitleComponent title="Design" variant="dark"/>
            </section>
    );
};


export default DesignSection;
