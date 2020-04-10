import * as React from "react";
import cn from "classnames";

import css from "./DesignSection.module.scss";
import SectionTitleComponent from "SectionTitleComponent/SectionTitleComponent";
import ReactMarkdown from "react-markdown";
/* eslint import/no-webpack-loader-syntax: off */
import body from "!!raw-loader!DesignSection/designSectionBody.md";


export interface IDesignSection {
}


const DesignSection: React.FC<IDesignSection> = (props) => {
    return (
            <section className={cn(css.section)}>
                <SectionTitleComponent title="Design" variant="dark"/>

                <ReactMarkdown source={body} escapeHtml={false} />
            </section>
    );
};


export default DesignSection;
