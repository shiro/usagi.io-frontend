import React from 'react';
import App from '@/App';
import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";
import {createHttpLink} from "apollo-link-http";
import {ApolloProvider} from '@apollo/react-hooks';

export const link = createHttpLink({
    uri: "/graphql"
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});


const WrappedApp: React.FC<any> = () => {
    return (
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    );
}


export default WrappedApp;
