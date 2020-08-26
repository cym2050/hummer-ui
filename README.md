
### hummer-ui

--useRef 值实时保持最新、模拟生命周期函数、访问真实的DOM节点

1.1需求分析：完成一个组件库需要考虑的问题：
•代码结构
•样式解决方案
•组件需求分析和编码
•组件测试用例分析和编码
•代码打包输出和发布
•CI\CD，文档生成

2.1项目结构 styles/ _variables.scss(各种变量以及可配置设置) _mixins.scss(全局 mixins) _functions.scss(全局 functions) components/ Button/ style.scss(组件单独的样式)

2.2代码规范 tsc是一个编译器，不能捕捉规范性的错误，代码规范使用create-react-app自带提供的eslint

3.1 样式解决方案
•Inline CSS 最差，最好用类名
•CSS in JS 定义样式对象，还可以做一些计算
•Styled Component 模板字符串
•Sass/Less

4.1 创建自己组件库的色彩体系 系统色板： 基础色板（自然观察得到的） + 中性色板（只含黑白灰） 产品色板： 品牌色 + 辅助色

5.1 组件库样式变量分类
•基础色彩系统
•字体系统
•表单
•按钮
•边框和阴影
•可配置开关

6.1 normalize.css  初始化样式，保留好的默认样式

7.1 Button组件需求分析





### other笔记
类型：
原始数据类型：
any
联合union    |
元组 [string, numbber]

对象类型object: 
interface：
1.对对象的形状（shape）进行描述
2.对类（class）进行抽象
3.Duck Typing
自定义类型：用；分开，里面定义的只能少不能多
interface Person {
   age：number；
   name？：string；
}

类型标识
:
?:可选类型
函数类型：（x：number， y : string）=> number  由定义函数时的参数
类型推断：

readonly

########类
类
对象
面向对象：封装、继承、多态

ts-node

修饰符：public、private、protected

类上的属性： 静态属性，可以在类上直接执行  static

