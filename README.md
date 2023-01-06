Service (ETHANIM - NFT - WEBSITE)
所用依赖： ui插件：antdesign；typescirptjs ；axios；web-vitals;styled-components react-router-dom echarts-for-react等等

```console
$ yarn install
$ yarn start:dev   启动开发环境
$ yarn start:prod  启动生产环境
```
# 本地构建步骤
```console
$ yarn install
$ yarn build:dev    #构建开发环境的代码
$ yarn build:prod   #构建生产环境的代码
```
# 上线部署步骤

- 切换到develop分支部署代码


# 上线部署修改环境
- 在执行完yarn build命令后在根目录下找到文件/build/js/env.js
- 修改文件中currentEnv的值为如下值：
- currentEnv: 'dev'  --- 表示开发环境 
- currentEnv: 'prod' --- 表示生产环境


#打包生成的文件名build
# 上线部署过程
1 执行上面的部署命令，会在根目录生成build静态资源文件夹
2 在nginx中配置一个server指向build静态资源文件夹
