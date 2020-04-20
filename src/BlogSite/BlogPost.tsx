import * as React from "react";
import cn from "classnames";

import css from "./BlogPost.module.scss";


export interface IBlogPost {
}


const BlogPost: React.FC<IBlogPost> = (props) => {
    return (
        <article className={cn(css.article)}>
            <time className={cn(css.time)} dateTime="2018-07-07">July 7</time>

            <h1>Visiting Kyoto's shrines</h1>
            <p className={cn(css.paragraph)}>
                Today I took a walk around some of the most popular shrines in Kyoto.
                The journey was full of fun, food, culture and much more!
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat lorem sit amet mattis gravida. Etiam vel odio libero. Quisque dignissim felis non
                purus congue pulvinar. Vivamus et arcu ut ex consectetur cursus vitae at erat.
            </p>

            <p className={cn(css.paragraph)}>
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi tempor leo tellus, auctor tempor nibh aliquam id.
            </p>

            <figure className={cn(css.figure)}>
                <img className={cn(css.image)} alt="test image" src="/gallery/2019-01-05_08h05m13-0a472.jpg"/>
                <figcaption className={cn(css.caption)}>A warm evening in Yokohama.</figcaption>
            </figure>


        </article>
    );
};


export default BlogPost;
