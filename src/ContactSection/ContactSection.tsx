import * as React from "react";
import cn from "classnames";
import theme from "config/theme.js";

import css from "./ContactSection.module.scss";
import SectionTitleComponent from "@/SectionTitleComponent/SectionTitleComponent";
import {ReactComponent as MailIcon} from "assets/resources/static/icons/mail-icon.svg";
import {ReactComponent as GitIcon} from "assets/resources/static/icons/git-icon.svg";


export interface IContactSection {
}


const ContactSection: React.FC<IContactSection> = (props) => {
    return (
        <section className={cn(css.section)}>
            <SectionTitleComponent title="Contact" color={theme.colors.red}/>

            <div className={cn(css.rowContainer)}>

            <p className={cn(css.row)}>
                <MailIcon className={cn(css.icon)} />
                shiro@usagi.io
            </p>
            <p className={cn(css.row)}>
                <GitIcon className={cn(css.icon)} />
                <a href="https://github.com/shiro" target="_blank"><i className={cn(css.sideText)}>github.com/</i>shiro</a>
            </p>
            </div>
        </section>
    );
};


export default ContactSection;