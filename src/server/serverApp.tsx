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

const appRoot = serverConfig.path.root;

// create our app
const serverApp: express.Application = express();

serverApp.get('/playground', expressPlayground({endpoint: '/graphql'}))

// serve the static files from the React app
serverApp.use(express.static(path.join(appRoot, 'build')));

serverApp.use('/gallery', express.static(serverConfig.path.gallery));

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


const apolloServer = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
});
apolloServer.applyMiddleware({app: serverApp, path: '/graphql'});

export default serverApp;
