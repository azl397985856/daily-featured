# 每日一荐

![](https://p.ipic.vip/9hvbhs.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2021-11

### 2021-11-30[好文]

webpack 等打包工具的功能都是将非 JS 模块打包成 JS 模块。比如 html，css，image 都可以打包成 js。那么它们分别如何打包成 js 呢？以 webpack 为例， 你需要一堆的 loader，比如 处理 css 需要 css-loader，图片需要 file-loader 等等。

这篇文章就详细告诉了你如何使用打包工具处理这些非 js 资源，这在你配置你项目打包工具的时候很有用。

地址：https://blog.bitsrc.io/how-to-bundle-non-javascript-resources-abda2d5826f

### 2021-11-26[类库]

minimist 是一个处理命令行参数的 node 库。

使用方法非常简单，直接将 process.argv 传给它就好了。

```bash
var argv = require('minimist')(process.argv.slice(2));
console.log(argv);
```

一个简单的使用例子：

```bash
$ node example/parse.js -x 3 -y 4 -n5 -abc --beep=boop foo bar baz
{ _: [ 'foo', 'bar', 'baz' ],
  x: 3,
  y: 4,
  n: 5,
  a: true,
  b: true,
  c: true,
  beep: 'boop' }
```

这样你就可以直接获取到用户传入的各种参数了。

由于之前我一直用的是 tj 大神开发的 [commander.js])(https://github.com/tj/commander.js) 因此不太用到这个库。而如果你就是写一个小的应用，仅仅是解析下命令行参数，那么这个库就非常适合。

地址：https://github.com/substack/minimist

### 2021-11-25[类库]

`execa` 是一个 node 端的将常用操作进行简化的库。这些简化体现在多个方面，比如：

- 支持 promise，因此可以直接 await 来处理异步，很方便。
- 支持 pipe
- 取消任务（cancel api）
- kill 进程
- 等等

官方的宣传语是：Process execution for humans。可以看出它的功能主要就是 node 的进程运行相关，而它所有功能都是围绕 node 的 child_process 模块进行的。

地址：https://github.com/sindresorhus/execa

### 2021-11-24[类库]

remix 是一个集大成的框架。基于它，你可以创建现代化的前端应用，其本身是基于 react 技术栈的。和其他现代化的大而全的框架类似，它有两个显著特征：

- 开箱即用，很多功能都内置。比如路由，数据处理，视图层等等
- 插件化。很多功能都可以扩展包的形式增删。比如其核心包有 @remix-run/dev, @remix-run/node 等等。

地址：https://remix.run/docs/en/v1

### 2021-11-23[好文]

如何发布一个 react 库？本文讲解如何用 TypeScript + rollup + react 开发 UI 组件库。其中涉及了很多细节，比如如何初始化项目，如何配置打包工具，如何发布到 npm ，如果导出 types 信息给第三方使用等等。文章还提供了配套的视频，如果文章对你有难度，可以直接看视频（有点软件开发基础的不建议看视频，直接文章足以）。

![](https://p.ipic.vip/86vr5k.jpg)

地址：https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe

### 2021-11-22[网站]

LeetCode 是一个非常不错的，适合算法学习入门的网站。其中的每日一题质量很高，不仅仅是题目选的不错，而且官方题解以及部分优质选手的题解都非常有参考价值，推荐学习算法的大家学习。

我在刚刚的 11 月份中就完成了全勤打卡（虽然有补卡 😄）

地址：https://leetcode-cn.com/problemset/all/

### 2021-11-19[工具]

1password 是一个老牌的密码管理工具，之前我也推荐过。而今天介绍的这款 bitwarden 也同样是一个老牌的密码管理工具，与 1password 相比，个人感觉有两个明显优势：

1. 用户界非常简洁，清爽，功能几乎都是一看就懂。
2. 代码开源，并且产品对个人免费。 这恐怕是大多数人最介意的。

它的客户端种类很多，有桌面，手机，浏览器，甚至还是命令行。

![](https://p.ipic.vip/emu70b.jpg)

地址：https://bitwarden.com/download/

### 2021-11-15[网站]

该网站允许你仅仅输入一个 url，就可以自动分析网站下的 npm 包信息，包括包名，大小，Licence 等信息。

![](https://p.ipic.vip/4i8cfh.jpg)

![](https://p.ipic.vip/014pcw.jpg)

和大多数的工具一样，它也是分析 dist 产物，比如里面的注释，字面量等信息。经测试，效果还是很准确的。

其原理也相当简单，就是直接访问你的网站，拿到 JS 资源并利用正则匹配里面的关键注释或者字面量进而判断使用的库的类型。

地址：https://bundlescanner.com/

### 2021-11-12[技巧]

Chrome 98 出了一个实验性功能 `copy css as js`。你可以直接 copy css 代码为 JS 对象。这在你使用 `css in js` 库的情况下很有用。

即使你不使用 `css in js` 库，它也是有用的。比如这种情况。

```js
const anchor = document.querySelector("a");

Object.assign(anchor.style, {
  color: "white",
  letterSpacing: "2px",
});
```

### 2021-11-11[仓库]

一款轻量级的收集页面的用户点击行为、路由跳转、接口报错、代码报错、并上报服务端的 SDK

功能：

- 🔨 监听请求错误
- 🔨console
- 🔨 路由跳转
- 🔨 代码报错
- 🔨click、wx:tab、touchmove
- 🔨 资源加载错误
- 🏅 自定义上报错误
- 🚀 丰富的 hooks 与配置项支持可高定制化
- 🌝 支持 IE8 和安卓 5 以上
- 👌 持续迭代与更新
- 完善的浏览器 e2e 和微信小程序 e2e
- 完善的单元测试（77%~coding）
- 支持原生 Web @zyf2e/monitor-browser
- 支持 Web 框架（Vue3、Vue2、React@Next） @zyf2e/monitor-web
- 支持原生微信小程序、支持 uni-app 等微信小程序框架 @zyf2e/monitor-wx-mini
- 支持 Web 性能监控 @zyf2e/monitor-web-performance
- 支持微信小程序性能监控 @zyf2e/monitor-wx-mini-performance

地址：https://github.com/clouDr-f2e/monitor

### 2021-11-10[好文]

vue 和 react 的一个非常大的区别在于 vue 是基于模板的，vue 会编译模板而生成 render function，而 react 则是手写 jsx。当然你也可以直接在 vue 中手写 render 来获得和 react 几乎等价的语法。

那么 vue 是如何将模板编译成 render function 呢？ vue2 的模板编译器和 vue3 有什么区别？这篇文章告诉你！

- [Vue 模板编译原理](https://juejin.cn/post/6863241580753616903)
- [Vue3 模板编译优化](https://juejin.cn/post/6893839274304700429)

### 2021-11-09[技巧]

如果你不希望你放在网上的内容被搜索引擎检索到，可以在网站里设置 meta 标签来做到。

```html
<meta name="”robots”" content="”noindex," nofollow” />
```

这个标签的具体含义以及该标签的其他选项请参考：https://www.woorank.com/en/edu/seo-guides/meta-robots-tag-seo

### 2021-11-08[仓库]

预约 Apple 官方产品的一个工具。如果你是果粉的话可以试试。由于我不是，就没有尝试，也不知道是否好用，使用方式很简单，感兴趣的可以尝试一下。

https://github.com/Sunnyyoung/AppleReserver

### 2021-11-05[仓库]

和 浏览器，Node 等一样， txiki.js 是一个 JavaScript 运行时，包括 JS 解析引擎以及运行时的 api（比如 console）。

它是基于 quickjs 做的 js 引擎，基于 libuv 做的跨平台事件驱动。这点和 node 很像，只不过 node 使用的 js 引擎是 v8 而已。

txiki.js 非常小，如果你想学习实现 JS Runtime 或者想在你的项目中用到沙箱等不妨考虑使用一下。

基于这个项目你可以顺便学习一下 quickjs 和 libuv，说到 libuv 我推荐一个资料 https://github.com/nikhilm/uvbook/tree/master。正好它也有中文版翻译：https://luohaha.github.io/Chinese-uvbook/source/filesystem.html

地址：https://github.com/saghul/txiki.js

### 2021-11-04[网站]

在线生成头像的一个网站， 我用它生成了一个有点像自己的头像。

![](https://p.ipic.vip/cjihsg.jpg)

要不是怕换了头像大家都不认识我了，我就换上啦 😄

地址：https://notion-avatar.vercel.app/zh

### 2021-11-03[好文]

photoshop 之前尝试做 web 版本，但是由于 JS 性能问题而放弃了。得益于 web assembly 的发展，性能问题逐渐被解决。网页版本的 photoshop 变得可行起来。另外由于本身就是 c++ 写的，因此使用 c++ 编译为 web assembly 并在 js 中引用可以很大程度上复用之前的代码。

这提示我们以前由于性能问题不做在前端的功能可以考虑使用 web assembly 的方式解决。

地址：https://web.dev/ps-on-the-web/

### 2021-11-02[工具]

yarn 现在支持可选依赖，你可以选择为不同的平台安装不同的包。

```yaml
supportedArchitectures:
  os: [linux, darwin]
  cpu: [x64, arm64]
```

并且新版本 node（大于等于 16.9）可以通过再 package.json 中增加字段指定使用 yarn 作为包管理工具，而不是默认的 npm。

```json
{
  "packageManager": "yarn@3.1.0"
}
```

### 2021-11-01[知识]

Node 中有流的概念以及专门的 api，而在浏览器端虽然大家一直在使用流，但是浏览器却没有专门为其提供流的 api。比如浏览器中请求就是一个流：

```js
new Response(stream, {
  headers: { "Content-Type": "text/html" },
});
// request 也是同理
```

现在浏览器终于有了这样的 api，比如 ReadableStream ，WritableStream，TransformStream 等等。

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7he9xdtmyj30by0byaac.jpg">
