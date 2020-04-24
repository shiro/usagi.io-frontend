import * as React from "react";
import cn from "classnames";

import css from "./IconGrid.module.scss";
import IconGridTile from "@/MeSite/IconGrid/IconGridTile";


export interface IIconGrid {
}


const IconGrid: React.FC<IIconGrid> = (props) => {
    return (
        <div className={cn(css.container)}>
            <IconGridTile />
            <IconGridTile />
            <IconGridTile />
            <IconGridTile />
            <IconGridTile />
        </div>
    );
};


export default IconGrid;
