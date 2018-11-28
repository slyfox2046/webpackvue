# webpack结合vue
## 一、P110 09.区分webpack中导入vue和普通网页使用script导入Vue的区别
**视频**：[P110 09.区分webpack中导入vue和普通网页使用script导入Vue的区别](https://www.bilibili.com/video/av27969216/?p=110)

```JS
npm i vue -D //安装VUE包
```

> 在webpack中尝试使用Vue：
> 注意：在webpack中，使用import Vue form 'vue'
> 导入的Vue构造函数，只提供了runtime-only的方式，并没有提供像网页中那样的使用方式；

```js
import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'
```



**回顾包的查找规则**：

1. 找项目根目录中有没有node_modules的文件夹

2. 在node_modules中根据包名，找对应的VUE文件夹

3. 在vue文件夹中，找一个叫做package.json的包配置文件

4. 在package.json文件中，查找一个main属性[main属性指定了这个包在被加载的时候的人口文件]


webpack.config.js

```js
// webstorm中也是这么配置的，设置别名
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

    resolve:{
        alias: {"vue$":"vue/dist/vue.js"}
    }

```