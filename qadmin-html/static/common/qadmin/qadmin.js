
/*!
 @Name: qadmin
 @Description：qadmin轻量后台模板
 @Homepage: www.qadmin.net
 @Author: 读心印
 @License：MIT
 */


;!function(win){
    "use strict";


    var Qadmin = function(){
        this.v = '1.3'; //版本号
        this.init = function () {
            layui.config({
                base: './static/common/qadmin/module/'
            }).use(["menu"],function (app) {
                console.log(app());
            });
        }
    }

    Qadmin.prototype.loader  = function (name,callback) {

        var apps = [];

        if(typeof name=='string'){
            apps.push(name);
        }


        var head = document.getElementsByTagName('head')[0]
        var node = document.createElement('script');




        node.async = true;
        node.charset = 'utf-8';
        node.src = './static/common/layui/layui.js';

        head.appendChild(node);

        if(node.attachEvent && !(node.attachEvent.toString && node.attachEvent.toString().indexOf('[native code') < 0) && !isOpera){
            node.attachEvent('onreadystatechange', function(e){
                onScriptLoad('layui');
            });
        } else {
            node.addEventListener('load', function(e){
                onScriptLoad('layui');
            }, false);
        }

    }



    win.Qadmin = new Qadmin();


}(window);





