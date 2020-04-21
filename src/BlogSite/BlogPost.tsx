import * as React from "react";
import cn from "classnames";

// import body from "@/BlogSite/exampleBlogPost.md";

import css from "./BlogPost.module.scss";
import ReactMarkdown from "react-markdown";
import {IBlogPost} from "@/generated/schema";


export interface IBlogPostProps {
    blogPost: IBlogPost;
}


const BlogPost: React.FC<IBlogPostProps> = (props) => {
    const {blogPost} = props;

    const renderers: ReactMarkdown.Renderers = {
        paragraph: (props) => {
            // console.log(props)
            const {children} = props;

            if (children && children[0]
                && children.length === 1
                && children[0].props
                && children[0].props.src) { // rendering media without p wrapper

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
        code: ({language, value}) => {
            if (language === 'createdAt') {
                return <time className={cn(css.time)} dateTime={value}>{value}</time>;
            }
            const className = language && `language-${language}`
            const code = React.createElement('code', className ? {className: className} : null, value)
            return React.createElement('pre', {}, code)
        }

    };

    return (
        <article className={cn(css.article)}>


            <ReactMarkdown source={blogPost.body} escapeHtml={false} renderers={renderers}/>

            {/*<time className={cn(css.time)} dateTime="2018-07-07">July 7</time>*/}

            {/*<h1>Visiting Kyoto's shrines</h1>*/}
            {/*<p className={cn(css.paragraph)}>*/}
            {/*    Today I took a walk around some of the most popular shrines in Kyoto.*/}
            {/*    The journey was full of fun, food, culture and much more!*/}
            {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat lorem sit amet mattis gravida. Etiam vel odio libero. Quisque dignissim felis non*/}
            {/*    purus congue pulvinar. Vivamus et arcu ut ex consectetur cursus vitae at erat.*/}
            {/*</p>*/}

            {/*<p className={cn(css.paragraph)}>*/}
            {/*    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi tempor leo tellus, auctor tempor nibh aliquam id.*/}
            {/*</p>*/}

            {/*<figure className={cn(css.figure)}>*/}
            {/*    <img className={cn(css.image)} alt="test image" src="/gallery/2019-01-05_08h05m13-0a472.jpg"/>*/}
            {/*    <figcaption className={cn(css.caption)}>A warm evening in Yokohama.</figcaption>*/}
            {/*</figure>*/}


        </article>
    );
};


export default BlogPost;
