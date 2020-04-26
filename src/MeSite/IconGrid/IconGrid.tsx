import * as React from "react";
import cn from "classnames";

import css from "./IconGrid.module.scss";
import IconGridTile from "@/MeSite/IconGrid/IconGridTile";


export interface IIconGridProps {
    tileColor: string;
    tileColorInactive: string;
    textColor: string;
    textColorInactive: string;
    iconColor: string;
    iconColorInactive: string;

    tileData: ITileData[];
    activeItem: number;
    onItemClick?: (item: number) => void;
}

export interface ITileData {
    name: string;
    Icon: React.ElementType;
    iconProps?: React.ComponentProps<any>,
}

const IconGrid: React.FC<IIconGridProps> = (props) => {
    const {
        tileColor, tileColorInactive, textColor, textColorInactive, iconColor, iconColorInactive,
        tileData, activeItem, onItemClick
    } = props;

    return (
        <div className={cn(css.container)}>
            {tileData.map(({name, Icon, iconProps}, index) => {
                    const isActive = index === activeItem;

                    return <IconGridTile
                        className={cn(css.item)}
                        key={name}
                        tileColor={isActive ? tileColor : tileColorInactive}
                        iconColor={isActive ? iconColor : iconColorInactive}
                        textColor={isActive ? textColor : textColorInactive}
                        Icon={Icon}
                        iconProps={iconProps}
                        name={name}
                        active={isActive}
                        onClick={() => {onItemClick?.(index)}}
                    />;
                }
            )}
        </div>
    );
};


export default IconGrid;
