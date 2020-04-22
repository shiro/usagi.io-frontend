import * as React from "react";
import { Helmet } from "react-helmet"
import cn from "classnames";
import {Switch, Route, Redirect} from "react-router-dom";
import css from "./BlogSite.module.scss";
import Header from "@/Header/Header";
import Footer from "@/Footer/Footer";
import BlogPostListing from "@/BlogSite/BlogPostListing";
import SpecificBlogPost from "@/BlogSite/SpecificBlogPost";

export interface IBlogSite {
}


const BlogSite: React.FC<IBlogSite> = (props) => {

    return (
        <div className={cn(css.container)}>
            <Helmet>
                <title>blog |  usagi.io</title>
            </Helmet>
            <Header variant="dark"/>
            <Switch>
                <Route path="/blog/:id" render={props => <SpecificBlogPost id={props.match.params.id}/>}/>
                <Route component={BlogPostListing}/>
            </Switch>
            <Footer variant="dark"/>
        </div>
    );
};


export default BlogSite;
