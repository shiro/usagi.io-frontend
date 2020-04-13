import * as React from "react";
import cn from "classnames";

import css from "./GridTile.module.scss";


export interface IGridTile {
    wide?: boolean,
    tall?: boolean,
    onClick?: () => void;
}


const GridTile: React.FC<IGridTile> = (props) => {
    const {wide = false, tall = false, onClick} = props;

    const num = Math.round(Math.random() * 3 + 1);

    return (
        <div className={cn(css.tile, {[css.wide]: wide, [css.tall]: tall})} onClick={onClick}>
            <img className={cn(css.image)} src={`/gallery/sample${num}.jpg`} alt="sample"/>
        </div>
    );
};


export default GridTile;
