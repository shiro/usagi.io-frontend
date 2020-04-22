import React, {ReactElement} from 'react';
import ReactDOM from 'react-dom';
import ClientApp from '@/App/ClientApp';
import './clientEntrypoint.scss';


const renderApp = (app: ReactElement) => {
    const root = document.getElementById("root");

    // render or hydrate depending on SSR being enabled or not
    const method = root?.children.length === 0 ? ReactDOM.render : ReactDOM.hydrate;

    method.call(window, app as any, root);
};

window.onload = () => {
    renderApp(<ClientApp/>);
};

// not needed when using ReactRefreshWebpackPlugin
// keep the code something breaks, since it's quite unstable
// if (module.hot) {
//     module.hot.accept('@/WrappedApp', () => {
//         const nextApp = require('@/WrappedApp');
//         renderApp(nextApp);
//     })
// }
