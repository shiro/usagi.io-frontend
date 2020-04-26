import * as React from "react";
import cn from "classnames";
/* eslint import/no-webpack-loader-syntax: off */
import body from "@/GallerySite/GalleryDescriptionBody.md";
import css from "./GalleryDescriptionSection.module.scss";
import SectionTitleComponent from "@/SectionTitleComponent/SectionTitleComponent";
import SectionDescriptionComponent from "@/SectionDescriptionComponent/SectionDescriptionComponent";
import theme from "config/theme.js";


export interface IGalleryDescriptionSection {
}


const GalleryDescriptionSection: React.FC<IGalleryDescriptionSection> = (props) => {
    return (
        <div className={cn(css.section)}>
            <SectionTitleComponent title="Pictures" color={theme.colors.black}/>

            <SectionDescriptionComponent>
                {body}
            </SectionDescriptionComponent>
        </div>
    );
};


export default GalleryDescriptionSection;
