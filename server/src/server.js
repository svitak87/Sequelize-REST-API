const express = require("express");
const morgan = require("morgan");
const server = express();
const generalRoutes = require("./routes/indexRoutes");

//MIDDLEWARES:

server.use(morgan("dev"));
server.use(express.json());

//ROUTES:

server.use("/api", generalRoutes);

module.exports = server;
