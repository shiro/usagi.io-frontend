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
import {useQuery} from "@apollo/react-hooks";
import {GetAllBlogPostsDocument, IBlogPost} from "@/generated/schema";


export interface IBlogSite {
}


const BlogSite: React.FC<IBlogSite> = (props) => {
    const {loading, error, data} = useQuery<>(GetAllBlogPostsDocument);

    if(loading)
        return null;

    if (error)
        console.error(error);

    const posts = data.posts;

    return (
        <div className={cn(css.container)}>
            <Header variant="dark"/>
            {posts.map((post, i) => {
                return (<React.Fragment key={i}>
                    <BlogPost blogPost={post}/>
                    {(i < posts.length - 1) ? <hr className={cn(css.separator)} /> : null}
                </React.Fragment>);
            })}
            <Footer variant="dark"/>
        </div>
    );
};


export default BlogSite;
