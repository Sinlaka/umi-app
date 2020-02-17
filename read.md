
https://github.com/hemiahwu?tab=repositories
## 1.  命令安装环境
	确保电脑上已经安装了nodejs,再用用yarn-1.19.msi安装yarn
	1.安装node.js
	
	2.安装npm,安装cnpm
	  npm install -g cnpm --registry=https://registry.npm.taobao.org
	  
	3.安装yarn
	  npm install yarn -g --save
	  
	4 安装tyarn  国内源
	  cnpm i yarn tyarn -g
	  tyarn -v
	5 安装umi
	  tyarn global add umi
	  将yarn路径配置到环境变量的path
	  umi -v
	6.安装静态服务
	  cnpm install -g serve
	  
	7.reate-react-app
	  npm install -g create-react-app
	  
	   create-react-app是React官方出的脚手架工具，其实有很多第三方的脚手架工具

## 2.本地开发
创建项目文件夹，再该目录执行以下命令

#### 1).官方脚手架开发

```
D:  //进入D盘
mkdir ReactDemo  //创建ReactDemo文件夹
create-react-app demo01   //用脚手架创建React项目
cd demo01   //等创建完成后，进入项目目录
npm start   //预览项目，如果能正常打开，说明项目创建成功
npm install antd --save  or  yarn add antd  //安装AntDesign
```

#### 2).umi-antD-dva开发

```
umi，中文可发音为乌米，是一个可插拔的企业级 react 应用框架。
可以借助umi创建一个antD空项目

yarn/tyarn create umi
or
cnpm create umi

Choose `ant-design-pro`--->语言：javascript

安装依赖
yarn install/yarn
启动
yarn start
umi ui
```
## 安装 yarn node-sass sass-loader
### 因为powershell禁止未签名脚本和来自其他用户的签名脚本运行。
解决方法：
使用管理员身份运行powershell
执行set-ExecutionPolicy RemoteSigned ：修改执行策略
输入对应的选择：选择是或者全是
执行get-ExecutionPolicy ：查看策略
关闭powershell即可
###  React.Children.only expected to receive a single React element chil
Ant Design中<Dropdown></Dropdown> 组件内部最外层只能接受一个元素，而代码中有三个元素，所以报错。
解决方案：
将三个元素用<div></div>包裹后OK，不再报错，页面可正常显示。

正确代码：
```<Dropdown overlay={menu}>
    <div>
        <Rate allowHalf defaultValue={4.5} disabled/>
        <span>4.8</span>
        <Icon type="down" style={{fontSize: 18}}/>
    </div>
</Dropdown>
```
### umi/withRouter
你可以访问history对象的属性和最近<Route>的match经withRouter高阶组件。withRouter将通更新match，location和history道具给被包装的成分时，它呈现。
静态方法和属性包装组件的所有非特定于反应的静态方法和属性将自动复制到“已连接”组件。
Component.WrappedComponent
包装的组件WrappedComponent在返回的组件上作为静态属性公开，除其他事项外，该属性可用于隔离测试该组件。// MyComponent.js
export default withRouter(MyComponent)
wrapperComponentRef：func
将作为ref道具传递给包装组件的函数
### antd-Affix固钉
将页面元素钉在可视范围。有点像position:fixed
何时使用#
当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。
页面可视范围过小时，慎用此功能以免遮挡页面内容。
### 样式
1.例如 ：设置div元素的高度为当前窗口高度-100px
```scss
     div{
       height: calc(100vh - 100px);     
    }
```
2.flex布局

###     "ant-design-pro": "^2.2.1",
  "dependencies": {
    "antd": "^3.19.5",
    "dva": "^2.6.0-beta.6",
    "node-sass": "^4.13.1",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "sass-loader": "^8.0.2"
  },