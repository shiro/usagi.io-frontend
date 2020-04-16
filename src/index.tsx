import React, {ReactElement} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import WrappedApp from '@/WrappedApp';
// import * as serviceWorker from '@/serviceWorker';


const renderApp = (app: ReactElement) => {
    const root = document.getElementById("root");

    // render or hydrate depending on SSR being enabled or not
    const method = root?.children.length === 0 ? ReactDOM.render : ReactDOM.hydrate;

    method.call(window, app as any, root);
};

window.onload = () => {
    renderApp(<WrappedApp/>);
};

if (module.hot) {
    module.hot.accept('@/WrappedApp', () => {
        const nextApp = require('@/WrappedApp');
        renderApp(nextApp);
    })
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
