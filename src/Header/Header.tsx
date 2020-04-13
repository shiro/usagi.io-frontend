import * as React from "react";
import cn from "classnames";

import css from "./Header.module.scss";
// TODO unify assets
import {ReactComponent as Logo} from "@/logo.svg"
import {Link, NavLink} from "react-router-dom";


export interface IHeader {
}


const Header: React.FC<IHeader> = (props) => {
    return (
        <header className={cn(css.header)}>
            <Link className={cn(css.logoLink)} to="/">
                <Logo className={cn(css.logo)} />
            </Link>
            <nav className={cn(css.navigation)}>
                <NavLink className={cn(css.navigationLink)} activeClassName={cn(css.selected)} to="/me">Me</NavLink>
                <NavLink className={cn(css.navigationLink)} activeClassName={cn(css.selected)} to="/gallery">Gallery</NavLink>
            </nav>
        </header>
    );
};


export default Header;
