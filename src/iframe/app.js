const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const tools = require('../tools.js');
const jsdom = require("jsdom");
const {JSDOM} = jsdom;




const start = function () {

    let pathName = 'qadmin-iframe';

    tools.copyFolder('src/pages','dist/'+pathName);


    fse.copySync('src/iframe/index.html','dist/'+pathName+'/index.html');

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


                if(item!='index.html' && item!='login.html') {


                    let layout = fs.readFileSync(path.join(__dirname, 'layout.html'), 'utf8');

                    let html = fs.readFileSync(fPath, 'utf8');

                    let dom = new JSDOM(html);
                    let document = dom.window.document;
                    let title = document.querySelector('title').textContent || '';
                    let body = document.querySelector('body').innerHTML || '';


                    layout = layout.replace(/\{\{version\}\}/g, tools.newVersion());
                    layout = layout.replace(/\{\{title\}\}/g, title);
                    layout = layout.replace(/\{\{body\}\}/g, body);

                    tools.writeFile(fPath, layout);
                }
            }
        }
    });


}






module.exports.start = start;


