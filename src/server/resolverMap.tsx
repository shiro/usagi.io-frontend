import {IResolvers} from 'graphql-tools';
import {returnPictures} from "server/imageLoader";
import {IApolloContext} from "server/serverApp";
import {IBlogPost} from "@/generated/schema";
import {findBlogPosts, returnBlogPosts} from "server/blogPostLoader";

const shuffle = <T extends {}>(array: T[]): T[] => {
    let counter = array.length;

    // while there are elements in the array
    while (counter > 0) {
        // pick a random index
        let index = Math.floor(Math.random() * counter);

        // decrease counter by 1
        counter--;

        // and swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
};


export const resolverMap: IResolvers = {
    Query: {
        helloWorld(_: void, args: void): string {
            return `👋 Hello world! 👋`;
        },
        images(_: void, args: void, ctx: IApolloContext): any {
            return shuffle(returnPictures(ctx.baseUrl));
        },
        posts(_: void, args: void, ctx: IApolloContext): IBlogPost[] {
            return returnBlogPosts();
        },
        post(_: void, args: any, ctx: IApolloContext): IBlogPost | undefined {
            return findBlogPosts(args.id);
        }
    },
};
