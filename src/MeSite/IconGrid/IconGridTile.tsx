import * as React from "react";
import cn from "classnames";

import css from "./IconGridTile.module.scss";


export interface IIconGridTileProps {
    tileColor: string;
    tileHoverColor: string;
    iconColor: string;
    textColor: string;

    name: string;
    Icon: React.ElementType;
    iconProps?: React.ComponentProps<any>,
    active?: boolean;
    onClick?: () => void;
    className?: string;
}

const IconGridTile: React.FC<IIconGridTileProps> = (props) => {
    const {name, tileColor, tileHoverColor, iconColor, textColor, Icon, iconProps, active, onClick, className} = props;

    return (
        <div className={cn(css.outerContainer, className)} onClick={onClick}>
            <div className={cn(css.tileContainer)}>
                <div className={cn(css.tile, {[css.active]: active})}
                    style={{"--backgroundColor": tileColor, "--backgroundHoverColor": tileHoverColor}}>
                    <Icon
                        className={cn(css.icon)}
                        style={{"--iconColor": iconColor}}
                        preserveAspectRatio="xMidYMid meet"
                        {...iconProps}
                    />
                </div>
            </div>
            <span className={cn(css.textContainer, {[css.active]: active})}
                style={{color: textColor}}
            >{name}</span>
        </div>
    );
};


export default IconGridTile;
