import * as React from "react";
import {useEffect, useMemo, useRef, useState} from "react";
import cn from "classnames";

import css from "./GalleryGrid.module.scss";
import GridTile from "@/GallerySite/GalleryGrid/GridTile";
import {useWindowSize} from "@/hooks/useWindowSize";
import {IPicture} from "server/imageLoader";


export interface IGalleryGrid {
    onImageClick?: (picture: IPicture) => void;
    pictures: IPicture[];
}

const tossCoin = () => !!Math.round(Math.random());


const GalleryGrid: React.FC<IGalleryGrid> = (props) => {
    const {onImageClick, pictures} = props;

    const [cols, setCols] = useState(3);
    const buckets = useRef([false, false, false]);
    const colIndex = useRef(0);
    const [containerWidth, setContainerWidth] = useState<number | string>(0);

    const {width} = useWindowSize();

    const colMap = [
        [500, 3],
        [800, 5],
        [1000, 5],
        [1200, 5],
        [1800, 5],
    ];


    useEffect(() => {
        if (!width)
            return;

        // reset col iterator
        colIndex.current = 0;

        let newCols = 1;

        // if smaller than first lower bound scale dynamically
        if (width < colMap[0][0])
            setContainerWidth("100%");
        else {
            for (const [lowerBound, columns] of colMap) {
                if (lowerBound <= width) {
                    setContainerWidth(`${lowerBound}px`);
                    newCols = columns;
                } else
                    break;
            }
        }

        if (newCols !== cols) {
            tiles.current = [];
            buckets.current = new Array(newCols).fill(false);
            setCols(newCols);
        }
    }, [colMap, cols, width]);


    let tiles = useRef<React.ReactElement[]>([]);

    // while not all images rendered
    while (tiles.current.length < pictures.length) {
        if (colIndex.current >= cols)
            colIndex.current = 0;

        // skip since full
        if (buckets.current[colIndex.current]) {
            buckets.current[colIndex.current] = false;
            ++colIndex.current;
            continue;
        }

        let tall = false;

        // if not in mobile mode and coin is true
        if (cols !== 1 && !!Math.round(Math.random())) {
            tall = true;
            buckets.current[colIndex.current] = true;
        }

        buckets.current[colIndex.current] = tall;

        let wide = false;
        // is not at the end and next tile free and coin is true
        if (colIndex.current !== cols - 1 && !buckets.current[colIndex.current + 1] && tossCoin()) {
            wide = true;

            if (tall)
                buckets.current[colIndex.current + 1] = true;

            // skip one col since the tile takes up 2 spaces
            ++colIndex.current;
        }

        // TODO derive keys from image data
        tiles.current.push(<GridTile key={Math.random()} wide={wide} tall={tall} picture={pictures[tiles.current.length]} onClick={onImageClick}/>);

        if (colIndex.current < cols)
            ++colIndex.current;
    }

    return <>
        {useMemo(() =>
                <div className={cn(css.container)}>
                    <div className={cn(css.grid)} style={{gridTemplateColumns: `repeat(auto-fill, ${100 / cols}%)`, width: containerWidth}}>
                        {tiles.current}
                    </div>
                </div>
            , [cols, containerWidth])}
    </>;
};


export default GalleryGrid;
