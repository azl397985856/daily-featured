# 每日一荐

![](https://p.ipic.vip/8nz0hv.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2021-06

### 2021-06-23[仓库]

这个仓库是 JavaScript 的知识图谱，目前更新了 JavaScript 基础，HTML & CSS 以及 JavaScript 数据结构与算法。

我看了一下，内容很简单，干货不多，更适合初学者或者是查缺补漏，不适合拿来**修炼**。不过这种将知识点浓缩到一张超级大的图片中的做法还是很震撼的。尤其是我第一次打开的时候。

![](https://p.ipic.vip/o9udce.jpg)

地址：https://github.com/mechaniac/Map-of-Javascript

### 2021-06-22[网站]

我们很多时候都需要找一些相对权威的资料。比如一个 JS 特性不清楚的话（比如多个浏览器对同一个特性实现不同，谁对？），可以翻阅 ECMA 规范。

这次分享的是一个查阅 RFC 规范的网站。RFC 的内容很多，比如大家常常听到的 DNS，TCP 等等。如果你有什么拿不准的，可以过来查查看。

> 这个网站相应速度很快

地址：https://rfc.fyi/

### 2021-06-21[好文]

HMR 是大家都在用的一个特性，webpack 内置 HRM。那么 HMR 的原理你知道吗？

地址：https://mp.weixin.qq.com/s?__biz=Mzg2ODQ1OTExOA==&mid=2247491058&idx=1&sn=05b0ddcc20627c46931bafce4d4a745f

### 2021-06-19[仓库]

Mock Servic Worker （简称 MSW）是一个通过 ServiceWoker 拦截请求实现**无需更改代码实现 mock** 的库，支持 fetch，xhr，graphql。

如果你在为单元测试 mock 接口烦恼，不妨试一下。

地址：https://github.com/mswjs/msw

### 2021-06-18[仓库]

很多人都知道 react 有 next.js 这样的前后端同构框架，用于快速开发同构项目。相应地，vue 有 nuxt.js。

不过它们都是基于 node.js 的，那基于 deno 的前后端同构框架呢？aleph.js 就是一个基于 react 的前后端同构框架，并且是基于 deno 运行时的。

地址：https://github.com/alephjs/aleph.js

<!-- ### 2021-06-17[仓库]

zx 是一个谷歌出品的让你使用 JS 编写“bash” 脚本的工具。从而将 JS 的便捷性和 bash 提供的底层能力相结合。

https://github.com/google/zx -->

### 2021-06-16[仓库]

越来越多的人用性能更好的语言写一些基础工具并转为 wasm 给 JS 调用。 wasm-bindgen 就是一个可以支持 rust 和 JS 互操作的 rust 库。

https://github.com/rustwasm/wasm-bindgen

### 2021-06-14[好文]

大多数时候，当公司发生故障的时候，我们总是倾向于找负责人（背锅侠），这本身没有什么错误，可以这却可能导致一些人由于怕担责任而故意掩盖甚至扭曲一些东西，这是很可怕的。 那么如何做事故的复盘？这篇文章提供了一个思路。

文章地址：https://mp.weixin.qq.com/s/_q0n-gK7tSQCIiE7d8GJCw

### 2021-06-09[好文]

以前我做过很多技术调研或者出一些技术方案。这个过程免不了对各种方案进行对比。如果我让你对比一下 react 和 preact 你会如何对比呢？从几个方向？

这里推荐一篇关于《react 升级调研 - react or preact》技术调研文章。大家可以看看大佬是如何做技术调研的，提供一些思路。

地址：https://github.com/mq2thez/blog/blob/main/upgrade-react-etsy/preact-vs-react.md

### 2021-06-08[仓库]

很多时候，我们会做一些 checklist，方便我们最后做一些校验。 比如火箭发射前，会对着清单逐一检查完毕才最终发射。

我接触比较多的是发布清单，每次发布前都会对着清单检查一遍。有的是自动检查，有的是手动检查。

这里给出了一个腾讯的安全清单，供你对自己的代码安全性进行自检。

> 安全无小事！

地址：https://github.com/Tencent/secguide/blob/main/JavaScript%E5%AE%89%E5%85%A8%E6%8C%87%E5%8D%97.md#1

除了 JS，提供了其他语言的，参考：

- https://github.com/Tencent/secguide

### 2021-06-07[好文]

原文标题：《居然有比 npm link 更好的调试？》

讲述了如何使用 yalc 来提高本地开发 npm 包的调试效率。

地址： https://mp.weixin.qq.com/s/kG5cXpohvQBFVigaQk2a7w

### 2021-06-06[小知识]

nodejs 中异步信息很难跟踪，比如如下代码：

```js
fs.open("hello.txt", (err, res) => {
  // something
  console.log("cb");
});
```

如果回调函数失败了，那么调用堆栈就消失了，也就自然无法复现完整的操作路径，这在大项目中是致命的。

Node.js v8.x 增加了 async hooks 模块很好地解决了这个问题，并且异步资源还可以使用 async storage 共享一些数据。

### 2021-06-05[框架]

eggjs 是一个很火的阿里出品的 nodejs 框架。不过我一直认为 ta 做的还不够，尽管 ta 自己宣称的是**企业级 nodejs 框架**。

相比之下，Nestjs 更接近我心目中的**企业级框架**，并且 Nestjs 还提供完成的学习教程（文字和视频都有，不过视频只有几个是免费的）。

地址：https://docs.nestjs.com/

### 2021-06-04[网站]

一个可视化 TypeScript AST 节点的网站。与其他 AST 可视化网站不同的是其专门用于 TS 的可视化，有 Node，Symbol 这种 TS 专用的节点显示。如果你要了解 TypeScript 的原理或者准备基于其进行改造，那么这个东西一定不要错过了。

![](https://p.ipic.vip/8pwlux.jpg)

地址：https://ts-ast-viewer.com/#code/DYUwLgBAhgXAzmATgSwHYHMIF4BEBGHAKEKmwhwCYcg

### 2021-06-03[框架]

astro 是 snowpack 团队开发的项目。由于之前看过一个关于 astro 的演示视频，因此对它影响还蛮深的。

它的定位其实不是框架，只不过我找不到很好的词去形容。 astro 本身可以和其他框架（react，vue， svelte 等）进行集成。另外它本身也提供了一些特有语法，也有自己的文件后缀 .astro 解析（类似于 vue 提供了模板语法，并可解析自己的 vue 文件）。

除此之外，它还有一些很有意思的特性。比如：

- 默认 0 JS。
- 原生支持 md 文件的解析，并渲染成 html。

所以我认为 astro 是一个优雅降级的前端框架。

地址：https://github.com/snowpackjs/astro

### 2021-06-02[好文]

简单使用 esbuild-loader 替换 babel-loader 就把项目构建速度提升了一倍以上？

![](https://p.ipic.vip/gxsupj.jpg)

文章地址：[webpack or esbuild: Why not both?](https://blog.logrocket.com/webpack-or-esbuild-why-not-both/ "webpack or esbuild: Why not both?")

### 2021-06-01[工具]

synthesia 是一个 AI 工具，允许你通过**上传一个带人物的视频并录入一段文字**，从而上视频中的人“说”出你写好的文字的工具。

地址：https://www.synthesia.io/

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://p.ipic.vip/bp35i7.jpg">
