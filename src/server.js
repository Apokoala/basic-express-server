const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const validator = require('./middleware/validator')
const notFound = require('./error-handlers/404');
const serverError = require('./error-handlers/500');


app.get('/', logger, (req, res, next) => {
  res.status(200).send('Hello World!');
});

app.get('/person', validator, (req, res) => {
    res.status(200).send({ name: req.name });
  });
  app.use('*', notFound);
  app.use(serverError);

//Port is a secret in codespaces. Documentation for creating a secret in codespaces is here: 
//https://docs.github.com/en/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces
function start(){
    app.listen(process.env.PORT || 3002, () => console.log(`listening on ${process.env.PORT}`));
}

module.exports = { app, start };