import gamedevMd from "@/ProgrammingSection/gamedev.md";
import gitMd from "@/ProgrammingSection/git.md";
import softwareDesignMd from "@/ProgrammingSection/softwareDesign.md";

import {ReactComponent as uiDesignIcon} from "assets/resources/static/icons/ui-design-icon.svg";
import {ReactComponent as pixelArtIcon} from "assets/resources/static/icons/pixel-art-icon.svg";
import {ReactComponent as photographyIcon} from "assets/resources/static/icons/photography-icon.svg";
import {ReactComponent as webDesignIcon} from "assets/resources/static/icons/web-desing-icon.svg";
import {ReactComponent as digitalPhotoEditingIcon} from "assets/resources/static/icons/digital-photo-editing-icon.svg";

export const designSectionSkills = [
    ["Web design", webDesignIcon, softwareDesignMd, ["Photoshop", "Illustrator", "XD", "Java Script"]],
    ["UI/UX design", uiDesignIcon, gamedevMd, ["Photoshop", "Illustrator", "XD"]],
    ["Photography", photographyIcon, gamedevMd, ["foo"]],
    ["Pixel art", pixelArtIcon, softwareDesignMd, ["Sketching", "Animation", "Krita"]],
    ["Digital photo editing", digitalPhotoEditingIcon, gamedevMd, ["Photoshop", "Lightroom", "Darktable"]],
];
