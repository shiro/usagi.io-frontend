import * as React from "react";
import cn from "classnames";

import css from "./Header.module.scss";
import {ReactComponent as Logo} from "logo.svg"


export interface IHeader {
}


const Header: React.FC<IHeader> = (props) => {
    return (
        <header className={cn(css.header)}>
            <Logo className={cn(css.logo)} />
            <nav className={cn(css.navigation)}>
                <a className={cn(css.navigationLink)} href="/">Me</a>
            </nav>
        </header>
    );
};


export default Header;
