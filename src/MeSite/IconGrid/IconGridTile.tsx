import * as React from "react";
import cn from "classnames";

import css from "./IconGridTile.module.scss";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import theme from "config/theme.js";


export interface IIconGridTileProps {
}


const IconGridTile: React.FC<IIconGridTileProps> = (props) => {
    const textArr = ["Software Design", "Git", "Game Dev", "Rust"];
    const text = textArr[Math.round(Math.random() * (textArr.length - 1))];
    const active = Math.round(Math.random());

    const color = theme.colors.red;
    const colorMuted = theme.colors.redMuted;
    const Icon = FontAwesomeIcon;

    return (
        <div className={cn(css.outerContainer)}>
            <div className={cn(css.tileContainer)}>
                <div className={cn(css.tile, {[css.active]: active})} style={{backgroundColor: active ? color : colorMuted}}>
                    <Icon className={cn(css.icon)} icon={faGithub} preserveAspectRatio="xMidYMid meet"/>
                </div>
            </div>
            <span className={cn(css.textContainer, {[css.active]: active})}
                style={{color: active ? color : colorMuted}}
            >{text}</span>
        </div>
    );
};


export default IconGridTile;
