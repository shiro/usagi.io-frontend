import "config/loadEnvironment.js";
import http from "http";

// TODO move this in an init script
// prepare fetch global
const fetch = require('node-fetch');
if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}

let currentApp = require("server/serverApp").default;
const server = http.createServer(currentApp);

const port = process.env.NODE_ENV === "production" ? process.env.PORT : process.env.DEV_PORT;

server.listen(port);
console.log(`server started on port ${port}`);

if (module.hot) {
    console.log("hot reloading is enabled");

    module.hot.accept("server/serverApp", () => {
        console.log("hot reloading server...");

        const newApp = require("server/serverApp").default;

        server.removeListener("request", currentApp as any);
        server.on("request", newApp as any);
        currentApp = newApp;
    });
}
