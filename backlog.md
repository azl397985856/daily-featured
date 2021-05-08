## 2021-05-12[教程]

微软出品的一个 Rust 基本教程，基本内容就是一些基础语法，语言特性， 以及一个 TODOList 的 demo。除了最后一部分 TODOList 比较复杂外，其他模块还是相当容易的。

https://docs.microsoft.com/zh-cn/learn/paths/rust-first-steps/

## 2021-05-11[好文]

原文标题《探秘神奇的运动路径动画 Motion Path 》。

众所周知，使用 CSS 写动画很难对路径等做特别精细的处理，这也是大多数动画库都是 JS 的原因之一。 这篇文章详细讲述了 CSS Motion 是如何解决这个问题的。

文章地址：https://github.com/chokcoco/iCSS/issues/113

## 2021-05-10[库]

之前我写过一篇文章 [你不知道的前端异常处理（万字长文，建议收藏）](https://lucifer.ren/blog/2020/10/02/error-catch/)，里面就详细了异常就是一个数据结构，异常处理就是对应这种数据结构的算法而已。

异常有很多最佳实现，比如 error chain，这在许多语言其实都已经有了，而 JS 是没有的，只能通过类似 node-verror 这样的库来实现。

而 error chain 目前已经 stage 3 了，提案链接：https://github.com/tc39/proposal-error-cause。后期可能会被各大浏览器和 node 等 JS 执行环境所实现。

地址：https://github.com/joyent/node-verror

## 2021-05-09[工具]

一款通过模拟真实用户操作来白嫖 tinypng 的 gulp 插件。源码很简单，你可以将其轻易地移植到其他工具，比如 webpack，vite，esbuild 等。

https://github.com/fulme/tinypng-free

## 2021-05-08[工具]

微信浏览器调试工具（目前仅支持安卓）

地址：https://debugx5.qq.com/

## 2021-05-07[工具]

如何观察你的电脑上的 DNS 请求呢？

由于 DNS 查询同时使用了 TCP 和 UDP，因此我们可以考虑使用 tcpdump 来进行查看。这虽然可以达到目标，但是 tcpdump 信息比较繁琐。

于是有人制作了一个 DNS 工具 dnspeep（需下载安装），帮助你查看本机发送的所有 DNS 查询。地址：https://github.com/jvns/dnspeep

另外它还搞了两个 DNS 小工具（在线版，无需下载）：

- https://dns-lookup.jvns.ca 一个发送 DNS 请求的工具。
- https://dns-lookup.jvns.ca/trace.html 一个可以查询 DNS 详细工具过程的工具

## 2021-05-06[工具]

![](https://tva1.sinaimg.cn/large/008i3skNly1gptj6rdktlj30go0esq3y.jpg)
