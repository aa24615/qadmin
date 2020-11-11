

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


const writeFile = async function(f,body) {
    try {
        await fse.outputFile(f, body)
    } catch (err) {
        console.error("遇到错误:",err)
    }
}

const newVersion = function(){
    let date = new Date();
    var version = date.getFullYear()+''+
        (date.getMonth()+1)+''+
        date.getDate()+'_'+
        date.getHours()+''+
        date.getMinutes()+''+
        date.getSeconds();//新版本号

    return version;
}




module.exports.copyFolder = copyFolder;
module.exports.writeFile = writeFile;
module.exports.newVersion = newVersion;
