import * as React from "react";
import cn from "classnames";

import css from "./SectionBackgroundImage.module.scss";


export interface ISectionBackgroundImageProps {
    Image: React.ElementType;
    imageProps?: React.ComponentProps<any>;
    opacity: number;
    color: string;
}


const SectionBackgroundImage: React.FC<ISectionBackgroundImageProps> = (props) => {
    const {Image, imageProps, color, opacity} = props;
    return (
        <Image className={cn(css.image)} {...imageProps} style={{"--color": color, opacity}}>
        </Image>
    );
};


export default SectionBackgroundImage;
