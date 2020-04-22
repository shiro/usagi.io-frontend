import * as fsSync from 'fs';
import {IBlogPost} from "@/generated/schema";
import {serverConfig} from "config/server.config";
import path from "path";
import marked from "marked";
import { customErrorFactory} from 'ts-custom-error'
import slugify from "slugify";

const fs = fsSync.promises;


export const BlogMetaNotFoundError = customErrorFactory((fieldName :string, fileName: string) => {
    this.message = `meta '${fieldName}' not found in file '${fileName}'`;
})



type IBlogPostCacheEntry = {
    filePath: string;
    contents: IBlogPost;
}
const blogPostCache = {
    blogPosts: [] as IBlogPostCacheEntry[],
}

export const returnBlogPosts = (): IBlogPost[] => {
    return blogPostCache.blogPosts.map(e => e.contents);
}

export const findBlogPosts = (id: string): IBlogPost | undefined => {
    return blogPostCache.blogPosts
        .map(e => e.contents)
        .find(p => p.id === id);
}

export const indexBlogPostPass = async (baseUrl?: string) => {
    const blogPostsDirPath = serverConfig.path.blog;

    if (!fsSync.existsSync(blogPostsDirPath)) {
        await fs.mkdir(blogPostsDirPath, {recursive: true});
        console.warn(`warn: blog folder did not exist: ${blogPostsDirPath}, but was created now`);
    }

    const blogPostPaths = await fs.readdir(blogPostsDirPath);

    for (const fileName of blogPostPaths) {
        if (blogPostCache.blogPosts.map(e => e.filePath).includes(fileName))
            continue;

        const raw = (await fs.readFile(path.join(blogPostsDirPath, fileName))).toString();

        const tokens = marked.lexer(raw);
        const createdTime = tokens.find((t) => t.lang === "createdAt")?.text;
        const title = tokens.find((t) => t.type === "heading" && t.depth === 1)?.text;

        !createdTime && BlogMetaNotFoundError("createdTime", fileName);
        !title && BlogMetaNotFoundError("title", fileName);

        blogPostCache.blogPosts.push({
            contents: {
                id: slugify(path.parse(title).name),
                title,
                createdTime,
                body: raw,
            },
            filePath: fileName
        });
    }
}
