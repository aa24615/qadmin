layui.define('errors', function(exports) {


    exports('data', function () {

        let prefix = "Qadmin_";
        /**
         * @desc 设置缓存
         * @param {名称} name
         * @param {值} value
         * @param {缓存时间,秒} expires
         */
        const set = (name,value,expires=0)=>{


            expires = parseInt(expires);
            if(expires==0){
                expires = 60*60*24*365*100;
            }

            try {
                let data = {
                    expires:(expires*1000) + (new Date().getTime()),
                    value:value
                }
                localStorage[prefix+name] = JSON.stringify(data);
                return true;
            }catch (e) {
                localStorage[prefix+name] = value;
                return true;
            }
        }

        /**
         * @desc 获取缓存
         * @param {名称} name
         */
        const get = (name,defaultValue='')=>{

            try {
                let time = new Date().getTime();
                let data = JSON.parse(localStorage[prefix+name]);
                if(data.expires<time){
                    del(name);
                    return defaultValue;
                }else{
                    return data.value;
                }
            }catch (e) {
                return defaultValue;
            }

        }
        /**
         * @desc 删除缓存
         * @param {名称} name
         */
        const del = (name)=>{
            localStorage.removeItem(prefix+name);
        }
        /**
         * @desc 清空缓存
         * @param {是否清除所有,不包前缀} all
         */
        const clear = (all=false)=>{
            if (all){
                localStorage.clear();
            }else{

            }

        }


        return {
            get:get,
            set:set,
            del:del,
            clear:clear
        }
    })
});
