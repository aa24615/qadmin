
/*!
 @Name: qadmin
 @Description：qadmin轻量后台模板
 @Homepage: www.qadmin.net
 @Author: 读心印
 @License：MIT
 */


;!function(win){
    "use strict";


    var head = document.getElementsByTagName('head')[0]
    var node = document.createElement('script');

    node.async = true;
    node.charset = 'utf-8';
    node.src = './static/common/layui/layui.js';

    head.appendChild(node);

    if(node.attachEvent && !(node.attachEvent.toString && node.attachEvent.toString().indexOf('[native code') < 0) && !isOpera){
        node.attachEvent('onreadystatechange', function(e){
            onScriptLoad();
        });
    } else {
        node.addEventListener('load', function(e){
            onScriptLoad();
        }, false);
    }

    function onScriptLoad(){
        var Qadmin = function(){
            this.v = '1.3'; //版本号
            this.init = function () {
                layui.config({
                    base: './static/common/qadmin/module/'
                }).use(["menu"],function (app) {
                    console.log(app());
                });
            }
            this.ready = function (a) {
                a();
            }
        }
        win.Qadmin = new Qadmin();
        win.Qadmin.init();
    }
}(window);





