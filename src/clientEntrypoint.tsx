import React, {ReactElement} from 'react';
import ReactDOM from 'react-dom';
import ClientApp from '@/App/ClientApp';
import './clientEntrypoint.scss';
import {loadableReady} from '@loadable/component';
import {polyfillLoader} from 'polyfill-io-feature-detection';

const renderApp = (app: ReactElement) => {
    const root = document.getElementById("root");

    // render or hydrate depending on SSR being enabled or not
    const method = root?.children.length === 0 ? ReactDOM.render : ReactDOM.hydrate;

    method.call(window, app as any, root);
};

const loadApp = () =>
    loadableReady(() => {
        renderApp(<ClientApp/>);
    });


// This function load polyfills only if needed. By default it uses polyfill.io
polyfillLoader({
    "features": "Promise,fetch,ResizeObserver,Array.prototype.includes",
    "onCompleted": loadApp
});
