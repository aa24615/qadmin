
/*!
 @Name: qadmin
 @Description：qadmin轻量后台模板
 @Homepage: www.qadmin.net
 @Author: 读心印
 @License：MIT
 */



;!function(win){
    "use strict";

    var doc = document, config = {
            modules: {} //记录模块物理路径
            ,status: {} //记录模块加载状态
            ,timeout: 10 //符合规范的模块请求最长等待秒数
            ,event: {} //记录模块自定义事件
        }
        ,Qadmin = function(){
        this.v = '2.5.6'; //版本号
    }

    win.Qadmin = new Qadmin();

}(window);
