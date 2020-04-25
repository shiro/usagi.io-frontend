import * as React from "react";
import cn from "classnames";

import css from "./SectionBackgroundImage.module.scss";


export interface ISectionBackgroundImageProps {
    Image: React.ElementType;
    imageProps?: React.ComponentProps<any>;
}


const SectionBackgroundImage: React.FC<ISectionBackgroundImageProps> = (props) => {
    const {Image, imageProps} = props;
    return (
        <Image className={cn(css.image)} {...imageProps}>
        </Image>
    );
};


export default SectionBackgroundImage;
