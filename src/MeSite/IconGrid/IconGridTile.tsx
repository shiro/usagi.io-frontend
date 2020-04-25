import * as React from "react";
import cn from "classnames";

import css from "./IconGridTile.module.scss";


export interface IIconGridTileProps {
    color: string;
    colorMuted: string;
    name: string;
    Icon: React.ElementType;
    iconProps?: React.ComponentProps<any>,
    active?: boolean;
    onClick?: () => void;
}

const IconGridTile: React.FC<IIconGridTileProps> = (props) => {
    const {name, color, colorMuted, Icon, iconProps, active, onClick} = props;

    return (
        <div className={cn(css.outerContainer)} onClick={onClick}>
            <div className={cn(css.tileContainer)}>
                <div className={cn(css.tile, {[css.active]: active})} style={{backgroundColor: active ? color : colorMuted}}>
                    <Icon className={cn(css.icon)} {...iconProps} preserveAspectRatio="xMidYMid meet"/>
                </div>
            </div>
            <span className={cn(css.textContainer, {[css.active]: active})}
                style={{color: active ? color : colorMuted}}
            >{name}</span>
        </div>
    );
};


export default IconGridTile;
