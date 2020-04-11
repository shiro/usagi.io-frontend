import * as React from "react";
import cn from "classnames";

import css from "./Header.module.scss";
// import logo from "logo.svg"
import {ReactComponent as Logo} from "logo.svg"


export interface IHeader {
}


const Header: React.FC<IHeader> = (props) => {
    return (
        <header className={cn(css.header)}>
            {/*<img className={cn(css.logo)} src="/resources/logo.svg" alt="logo"/>*/}
            {/*<img className={cn(css.logo)} src={logo} alt="logo"/>*/}
            <Logo className={cn(css.logo)} />
            <nav className={cn(css.navigation)}>
                <a className={cn(css.navigationLink)} href="/">Me</a>
            </nav>
        </header>
    );
};


export default Header;
