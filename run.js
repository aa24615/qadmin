

const fs = require('fs');
const path = require('path');


const fse = require('fs-extra')


const argv = process.argv;

let copiedPath = "./wap";
let resultPath = "./"+argv[2];

let date = new Date();
var version = date.getFullYear()+''+
    (date.getMonth()+1)+''+
    date.getDate()+'_'+
    date.getHours()+''+
    date.getMinutes()+''+
    date.getSeconds();//新版本号




let iframe_path = path.join(__dirname,'iframe_test');
let src_path = path.join(__dirname,'iframe_test');


copyFolder(src_path,iframe_path);

//
// getDir('./'+argv[2]);

console.log('全部完毕',"新版本号:"+version);

console.log("输出目录:",path.join(__dirname,iframe_path))


async function example(f,body) {
    try {
        await fse.outputFile(f, body)
    } catch (err) {
        console.error("遇到错误:",err)
    }
}

function copyFolder(copiedPath, resultPath) {



    resultPath = path.join(__dirname, resultPath)
    copiedPath = path.join(__dirname, copiedPath)

    if(fs.existsSync(resultPath)){
        fse.removeSync(resultPath)
    }

    fs.mkdirSync(resultPath);

    if (fs.existsSync(copiedPath)) {
        fse.copySync(copiedPath,resultPath)
    } else {
        console.log('这个目录不存在:', copiedPath);
    }
}


function getDir(dir='') {
    if(dir==""){
        console.log('请输入目录');
        return;
    }
    let files = fs.readdirSync(dir);
    files.forEach(function (item, index) {
        let fPath = path.join(dir,item);

        let stat = fs.statSync(fPath);
        if(stat.isDirectory() === true) {
            getDir(fPath);
        }
        if (stat.isFile() === true) {
            let ext = fPath.slice(-4);
            if(ext=='html'){

                let body = fs.readFileSync(fPath,'utf8');
                body = body.replace(/\{\{version\}\}/g,version);

                example(fPath,body);

                console.log("替换完成",fPath);
            }
        }
    });
}



