import * as React from "react";
import cn from "classnames";

import css from "./GridTile.module.scss";
import {Picture} from "server/imageLoader";


export interface IGridTile {
    wide?: boolean,
    tall?: boolean,
    onClick?: (picture: Picture) => void;
    picture: Picture;
}


const GridTile: React.FC<IGridTile> = (props) => {
    const {wide = false, tall = false, onClick, picture} = props;

    return (
        <div className={cn(css.tile, {[css.wide]: wide, [css.tall]: tall})} onClick={() => {onClick?.(picture)}}>
            <img className={cn(css.image)} src={picture.source} alt="sample"/>
        </div>
    );
};


export default GridTile;
