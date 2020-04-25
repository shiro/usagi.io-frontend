import * as React from "react";
import cn from "classnames";

import css from "./SectionTitleComponent.module.scss";


export interface ISectionTitleComponent {
    title: string,
    variant: ("white" | "black" | "red"),
}


const SectionTitleComponent: React.FC<ISectionTitleComponent> = (props) => {
    const {title, variant = "black"} = props;

    return (
        <div className={cn(css.titleContainer)}>
            <h1 className={cn(css.title, css[variant])}>{title}</h1>
            <hr className={cn(css.spacer, css[variant])}/>
        </div>
    );
};


export default SectionTitleComponent;
