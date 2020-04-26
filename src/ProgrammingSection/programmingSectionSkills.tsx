import gamedevMd from "@/ProgrammingSection/gamedev.md";
// import gitMd from "@/ProgrammingSection/git.md";
import softwareDesignMd from "@/ProgrammingSection/softwareDesign.md";

import webdevMd from "@/ProgrammingSection/skillDescriptions/webdev.md";
import databasesMd from "@/ProgrammingSection/skillDescriptions/databases.md";
import desktopDevelopmentMd from "@/ProgrammingSection/skillDescriptions/desktopDevelopment.md";
import gitMd from "@/ProgrammingSection/skillDescriptions/git.md";

import {ReactComponent as AutomationIcon} from "assets/resources/static/icons/automation-icon.svg";
import {ReactComponent as containerIcon} from "assets/resources/static/icons/container-icon.svg";
import {ReactComponent as databasesIcon} from "assets/resources/static/icons/databases-icon.svg";
import {ReactComponent as desktopDevelopmentIcon} from "assets/resources/static/icons/desktop-development-icon.svg";
import {ReactComponent as gamepadIcon} from "assets/resources/static/icons/gamepad-icon.svg";
import {ReactComponent as gitIcon} from "assets/resources/static/icons/git-icon.svg";
import {ReactComponent as openSourceIcon} from "assets/resources/static/icons/open-source-icon.svg";
import {ReactComponent as softwareDesingIcon} from "assets/resources/static/icons/software-design-icon.svg";
import {ReactComponent as teamworkIcon} from "assets/resources/static/icons/teamwork-icon.svg";
import {ReactComponent as webdevIcon} from "assets/resources/static/icons/webdev-icon.svg";

export const programmingSectionSkills = [
    ["Web development", webdevIcon, webdevMd, ["Java Script", "Python", "Java", "C#", "PHP"]],
    ["Software Design", softwareDesingIcon, softwareDesignMd, ["C/C++", "C#", "Rust"]],
    ["Desktop development", desktopDevelopmentIcon, desktopDevelopmentMd, ["Complexity analysis", "Memory management"]],
    ["Game Dev", gamepadIcon, gamedevMd, ["C#", "C/C++", "Java"]],
    ["Teamwork", teamworkIcon, gamedevMd, ["Communication skills"]],
    ["Container management", containerIcon, gamedevMd, ["Docker"]],
    ["Open source", openSourceIcon, gamedevMd, ["C/C++", "Rust", "Network communication", "Distributed computing"]],
    ["Databases", databasesIcon, databasesMd, ["SQL", "Database management"]],
    ["Git sorcery", gitIcon, gitMd, ["Git", "Version Control"]],
    ["Automation", AutomationIcon, gamedevMd, ["Scripting", "Build pipeline management"]],
];
