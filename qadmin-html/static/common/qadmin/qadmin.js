
/*!
 @Name: qadmin
 @Description：qadmin轻量后台模板
 @Homepage: www.qadmin.net
 @Author: 读心印
 @License：MIT
 */

config = {
    webname:"Qadmin2"
}

;!function(win){
    "use strict";


    var Qadmin = function(){
        this.v = '1.3'; //版本号
        this.config = config;
    }


    layui.config({
        base: './static/common/vue/' //你存放新模块的目录，注意，不是layui的模块目录
    }).use(['vue.min'],function () {


    });

    layui.config({
        base: './static/common/qadmin/module/' //你存放新模块的目录，注意，不是layui的模块目录
    }).use(['init','msgs','errors','data'],function () {
        layui.qadmin_config = config;
        Qadmin.prototype.errors = layui.errors;
        Qadmin.prototype.menu = layui.menu();
        Qadmin.prototype.msgs = layui.msgs;
        Qadmin.prototype.msg = layui.msg;
        Qadmin.prototype.success = layui.success;
        Qadmin.prototype.error = layui.error;
        Qadmin.prototype.data = layui.data;

        Qadmin.prototype.layer = layui.layer;

        Qadmin.prototype.$ = layui.jquery;
        Qadmin.prototype.jquery = layui.jquery;
        win.jquery = layui.jquery;
        win.$ = layui.jquery;
    });



    Qadmin.prototype.ready = function(callback){
        layui.use('layer',function () {

            Qadmin.prototype.errors = layui.errors;
            Qadmin.prototype.menu = layui.menu();
            Qadmin.prototype.msgs = layui.msgs;
            Qadmin.prototype.msg = layui.msg;
            Qadmin.prototype.success = layui.success;
            Qadmin.prototype.error = layui.error;
            Qadmin.prototype.data = layui.data;

            Qadmin.prototype.layer = layui.layer;

            Qadmin.prototype.$ = layui.jquery;
            Qadmin.prototype.jquery = layui.jquery;
            win.jquery = layui.jquery;
            win.$ = layui.jquery;
            callback(this);
        });
    }

    win.Qadmin = new Qadmin();


}(window);





