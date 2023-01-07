# 每日一荐

![](https://p.ipic.vip/j7mttv.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2022-09

### 2022-09-30[好文]

文章介绍了如下几种可以不使用括号执行函数的方法。

比如 alert(1337) 可以写成：

```js
alert`1337`;
```

甚至是这样：

```js
[].sort.call`${alert}1337`;
```

这有什么用？

- 有的放地方会静态检测代码有没有函数执行代码（invoke）。
- 看起来很酷 😎
- 。。。

via: https://portswigger.net/research/the-seventh-way-to-call-a-javascript-function-without-parentheses

### 2022-09-29[工具]

一个 nodejs 库，可以将你的 nodejs 应用打包为二进制包，支持多种操作系统。打包后就可以在不安装对应 nodejs 环境的情况下使用软件，因为 pkg 已经将依赖打包进去了。

via: https://github.com/vercel/pkg

### 2022-09-27[技巧]

今天学到了一个很巧妙的做图技巧。

如下图是中国人民银行日前发布的《2022 年人民币国际化报告》 中的一张图：

![](https://p.ipic.vip/w0fsrv.gif)

人民币如果和其他货币一个纵轴的话， 那么就会显得人民币很不显眼（事实就是这样）。 这里直接将人民币的纵轴画到右侧，这样从图上看人民币和其他的就差不多，甚至还特别领先！

因此如果你想要体验你是前 x 名，但是和前面的 x - 1 名差距非常大，就可以试试这个技巧。

### 2022-09-23[好文]

webpack 项目如何配置 sourcemap， 开发环境和生成环境有什么不同？

我想仅仅映射到原文件怎么配置？我想映射到具体的行呢？ 我想映射到具体的行列信息呢？我不想把 sourcemap 和源文件一起打包，因为那样体积太大了，怎么配置？等等等等。。。

正所谓难者不会，会者不难。其实你只要知道了有几种配置，然后根据自己的情况排列组合即可。

via: https://mp.weixin.qq.com/s/0Sq9Z0i9Q3N0likFlZB0rQ

### 2022-09-16[插件]

有些网站很讨厌， 给你禁用右键(right-click)，不能把复制之类的。 这个 chrome 插件可以帮你解决这个问题。 使用方式很简单，安装好后只有点一下就行。

via: https://chrome.google.com/webstore/detail/allow-right-click/hnafhkjheookmokbkpnfpmemlppjdgoi/related?hl=en-US

### 2022-09-15[网站]

又一个可以可视化 Github 用户资料的网站，包含的信息非常全，包括 star， code 和 code review 等。

![](https://p.ipic.vip/bn2ws6.jpg)

via: https://ossinsight.io/analyze/azl397985856

### 2022-09-14[好文]

elab 团队的《联机游戏原理入门即入土 -- 入门篇》， 对游戏开发感兴趣的可以读一读。

via: https://mp.weixin.qq.com/s?__biz=MzkxNTIwMzU5OQ==&mid=2247495741&idx=1&sn=140145af9fd8e838a5ded3200b3bd049&c

### 2022-09-13[网站]

输入 URL，它能够帮你分析这个网站的技术栈，并提供一些分析和建议。 比如：

- 包的大小版本
- 包的风险
- 包是否过期
- 等等

via: https://gradejs.com/w/leetcode-solution.cn

### 2022-09-09[仓库]

一个持续更新的 **打包 JavaScript 库的现代化指南**。

里面很多提到的大多数规则都是开源社区一致认可的最佳实践。如果你在开发为他人服务的 JavaScript 库代码， 那么可以参考下，即使你是在做公司内部项目。

> 有中文版本

via: https://github.com/frehner/modern-guide-to-packaging-js-library

### 2022-09-08[好文]

上个月刚刚更新的 Chrome devtool 调试技巧 **Modern web debugging in Chrome DevTools**， 这几个功能我个人非常期待，或许会大大提高我的调试效率。

除此之外还有一些其他的实验功能也很不错，推荐大家打开尝试一下。

![](https://p.ipic.vip/ymv8tw.jpg)

via: https://developer.chrome.com/blog/devtools-modern-web-debugging/

### 2022-09-07[工具]

之前介绍过一个在线可视化生成 **nginx** 的网站。 而这个工具是类似的， 是一个 nginx 管理前端，通过它可以启动 nginx 服务并通过 UI 直接生成 nginx 配置。

via: https://nginxproxymanager.com/screenshots/

### 2022-09-06[工具]

一个开源的 lldap， 可用于小型团队的验证服务。之前介绍过很多这种开源的给小公司团队的工具，比如堡垒机等。

via: https://github.com/nitnelave/lldap

### 2022-09-05[好文]

tsc --listFiles 可以列出来 ts 处理的所有文件。基于此可以使用一个工具对这些文件进行可视化分析，类似于 webpack 的包可视化工具。本文讲解了如何使用这个工具来分析并加速 tsc 编译速度。

![](https://p.ipic.vip/wjvoe8.jpg)

via: https://effectivetypescript.com/2022/07/30/treemap-for-source-files/

### 2022-09-04[工具]

又一个检测 JS 内存泄漏的网站。

你只要告诉它你网站的进入和退出方法就可以使用 cli 来检测潜在的内存泄漏点。

![](https://p.ipic.vip/p3ffar.jpg)

https://facebookincubator.github.io/memlab/

### 2022-09-03[网站]

目前国内比较便宜的 CDN 服务商（一个人搞的，好像不怎么出名）。感兴趣的可以先免费体验一个月。

via: https://www.dfyun.com.cn/

### 2022-09-02[好文]

git 就是一个分布式存储系统。 我之前也从零实现过简化版的 Git。

而这篇文章更为细致，并配有大量图片，如果你对 git 原理感兴趣，非常值得深入阅读。目前已经更新了三篇。

![](https://p.ipic.vip/8ayd3n.jpg)

via: https://github.blog/2022-08-29-gits-database-internals-i-packed-object-store/

### 2022-09-01[类库]

immerjs 是一个对标 immutable 的状态管理辅助库，优点是使用简单，一个 api 就可以搞定。缺点的话大概就是部分场景性能略差。至于原因，可以看看我之前写的这篇文章 《immutablejs 是如何优化我们的代码的？》，地址：https://lucifer.ren/blog/2020/06/13/immutable-js/。

via: https://immerjs.github.io

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://p.ipic.vip/bp35i7.jpg">
