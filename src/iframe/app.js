const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const tools = require('../../tools.js');







const start = function () {

    let pathName = 'ifname_test';

    tools.copyFolder('src/html','dist/'+pathName);
    tools.copyFolder('src/static','dist/'+pathName+'/static');

    let dir = path.join(process.cwd(),'dist/'+pathName+'/')
    let files = fs.readdirSync(dir);
    files.forEach(function (item, index) {
        let fPath = path.join(dir,item);

        let stat = fs.statSync(fPath);

        if (stat.isFile() === true) {
            let ext = fPath.slice(-4);
            if(ext=='html'){
                console.log(fPath);

                let body = fs.readFileSync(fPath,'utf8');
                body = body.replace(/\{\{version\}\}/g,tools.newVersion());
                tools.writeFile(fPath,body);
                console.log("替换完成",fPath);
            }
        }
    });
}






module.exports.start = start;


