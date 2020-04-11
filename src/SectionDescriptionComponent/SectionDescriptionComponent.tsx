import * as React from "react";
import cn from "classnames";

import css from "./SectionDescriptionComponent.module.scss";
import ReactMarkdown from "react-markdown";


export interface ISectionDescriptionComponent {
    className?: string,
    children: string,
}


const SectionDescriptionComponent: React.FC<ISectionDescriptionComponent> = (props) => {
    const {children}  = props;

    return (
        <div className={cn(css.description)}>
            <ReactMarkdown source={children} escapeHtml={false}/>
        </div>
    );
};


export default SectionDescriptionComponent;
