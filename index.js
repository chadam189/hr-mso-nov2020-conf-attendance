const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));

app.use('/ping', function (req, res, next) {
	res.send('pong');
});

app.listen(3301, function() {
    console.log('Started on PORT 3301');
});
