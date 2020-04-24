import * as React from "react";
import cn from "classnames";

import css from "./CarouselTile.module.scss";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export interface ICarouselTileProps {
}


const CarouselTile: React.FC<ICarouselTileProps> = (props) => {
    const textArr = ["Software Design", "Git", "Game Dev", "Rust"];
    const text = textArr[Math.round(Math.random() * (textArr.length - 1))];

    return (
        <div className={cn(css.outerContainer)}>

            {/*<div className={cn(css.container)}>*/}
            <div className={cn(css.tileContainer)}>
                <div className={cn(css.tile)}>
                    <FontAwesomeIcon className={cn(css.icon)} icon={faGithub} preserveAspectRatio="xMidYMid meet"/>

                    <span className={cn(css.textContainer)}>{text}</span>
                </div>
            </div>
            {/*</div>*/}

        </div>
    );
};


export default CarouselTile;
