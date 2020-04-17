import http from "http";


let currentApp = require("server/serverApp").default;
const server = http.createServer(currentApp);

server.listen(process.env.PORT);
console.log(`server started on port ${process.env.PORT}`);

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
