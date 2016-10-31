
说明：该项目是使用webpack+ES6进行React开发，最终输出todo list，并做一些简单的操作，另附简单的样式。

开发流程大致如下：

1、git clone https://github.com/shanshanfei/react-todos.git 到本地；

2、cd react-todos 执行npm install安装项目相关依赖，主要有：

	npm install react react-dom --save-dev
	npm install webpack webpack-dev-server --save-dev
	npm install babel-loader babel-core babel-preset-react babel-preset-es2015 --save-dev

	项目最终目录结构：

	--init-react
		|--app
		  	|--components（组件目录）
	      		       |--Todos（组件1）
 			 		|--app.js
  			 		|--app.less
  			 		|--header.js
                                        |--main.js
  			 		|--footer.js
		      		        |--item.js
                               |--index.js 入口主文件
  		|--build（输出目录）
    		        |--index.html
    		        |--bundle.js（输出文件，由 webpack 打包后生成的）
  		|--package.json
  		|--webpack.config.js

3、package.json中scripts写好了构建任务dev，利用前面安装好的webpack-dev-server，进行免刷新页面实时看页面效果，执行命令npm run dev；

	webpack.config.js中做相应配置：
		entry: [
			'webpack/hot/dev-server',
			'webpack-dev-server/client?http://localhost:8080',
			APP_PATH
 		]

4、安装其他的相关loader:

	npm install less-loader css-loader style-loader --save-dev

5、最终运行步骤：

	git clone https://github.com/shanshanfei/init-react.git
	cd react-todos
	npm install
	npm run dev
        浏览器访问 http://localhost:8080即可看到效果

