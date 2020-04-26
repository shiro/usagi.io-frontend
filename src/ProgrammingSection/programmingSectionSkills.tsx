import gamedevMd from "@/ProgrammingSection/gamedev.md";
import gitMd from "@/ProgrammingSection/git.md";
import softwareDesignMd from "@/ProgrammingSection/softwareDesign.md";

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

export const programmingSectionSkills = [
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
