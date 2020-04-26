import * as React from "react";
import ReactMarkdown from "react-markdown";
import cn from "classnames";

import css from "./SectionAdditionalText.module.scss";


export interface ISectionAdditionalTextProps {
    className?: string;
    children: string;
    title: string;
    skills?: string[];
    color: string;
    pillBackgroundColor: string;

    containerElementRef: (element: HTMLElement | null) => void;
    Wrapper?: React.ElementType;
    wrapperProps?: React.ComponentProps<any>;
}


const SectionAdditionalText: React.FC<ISectionAdditionalTextProps> = (props) => {
    const {children, className, color, pillBackgroundColor, title, skills = [], containerElementRef, Wrapper = 'div', wrapperProps} = props;

    return (
        <Wrapper className={cn(css.container, className)}
            style={{'--color': color, "--pillBackgroundColor":pillBackgroundColor}}
            ref={containerElementRef} {...wrapperProps}>
            <h1 className={cn(css.title)}>{title}</h1>
            <ReactMarkdown source={children} escapeHtml={false}/>

            {!!skills.length && <div className={cn(css.skillSectionContainer)}>
                <span className={cn(css.skillHeading)}>Relevant skills:</span>

                <div className={cn(css.skillContainer)}>
                    {skills.map((skill) => <span key={skill} className={cn(css.skill)}>{skill}</span>)}
                </div>
            </div>}
        </Wrapper>
    );
};


export default SectionAdditionalText;
