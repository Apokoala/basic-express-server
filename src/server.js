const express = require('express');

const logger = require('./middleware/logger');

const notFound = require('./error-handlers/404');



const { foodRoutes } = require('./routes/food.route');

const errorHandler = require('./error-handlers/500');


const server = express();
const PORT = process.env.PORT || 3002
server.use(logger);
server.use(express.json());


server.use(foodRoutes);



server.use('*', notFound)

server.use(errorHandler)
//Port is a secret in codespaces. Documentation for creating a secret in codespaces is here: 
//https://docs.github.com/en/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces

function start() {
  server.listen(process.env.PORT || 3002, () => console.log("listening"));
}

module.exports = {
  server,
  start
};