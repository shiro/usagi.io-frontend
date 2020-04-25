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
import SectionBackgroundImage from "@/MeSite/SectionBackgroundImage";
import {ReactComponent as GitBackground} from "assets/resources/static/octocat.svg";


import {ReactComponent as AutomationIcon} from "assets/resources/static/icons/automation-icon.svg";
import {ReactComponent as containerIcon} from "assets/resources/static/icons/container-icon.svg";
import {ReactComponent as databasesIcon} from "assets/resources/static/icons/databases-icon.svg";
import {ReactComponent as dataStructuresIcon} from "assets/resources/static/icons/data-structures-icon.svg";
import {ReactComponent as gamepadIcon} from "assets/resources/static/icons/gamepad-icon.svg";
import {ReactComponent as gitIcon} from "assets/resources/static/icons/git-icon.svg";
import {ReactComponent as iotIcon} from "assets/resources/static/icons/iot-icon.svg";
import {ReactComponent as softwareDesingIcon} from "assets/resources/static/icons/software-desing-icon.svg";
import {ReactComponent as teamworkIcon} from "assets/resources/static/icons/teamwork-icon.svg";
import {ReactComponent as webdevIcon} from "assets/resources/static/icons/webdev-icon.svg";


export interface IProgrammingSectionProps {}


const ProgrammingSection: React.FC<IProgrammingSectionProps> = (props) => {
    const color = theme.colors.red;
    const colorMuted = theme.colors.redMuted;


    // const Icon = FontAwesomeIcon;
    // const iconProps = {icon: faGithub};

    const items = [
        ["Software Design", softwareDesingIcon, softwareDesignMd, ["C/C++", "C#", "Rust"]],
        ["Data structures", dataStructuresIcon, softwareDesignMd, ["Complexity analysis", "Memory management"]],
        ["IOT development", iotIcon, gamedevMd, ["C/C++", "Rust", "Network communication", "Distributed computing"]],
        ["Databases", databasesIcon, gamedevMd, ["SQL", "Database management"]],
        ["Teamwork", teamworkIcon, gamedevMd, ["Communication skills"]],
        ["Web development", webdevIcon, gamedevMd, ["Java Script", "Python", "Java", "C#", "PHP"]],
        ["Container management", containerIcon, gamedevMd, ["Docker"]],
        ["Game Dev", gamepadIcon, gamedevMd, ["C#", "C/C++", "Java"]],
        ["Git sorcery", gitIcon, gitMd, ["Git", "Version Control"]],
        ["Automation", AutomationIcon, gamedevMd, ["Scripting", "Build pipeline management"]],
    ];

    const tileData: ITileData[] = items.map(([name, Icon]) => ({name, Icon, iconProps: null}));

    const [activeTile, setActiveTile] = useState(0);

    return (
        <section className={cn(css.section)}>
            <SectionBackgroundImage Image={GitBackground} imageProps={{preserveAspectRatio: "xMinYMin meet"}}/>
            <SectionTitleComponent title="Software Engineering" variant="dark"/>

            <SectionDescriptionComponent children={body}/>
            <SectionAdditionalText className={cn(css.additionalText)} title={items[activeTile][0]} children={items[activeTile][2]}
                skills={items[activeTile][3]}
            />

            <IconGrid color={color} colorMuted={colorMuted} tileData={tileData} activeItem={activeTile}
                onItemClick={(item) => {setActiveTile(item)}}/>
        </section>
    );
};


export default ProgrammingSection;
