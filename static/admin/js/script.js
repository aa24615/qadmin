
layui.use('form', function () {
    var form = layui.form,
        layer = layui.layer;
});

var vue = new Vue({
    el:'#app',
    data:{
        webname:webname,
        menu:[],
        addr:[]
    },
    created:function(){

        //左侧菜单
        let data = sessionStorage.menu;
        if(!data){
            sessionStorage.menu = JSON.stringify(menu);
            this.menu = menu;
        }else{
            this.menu = JSON.parse(data);
        }

        //当前位置
        let addr = [{
            name:'首页',
            url:'index.html'
        }];
        this.menu.forEach((v,k)=>{
            v.list.forEach((v2,k2)=>{
                if(v2.active){
                    addr.push({
                        name:v.name,
                        url:'javascript:;'
                    })
                    addr.push({
                        name:v2.name,
                        url:v2.url,
                    })
                    this.addr = addr;
                }
            })
        })
    },
    methods:{
        //记住收展 记住当前
        onActive:function (pid,id=false) {
            var data;

            this.menu.forEach((v,k)=>{
                v.active = false;
                v.list.forEach((v2,k2)=>{
                    v2.active = false;
                })
            })

            if(id===false){
                data = this.menu[pid];
                data.active = true;
                data.hidden = !data.hidden;
            }else{
                data = this.menu[pid].list[id];
                data.active = true;
            }
            this.updateStorage();
            if(data.url.length>0){
                window.location.href = data.url;
            }
        },
        //更新存储
        updateStorage(){
            sessionStorage.menu = JSON.stringify(this.menu);
        }
    }
})


$(document).ready(function() {
    //删除
    $(".del").click(function () {
        var url = $(this).attr("href");
        var id = $(this).attr("data-id");

        layer.confirm('你确定要删除么?', {
            btn: ['确定', '取消'] //按钮
        }, function () {
            $.get(url, function (data) {
                if (data.code == 1) {
                    $(id).fadeOut();
                    layer.msg(data.msg, {icon: 1});
                } else {
                    layer.msg(data.msg, {icon: 2});
                }
            });
        }, function () {
            layer.msg("您取消了删除!");
        });
        return false;
    });
})





