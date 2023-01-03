# 每日一荐

![](https://p.ipic.vip/4m3kvb.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2021-05

### 2021-05-28[好文]

一个教你如何写 AST 插件的教程，真的是图文并茂，并且可交互，做的很用心了。

虽然这个文章是基于 Babel 插件讲的，但是看完之后基本可以写任意一个 AST 插件。

![](https://p.ipic.vip/ieplbx.jpg)

![](https://p.ipic.vip/17zhrs.jpg)

地址：https://nan.fyi/debugger

### 2021-05-27[网站]

一个可爱风的**前端事件可视化**网站。 它可以模拟事件的触发过程并通过可视化的方式展示出来， 支持用户自定义一些修改。如果你是新手，这绝对是一个不可多得的前端事件系统知识学习工具。

![](https://p.ipic.vip/qbc6dt.jpg)

地址： https://domevents.dev/

### 2021-05-26[工具]

我一直想做又一直没有时间做的东西终于有人做了，而且开源出来了。

这是一个 vscode 工具，可以根据运行时数据自动生成 TypeScript 类型。

目前项目还是比较初级的阶段，建议大家先观望一段时间后使用。

![](https://p.ipic.vip/pk1gkt.gif)

地址：https://github.com/rikukissa/typehole

### 2021-05-21[好文]

git 合并大家都用过。那 git 合并有几种模式？它们之间有什么区别你知道么？

简单来说有四种：

- fast-forward。如果从 A 拉取新分支并合并回 A，在此期间 A 没有变化，则默认执行 fast forward，git 历史看不到分支合并的过程，这是默认行为，你可是适用 no-ff 在合并后创建一个新的提交。
- no-ff(no fast-forward)
- recursive 如果从 A 拉取新分支合并回 A，在此期间 A 发生了变化，则只能使用 recursive 和 sqush，两者区别在于 recursive 会保留 A 的所有 commit，而 squash 则会仅生成一个 commit，因此使用 squash 的历史记录会更干净。
- squash

相信内容请看文章。

地址：https://blog.dnsimple.com/2019/01/two-years-of-squash-merge/

### 2021-05-17[好文]

前端如何监听静态资源的加载错误？

如果静态资源加载错误，前端该如何处理？重新加载页面？按需加载出错的资源？

这篇文章告诉你答案。

地址：http://www.alloyteam.com/2021/01/15358/

### 2021-05-13[工具]

这个工具还蛮有意思的，它是一个 react 高阶组件，可以帮助你可视化组件的盒模型。

![](https://p.ipic.vip/i9g00z.jpg)

仓库地址：https://github.com/raunofreiberg/inspx

### 2021-05-12[教程]

微软出品的一个 Rust 基本教程，基本内容就是一些基础语法，语言特性， 以及一个 TODOList 的 demo。除了最后一部分 TODOList 比较复杂外，其他模块还是相当容易的。

https://docs.microsoft.com/zh-cn/learn/paths/rust-first-steps/

### 2021-05-11[好文]

原文标题《探秘神奇的运动路径动画 Motion Path 》。

众所周知，使用 CSS 写动画很难对路径等做特别精细的处理，这也是大多数动画库都是 JS 的原因之一。 这篇文章详细讲述了 CSS Motion 是如何解决这个问题的。

文章地址：https://github.com/chokcoco/iCSS/issues/113

### 2021-05-10[库]

之前我写过一篇文章 [你不知道的前端异常处理（万字长文，建议收藏）](https://lucifer.ren/blog/2020/10/02/error-catch/)，里面就详细了异常就是一个数据结构，异常处理就是对应这种数据结构的算法而已。

异常有很多最佳实现，比如 error chain，这在许多语言其实都已经有了，而 JS 是没有的，只能通过类似 node-verror 这样的库来实现。

而 error chain 目前已经 stage 3 了，提案链接：https://github.com/tc39/proposal-error-cause。后期可能会被各大浏览器和 node 等 JS 执行环境所实现。

地址：https://github.com/joyent/node-verror

### 2021-05-09[工具]

一款通过模拟真实用户操作来白嫖 tinypng 的 gulp 插件。源码很简单，你可以将其轻易地移植到其他工具，比如 webpack，vite，esbuild 等。

https://github.com/fulme/tinypng-free

### 2021-05-08[工具]

微信浏览器调试工具（目前仅支持安卓）

地址：https://debugx5.qq.com/

### 2021-05-07[工具]

如何观察你的电脑上的 DNS 请求呢？

由于 DNS 查询同时使用了 TCP 和 UDP，因此我们可以考虑使用 tcpdump 来进行查看。这虽然可以达到目标，但是 tcpdump 信息比较繁琐。

于是有人制作了一个 DNS 工具 dnspeep（需下载安装），帮助你查看本机发送的所有 DNS 查询。地址：https://github.com/jvns/dnspeep

另外它还搞了两个 DNS 小工具（在线版，无需下载）：

- https://dns-lookup.jvns.ca 一个发送 DNS 请求的工具。
- https://dns-lookup.jvns.ca/trace.html 一个可以查询 DNS 详细工具过程的工具

### 2021-05-06[工具]

![](https://p.ipic.vip/r9vqzm.jpg)

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7he9xdtmyj30by0byaac.jpg">
