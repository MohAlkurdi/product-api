const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("product.json");
const middlewares = jsonServer.defaults();
const port = process.env.port || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
