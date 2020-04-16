import http from "http";


let currentApp = require("server/serverApp").default;
const server = http.createServer(currentApp);

server.listen(3000);
console.log("server started");

if (module.hot) {
    console.log("hot reloading is enabled");

    module.hot.accept("server/serverApp", () => {
        console.log("hot reloading server...");

        const newApp = require("server/serverApp").default;

        server.removeListener("request", currentApp);
        server.on("request", newApp);
        currentApp = newApp;
    });
}
