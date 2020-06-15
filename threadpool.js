//process.env.UV_THREADPOOL_SIZE = 8;

const crypto = require('crypto');

const start = Date.now()

function doHash(){
    crypto.pbkdf2("a", "b", 100000, 512, 'sha512', () => {
        console.log("Hash:", Date.now() - start);
    })
}

doHash();
doHash();
doHash();
doHash();
doHash();
doHash();
doHash();