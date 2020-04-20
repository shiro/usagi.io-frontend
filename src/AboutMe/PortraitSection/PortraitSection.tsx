import * as React from "react";
import cn from "classnames";

import css from "./PortraitSection.module.scss";
import {LazyLoadImage} from "react-lazy-load-image-component";


export interface IPortraitSection {
}


const PortraitSection: React.FC<IPortraitSection> = (props) => {
    return (
        <section className={cn(css.section)}>
            <div className={cn(css.textContainer)}>
                <h1 className={cn(css.slogan)}>Simplicity = Complex</h1>
                <span className={cn(css.name)}>Matic Gačar <i className={cn(css.nameBarSymbol)}/> 白兎</span>

                <span className={cn(css.education)}>Software Engineering</span>
                <span className={cn(css.education)}>Web/UI/UX Design</span>
            </div>

            <LazyLoadImage
                wrapperClassName={cn(css.portraitContainer)}
                className={cn(css.portrait)}
                src="/assets/resources/static/portrait.png"
                alt="portrait"
                effect="blur"
            />
        </section>
    );
};


export default PortraitSection;
