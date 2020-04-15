import React, {ReactElement} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from '@/App';
import { ApolloProvider } from '@apollo/react-hooks';
import {ApolloClient} from "apollo-client";
// import * as serviceWorker from '@/serviceWorker';
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";



export const link = createHttpLink({
    uri: "/graphql"
});
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});

const renderApp = (app: ReactElement) => {
    const root = document.getElementById("root");

    // render or hydrate depending on SSR being enabled or not
    const method = root?.children.length === 0 ? ReactDOM.render : ReactDOM.hydrate;

    const wrappedApp =
        <React.StrictMode>
            <ApolloProvider client={client}>
            {app}
            </ApolloProvider>
        </React.StrictMode>;

    method.call(window, wrappedApp as any, root);
};

window.onload = () => {
    renderApp(<App/>);
};

if (module.hot){
    module.hot.accept('@/App', () => {
        const nextApp = require('@/App').default
        renderApp(nextApp);
    })
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
