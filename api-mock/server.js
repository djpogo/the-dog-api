const express = require('express');
const fs = require('fs');
const compression = require('compression');
const config = require('dotenv').config();

const app = express();

app.use(compression());
app.get('/', (req, res) => {
    fs.readFile('./mock/index.json', (err, data) => {
        if (err) {
            res.send('File not found, did you run `npm run prepare` ?');
        } else {
            res.contentType('index.json');
            res.send(data);
        }
        res.end();
    });
});

app.get('/images/:imagedId', (req, res) => {
    const fileName = req.params.imagedId.indexOf('.') > 0
        ? req.params.imagedId
        : `${req.params.imagedId}.json`;
    fs.readFile(`./mock/images/${fileName}`, (err, data) => {
        if (err) {
            res.send('File not found, did you run `npm run prepare` ?');
        } else {
            res.contentType(fileName);
            res.send(data);
        }
        res.end();
    });
});

app.listen(config.parsed.MOCK_API_PORT, () => {
    console.log(`dog api mock listening at ${config.parsed.MOCK_API_HOST}:${config.parsed.MOCK_API_PORT}`);
});