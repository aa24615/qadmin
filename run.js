


var fs = require('fs');
var path = require('path');


let dir = './qadmin-html';

let files = fs.readdirSync(dir);
files.forEach(function (item, index) {

    console.log('http://demo.qadmin.net/'+item);
})
