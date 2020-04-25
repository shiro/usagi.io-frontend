import * as React from "react";
import ReactMarkdown from "react-markdown";
import cn from "classnames";

import css from "./SectionAdditionalText.module.scss";


export interface ISectionAdditionalTextProps {
    className?: string;
    children: string;
    title: string;
    skills?: string[];
}


const SectionAdditionalText: React.FC<ISectionAdditionalTextProps> = (props) => {
    const {children, className, title, skills = []} = props;

    return (
        <div className={cn(css.container, className)}>
            <h1 className={cn(css.title)}>{title}</h1>
            <ReactMarkdown source={children} escapeHtml={false}/>

            {!!skills.length && <div className={cn(css.skillSectionContainer)}>
                <span className={cn(css.skillHeading)}>Relevant skills:</span>

                <div className={cn(css.skillContainer)}>
                {skills.map((skill) => <span className={cn(css.skill)}>{skill}</span>)}
                </div>
            </div>}
        </div>
    );
};


export default SectionAdditionalText;
