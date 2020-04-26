import * as React from "react";
import cn from "classnames";
import SectionTitleComponent from "@/SectionTitleComponent/SectionTitleComponent";
import SectionDescriptionComponent from "@/SectionDescriptionComponent/SectionDescriptionComponent";
import IconGrid, {ITileData} from "@/MeSite/IconGrid/IconGrid";
import css from "./ProgrammingSection.module.scss";
import theme from "config/theme.js";
import body from "@/ProgrammingSection/programmingSectionBody.md";
import {useState} from "react";
import SectionAdditionalText from "@/SectionDescriptionComponent/SectionAdditionalText";
import SectionBackgroundImage from "@/MeSite/SectionBackgroundImage";
import {ReactComponent as GitBackground} from "assets/resources/static/octocat.svg";
import useMeasure from 'react-use-measure';


import {animated, useSpring} from "react-spring";
import {programmingSectionSkills} from "@/ProgrammingSection/programmingSectionSkills";


export interface IProgrammingSectionProps {}


const ProgrammingSection: React.FC<IProgrammingSectionProps> = (props) => {
    const skills = programmingSectionSkills;
    const skillTileData: ITileData[] = skills.map(([name, Icon]) => ({name, Icon}));

    const [activeTile, setActiveTile] = useState(0);

    const [ref, {height}] = useMeasure();
    const springStyle = useSpring({height});

    const handleItemClick = (item: number) => { setActiveTile(item) };

    return (
        <section className={cn(css.section)}>
            {/*<SectionBackgroundImage Image={skills[activeTile][1]} imageProps={{preserveAspectRatio: "xMinYMin meet"}}*/}
            {/*    color={theme.colors.red} opacity={.1}*/}
            {/*/>*/}

            <SectionTitleComponent title="Software Engineering" color={theme.colors.red}/>
            <SectionDescriptionComponent children={body}/>

            <animated.div style={{overflow: "hidden", ...springStyle}}>
                <SectionAdditionalText
                    color={theme.colors.red}
                    pillBackgroundColor={theme.colors.red}
                    containerElementRef={ref}
                    className={cn(css.additionalText)} title={skills[activeTile][0]} children={skills[activeTile][2]}
                    skills={skills[activeTile][3]}
                />
            </animated.div>

            <IconGrid
                iconColor={theme.colors.white}
                iconColorInactive={theme.colors.white}
                textColor={theme.colors.red}
                textColorInactive={theme.colors.lightBlack}
                tileColor={theme.colors.red}
                tileColorInactive={theme.colors.redMuted}

                tileData={skillTileData} activeItem={activeTile}
                onItemClick={handleItemClick}
            />
        </section>
    );
};


export default ProgrammingSection;
