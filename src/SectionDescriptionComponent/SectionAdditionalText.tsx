import * as React from "react";
import ReactMarkdown from "react-markdown";
import cn from "classnames";

import css from "./SectionAdditionalText.module.scss";


export interface ISectionAdditionalTextProps {
    className?: string,
    children: string,
}


const SectionAdditionalText: React.FC<ISectionAdditionalTextProps> = (props) => {
    const {children, className}  = props;

    return (
        <div className={cn(css.container, className)}>
            <ReactMarkdown source={children} escapeHtml={false}/>
        </div>
    );
};


export default SectionAdditionalText;
