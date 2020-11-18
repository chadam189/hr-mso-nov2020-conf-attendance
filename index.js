const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes.js');

const app = express();
app.use(bodyParser.json());

// get routes
app.use('/api', router);

// test if server is up
app.use('/ping', (req, res, next) => res.send('pong'));

// send 404 for all other requests
app.use((req, res) => res.status(404).json('Path not found'));


app.listen(3301, () => {
  console.log('Started on PORT 3301');
});
