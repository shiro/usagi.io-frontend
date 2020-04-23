import React from "react";
import {getMarkupFromTree} from '@apollo/react-ssr';
import path from "path";
import {renderToString} from 'react-dom/server';
import ApolloClient from "apollo-client";
import {HttpLink, InMemoryCache} from "apollo-boost";
import ServerApp from "@/App/ServerApp";
import fetch from "node-fetch";
import {ChunkExtractor} from "@loadable/server";
import * as fsSync from 'fs';
import {serverConfig} from "config/server.config";
import {Response, Request} from "express";

const fs = fsSync.promises;

const appRoot = serverConfig.path.root;


export const renderSSRPage = async (req: Request, res: Response) => {
    try {
        const client = new ApolloClient({
            link: new HttpLink({
                uri: 'http://localhost:3000/graphql',
                fetch: fetch as any,
            }),
            cache: new InMemoryCache(),
            ssrMode: true,
        });

        const url = req.originalUrl;
        const app = <ServerApp url={url} apolloClient={client}/>;

        const statsFile = path.join(serverConfig.path.assets, serverConfig.files.loadableComponentsManifest);

        const extractor = new ChunkExtractor({statsFile})

        const markup = await getMarkupFromTree({
            tree: extractor.collectChunks(app),
            renderFunction: renderToString
        });

        const style = extractor.getStyleTags() + extractor.getScriptTags() + extractor.getLinkTags();

        const initialState = client.extract();
        const apolloScript = `<script> window.__APOLLO_STATE__ = ${JSON.stringify(initialState)}; </script> `;

        const templatePath = path.join(appRoot, "public/index.html");
        let page = await fs.readFile(templatePath, "utf8");

        page = page
            .replace("<!-- app -->", markup)
            .replace("<!-- head -->", "" + apolloScript + style);

        res.send(page);
    } catch (e) {
        // TODO handle errors
        console.error(e);
        res.send("error loading page");
    }
}