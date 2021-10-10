const https = require('https');
const fs = require('fs');
const config = require('dotenv').config();
const rimraf = require('rimraf');
const path = require('path');

const MOCK_API_URL = `${config.parsed.MOCK_API_HOST}${config.parsed.MOCK_API_PORT ? ':' : ''}${config.parsed.MOCK_API_PORT}`;

function storeImage(imageId) {
    https.get(`${config.parsed.API_URL}${imageId}`, (res) => {
        let jsonData = [];
        res.on('data', (data) => {
            jsonData.push(data);
        });
        res.on('end', () => {
            const image = JSON.parse(jsonData.join(''));
            https.get(image.url, (res) => {
                let imageData = [];
                res.on('data', (data) => {
                    imageData.push(data);
                });
                res.on('end', async () => {
                    const data = Buffer.concat(imageData);
                    fs.open(`./mock/images/${image.id}${path.extname(image.url)}`, 'w' , (err, fd) => {
                        fs.writeFileSync(fd, data);
                        fs.closeSync(fd);
                    });
                });
            });
            image.url = `${MOCK_API_URL}/images/${image.id}${path.extname(image.url)}`;
            fs.open(`./mock/images/${imageId}.json`, 'w', (err, fd) => {
                fs.writeFileSync(fd, JSON.stringify(image));
                fs.closeSync(fd);
            });
        });
    });
}

function clearMockData() {
    rimraf.sync('./mock');
    fs.mkdirSync('./mock');
    fs.mkdirSync('./mock/images');
}

function fetchIndexJson() {
    https.get(`${config.parsed.API_URL}${config.parsed.API_INDEX_PATH}`, (res) => {
        let jsonData = [];
        res.on('data', (data) => {
            jsonData.push(data);
        });

        res.on('end', () => {
            const json = JSON.parse(jsonData.join(''));
            json.forEach(image => {
                storeImage(image.id);
                image.url = `${MOCK_API_URL}/images/${image.id}${path.extname(image.url)}`;
            });
            fs.open('./mock/index.json', 'w', (err, fd) => {
                fs.writeFileSync(fd, JSON.stringify(json));
                fs.closeSync(fd);
            });
        });
    });
}

clearMockData();
fetchIndexJson();