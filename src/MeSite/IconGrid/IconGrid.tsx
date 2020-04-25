import * as React from "react";
import cn from "classnames";

import css from "./IconGrid.module.scss";
import IconGridTile from "@/MeSite/IconGrid/IconGridTile";


export interface IIconGridProps {
    color: string;
    colorMuted: string;
    tileData: ITileData[];
    activeItem: number;
    onItemClick?:(item: number) => void;
}

export interface ITileData {
    name: string;
    Icon: React.ElementType;
    iconProps?: React.ComponentProps<any>,
}

const IconGrid: React.FC<IIconGridProps> = (props) => {
    const {color, colorMuted, tileData, activeItem, onItemClick} = props;

    return (
        <div className={cn(css.container)}>
            {tileData.map(({name, Icon, iconProps}, index) =>
                <IconGridTile
                    className={cn(css.item)}
                    key={name} color={color} colorMuted={colorMuted} Icon={Icon}
                    iconProps={iconProps} name={name} active={index === activeItem}
                    onClick={() => {onItemClick?.(index)}}
                />
            )}
        </div>
    );
};


export default IconGrid;
