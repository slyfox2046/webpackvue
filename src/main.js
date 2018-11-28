//项目入口文件

//在webpack中尝试使用Vue：
//注意：在webpack中，使用import Vue form 'vue'
// 导入的Vue构造函数，只提供了runtime-only的方式，并没有提供像网页中那样的使用方式；
import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'


//回顾包的查找规则：
// 1.找项目根目录中有没有node_modules的文件夹
// 2.在node_modules中根据包名，找对应的VUE文件夹
// 3.在vue文件夹中，找一个叫做package.json的包配置文件
// 4.在package.json文件中，查找一个main属性[main属性指定了这个包在被加载的时候的人口文件]



//1.导入login组件
import login from "./login.vue"

//默认webpack无法打包.vue文件，需要安装相关的loader；
//npm i vue-loader vue-template-compiler -D

//在新增配置文件中新增loader配置项 ：{ test:/\.vue$/,use:'vue-loader'}


var vm = new Vue({
    el: "#app",
    data: {
        msg: "123"
    },
    // render:function (createElements) {
    //     return createElements(login);
    // }
    render: c=>c(login)
})


