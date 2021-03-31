const fse = require('fs-extra');

const iframe = require('./src/iframe/app.js');
const html = require('./src/html/app.js');


fse.removeSync('dist');

fse.mkdirpSync('dist');


iframe.start();
html.start();



