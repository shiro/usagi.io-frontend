import * as React from "react";
import cn from "classnames";

import css from "./BlogSite.module.scss";
import AboutMeSection from "@/AboutMeSection/AboutMeSection";
import Header from "@/Header/Header";
import DesignSection from "@/DesignSection/DesignSection";
import Footer from "@/Footer/Footer";
import ContactSection from "@/ContactSection/ContactSection";
import PortraitSection from "@/AboutMe/PortraitSection/PortraitSection";
import ProgrammingSection from "@/ProgrammingSection/ProgrammingSection";
import BlogPost from "@/BlogSite/BlogPost";


export interface IBlogSite {
}


const BlogSite: React.FC<IBlogSite> = (props) => {
    return (
        <div >
            <Header/>
            <BlogPost />
            <Footer />
        </div>
    );
};


export default BlogSite;
