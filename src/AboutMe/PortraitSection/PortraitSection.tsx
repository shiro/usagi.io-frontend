import * as React from "react";
import cn from "classnames";

import css from "./PortraitSection.module.scss";


export interface IPortraitSection {
}


const PortraitSection: React.FC<IPortraitSection> = (props) => {
    return (
        <section className={cn(css.section)}>
            <div className={cn(css.textContainer)}>
            <h1 className={cn(css.slogan)}>Simplicity = Complex</h1>
            <span className={cn(css.name)}>Matic Gačar <i className={cn(css.nameBarSymbol)} /> 白兎</span>

            <span className={cn(css.education)}>Software Engineering</span>
            <span className={cn(css.education)}>Web/UI/UX Design</span>
            </div>


            <div className={cn(css.portraitContainer)}>
                <img className={cn(css.portrait)} src="/assets/resources/portrait.png" alt="portrait"/>
            </div>
        </section>
    );
};


export default PortraitSection;
