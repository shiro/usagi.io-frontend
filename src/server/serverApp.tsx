import {default as express} from "express";
import path from "path";
import bodyParser from "body-parser";
import {ApolloServer, gql} from "apollo-server-express";
import compression from 'compression';
import helmet from "helmet";
import expressPlayground from "graphql-playground-middleware-express";
import depthLimit from 'graphql-depth-limit';
import {serverConfig} from "config/server.config"
import schema from "server/schema";
import {indexImagePass} from "server/imageLoader";

const appRoot = serverConfig.path.root;

// create our app
const serverApp: express.Application = express();

// set cache headers on static resources
{
    const cacheTimeSeconds = 60 * 60 * 24 * 7;
    serverApp.get([
            /\/assets\/resources\/static\/.+/,
            /\/gallery\/.+/,
        ],
        (req, res, next) => {
            res.setHeader("Cache-Control", `public, max-age=${cacheTimeSeconds}`);
            next();
        });
}

// serve the static files from the React app
serverApp.use(express.static(path.join(appRoot, 'build')));

// grahpl testing environment
if (process.env.NODE_ENV !== "production")
    serverApp.get('/playground', expressPlayground({endpoint: '/graphql'}))

// serve gallery
serverApp.use('/gallery', express.static(serverConfig.path.pictureCache));
serverApp.use('/gallery/thumb', express.static(serverConfig.path.thumbnailCache));


// catch all other requests
serverApp.get('*', (req: express.Request, res: express.Response) => {
    res.sendFile("build/index.html", {root: appRoot});
});



// todo improve error handling
serverApp.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

serverApp.use(compression());
serverApp.use(helmet())

serverApp.use('/graphql', bodyParser.json());


export interface IApolloContext {
    baseUrl: string;
}

const apolloServer = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
    context: ({req}) => {
        const protocol = +process.env.FORCE_HTTPS === 1 ? "https" : req.protocol;
        const baseUrl = protocol + '://' + req.get('Host');
        return {baseUrl};
    }
});
apolloServer.applyMiddleware({app: serverApp, path: '/graphql'});


// background image indexer
const indexPassDelay = 1000 * 20;

const performIndexPass = async () => {
    await indexImagePass();
    scheudleIndexPass();
};

const scheudleIndexPass = () =>
    setTimeout(async () => {
        await performIndexPass();
    }, indexPassDelay);

performIndexPass().finally();


export default serverApp;
