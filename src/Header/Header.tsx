import * as React from "react";
import cn from "classnames";

import css from "./Header.module.scss";
import {ReactComponent as Logo} from "logo.svg"
import { Link } from "react-router-dom";


export interface IHeader {
}


const Header: React.FC<IHeader> = (props) => {
    return (
        <header className={cn(css.header)}>
            <Link className={cn(css.logoLink)} to="/">
                <Logo className={cn(css.logo)} />
            </Link>
            <nav className={cn(css.navigation)}>
                <Link className={cn(css.navigationLink)} to="/">Me</Link>
            </nav>
        </header>
    );
};


export default Header;
