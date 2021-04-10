const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const tools = require('../tools.js');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

const start = function() {
    const pathName = 'qadmin-iframe';

    tools.copyFolder('src/pages', 'dist/'+pathName);

    fse.copySync('src/iframe/index.html', 'dist/'+pathName+'/index.html');

    tools.copyFolder('src/static', 'dist/'+pathName+'/static');

    const dir = path.join(process.cwd(), 'dist/'+pathName+'/');
    const files = fs.readdirSync(dir);

    files.forEach(function(item, index) {
        const fPath = path.join(dir, item);

        const stat = fs.statSync(fPath);

        if (stat.isFile() === true) {
            const ext = fPath.slice(-4);
            if (ext=='html') {
                console.log(fPath);

                if (item!='index.html' && item!='login.html') {
                    let layout = fs.readFileSync(path.join(__dirname, 'layout.html'), 'utf8');

                    const html = fs.readFileSync(fPath, 'utf8');

                    const dom = new JSDOM(html);
                    const document = dom.window.document;
                    const title = document.querySelector('title').textContent || '';
                    const body = document.querySelector('body').innerHTML || '';

                    layout = layout.replace(/\{\{version\}\}/g, tools.newVersion());
                    layout = layout.replace(/\{\{title\}\}/g, title);
                    layout = layout.replace(/\{\{body\}\}/g, body);

                    tools.writeFile(fPath, layout);
                }
            }
        }
    });
};

module.exports.start = start;

