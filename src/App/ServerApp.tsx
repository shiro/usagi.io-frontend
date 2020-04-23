import React from 'react';
import App from '@/App/App';
import {ApolloClient} from "apollo-client";
import {createHttpLink} from "apollo-link-http";
import {ApolloProvider} from '@apollo/react-hooks';
import {StaticRouter as Router} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';

export const link = createHttpLink({
    uri: "/graphql"
});

export interface IServerAppProps {
    apolloClient: ApolloClient<any>
    url: string;
    helmetContext: {};
}


const ServerApp: React.FC<IServerAppProps> = (props) => {
    const {apolloClient, url, helmetContext} = props;
    return (
        <ApolloProvider client={apolloClient}>
            <HelmetProvider context={helmetContext}>
                <Router location={url}>
                    <App/>
                </Router>
            </HelmetProvider>
        </ApolloProvider>
    );
}


export default ServerApp;
