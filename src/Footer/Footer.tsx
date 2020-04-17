import * as React from "react";
import cn from "classnames";

import css from "./Footer.module.scss";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export interface IFooter {}


const Footer: React.FC<IFooter> = (props) => {
    return (
        <footer className={cn(css.section)}>
            <a href="https://github.com/shiro/usagi.io-frontend" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/> Read my source code!</a>
        </footer>
    );
};


export default Footer;
