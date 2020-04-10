import * as React from "react";
import cn from "classnames";

import css from "./Header.module.scss";


export interface IHeader {
}


const Header: React.FC<IHeader> = (props) => {
    return (
        <header className={cn(css.header)}>
            <img className={cn(css.logo)} src="/resources/logo.svg" alt="logo"/>
            <nav className={cn(css.navigation)}>
                <a className={cn(css.navigationLink)} href="#">Me</a>
            </nav>
        </header>
    );
};


export default Header;
