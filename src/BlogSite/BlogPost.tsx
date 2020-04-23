import * as React from "react";
import cn from "classnames";
import {Helmet} from "react-helmet-async"

// import body from "@/BlogSite/exampleBlogPost.md";

import css from "./BlogPost.module.scss";
import ReactMarkdown, {Renderer} from "react-markdown";
import {IBlogPost} from "@/generated/schema";
import {Link} from "react-router-dom";


export interface IBlogPostProps {
    blogPost: IBlogPost;
    linkTitle?: boolean;
    changePageTitle?: boolean;
}


const BlogPost: React.FC<IBlogPostProps> = (props) => {
    const {blogPost, linkTitle = true, changePageTitle = false} = props;

    let removedFirstHeading = false;
    const renderers: ReactMarkdown.Renderers = {
        paragraph: (props) => {
            const {children} = props;

            // rendering media without p wrapper
            if (children && children[0]
                && children.length === 1
                && children[0].props
                && children[0].props.src) {

                return children;
            }

            return (
                <p className={cn(css.paragraph)}>{props.children}</p>
            );
        },
        image: (props) => {
            return <figure className={cn(css.figure)}>
                <img className={cn(css.image)} alt="test image" src="/gallery/2019-01-05_08h05m13-0a472.jpg"/>
                <figcaption className={cn(css.caption)}>{props.alt}</figcaption>
            </figure>;
        },
        heading: (props) => {
            // remove first heading since it's rendered outside
            if (!removedFirstHeading) {
                removedFirstHeading = true;
                return < React.Fragment/>;
            }

            return (ReactMarkdown.renderers.heading as Renderer<any>)(props);
        },
        blockquote: (props) => {
            return <blockquote className={cn(css.blockQuote)}>{props.children}</blockquote>
        },
        code: ({language, value}) => {
            // remove date
            if (language === 'createdAt') {
                return < React.Fragment/>;
            }

            const code = <code className={cn({[`language-${language}`]: !!language})}>{value}</code>
            return <pre className={cn(css.codeContainer)}>{code}</pre>;
        }

    };

    return (
        <article className={cn(css.article)}>
            {changePageTitle &&
            <Helmet>
                <title>{blogPost.title} | usagi.io</title>
            </Helmet>}

            <time className={cn(css.time)} dateTime={blogPost.createdTime}>{blogPost.createdTime}</time>

            {linkTitle ?
                <Link className={cn(css.titleLink)} to={`/blog/${blogPost.id}`}>
                    <h1>{blogPost.title}</h1>
                </Link> :

                <h1>{blogPost.title}</h1>
            }

            <ReactMarkdown source={blogPost.body} escapeHtml={false} renderers={renderers}/>
        </article>
    );
};


export default BlogPost;
