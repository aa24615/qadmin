

layui.define('jquery', function(exports) {

    var $ = layui.$;
    var menuPath = './data/menu.json';

    exports('init', function () {
        return new Vue({
            el: '#qadmin-header',
            data: {
                webname: "Qadmin",
                address: []
            }
        })
    })
});

layui.define('jquery', function(exports){

    var $ = layui.$;
    var menuPath = './data/menu.json';

    const init = layui.init();

    exports('menu', function () {

        return new Vue({
            el:'#menu',
            data:{
                menu:[]
            },
            created:function(){

                //加载左侧菜单
                let data = sessionStorage.menu;
                if (!data) {
                    $.ajax({
                        url: menuPath,
                        dataType: 'text',
                        success: (menu) => {
                            menu = eval('(' + menu + ')');
                            sessionStorage.menu = JSON.stringify(menu);
                            this.menu = menu;
                            this.thisActive();
                            this.thisAttr();
                        }
                    })
                } else {
                    this.menu = JSON.parse(data);
                    this.thisActive();
                    this.thisAttr();
                }

            },
            methods:{
                //记住收展
                onActive:function (pid,id=false) {
                    let data;
                    if(id===false){

                        data = this.menu[pid];

                        if(data.url.length>0){
                            this.menu.forEach((v,k)=>{
                                v.active = false;
                                v.list.forEach((v2,k2)=>{
                                    v2.active = false;
                                })
                            })

                            data.active = true;

                        }

                        data.hidden = !data.hidden;

                    }else{

                        this.menu.forEach((v,k)=>{
                            v.active = false;
                            v.list.forEach((v2,k2)=>{
                                v2.active = false;
                            })
                        })

                        data = this.menu[pid].list[id];
                    }
                    this.updateStorage();
                    if(data.url.length>0){
                        if(data.target){
                            if(data.target=='_blank'){
                                window.open(data.url);
                            }else{
                                window.location.href = data.url;
                            }

                        }else{
                            window.location.href = data.url;
                        }

                    }
                },

                //更新菜单缓存
                updateStorage(){
                    sessionStorage.menu = JSON.stringify(this.menu);
                },
                //菜单高亮
                thisActive:function(){

                    let pathname = window.location.pathname.split('/')[-1];
                    let host = window.location.host;
                    let pid = false;
                    let id = false;
                    this.menu.forEach((v,k)=>{
                        let url = v.url;
                        if(url.length>0){
                            if(url[0]!='/' && url.substr(0,4)!='http'){
                                url = '/'+url;
                            }
                        }
                        if(pathname==url){
                            pid = k;
                        }
                        v.list.forEach((v2,k2)=>{
                            let url = v2.url;

                            if(url.length>0){
                                if(url[0]!='/' && url.substr(0,4)!='http'){
                                    url = '/'+url;
                                }
                            }
                            if(pathname==url){
                                pid = k;
                                id = k2;
                            }
                        })
                    })


                    if(id!==false){
                        this.menu[pid].list[id].active = true;
                    }else{
                        if(pid!==false){
                            this.menu[pid].active = true;
                        }
                    }

                    this.updateStorage();

                },
                //当前位置
                thisAttr:function () {
                    //当前位置
                    let address = [{
                        name:'首页',
                        url:'index.html'
                    }];
                    this.menu.forEach((v,k)=>{
                        v.list.forEach((v2,k2)=>{
                            if(v2.active){
                                address.push({
                                    name:v.name,
                                    url:'javascript:;'
                                })
                                address.push({
                                    name:v2.name,
                                    url:v2.url,
                                })
                                console.log(address);
                                init.address = address;
                            }
                        })
                    })
                }
            }
        })

    });
})
