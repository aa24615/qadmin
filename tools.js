

const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');


const copyFolder = function(copiedPath, resultPath) {


    resultPath = path.join(process.cwd(), resultPath);
    copiedPath = path.join(process.cwd(), copiedPath);

    if(fs.existsSync(resultPath)){
        fse.removeSync(resultPath)
    }

    fs.mkdirSync(resultPath);

    if (fs.existsSync(copiedPath)) {
        fse.copySync(copiedPath,resultPath);
    } else {
        console.log('这个目录不存在:', copiedPath);
    }
}


module.exports.copyFolder = copyFolder;
