// import 'graphql-import-node';
import typeDefs from "@/schema/gallery.graphql";
import {makeExecutableSchema} from 'graphql-tools';
import {resolverMap} from 'server/resolverMap';
import {GraphQLSchema} from 'graphql';

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers: resolverMap,
});
export default schema;
