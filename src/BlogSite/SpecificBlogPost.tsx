import * as React from "react";
import cn from "classnames";
import {Link} from "react-router-dom";
import css from "./SpecificBlogPost.module.scss";
import {useQuery} from "@apollo/react-hooks";
import {GetBlogPostByIdDocument, IGetBlogPostByIdQuery} from "@/generated/schema";
import BlogPost from "@/BlogSite/BlogPost";


export interface ISpecificBlogPostProps {
    id: string;
}


const SpecificBlogPost: React.FC<ISpecificBlogPostProps> = (props) => {
    const {id} = props;

    const {loading, error, data} = useQuery(GetBlogPostByIdDocument, {variables: {id}});

    if (loading)
        return null;

    if (error)
        console.error(error);

    const post = data.post;


    return (
        <div className={cn()}>
            <Link className={cn(css.backButton)} to="/blog">Back to all posts</Link>

            <BlogPost blogPost={post} linkTitle={false} changePageTitle />
        </div>
    );
};


export default SpecificBlogPost;
