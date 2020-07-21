layui.define('msgs', function(exports) {


    var debug = true;
    exports('errors', function (text) {
        console.error(text);
        if(debug){
            // alert(text);
            layui.error(text)
        }
    })
})
