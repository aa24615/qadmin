
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
    }

    layui.config({
        base: './static/common/qadmin/module/' //你存放新模块的目录，注意，不是layui的模块目录
    }).use(['menu','msg'],function (res) {
        Qadmin.prototype.menu = res;

        console.log(res);
    });



    layui.use(['form']);

    win.Qadmin = new Qadmin();


}(window);





