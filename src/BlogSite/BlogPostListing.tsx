import * as React from "react";
import cn from "classnames";

import css from "./BlogPostListing.module.scss";
import BlogPost from "@/BlogSite/BlogPost";
import {useGetAllBlogPostsQuery} from "@/generated/schema";


export interface IBlogPostListingProps {}


const BlogPostListing: React.FC<IBlogPostListingProps> = (props) => {
    const {loading, error, data} = useGetAllBlogPostsQuery();

    if (loading)
        return null;

    if (error)
        console.error(error);

    const posts = data?.posts;

    return (
        <div className={cn()}>
            {posts?.map((post, i) => {
                return (<React.Fragment key={i}>
                    <BlogPost blogPost={post}/>
                    {(i < posts.length - 1) ? <hr className={cn(css.separator)}/> : null}
                </React.Fragment>);
            })}
        </div>
    );
};


export default BlogPostListing;
