

layui.define([], function(exports) {
    exports('init', (function () {
        console.log('初始化')
        return new Vue({
            el: '#qadmin-header',
            data: {
                webname: "Qadmin",
                address: []
            }
        })
    })())
});

layui.define(['jquery','data'], function(exports){

    var $ = layui.$;
    var menuPath = './data/menu.json';

    const init = layui.init;

    exports('menu', (function () {

        console.log('左侧菜单');
        return new Vue({
            el:'#qadmin-menu',
            data:{
                menu:[]
            },
            created:function(){

                //加载左侧菜单
                let menu = layui.data.get('menu');
                if (typeof menu == 'string') {
                    setTimeout(()=>{
                        $.ajax({
                            url: menuPath,
                            dataType: 'text',
                            success: (menu) => {
                                menu = eval('(' + menu + ')');
                                layui.data.set('menu',menu);
                                this.menu = menu;
                                this.thisActive();
                                this.thisAttr();
                            }
                        },3000)
                    })

                } else {
                    this.menu = menu;
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
                //菜单高亮
                thisActive:function(){

                    let href = window.location.href;

                    let pid = false;
                    let id = false;
                    this.menu.forEach((v,k)=>{
                        let url = v.url;
                        if(url.length>0){
                            if(href.indexOf(url)>=0){
                                pid = k;
                            }
                        }

                        v.list.forEach((v2,k2)=>{
                            let url = v2.url;

                            if(url.length>0){
                                if(href.indexOf(url)>=0){
                                    id = k2;
                                    pid = k;
                                }
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
                                init.address = address;
                            }
                        })
                    })
                },
                //更新菜单缓存
                updateStorage(){
                    layui.data.set('menu',this.menu);
                }
            }
        })

    })());
})
