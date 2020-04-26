import * as React from "react";
import cn from "classnames";

import css from "./SectionTitleComponent.module.scss";


export interface ISectionTitleComponent {
    title: string,
    color: string;
}


const SectionTitleComponent: React.FC<ISectionTitleComponent> = (props) => {
    const {title, color,} = props;

    return (
        <div className={cn(css.titleContainer)}>
            <h1 className={cn(css.title)} style={{color}}>{title}</h1>
            <hr className={cn(css.spacer)}
                style={{borderColor: color}}
            />
        </div>
    );
};


export default SectionTitleComponent;
