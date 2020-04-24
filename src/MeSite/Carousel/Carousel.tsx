import * as React from "react";
import cn from "classnames";

import css from "./Carousel.module.scss";
import CarouselTile from "@/MeSite/Carousel/CarouselTile";


export interface ICarouselProps {
}


const Carousel: React.FC<ICarouselProps> = (props) => {
    return (
        <div className={cn(css.container)}>
            <CarouselTile />
            <CarouselTile />
            <CarouselTile />
            <CarouselTile />
            <CarouselTile />
        </div>
    );
};


export default Carousel;
