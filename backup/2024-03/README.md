
# 每日一荐

![](https://p.ipic.vip/0bhil1.jpg)![](https://p.ipic.vip/0bhil1.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2024-03

### 2024-03-31[好文]

Web3 是一个新兴的概念，它是基于区块链的下一代互联网。它的核心思想是去中心化，让用户拥有自己的数据，而不是被大公司控制。

本文将详细介绍Web3 DApp开发的架构、技术，以及使用哪些工具，并给出完整示例。文章涉及

- 区块链：以以太坊（Ethereum）为主流，也包括Solana、Aptos等其他非EVM链。区块链本身是软件，需要运行在一系列节点上，这些节点组成P2P网络或者半中心化网络。节点不仅负责接收新的输入并生成新的区块，还需要存储区块链运行时产生的所有数据，并负责同步、对外提供查询等RPC服务。

- 钱包：帮助用户管理自己在区块链上资产的软件，加密存储用户的私钥。当用户需要和区块链交互时，就需要用到私钥签名；

- 智能合约：运行在区块链上的一段托管程序，主要用来和外部账户交互；

- UI：这里特指前端页面，因为直接通过RPC调用合约仅限个别高级用户，普通用户仍需要一个前端页面，并通过JavaScript脚本配合钱包签名与合约交互。

文章可贵的地方在于你可以根据它从头到尾开发一个 web3 应用，虽然并没有讲如果使用钱包以及如何签名等内容，但是这些内容网上资料很多，大家可以自行搜索。

via: https://www.liaoxuefeng.com/article/1529816679448611

### 2024-03-25[好文]

一个介绍如何在你的 IDE 中使用 GitHub Copilot 的文章。它介绍了一些使用技巧，最佳实践等等。

对于我来说，最有用的两条是：

- “1. Open your relevant files”。我之前以为 copilot 会自动扫描本地文件。但实际上它只会扫描本地中打开的文件。
- “10. Use the @workspace agent” 使用 workspace 指令可以让 copilot 在整个项目中搜索，而不是网络上，这样可以针对你项目进行一些响应。比如你可以问“项目的类型定义写在哪个文件”等等。

via: https://github.blog/2024-03-25-how-to-use-github-copilot-in-your-ide-tips-tricks-and-best-practices/

### 2024-03-20[工具]

oxc 是一套 JavaScript 工具集合，用 Rust 写的。比如用于 lint 的 oxlint， 用于构建的 rspack 等等。

![](https://p.ipic.vip/vefwci.png)

via: https://oxc-project.github.io/

### 2024-03-19[网站]

FIRE(Finance, Independence, Retire Early) 是一个理财自由的概念，它的核心思想是通过投资和理财，让自己的被动收入大于支出，从而实现财务自由。

这里有一个网站，它可以帮助你计算 FIRE 的时间。你可以输入你的年龄，目前的资产，每年的支出，以及你的投资收益率，然后它会帮你计算出你实现 FIRE 的时间。实际上除了输入这些信息，你还可以输入两个额外信息：通货膨胀率和稳定年收入。

如果你已经30岁以上了，那么考虑 70 年基本也就是极限了。比如你的投资收益率是 4%，通货膨胀率是 2.229%（中国近十年通胀率平均在 2.229% 左右），稳定年收入是 30000，每年需要花 12w，那么要活 70 年则需要大约 350w 本金。你可以通过这个网站来计算你的 FIRE 时间。

![](https://p.ipic.vip/61d5aw.png)

via: https://firecalculate.github.io/

### 2024-03-15[工具]

之前公司做发布系统，有一个需求是要在浏览器中直接访问服务器的终端。用户可以直接在浏览器访问服务器的终端，而不需要通过 ssh 客户端。直接集成到了发布系统，非常方便。

它的原理类似于今天介绍的这个工具 webtty。webtty 是一个基于 Web 的终端，它可以让你在浏览器中直接访问服务器的终端。

via: https://github.com/butlerx/wetty

### 2024-03-14[好文]

线上代码大多会经过 sourcemap， 定位问题比较困难。比较有名的系统是 sentry，但是它是收费的。另外大家可能对 sentry 是如何工作的比较好奇，那么这篇文章就比较适合你了。

这篇文章介绍了如何使用 sourcemap 来还原，帮助大家更好的定位问题。 并提供了一些实际的例子 https://github.com/joeyguo/noerror ，大家甚至可以直接使用这个系统。

via: https://github.com/joeyguo/blog/issues/14

### 2024-03-13[工具]

Million Lint 处于公开测试阶段，它通过静态编译 + 动态运行的方式，让你能够直接在 IDE 中看到每一个组件的耗时情况，非常的方便。

官方的介绍：优化 React 性能，让您的 React 在几分钟（而不是几个月）内速度提高 70%。当然这个数字仅仅是其内部测试的结果，并且是相对简单的程序，大家可以自己试试，欢迎大家来给我反馈你们项目的实际效果。

官方博客对其进行了详细介绍，大家可以通过这个链接查看 https://million.dev/blog/lint 。

via: https://github.com/aidenybai/million

### 2024-03-03[插件]

“大声朗读：使用文本转语音阅读网页” 是一个 Chrome 插件，它可以帮助你将网页上的文字转换为语音，然后朗读出来。

有的时候面对大量文字，我们可能会感到疲劳，这个时候我们可以使用这个插件，让它帮助我们朗读，这样我们就可以不用亲自阅读，而是听它朗读。

via: https://chromewebstore.google.com/detail/%E5%A4%A7%E5%A3%B0%E6%9C%97%E8%AF%BB%EF%BC%9A%E4%BD%BF%E7%94%A8%E6%96%87%E6%9C%AC%E8%BD%AC%E8%AF%AD%E9%9F%B3%E9%98%85%E8%AF%BB%E7%BD%91%E9%A1%B5/nipboejoampbggkgkdjbogkacmmegcmm?hl=zh-CN

### 2024-03-02[工具]

系统信息 (System Information) 是一个用于 Node.js 环境下获取系统信息（如 CPU、内存使用情况、磁盘空间、网络状态等）的库。

它使用简单，跨平台，可以获取大量的信息，包括如下几个关键点：

- 可以以各种格式（JSON、HTML、Markdown 等）输出信息
- 可以获取 CPU、内存、磁盘、网络、操作系统等方面的信息
- 支持所有主流的操作系统（包括 Windows、MacOS 和 Linux 等）
- 输出的信息包含详细的数据，如 CPU 使用率、内存空闲量、磁盘剩余空间等
- 功能齐全，支持许多高级功能，如获取 Docker 容器列表、监视嵌套虚拟化等

但是也有一些缺点。我们之前使用过它，发现尽管我只使用了它的一小部分功能，但是它还是使我的包体积增加了很多。因此如果你的项目对包体积有要求，那么你可能需要考虑一下。可以选择参考它的源码，然后在自己仓库中实现一些功能。也可以考虑选择其他的库。

via: https://github.com/sebhildebrandt/systeminformation

### 2024-03-01[技巧]

OPML（大纲处理器标记语言）是一种允许您与其他应用程序共享您在 Feedly 中关注的 RSS 提要的格式，本质上就是一种标记语言。

它的格式非常简单。大家可以通过这个链接了解一下 https://en.wikipedia.org/wiki/OPML 。

如下是一个简单的例子：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<opml version="1.0">
  <head>
    <title>Subscriptions</title>
  </head>
  <body>
    <outline text="My Subscriptions">
      <outline type="rss" text="lucifer的网络博客" title="lucifer的网络博客" xmlUrl="http://lucifer.ren/blog/atom.xml" htmlUrl="https://lucifer.ren/blog/"/>
      <outline title="Blog 2" type="rss" xmlUrl="http://blog2.com/feed" htmlUrl="http://blog2.com"/>
    </outline>
  </body>
</opml>
```

通过它，我们可以在不同的 RSS阅读器之间迁移我们的订阅。比如我们可以在 Feedly 中订阅一些博客，然后通过 OPML 导出，然后导入到其他的 RSS 阅读器中。也可以将自己的订阅分享给其他人，只要导出一份 OPML 文件就可以了。

如果你想导入导出你的 RSS 订阅，或者想分享或者取得他人的订阅，那么使用 OPML 是一个非常好的选择。



## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://p.ipic.vip/bp35i7.jpg">

