import {IResolvers} from 'graphql-tools';
import {returnPictures} from "server/imageLoader";
import {IApolloContext} from "server/serverApp";

export const resolverMap: IResolvers = {
    Query: {
        helloWorld(_: void, args: void): string {
            return `👋 Hello world! 👋`;
        },
        images(_: void, args: void, ctx: IApolloContext): any {
            return returnPictures(ctx.baseUrl);
        }
    },
};
