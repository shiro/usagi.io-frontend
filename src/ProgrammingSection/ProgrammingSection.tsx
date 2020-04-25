import * as React from "react";
import cn from "classnames";
import SectionTitleComponent from "@/SectionTitleComponent/SectionTitleComponent";
import body from "@/ProgrammingSection/programmingSectionBody.md";
import gamedevMd from "@/ProgrammingSection/gamedev.md";
import gitMd from "@/ProgrammingSection/git.md";
import softwareDesignMd from "@/ProgrammingSection/softwareDesign.md";
import SectionDescriptionComponent from "@/SectionDescriptionComponent/SectionDescriptionComponent";
import IconGrid, {ITileData} from "@/MeSite/IconGrid/IconGrid";
import css from "./ProgrammingSection.module.scss";
import theme from "config/theme.js";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import SectionAdditionalText from "@/SectionDescriptionComponent/SectionAdditionalText";


export interface IProgrammingSectionProps {}


const ProgrammingSection: React.FC<IProgrammingSectionProps> = (props) => {
    const color = theme.colors.red;
    const colorMuted = theme.colors.redMuted;


    const Icon = FontAwesomeIcon;
    const iconProps = {icon: faGithub};

    const items = [["Software Design", softwareDesignMd],
        ["Git", gitMd],
        ["Game Dev", gamedevMd],
        ["Rust", gamedevMd],
    ];

    const tileData: ITileData[] = items.map(([name]) => ({name, Icon, iconProps}));

    const [activeTile, setActiveTile] = useState(0);

    return (
        <section className={cn(css.section)}>
            <SectionTitleComponent title="Software Engineering" variant="dark"/>

            <SectionDescriptionComponent children={body} />
            <SectionAdditionalText className={cn(css.additionalText)} children={items[activeTile][1]} />

            <IconGrid color={color} colorMuted={colorMuted} tileData={tileData} activeItem={activeTile}
                onItemClick={(item) => {setActiveTile(item)}}/>
        </section>
    );
};


export default ProgrammingSection;
