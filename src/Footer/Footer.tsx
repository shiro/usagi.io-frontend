import * as React from "react";
import cn from "classnames";

import css from "./Footer.module.scss";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export interface IFooterProps {
    variant?: "dark" |"light";
}


const Footer: React.FC<IFooterProps> = (props) => {
    const {variant = "light"} = props;

    return (
        <footer className={cn(css.section, css[variant])}>
            <a className={cn(css[variant])}
                href="https://github.com/shiro/usagi.io-frontend" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub}/> Read my source code!
            </a>
        </footer>
    );
};


export default Footer;
