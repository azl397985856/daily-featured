# 每日一荐

![](https://p.ipic.vip/2in7io.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

在线阅读：https://leetcode-solution-leetcode-pp.gitbook.io/mz-ri-yi-jm/

电子书文件太大， 大家可到我的公众号《脑洞前端》回复“每日一荐”获取。

## :newspaper: &nbsp; RSS

大家可以用 Github 提供的 [RSS](https://github.com/azl397985856/daily-featured/commits.atom) 来订阅我的仓库更新。

## 图片加载不出来如何解决？

<https://github.com/fe-lucifer/fanqiang>

## :calendar:《91 天学算法》限时活动

很多教育机构宣传的 7 天，一个月搞定算法面试的，我大概都了解了下，不怎么靠谱。学习算法这东西，还是要靠积累，没有量变是不可能有质变的。还有的人选择看书，这是一个不错的选择。但是很多人选了过时的或者质量差的书，又或者不会去写书中给的练习题，导致效果很差。

基于这几个原因，我组织了一个 91 天刷题活动，通过一个相对比较长的时间（91 天）给出最新的学习路径，并强制大家打卡这种高强度练习来让大家**在 91 天后遇见更好的自己**。详细活动介绍可以点下方链接查看。另外往期的讲义也在下面了，大家可以看看合不合你的口味。

最后送给大家一句话： **坚持下去，会有突然间成长的一天**。

[点此参与](https://github.com/azl397985856/leetcode/discussions/532)

![](https://p.ipic.vip/plj0jz.jpg)

- 🔥🔥🔥🔥 [活动首页](https://leetcode-solution.cn/91) 🔥🔥🔥🔥
- [91 第三期讲义 - 二分专题（上）](https://github.com/azl397985856/leetcode/blob/master/thinkings/binary-search-1.md)
- [91 第三期讲义 - 二分专题（下）](https://github.com/azl397985856/leetcode/blob/master/thinkings/binary-search-2.md)

## 1V1 辅导

如果大家觉得上面的集体活动效率比较低，我目前也接受 1v1 算法辅导，价格根据你的算法基础以及想要学习的内容而定感兴趣的可以加我微信，备注“算法辅导”，微信号 DevelopeEngineer。

## 新鲜出炉 (2023-11)

### 2023-11-14[新闻]

新的 chrome (112 或之后的版本)升级了无头浏览器，现在无头浏览器不再会出现**真实浏览器和无头浏览器不一致的情况了**。

如果你在项目中使用了无头浏览器进行端到端测试，不妨进行升级一下。

via: https://developer.chrome.com/articles/new-headless/

### 2023-11-10[仓库]

一个关于 web3 的学习资料集合页，不仅有入门，也有实战，新闻媒体，工具等。

如果你想学习 web3，尤其是快速入门 web3 ， 这是一个还算不错的资料。

via: https://github.com/jameslee-7/Web3.0-club

### 2023-11-09[仓库]

一个 waf 工具， 可以直接私有化部署。 

想当年我也给我们公司做过 waf，也是花了至少几个月时间来完成的。如果你没这个预算，这个就是不错的选择。

配置要求也不高：

```
操作系统：Linux
指令架构：x86_64
软件依赖：Docker 20.10.6 版本以上
软件依赖：Docker Compose 2.0.0 版本以上
最小化环境：1 核 CPU / 1 GB 内存 / 10 GB 磁盘
```

via: https://github.com/chaitin/SafeLine

### 2023-11-08[仓库]

facebook 开源的 docusaurus，社区算是比较活跃的， 基于 MDX，用户直接写 markdown， 帮你转化为网站，支持插件，主题，搜索等高级功能。

via: https://github.com/facebook/docusaurus

### 2023-11-07[仓库]

一个 docx 渲染器，原理是将 docx 里的 xml 格式转成 html

相对于 Canvas 渲染，这个实现方案比较简单，最终页面也可以很方便复制，但无法保证和原始 docx 文件展现一致，因为有部分功能难以在 HTML 中实现，比如图文环绕效果。

你可以将他直接集成到你的项目中，无需后端服务，无需付费就可以架设一个 word 解析网站。

via: https://github.com/baidu/amis/tree/master/packages/office-viewer
### 2023-11-06[好文]

如果你是一个 react 库的开发者。不免会使用 npm link 来测试。而这样会因为使用了 react 两个不同的包副本。当我们运行 npm link 时，我们不仅需要链接我们的项目，我们还需要链接 react 和 react-dom 以确保只有一个副本。

使用 yalc 可以解决这个问题，yalc publish 会在本机上进行发布，而不会发布到 npm。

via: https://www.propelauth.com/post/test-your-react-libraries-with-yalc

### 2023-11-04[网站]

一个在线网站， 可以帮你生成隐私声明网页。

如果你是一个工具开发者（比如浏览器扩展），并且会收集一些隐私数据，比如用户当前访问的网站地址，有很多提供商现在要求你提供的工具的隐私声明网页。

我的 chrome 插件最近就遇到了这个问题。于是我就使用了这个网站，不到一分钟就生成了，谷歌审核还真就通过了。

via: https://www.generateprivacypolicy.com/#wizard

### 2023-11-03[库]

FFCreator 是腾讯视频团队开源的生成视频的 JS库。通过它可以将图片，音频或者视频片段按照各种方式组合起来，从而形成一个视频。

使用FFCreator和vue.js，可以开发可视化拖拽搭建短视频的web项目，使用就像h5搭建工具一样的简单。

via: https://github.com/tnfe/FFCreator

### 2023-11-02[工具]

一个脚本工具，可以集成到 ci 中，自动将你的 markdown 翻译为多种语言。由于集成了 chatgpt，因此翻译质量也很好。

这里的翻译质量很大程度上取决于你的 prompt。让大家看看人家的其中一段 prompt 是怎么写的，大家可以作为参考。

```
You are a professional translation engine, please translate the text into a colloquial, professional, elegant and fluent content, without the style of machine translation. You must only translate the text content, never interpret it.
```

via: https://github.com/linyuxuanlin/Auto-i18n

### 2023-11-01[库]

我们平时做前端开发的时候，不免需要 mock 数据。最简单的写法自然是代码中写死。但是这样不利于维护和复用。 比较常见的做法是：

1. 写一个 baseurl，将所有请求封装为 baseUrl 拼接的形式。这样只需要将 baseUrl 改为一个提供 mock 服务的服务器地址即可。
2. 启动一个代理。配置一个规则， 这个规则将当前请求的 baseUrl 改掉转发到一个提供 mock 服务的服务器。

msw 类似于 2，相当于在浏览器上直接启动了一个代理（原理是使用 service worker）。不同之处是，它不仅是代理， 也是 mock 服务器，本身可以配置规则直接返回数据。

参考代码：

```js
// src/mocks.js
// 1. Import the library.
import { http, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser'

// 2. Describe network behavior with request handlers.
const worker = setupWorker(
  http.get('https://github.com/octocat', ({ request, params, cookies }) => {
    return HttpResponse.json(
      {
        message: 'Mocked response',
      },
      {
        status: 202,
        statusText: 'Mocked status',
      },
    )
  }),
)

// 3. Start request interception by starting the Service Worker.
worker.start()

// Performing a GET https://github.com/octocat request in your application will result into a mocked response that you can inspect in your browser's "Network" tab
```

![](https://p.ipic.vip/sqarjj.jpg)

via: https://github.com/mswjs/msw

## 历史汇总

- [SUMMARY](./SUMMARY.md)

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://p.ipic.vip/bp35i7.jpg">

大家也可以加我微信好友进行交流！

![](https://p.ipic.vip/p6dekr.jpg)

## 贡献

- 如果有想法和创意，请提 [issue](https://github.com/azl397985856/daily-featured/issues) 或者进群提
- 如果想贡献代码，请提 [PR](https://github.com/azl397985856/daily-featured/pulls)
- 如果需要修改项目中图片，[这里](./assets/) 存放了项目中绘制图的源代码， 大家可以用 [draw.io](https://www.draw.io/) 打开进行编辑。

## License

[Apache-2.0](./LICENSE)
