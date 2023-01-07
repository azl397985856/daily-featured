# 每日一荐

![](https://p.ipic.vip/2m7umy.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2022-02

### 2022-02-28[工具]

伽马影迷插件是一个浏览器插件，安装好之后你就可以在某一个视频评分网站看到所有知名视频评分网站的评分。

如下图，当我打开豆瓣的时候，下面就显示了包括豆瓣在内的若干其他平台的评分。

![](https://p.ipic.vip/80gu22.jpg)

除了看评分，还可以找片源，甚至可以找解说视频。

地址：https://ggt1024.com/#/productJwksExt

### 2022-02-27[工具]

testflight 是一个 apple 推出的工具，允许没有上架 apple store 的应用被用户安装。

如果你想做上线之前的测试，使用它会很有用。你只需要生成一个测试链接，用户点击链接就可以下载安装并使用了。

![](https://p.ipic.vip/lqc3zl.jpg)

地址：http://testflight.apple.com

### 2022-02-26[工具]

在实体书中我们可以用高亮笔画重点，之后还可以**复习**。而看电子书呢？我们可以使用 readwise。 如果你是电子书的重度爱好者，那么可以试试这个软件。

地址：https://readwise.io/

### 2022-02-25[技巧]

RSS 是我跟上社会节奏的一个重要工具。对于 bilibili，我们可以使用如下的地址来订阅 RSS。

https://rsshub.app/bilibili/user/video/${userid}

其中 userid 就是点击个人主页后的 url 中最后的那串数字。比如我的 bilibili RSS 地址就是：https://rsshub.app/bilibili/user/video/36074883

将其添加到 RSS 阅读器就可以”第一时间“收到更新了。

对应地，微信公众号可以使用这个工具生成 RSS 链接：https://werss.app/

比如我的公众号《力扣加加》的 RSS 就是 https://cdn.werss.weapp.design/api/v1/feeds/b4cf5a3e-fbea-4cc1-b8e8-50a448c5e9bc.xml

![](https://p.ipic.vip/bxzmuq.jpg)

### 2022-02-24[好文]

《Zoom 会议摸鱼学》讲的是如何使用虚拟摄像头将一段视频投射到 zoom 的接收源上，从而实现其他人通过**摄像头看到的其实是一个实现录制好的视频**的效果。

你将会学到：

- 如何使用 OBS
- 如何使用虚拟摄像头
- zoom 更换背景，从而避免自己家被看到的尴尬

地址：https://sspai.com/post/71404

### 2022-02-23[好文]

作者的 3-2-1 备份法则。

即主数据要有：

- 三个备份
- 两种媒介。比如磁盘一种，磁带一种
- 一个备份 offsite。就是让备份之间离得远一点，避免火灾地震等等因素导致备份全部挂掉。

我个人比较推荐的做法是使用`云同步 + nas`，如果你还有精力就可以使用磁带等其他媒介就真正做到了 `3-2-1` 法则。

### 2022-02-22[工具]

小程序越来越火， 很多公司也逐步发力小程序。有的是开发对应平台的小程序（众多中小公司都有），有的是自建小程序引擎供租户开发和运行小程序（微信小程序，支付宝小程序，百度小程序，快手小程序等等就是例子）。

对于前者，大家可以通过跨平台开发工具，比如 tarojs 生成多种小程序代码。

对于后者，公司会组建团队开发小程序运行时，工具等。这些投入是巨大的，而 finclip 就是这样的一个工具，你可以直接部署到云服务器上，直接就拥有了自己的小程序运行时，工具等一整套小程序生态链。

> 即使你公司不打算使用 finclip 也不妨参考一下他的文档，工具以及部分原理实现。

地址：https://www.finclip.com/

### 2022-02-21[好文]

一个典型的高可用系统一定有 load balance 的存在。用户的请求全部会经过 load balance 的代理转发到 service worker 集群。

如果 service worker 集群中删除或增加机器，如何保障尽可能少影响现有用户？一致性哈希是一种方法，本文详细讲述了一致性哈希算法的内容以及实际中的应用。

地址：https://segmentfault.com/a/1190000021199728

### 2022-02-18[仓库]

超级迷你版的编译器实现，核心大概 **200 行左右**，代码基于 JS。即使不懂 JS 也没有关系，里面完全没有用到复杂语法特性。

麻雀虽小，五脏俱全。the-super-tiny-compiler 有完整的编译器模块，包括 parser 进行词法和语法分析，transformer 进行语法转化，generator 生成最终代码。

相信看完这 200 行左右的代码，你能对编译器做了什么事情有一个大致的认识，这对你学习更高深的内容有很大帮助（比如如何给语言添加一个新的语法）。

地址：https://github.com/jamiebuilds/the-super-tiny-compiler

### 2022-02-17[类库]

`ci-info` 整理了市面上绝大多数的 ci 平台的信息。这样你可以通过 `ci-info` 获取到当前代码执行的环境。如果当前执行环境是在 ci ，那么其大概率还能获取到具体的 ci 平台信息。这在你需要在不同环境执行不同逻辑的时候很有用。

```js
var ci = require("ci-info");

if (ci.isCI) {
  console.log("The name of the CI server is:", ci.name);
} else {
  console.log("This program is not running on a CI server");
}
```

具体支持的 ci 平台列表可以在主页的 Supported CI tools 部分查到。

地址：https://github.com/watson/ci-info

### 2022-02-13[仓库]

除了算法，面试另外一个大头是系统设计，这在国外尤其如此。

这个仓库从大的方向讲述了系统设计中的常见场景，比如如何设计高可用系统。这个仓库 star 非常多，从侧面反应项目质量还行，掘金官方也参与了仓库的翻译工作，大概看了下，翻译质量不错。

地址：https://github.com/donnemartin/system-design-primer

### 2022-02-12[网站]

codetop 是微软员工整理的国内知名互联网公司的面试题，提供进度管理，按照频率排序，根据公司搜索等**其他网站需要会员才有的功能**。

> 不知道其他公司会不会起诉他们

地址：https://codetop.cc/home

### 2022-02-11[网站]

nginx playground 是一个在线配置和运行 nginx 的网站，在这里你可以使用 curl 或者 http 实时看到配置的 nginx 的效果。和其他 playground 一样， 它可以将你的配置通过链接分享给其他人。

地址：https://nginx-playground.wizardzines.com/

### 2022-02-10[网站]

这是一个在线学习和练习正则表达式（regex）的网站。

这个网站竟然提示我今天学的够多了，让我明天来？ 第一次见这样的提示，还能**根据你的错误率掌控你的学习进度**，如果你能力够强且足够细心的话应该可以一次不休息通关,必须推荐给大家。

附上我的通关截图：

![](https://p.ipic.vip/jgupt0.jpg)

地址：https://www.executeprogram.com/courses/regexes

### 2022-02-08[好文]

文章标题《TypeScript Features to Avoid》，大概意思是那些 TypeScript 的特性应该避免使用。

其中第一个特性我在工作中也碰到过坑，公司甚至专门为这个定了一个 eslint 规则。其他倒没太大感觉。大家可以把这些作为一个最佳实践来做吧。

文章地址：https://www.executeprogram.com/blog/typescript-features-to-avoid

> 另外有一个小插曲，文章中提到的 private field ，我使用 TypeScript Playgound 测试发现 #filed 的方式表示 private field 的方式在 ts 中跑不通，各位知道哪里出问题了么？ 附上 playgound 地址：https://www.typescriptlang.org/play?ts=4.6.0-dev.20220116#code/MYGwhgzhAECyCeBhcVoG8BQ1oAcBOAlgG5gAuAptAGYHkgAmAjAFzQSmEB2A5tALzQA5IIDcWaMAD2ndngCuwUpLwAKAJTpx2bFJmSQ5AHQhJ3FaQAWBCIZp0mAGmiXrt2gwBMa8QF9xAYjtPVlkCHn4hUQwfIA

### 2022-02-07[工具]

大家一定特别熟悉 **转到定义（Go To Definition）** 这个功能。不过可惜的是我们无法跳转到 css 的定义。

而 css-navigation 是一个可以支持直接跳转到 css 定义的 vscode 插件。

地址：https://marketplace.visualstudio.com/items?itemName=pucelle.vscode-css-navigation

### 2022-02-03[视频]

一个非常好的关于 nx 科普的视频，尤其推荐 8:12 开始的那个分享。

地址：https://www.youtube.com/watch?v=VKVTzVM0nVM&list=PLakNactNC1dG1CoyVWFppw3X8hnXRhFuy

### 2022-02-02[好文]

swc 作者打算使用 Go 重写 tsc，目的是为 tsc 提速，进而减少大家 CI/CD 的时间。 该项目目前正在进行中。

值得注意的是作者之前已经让 swc 支持 ts 的编译工作了，且速度比使用 ts 原生编译器快很多。后续它还会做一些其他工作，旨在全面提升前端编译速度。

如下是他的 roadmap

- ✅ Transpilation (replacing Babel)
- 🚧 Type Checking (replacing tsc)
- 🚧 Minification (replacing Terser)
- 🚧 Bundling (replacing webpack)

地址：https://kdy1.dev/posts/2022/1/tsc-go

### 2022-02-01[好文]

你听说过 React Server Componnet 么？

React Server Component 是一种只运行在服务端的组件，它的主要目的是为了解决以下两个问题：

1. 如果一个组件的渲染依赖于一些请求，那么组件渲染速度会严重收到请求的时间（要知道网络 IO 速度是很慢的），让服务端渲染这些组件，并在客户端进行直接展示（就是不走 render 逻辑，直接服务端吐出一个 dom 字符串，客户端直接用就行）。

2. 如果某个组件依赖了一个很大的包（比如一些 markdown 解析包就很大），那么会导致客户端需要先加载一个很大的 js 然后运行并渲染。如果组件在服务端 render，那么客户端就不需要加载这个 JS，速度也就提升了。

总而言之，React Server Componnet 就是为了让“渲染”更快。

这个文章详细讲述了 React Server Componnet 是什么，以及其原理。

React Server Componnet 其中的序列化原理我觉得很有意思，大家如果需要做序列化可以参考一下他们的实现。

他们是根据 filename 做序列化的。由于服务端和客户端都可以拿到 filename 指定的组件内容，并且 filename 是字符串可直接序列化。核心代码：

```js
{
  // The ClientComponent element placeholder with "module reference"
  $$typeof: Symbol(react.element),
  type: {
    $$typeof: Symbol(react.module.reference),
    name: "default",
    filename: "./src/ClientComponent.client.js"
  },
  props: {
    // children passed to ClientComponent, which was <ServerComponent />.
    children: {
      // ServerComponent gets directly rendered into html tags;
      // notice that there's no reference at all to the
      // ServerComponent - we're directly rendering the `span`.
      $$typeof: Symbol(react.element),
      type: "span",
      props: {
        children: "Hello from server land"
      }
    }
  }
}

```

具体内容可以参考下原文。

地址：https://blog.plasmic.app/posts/how-react-server-components-work/

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://p.ipic.vip/bp35i7.jpg">
