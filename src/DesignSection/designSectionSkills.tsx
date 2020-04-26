import digitalPhotoEditingMd from "@/DesignSection/skillDescriptions/digitalPhotoEditing.md";
import photographyMd from "@/DesignSection/skillDescriptions/photography.md";
import pixelArtMd from "@/DesignSection/skillDescriptions/pixelArt.md";
import UIDesignMd from "@/DesignSection/skillDescriptions/UIDesign.md";
import webDesignMd from "@/DesignSection/skillDescriptions/webDesign.md";

import {ReactComponent as uiDesignIcon} from "assets/resources/static/icons/ui-design-icon.svg";
import {ReactComponent as pixelArtIcon} from "assets/resources/static/icons/pixel-art-icon.svg";
import {ReactComponent as photographyIcon} from "assets/resources/static/icons/photography-icon.svg";
import {ReactComponent as webDesignIcon} from "assets/resources/static/icons/web-desing-icon.svg";
import {ReactComponent as digitalPhotoEditingIcon} from "assets/resources/static/icons/digital-photo-editing-icon.svg";

export const designSectionSkills = [
    ["Web design", webDesignIcon, webDesignMd, ["Photoshop", "Illustrator", "XD", "Java Script", "Figma", "Sketching"]],
    ["UI/UX design", uiDesignIcon, UIDesignMd, ["Photoshop", "Illustrator", "XD", "Figma", "Prototyping", "Design evaluation", "User studies"]],
    ["Photography", photographyIcon, photographyMd, ["Light theory", "Work with modern tools", "Flashlight photography", "Digital image editing"]],
    ["Pixel art", pixelArtIcon, pixelArtMd, ["Sketching", "Minimalist thinking", "Imagination", "Animation", "Krita"]],
    ["Digital photo editing", digitalPhotoEditingIcon, digitalPhotoEditingMd, ["Photoshop", "Lightroom", "Darktable", "Light theory"]],
];
