import * as React from "react";
import cn from "classnames";

import css from "./Header.module.scss";
// TODO unify assets
import {Link, NavLink} from "react-router-dom";
import {ReactComponent as Logo} from "assets/resources/static/logo.svg";


export interface IHeader {
    variant?: "light" | "dark";
}


const Header: React.FC<IHeader> = (props) => {
    const {variant = "light"} = props;

    return (
        <header className={cn(css.header)}>
            <Link className={cn(css.logoLink)} to="/">
                {/*<img className={cn(css.logo, css[variant])} src="/assets/resources/static/logo.svg" alt="usagi.io logo"/>*/}
                <Logo className={cn(css.logo, css[variant])} viewBox="0 0 60 94.564"  preserveAspectRatio="xMidYMid meet"/>
            </Link>
            <nav className={cn(css.navigation)}>
                <NavLink className={cn(css.navigationLink, css[variant])} activeClassName={cn(css.selected)} to="/me">Me</NavLink>
                <NavLink className={cn(css.navigationLink, css[variant])} activeClassName={cn(css.selected)} to="/gallery">Gallery</NavLink>
                <NavLink className={cn(css.navigationLink, css[variant])} activeClassName={cn(css.selected)} to="/blog">Blog</NavLink>
            </nav>
        </header>
    );
};


export default Header;
