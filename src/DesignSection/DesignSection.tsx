import * as React from "react";
import cn from "classnames";
import theme from "config/theme.js";

import css from "./DesignSection.module.scss";
import SectionTitleComponent from "@/SectionTitleComponent/SectionTitleComponent";
/* eslint import/no-webpack-loader-syntax: off */
import body from "@/DesignSection/designSectionBody.md";
import SectionDescriptionComponent from "@/SectionDescriptionComponent/SectionDescriptionComponent";
import {designSectionSkills} from "@/DesignSection/designSectionSkills";
import IconGrid, {ITileData} from "@/MeSite/IconGrid/IconGrid";
import {useState} from "react";
import useMeasure from "react-use-measure";
import {animated, useSpring} from "react-spring";
import SectionAdditionalText from "@/SectionDescriptionComponent/SectionAdditionalText";


export interface IDesignSection {
}


const DesignSection: React.FC<IDesignSection> = (props) => {
    const color = theme.colors.blue;
    const colorMuted = theme.colors.blueMutedDark;
    const colorMutedText = theme.colors.grayMutedDark;

    const skills = designSectionSkills;
    const skillTileData: ITileData[] = skills.map(([name, Icon]) => ({name, Icon}));

    const [activeTile, setActiveTile] = useState(0);

    const [ref, {height}] = useMeasure();
    const springStyle = useSpring({height});

    const handleItemClick = (item: number) => { setActiveTile(item) };

    return (
            <section className={cn(css.section)}>
                <SectionTitleComponent title="Design" color={theme.colors.blue} />

                <SectionDescriptionComponent children={body}/>

                <animated.div style={{overflow: "hidden", ...springStyle}}>
                    <SectionAdditionalText
                        color={theme.colors.blue}
                        pillBackgroundColor={theme.colors.blueMutedDark}
                        containerElementRef={ref}
                        className={cn(css.additionalText)} title={skills[activeTile][0]} children={skills[activeTile][2]}
                        skills={skills[activeTile][3]}
                    />
                </animated.div>

                <IconGrid
                    iconColor={theme.colors.white}
                    iconColorInactive={theme.colors.grayMutedDark}
                    textColor={theme.colors.blue}
                    textColorInactive={theme.colors.grayMutedDark}
                    tileColor={theme.colors.blue}
                    tileColorInactive={theme.colors.blueMutedDark}
                    tileData={skillTileData} activeItem={activeTile}
                    onItemClick={handleItemClick}
                />
            </section>
    );
};


export default DesignSection;
