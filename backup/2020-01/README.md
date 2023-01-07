# 每日一荐

![](https://p.ipic.vip/95kx1h.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2020-01

### 2020-01-23[资料]

尤雨溪在多伦多的演讲《Vue 3.0 设计原则》对于想要学习 Vue3.0 或者想要直接从零开发 Vue3.0 的人来说，绝对是必读的。PPT 内容不多，几分钟就可以读完，不建议看视频，视频大概有 50 多分钟。

PPT 地址： https://docs.google.com/presentation/d/1r0HcS4baHy2c106DsZ4jA7Zt0R9u2MnRmmKIvAVuf1o/edit#slide=id.p

### 2020-01-22[软件]

安卓软件的开屏广告很烦人，严重影响效率。这里推荐一个安卓 APP 可以改善这种情况, 并且不需要 root，只需要开启权限即可。注意它不是万能的，不过实际使用情况来看，还是有用的。

地址： https://www.coolapk.com/apk/me.angeldevil.autoskip

### 2020-01-21[好文]

可访问性真的是一个非常重要的东西，尤其是对于有障碍人士。但是整个行业在这方面做的还完全不够，不管是技术能力，还是重视程度上。

比如我在使用钉钉软件的时候，他们的快捷键很少，这一点非常困扰我，当然类似的应用还有很多。我觉得整个行业应该注重起来这一块，将可访问性做好，要知道这也是用户体验中很重要的组成。这里有一篇文章 《Debugging your application for accessibility》， 从浅层次上讲解了可访问性的内容，以及基本实践，同时还推荐了一个叫 axe 的 chrome 扩展工具帮助你分析网页存在的可访问性问题，类似于 网页性能分析之于 lighthouse。

文章地址： https://blog.logrocket.com/debugging-application-accessibility/

### 2020-01-20[网站]

我平时有 RSS 阅读的习惯，我使用的 Feedly 管理订阅内容。但是有的网站本身并不支持 RSS 订阅。那么一种黑科技，就是使用第三方服务帮我们转换一下，生成订阅。原理很简单，就是轮训内容变化，如果变化就通知你。当然前提你要知道“如何判断发布了新内容”，这部分 feed43 做的不错。我们利用 Feed43，将任意网页制作成 RSS 订阅源。 这里有一篇少数派的文章，大家可以参考一下： https://sspai.com/post/34320

你也可以使用 rsshub 来做同样的事情，rsshub 支持私有化部署，地址： https://docs.rsshub.app/。

### 2020-01-19[网站]

给大家介绍一个 mac 软件下载网站，效果你懂的。类似的网站还有 xclient.info。

地址：https://www.macappdownload.com/

### 2020-01-17[工具]

如果你想开发一个 VSCode 插件，那么一个脚手架是有用的。我推荐使用官方的脚手架工具。顺便再推荐一个 vscode 插件开发指南，来自 sorrycc，地址 https://www.yuque.com/docs/share/cf6d9191-be02-4644-aef5-afc2f2f38297

![](https://p.ipic.vip/fuczut.jpg)

地址： https://github.com/Microsoft/vscode-generator-code

### 2020-01-16[工具]

不改变任何功能的情况下给你的 docker image 瘦身。

Github 地址： https://github.com/docker-slim/docker-slim

### 2020-01-13[插件]

今天推荐两个关于 Github 的 chrome 插件。

一个是用来查看 Github 提交历史的，名字是`Git History Browser Extension`，安装之后 git 文件右上角信息会多一个按钮。

![](https://p.ipic.vip/l7flho.jpg)

点开之后是这种画风：

![](https://p.ipic.vip/vani9o.jpg)

另外一个插件是`OctoLinker`。这个插件你可以用来方便地进行文件跳转。

![](https://p.ipic.vip/07szw7.jpg)

### 2020-01-09[好文]

如果你关注 Node.js 社区，那么你一定记得 Node.js v12 一个非常重磅的功能就是，内核的 HTTP Parser 默认使用 llhttp，取代了老旧的 http-parser，性能提升了 156%。

但知其然也要知其所以然，llhttp 是如何做到这一点的呢？《llhttp 是如何使 Node.js 性能翻倍的？》进行了详细的阐述。

地址： https://zhuanlan.zhihu.com/p/100660049

### 2020-01-08[好文]

昨天介绍了《当你在浏览器中输入 google.com 并且按下回车之后发生了什么？》，今天推荐一篇《图解浏览器的基本工作原理》。 讲的内容主要是浏览器渲染相关的，让你在更大的视角，更细的粒度了解浏览器原理，最可贵的是文章通俗易懂，图文并茂，对于想了解浏览器原理而又找不到好的入门资料的同学来说很有用。

其中还提到了很多延伸知识，比如事件冒泡更微观角度是什么？事件的 passive：true 做了什么？为什么很多时候我们绘图不流畅以及如何实现平滑绘图？

```js
window.addEventListener("pointermove", (event) => {
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

![](https://p.ipic.vip/soq02d.jpg)

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

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://p.ipic.vip/bp35i7.jpg">
