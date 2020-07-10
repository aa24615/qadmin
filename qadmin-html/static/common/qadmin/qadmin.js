
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
            console.log('加载网成...')
        });
    } else {
        node.addEventListener('load', function(e){
            console.log('加截中...')
        }, false);
    }



    var Qadmin = function(){
        this.v = '1.3'; //版本号
    }


    win.Qadmin = new Qadmin();

}(window);
