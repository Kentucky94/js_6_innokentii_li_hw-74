const express = require('express');

const port = 8080;

const messages = require('./App/messages');

const app = express();

app.use(express.json());

app.use('/messages', messages);

app.listen(port, () => {
  console.log('Check ' + port);
});