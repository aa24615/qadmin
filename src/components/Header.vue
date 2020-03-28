<template>

    <header>
        <h1 v-text="webname"></h1>
        <div class="breadcrumb">
            <i class="layui-icon">&#xe715;</i>
            <ul>
                <li >
                    <a  v-text="name" ></a> <span>/</span>
                </li>
            </ul>
        </div>
    </header>

    
</template>

<script>
    export default {
        name: "Header",
        data:function () {
             return  {
                 webname:'Qadmin',
                 name: '222'

             }
        }
    }


</script>

<style scoped>



</style>