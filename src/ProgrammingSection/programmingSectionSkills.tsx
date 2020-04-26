import gamedevMd from "@/ProgrammingSection/skillDescriptions/gameDev.md";
import softwareDesignMd from "@/ProgrammingSection/skillDescriptions/softwareDesign.md";
import webdevMd from "@/ProgrammingSection/skillDescriptions/webdev.md";
import databasesMd from "@/ProgrammingSection/skillDescriptions/databases.md";
import desktopDevelopmentMd from "@/ProgrammingSection/skillDescriptions/desktopDevelopment.md";
import gitMd from "@/ProgrammingSection/skillDescriptions/git.md";
import automationMd from "@/ProgrammingSection/skillDescriptions/automation.md";
import teamworkMd from "@/ProgrammingSection/skillDescriptions/teamwork.md";
import containerManagementMd from "@/ProgrammingSection/skillDescriptions/containerManagement.md";
import openSourceMd from "@/ProgrammingSection/skillDescriptions/openSource.md";

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
    ["Web development", webdevIcon, webdevMd, ["Java Script", "Python", "Java", "C#", "Docker", "PHP", "Databases"]],
    ["Software Design", softwareDesingIcon, softwareDesignMd, ["UML", "Network communication"]],
    ["Desktop development", desktopDevelopmentIcon, desktopDevelopmentMd, ["C/C++", "WPF", "GTK", "Java", "React", "Rust"]],
    ["Game Dev", gamepadIcon, gamedevMd, ["C#", "C/C++", "Java", "OpenGL", "Shader programming"]],
    ["Teamwork", teamworkIcon, teamworkMd, ["Communication skills", "Reliability"]],
    ["Container management", containerIcon, containerManagementMd, ["Docker", "Linux", "System administration"]],
    ["Open source", openSourceIcon, openSourceMd, ["C/C++", "Rust", "Network communication", "Distributed computing"]],
    ["Databases", databasesIcon, databasesMd, ["SQL", "Oracle DB", "MySQL", "MongoDB", "Replication", "Database management"]],
    ["Git sorcery", gitIcon, gitMd, ["Git", "Version Control", "Scripting", "Codebase management"]],
    ["Automation", AutomationIcon, automationMd, ["Scripting", "Build pipeline management"]],
];
