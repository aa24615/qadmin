





layui.define('layer', function(exports){

    var layer = layui.layer;

    exports('msgs', function (code=1,msg='',url='',s=1) {
        if(typeof code == 'object') { //作为对象传入
            msg = code.msg;
            url = code.url || '';
            s = code.s || 1;
            code = code.code;
        }
        code = code==1 ? 1 : 2;
        layer.msg(msg, {icon: code,offset: 't',shade: [0.4, '#000']});
        if(url){
            setTimeout(function () {
                window.location.href = url;
            },s*1000);
        }
    });

})




layui.define('layer', function(exports){

    var layer = layui.layer;

    exports('msg', function (msg='') {
        layer.msg(msg, ()=>{});
    });

})


layui.define('layer', function(exports){

    var layer = layui.layer;

    exports('success', function (msg='') {
        layui.msgs(1,msg);
    });

})

layui.define('layer', function(exports){

    var layer = layui.layer;

    exports('error', function (msg='') {
        layui.msgs(0,msg);
    });

})
