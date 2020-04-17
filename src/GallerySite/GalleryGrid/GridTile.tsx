import * as React from "react";
import cn from "classnames";

import css from "./GridTile.module.scss";
import {IPicture} from "server/imageLoader";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export interface IGridTile {
    wide?: boolean,
    tall?: boolean,
    onClick?: (picture: IPicture) => void;
    picture: IPicture;
}


const GridTile: React.FC<IGridTile> = (props) => {
    const {wide = false, tall = false, onClick, picture} = props;

    return (
        <div className={cn(css.tile, {[css.wide]: wide, [css.tall]: tall})} onClick={() => {onClick?.(picture)}}>
            <LazyLoadImage
                wrapperClassName={cn(css.imageWrapper)}
                className={cn(css.image)}
                src={picture.thumb}
                alt="gallery picture"
                effect="blur"
            />
        </div>
    );
};


export default GridTile;
