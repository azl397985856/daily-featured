# 每日一荐

![历史共访问次数](https://visitor-count-badge.herokuapp.com/total.svg?repo_id=azl397985856.daily-featured)
![今天被访问次数](https://visitor-count-badge.herokuapp.com/today.svg?repo_id=azl397985856.daily-featured)

> 统计数据的时间是从 2019-09-15 16:50 起至今

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 新鲜出炉(2020-01)

### 2020-01-20[网站]

我平时有 RSS 阅读的习惯，我使用的 Feedly 管理订阅内容。但是有的网站本身并不支持 RSS 订阅。那么一种黑科技，就是使用第三方服务帮我们转换一下，生成订阅。原理很简单，就是轮训内容变化，如果变化就通知你。当然前提你要知道“如何判断发布了新内容”，这部分 feed43 做的不错。我们利用 Feed43，将任意网页制作成 RSS 订阅源。 这里有一篇少数派的文章，大家可以参考一下： https://sspai.com/post/34320

你也可以使用 rsshub 来做同样的事情，rsshub 支持私有化部署，地址： https://docs.rsshub.app/。

### 2020-01-19[网站]

给大家介绍一个 mac 软件下载网站，效果你懂的。类似的网站还有 xclient.info。

地址：https://www.macappdownload.com/

### 2020-01-17[工具]

如果你想开发一个 VSCode 插件，那么一个脚手架是有用的。我推荐使用官方的脚手架工具。顺便再推荐一个 vscode 插件开发指南，来自 sorrycc，地址 https://www.yuque.com/docs/share/cf6d9191-be02-4644-aef5-afc2f2f38297

![](https://tva1.sinaimg.cn/large/006tNbRwly1gb1q8ba9s4j30f505nq3i.jpg)

地址： https://github.com/Microsoft/vscode-generator-code

### 2020-01-16[工具]

不改变任何功能的情况下给你的 docker image 瘦身。

Github 地址： https://github.com/docker-slim/docker-slim

### 2020-01-13[插件]

今天推荐两个关于 Github 的 chrome 插件。

一个是用来查看 Github 提交历史的，名字是`Git History Browser Extension`，安装之后 git 文件右上角信息会多一个按钮。

![](https://tva1.sinaimg.cn/large/006tNbRwly1gaupssm2q0j31010hgn12.jpg)

点开之后是这种画风：

![](https://tva1.sinaimg.cn/large/006tNbRwly1gauptpbcsoj30vm0mwjwh.jpg)

另外一个插件是`OctoLinker`。这个插件你可以用来方便地进行文件跳转。

![](https://tva1.sinaimg.cn/large/006tNbRwgy1gaupv7x3auj30rd0e6gny.jpg)

### 2020-01-09[好文]

如果你关注 Node.js 社区，那么你一定记得 Node.js v12 一个非常重磅的功能就是，内核的 HTTP Parser 默认使用 llhttp，取代了老旧的 http-parser，性能提升了 156%。

但知其然也要知其所以然，llhttp 是如何做到这一点的呢？《llhttp 是如何使 Node.js 性能翻倍的？》进行了详细的阐述。

地址： https://zhuanlan.zhihu.com/p/100660049

### 2020-01-08[好文]

昨天介绍了《当你在浏览器中输入 google.com 并且按下回车之后发生了什么？》，今天推荐一篇《图解浏览器的基本工作原理》。 讲的内容主要是浏览器渲染相关的，让你在更大的视角，更细的粒度了解浏览器原理，最可贵的是文章通俗易懂，图文并茂，对于想了解浏览器原理而又找不到好的入门资料的同学来说很有用。

其中还提到了很多延伸知识，比如事件冒泡更微观角度是什么？事件的 passive：true 做了什么？为什么很多时候我们绘图不流畅以及如何实现平滑绘图？

```js
window.addEventListener("pointermove", event => {
  const events = event.getCoalescedEvents();
  for (let event of events) {
    const x = event.pageX;
    const y = event.pageY;
    // draw a line using x and y coordinates.
  }
});
```

(使用 `getCoalescedEvents` API 来获取组合的事件，从而绘制一条平滑的曲线)

文章地址： https://zhuanlan.zhihu.com/p/47407398

### 2020-01-07[好文]

或许目前实际上最全的《当你在浏览器中输入 google.com 并且按下回车之后发生了什么？》。文档内容不仅局限于 DNS，TCP，HTTP，CDN。发送 HTML，解析 DOM 等过程，甚至包括了物理键盘和系统中断的工作原理，系统中断，ARP 等等更为详细的内容。

![](https://tva1.sinaimg.cn/large/006tNbRwly1gan22rkye3j30au0c5tab.jpg)

地址： https://github.com/skyline75489/what-happens-when-zh_CN

### 2020-01-06[框架]

前端测试正在变得越来越重要，之前也写了一篇文章[前端测试](https://github.com/azl397985856/frontend-test)，那么拥有一个顺手的测试框架显得越来越重要。

我个人目前在使用的测试框架是 Jest，除了 Jest 还有很多优秀的测试框架，知己知彼，百战不殆。我们看看下：

- Mocha：非常老牌的测试框架，使用 Jest 之前我在用
- Enzyme：一个 React 测试框架，后期我不再使用了，而是转向 Jest + react-dom/test-utils
- Ava
- Jasmine
- Cypress

另外你做自动化测试的话，推荐使用 Puppeteer，如果你做组件测试的话可以考虑 Jest 的快照或者 StoryBook（一个 2015 年以来一直关注并且看好的一个框架）。

## 历史汇总

- [2019-12](./backup/2019-12/)
- [2019-11](./backup/2019-11/)
- [2019-10](./backup/2019-10/)
- [2019-09](./backup/2019-09/)

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7he9xdtmyj30by0byaac.jpg">

## 贡献

- 如果有想法和创意，请提[issue](https://github.com/azl397985856/daily-featured/issues)或者进群提
- 如果想贡献代码，请提[PR](https://github.com/azl397985856/daily-featured/pulls)
- 如果需要修改项目中图片，[这里](./assets/)存放了项目中绘制图的源代码， 大家可以用[draw.io](https://www.draw.io/)打开进行编辑。

## License

[Apache-2.0](./LICENSE)
