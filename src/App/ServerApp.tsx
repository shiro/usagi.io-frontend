import React from 'react';
import App from '@/App/App';
import {ApolloClient} from "apollo-client";
import {createHttpLink} from "apollo-link-http";
import {ApolloProvider} from '@apollo/react-hooks';
import {StaticRouter as Router} from 'react-router-dom';

export const link = createHttpLink({
    uri: "/graphql"
});

export interface IServerAppProps {
    apolloClient: ApolloClient<any>
    url: string
}


const ServerApp: React.FC<IServerAppProps> = (props) => {
    const {apolloClient, url} = props;
    return (
        <ApolloProvider client={apolloClient}>
            <Router location={url}>
                <App/>
            </Router>
        </ApolloProvider>
    );
}


export default ServerApp;
