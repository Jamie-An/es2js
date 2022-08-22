# es2js

若想在项目中使用ES6语法，可采用以下几种模式。

## 1、通用方法

### 1.1 babel-cli 编译模式  (示例：babel/)

```shell
# 示例
cd babel              # 进入代码目录
npm i                 # 安装依赖包
npm run babel         # lib中的ES6代码编译为ES5存放在dist中
node ./dist/index.js  # 执行，输出正常
```

核心依赖：

- `@babel/cli`: 提供编译指令 `babel`
- `@babel/core`: babel核心包
- `@babel/preset-env`: 统一的 snytax 和 api 的编译规则
- `babel.config.js`: 提供配置文件

### 1.2 ts 编译模式 （示例：ts/）

> 推荐 ❤️

```shell
# 示例
cd ts                   # 进入代码目录
npm i                   # 安装依赖包
npm run dev             # 编译过程中会有TS报错，但不阻塞输出
node ./dist/index.js    # 执行，输出正常
```

核心依赖：

- `typescript`: 提供ts支持

## 2、node运行环境

### 2.1 node原生方式支持 (示例：node/mjs-cjs)

```shell
# 示例
cd node/mjs-cjs    # 进入代码目录
node ./index.cjs   # 直接运行代码
```

特点：

- 无需增加任何转义，node中直接运行ES代码。
- 面向未来，但现阶段的支持还不全面，不包含polyfill。

node对ES模块支持的发展历程：

- ❎ 早期版本开始实验性质支持 `.mjs` 和 `import()`引入方式，但需要增加启动参数

```shell
node --experimental-modules my-app.mjs
```

- ✅ node@12 之后，不用增加启动参数，也能支持 `.mjs`
- ✅ node@13.2，废除了该启动参数，全面支持 `.mjs` 方式加载ES模块

### 2.2 node环境下直接运行 (示例：node/babel-node)

```shell
# 示例
cd node/mjs-cjs    # 进入代码目录
npm i              # 安装依赖
npm run babel-node # 执行指令，检测运行结果
```

核心依赖

- @babel/node：提供一个可直接运行ES6的REPL环境

### 2.3 node下使用@babel/register (示例：node/babel-register)

```shell
# 示例
cd node/babel-register    # 进入代码目录
npm i                     # 安装依赖
npm run br                # 运行代码（包含polyfill）
```

核心依赖：

- `@babel/core`: babel核心包
- `@babel/register`: 提供 env 环境的编译支持
- `@babel/preset-env`: 统一的 snytax 和 api 的编译规则
- `babel.config.js`: 提供配置文件

### 3、浏览器运行环境 （示例：./html/index.html）

使用@babel/standalone模块提供的浏览器版本，将其插入网页。



