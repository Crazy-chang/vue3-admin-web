

### 脚手架的作用 

`1、减少重复性的工作，不需要复制其他项目再删除无关代码，或者从零创建一个项目和文件。 `
`2、可以根据交互动态生成项目结构和配置文件。 `
`3、多人协作更为方便，不需要把文件传来传去。`


### 目前比较主流的脚手架有

1. React-Native脚手架 react-native-cli 
2. React.js脚手架 cract-react-app 
3. Vue.js脚手架 vue-cli 
4. Webpack脚手架 webpack-cli 


### 热门脚手架相关工具库 

1. inquirer:    交互式命令行工具 ，命令行询问用户问题，记录回答结果
2. commander:     命令行工具 ，命令行自定义指令
3. download-git-repo:   用来下载远程模板 
4. ora:     显示loading动画 
5. chalk:   修改控制台输出内容样式 
6. log-symbols:     显示出 √ 或 × 等的图标 
7. figlet：     控制台打印 logo
8. cross-spawn	支持跨平台调用系统上的命令


### 包含项目

1. uniapp 
2. vue2
3. vue3
4. react

### 搭建步骤

1. 吧下载模板准备好，放到github、gitee等
2. 初始化项目做准备
3. 准备好后通过 npm link 进行本地执行调试

4. 自定义命令指令
5. 创建交互式命令
6. 获取到1和2的结果
7. 通过结果来下载对应仓库代码

8. npm 发包

说明：
为了方便开发调试，先使用 npm link 链接到全局（npm unlink移除命令） 
然后就可以在本地执行自定义命令 如：raccoon


### 相关链接

<!-- inquirer 中文文档 -->
http://www.npmdoc.org/inquirerzhongwenwendanginquirer-jszhongwenjiaochengjiexi.html

<!-- commander 中文文档 -->
https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md

<!-- download-git-repo -->
https://www.npmjs.com/package/download-git-repo

<!-- 相关参考文档 -->
https://juejin.cn/post/6966119324478079007?searchId=202311281127493D70D163873FB5600BC4
https://blog.csdn.net/bbsyi/article/details/111881640