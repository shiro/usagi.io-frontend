import * as React from "react";
import cn from "classnames";

import css from "./ContactSection.module.scss";
import SectionTitleComponent from "@/SectionTitleComponent/SectionTitleComponent";


export interface IContactSection {
}


const ContactSection: React.FC<IContactSection> = (props) => {
    return (
        <section className={cn(css.section)}>
            <SectionTitleComponent title="Contact" variant="dark"/>
            <p>
                shiro@usagi.io
            </p>
        </section>
    );
};


export default ContactSection;