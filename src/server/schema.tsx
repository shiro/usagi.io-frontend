// import 'graphql-import-node';
import typeDefs from "@/schema/gallery.graphql";
import {makeExecutableSchema} from '@graphql-tools/schema';
import {resolverMap} from 'server/resolverMap';
import {GraphQLSchema} from 'graphql';


const buildSchema = () : GraphQLSchema => (makeExecutableSchema({
        typeDefs,
        resolvers: resolverMap,
    })
);

export default buildSchema;
