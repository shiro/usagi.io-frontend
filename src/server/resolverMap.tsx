import {IResolvers} from 'graphql-tools';
import {serverConfig} from "config/server.config";
import {loadImages} from "server/imageLoader";

const appRoot = serverConfig.path.root;

export const resolverMap: IResolvers = {
    Query: {
        helloWorld(_: void, args: void): string {
            return `👋 Hello world! 👋`;
        },
        images(_: void, args: void): any {
            const images = loadImages();

            return images;
        }
    },
};
