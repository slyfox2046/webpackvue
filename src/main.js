//项目js入口文件
console.log("hello webpack");
import './css/index.css'
import './css/index.scss'
import './css/index.less'

//注意：如果通过路径的形式，去引入node_modules中相关的文件，可以直接省略路径前面的node_modules 这一层目录，直接写包的名称，然后后面跟上具体的文件路径
//不写node_modules这一层目录，默认就会去node_modules中寻找
import 'bootstrap/dist/css/bootstrap.css'


//class关键字，是ES6中提供的新语法，是用来实现ES6中面向对象编程的方式
class Person {
    //使用static关键字，可以定义静态属性
    //所谓的静态属性，就是可以直接通过类名，直接访问的属性
    //实例属性：只能通过类的实例，来访问的属性，叫做实例属性
    static info = {name:"张三",age:20}

}

//通过babel，可以帮我们将高级的语法转换为低级的语法
//1.在webpack中，可以运行如下两套命令，安装两套安装包，去安装babel相关的loader功能：
//1.1第一套包：npm i babel-core babel-loader babel-plugin-transform-runtime -D
//1.2第二套包：npm i babel-preset-env babel-preset-stage-0 -D
//2.打开webpack的配置文件，在module节点下的rules数组种，添加一个新的匹配规则：
//2.1{test:/\.js$/,use :'babel-loader',exclude:/node_modules/}
//2.2注意：在配置babel的loader规则的时候，必须把node_modules目录，通过exclude选项排除掉，原因有俩：
//2.2.1 如果不排除node_modules，则bable会把node_modules中所有的第三方js文件，都打包编译，这样，会非常消耗cpu，同时打包速度非常慢
//2.2.2 哪怕最终babel把所以node_modules中的js转换完毕了，但是项目也无法正常运行！
//3.在项目的根目录中，新建一个叫做.babelrc的babel配置文件，这个配置文件属于json格式，所以在写.babelrc配置的时候，必须符合json语法规范，不能写注释，字符串必须用双引号
//3.1在.babelrc写如下配置
// {
//     "presets":["env","stage-0"],
//     "plugins":["transform-runtime"]
// }
//4.了解：目前，我们安装的babel-preset-env,是比较新的ES语法，之前，我们安装的是babel-preset-es2015,现在出了一个更新的语法插件，叫做babel-preset-env，它包含了所有的和es***相关的语法

//java c#实现面向对象的方式完全一样了，class是从后端语言中借鉴过来的
var p1 = new Person();
console.log(Person.info);

