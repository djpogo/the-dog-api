const { ImagePool } = require('@squoosh/lib');
const { cpus } = require('os');
const path = require('path');
const fs = require('fs');
const { error } = require('console');


function encodeImage(imagePath, imagePool) {
    return new Promise(async function(resolve, reject) {
        const image = imagePool.ingestImage(imagePath);
        try {
            await image.decoded;
            await image.encode({
                webp: {}
            });
            const rawEncodedImage = (await image.encodedWith.webp).binary;
            const webpImageName = `.${imagePath.split('.')[1]}.webp`;
            fs.writeFileSync(webpImageName, rawEncodedImage);
            // update json file
            fs.readFile(`.${imagePath.split('.')[1]}.json`, (err, data) => {
                if (err) {
                    throw err;
                } else {
                    const imageJson = JSON.parse(data);
                    imageJson.url = `${imageJson.url.split('.')[0]}.webp`;
                    fs.writeFileSync(`.${imagePath.split('.')[1]}.json`, JSON.stringify(imageJson));
                }
            })
        } catch (error) {
            console.log(error);
        } finally {
            resolve(true);
        }
    });
}

async function reencodeImages() {
    const imagePool = new ImagePool(cpus.length);
    const files = fs.readdirSync('./mock/images');
    const images = files
        .filter(file => path.extname(file) !== '.json');
    for (let i = 0; i < images.length; ++i) {
        await encodeImage(`./mock/images/${images[i]}`, imagePool);
    }
    await imagePool.close();
}

reencodeImages();