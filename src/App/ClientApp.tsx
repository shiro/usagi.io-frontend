import React from 'react';
import App from '@/App/App';
import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";
import {createHttpLink} from "apollo-link-http";
import {ApolloProvider} from '@apollo/react-hooks';
import {BrowserRouter as Router} from "react-router-dom";

export const link = createHttpLink({
    uri: "/graphql"
});

let cache  = new InMemoryCache();

if (window.__APOLLO_STATE__)
    cache.restore(window.__APOLLO_STATE__);

const client = new ApolloClient({
    cache,
    link,
});


const ClientApp: React.FC<any> = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <App/>
            </Router>
        </ApolloProvider>
    );
}


export default ClientApp;
