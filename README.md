# 每日一荐

![历史共访问次数](https://visitor-count-badge.herokuapp.com/total.svg?repo_id=azl397985856.daily-featured)
![今天被访问次数](https://visitor-count-badge.herokuapp.com/today.svg?repo_id=azl397985856.daily-featured)

> 统计数据的时间是从 2019-09-15 16:50 起至今

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。


在线阅读：https://leetcode-solution-leetcode-pp.gitbook.io/mz-ri-yi-jm/

电子书文件太大， 大家可到我的公众号《脑洞前端》回复“每日一荐”获取。

## 新鲜出炉 (2020-10)

### 2020-10-20[好文]

相信你在工作中一定用过堡垒机， 大中型公司都会有堡垒机。有的是自建，也有的是用的开源系统。它究竟是什么？做了什么事呢？

[「系统架构」什么是堡垒机？为什么需要堡垒机？](https://mp.weixin.qq.com/s/ptzcIjRePFd_K8_8IiqXfg) 是一个介绍堡垒机的科普文，看我你或许就有答案了。

地址：https://www.toutiao.com/i6881462700229329421/

### 2020-10-17[工具]

不知道你有没有碰到过这样的问题： 你同是开发多个项目，每个项目依赖的 node 和 npm 版本都不一样， 他们彼此不兼容。 你需要在切换项目前修改你的 node 和 npm 版本（当然也可能是其他包管理器，比如 yarn）。你可以使用 nvm 等工具来帮助你，同是在项目的 package.json 中定义一个 engineer 字段，用于指定项目依赖的 node 版本。

这虽然可以解决问题， 但是每次都切换也很浪费时间。 没有使用 volta 时，我的方式是开启多个 tty，每个 tty 的 node 版本不同， 当你切换项目使用对应的 tty 即可。

不过当你使用了 volta，一切会变得不同。volta 可以帮助你管理项目的引擎依赖， 支持 npm， yarn 等宝管理工具。 快来用 volata 管理你的项目包管理器吧。

地址：https://docs.volta.sh/guide/understanding#managing-your-toolchain

### 2020-10-16[工具]

一个可以将 TypeScript 转换为 webassembly 的工具。这意味着你可以用 JS 写 webassembly，获得更好的性能。

地址：https://github.com/AssemblyScript/assemblyscript

### 2020-10-15[工具]

RSLint 是一个用 Rust 写的 lint 工具。 规则挺有意思的， 最关键的是性能好， 其比用 JS 写的 linter 快很多，比如 eslint。

地址：https://rdambrosio016.github.io/RSLint/index.html

### 2020-10-14[行业人物]

在一个圈子中混，怎么能不知道这个行业的领军人物呢？ 今天给大家推荐的是 20 个前端领域的领军人物。

> 你关注了几个？

地址：https://blog.newrelic.com/technology/javascript-nodejs-developers/?utm_campaign=FY21-Q3-DEV-OBSV-AMER-JSW-NL-SL-B_JN&utm_medium=NL&utm_source=JSW&utm_content=B_JN

### 2020-10-13[好文]

我在 [数据结构与算法在前端领域的应用 - 第三篇](https://lucifer.ren/blog/2019/09/20/algorthimn-fe-3/) 中的`重新思考我们的前端应用`小节提到了**假如流行的前端框架比如 React 内置了这种线程分离的功能，即将调和算法交给 WebWorker 来处理，会给前端带来怎么样的变化？**。 这绝对不是异想天开，比如今天给大家分享的这一个文章的观点就很好地印证了这一点。

地址：https://blog.asayer.io/redux-in-web-workers-off-main-thread-redux-reducers-and-middleware

### 2020-10-12[资料]

vue3 出来了，大家都开始学了起来。这里有一份 vue3 学习资料的集合，或者可以帮助你。

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gjlbt5q7ygj30u00w1wkz.jpg)

地址：https://github.com/gautemo/vue-3-playground

### 2020-10-10[书籍]

给大家安利一本书现代操作系统（第 4 版），豆瓣评分 9.1。很多人推荐的一本书， 读完绝对有巨大的收获。

如果实在觉得读起来吃力，可以关注一下小林和 cxuan，这两个人对操作系统的理解还是蛮深刻的，文章通俗易懂。

### 2020-10-09[工具]

figlet.js 是一个用于生产 FIGfont 规范的一个 JS 库。效果图：

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gjlbpo5l30j31c00tgdix.jpg)

地址：https://github.com/patorjk/figlet.js

### 2020-10-08[工具]

我们平常使用 vue 或者 react 脚手架生产的项目的时候， 启动项目会自动打开浏览器， 你可以借助这款工具实现这个效果。

用法：

```js
const open = require("open");

(async () => {
  // Opens the image in the default image viewer and waits for the opened app to quit.
  await open("unicorn.png", { wait: true });
  console.log("The image viewer app quit");

  // Opens the URL in the default browser.
  await open("https://sindresorhus.com");

  // Opens the URL in a specified browser.
  await open("https://sindresorhus.com", { app: "firefox" });

  // Specify app arguments.
  await open("https://sindresorhus.com", {
    app: ["google chrome", "--incognito"],
  });
})();
```

地址：https://github.com/sindresorhus/open

### 2020-10-08[教程]

一个 30 天免费学习的网站，适合基础薄弱的前端。

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gjmpyj2eiuj30zg0lo7l2.jpg)

https://javascript30.com/

## 历史汇总

- [2020-09](./backup/2020-09/README.md)
- [2020-08](./backup/2020-08/README.md)
- [2020-05](./backup/2020-05/README.md)
- [2020-04](./backup/2020-04/README.md)
- [2020-03](./backup/2020-03/README.md)
- [2020-02](./backup/2020-02/README.md)
- [2020-01](./backup/2020-01/README.md)
- [2019-12](./backup/2019-12/README.md)
- [2019-11](./backup/2019-11/README.md)
- [2019-10](./backup/2019-10/README.md)
- [2019-09](./backup/2019-09/README.md)

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7he9xdtmyj30by0byaac.jpg">

## 贡献

- 如果有想法和创意，请提 [issue](https://github.com/azl397985856/daily-featured/issues) 或者进群提
- 如果想贡献代码，请提 [PR](https://github.com/azl397985856/daily-featured/pulls)
- 如果需要修改项目中图片，[这里](./assets/) 存放了项目中绘制图的源代码， 大家可以用 [draw.io](https://www.draw.io/) 打开进行编辑。

## License

[Apache-2.0](./LICENSE)
