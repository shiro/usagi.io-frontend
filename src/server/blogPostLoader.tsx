import * as fsSync from 'fs';
import {IBlogPost} from "@/generated/schema";
import {serverConfig} from "config/server.config";
import path from "path";

const fs = fsSync.promises;


type IBlogPostCacheEntry = {
    filePath: string;
    contents: IBlogPost;
}
const blogPostCache = {
    blogPosts: [] as IBlogPostCacheEntry[],
}

export const returnBlogPosts = (baseUrl?: string): IBlogPost[] => {
    return blogPostCache.blogPosts.map(e => e.contents);
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

        const raw = await fs.readFile(path.join(blogPostsDirPath, fileName));

        blogPostCache.blogPosts.push({contents: {body: raw.toString()}, filePath: fileName});
    }
}
