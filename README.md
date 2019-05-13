# QAdmin轻量级后台模板
基于layui框架与Vue.js构建

轻量不复杂 简洁不简单

- [演示](http://demo.qadmin.net)
- [文档](http://docs.qadmin.net)

## 快速开始


在head中引入所需资源

```html

<link rel="stylesheet" href="./static/common/layui/css/layui.css">
<link rel="stylesheet" href="./static/admin/css/style.css">
<script src="./static/common/layui/layui.js"></script>
<script src="./static/common/jquery-3.3.1.min.js"></script>
<script src="./static/common/vue.min.js"></script>

```

布局

```html

<div id="app">
    <!--顶栏-->
    <header>
        <h1 v-text="webname"></h1>
        <div class="breadcrumb">
            <i class="layui-icon">&#xe715;</i>
            <ul>
                <li v-for="vo in address">
                    <a  v-text="vo.name" :href="vo.url" ></a> <span>/</span>
                </li>
            </ul>
        </div>
    </header>

   <div class="main" id="app">
        <!--左栏-->
        <div class="left">
            <ul class="cl" >
                <!--顶级分类-->
                <li v-for="vo,index in menu" :class="{hidden:vo.hidden}">
                    <a href="javascript:;" :class="{active:vo.active}" @click="onActive(index)">
                        <i class="layui-icon" v-html="vo.icon"></i>
                        <span v-text="vo.name"></span>
                        <i class="layui-icon arrow" v-show="vo.url.length==0">&#xe61a;</i>
                        <i v-show="vo.active" class="layui-icon active">&#xe623;</i>
                    </a>
                    <!--子级分类-->
                    <div v-for="vo2,index2 in vo.list">
                        <a href="javascript:;" :class="{active:vo2.active}" @click="onActive(index,index2)" v-text="vo2.name"></a>
                        <i v-show="vo2.active" class="layui-icon active">&#xe623;</i>
                    </div>
                </li>
            </ul>
        </div>
        <!--右侧-->
        <div class="right">
            <!--你的页面内容写在这-->
            <!--你的页面内容写在这-->
            <!--你的页面内容写在这-->
        </div>
   </div>
</div>


```


### 页脚引入配置与脚本 因为vue需要写在DOM之后


```haml

<script src="./static/admin/js/config.js"></script>
<script src="./static/admin/js/script.js"></script>

```

- [查看完整例子](base.html)

### 配置

```javascript

//path /static/admin/js/config.js

//网站名称
var webname = 'QAdmin';

//菜单列表路径 可以是本地json 也可以是api接口
var menuUrl = 'data/menu.json';


```

### 菜单

```javascript

[{
    "name": "顶级菜单",
    "icon": "&#xe68e;", //layui内置图标
    "url": "index.html", //地址
    "hidden": false, 
    "list": []
}, {
    "name": "子级菜单",
    "icon": "&#xe612;",
    "url": "", //如果有二级菜单,地址留空
    "hidden": false, //是否展开
    "list": [{
        "name": "二级菜单",
        "url": "user_index.html"
    }, {
        "name": "二级菜单",
        "url": "user_add.html"
    }]
}]

```

### 常用方法

```javascript
delCache(); //清除前端缓存

//提示框
msg({code:1,msg:'成功'}); //以对象传入
msg(1,'成功','/index.html',2); //传入跳转地址与跳转秒数

//

```

