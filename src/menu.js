const config = require('./src/static/admin/js/config.js');



const log = function (text) {
    // console.log("http://demo.qadmin.net/"+text);
    console.log("http://iframe.qadmin.net/"+text);
}


for( val of config.menu){

    if(val.url){
        log(val.url);
    }
    if(val.list){
        for(val2 of val.list){
            if(val2.url){
                log(val2.url);
            }
        }
    }

}
