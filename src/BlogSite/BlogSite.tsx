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

    if (loading || error)
        return null;

    const posts = data.posts;

    if (!posts.length)
        return <span>No data</span>


    return (
        <div >
            <Header/>
            {posts.map((post, i) =>
                <BlogPost blogPost={post} key={i} />
            )}
            <Footer />
        </div>
    );
};


export default BlogSite;
