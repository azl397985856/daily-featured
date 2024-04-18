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

## 新鲜出炉 (2024-04)

### 2024-04-18[工具]

figma 是一个非常好用的设计工具，但是它的插件生态也非常丰富，你可以通过插件来扩展 figma 的功能。这是因为 figma 的接口设计， figma 提供了 widget api，rest api 和 pl'ugin api 来让扩展 figma 变得非常容易。

- widget api：可以让你在 figma 中嵌入 ui 组件。
- rest api：可以让你通过 restful api 来操作 figma 的文件，节点等。
- plugin api：可以让你通过 JavaScript 来操作 figma 的文件，节点等。

figma 的插件类似于浏览器的插件，你可以通过插件来实现一些自动化的操作，比如自动生成代码，自动生成图表等。也是用  JavaScript 来编写的。

所谓万事开头难，如果你想自己写一个 figma 插件，看官方文档不那么容易上手。那么这个工具可以帮助你快速创建一个 figma 插件项目。

使用它可以快速生成 typescript 项目，也可以生成 react 项目，让你可以专注于业务逻辑的实现。

via: https://yuanqing.github.io/create-figma-plugin/quick-start/

### 2024-04-12[工具]

准备好你的数据库，执行  `npx dashpress`， 就可以生成一个完整的后台管理系统，包括前端和后端。体验 demo：https://demo.dashpress.io/

![](https://p.ipic.vip/c2sm8x.png)

via: https://github.com/dashpresshq/dashpress

### 2024-04-11[网站]

chatgpt 3.5 终于可以免费使用了，无需登录即可使用。但是对于 4.0 版本，还是需要登录付费使用的。

![](https://p.ipic.vip/k6m61f.png)

via: https://chat.openai.com/

### 2024-04-10[技巧]

quickjs 是一个小型的 JavaScript 引擎，它支持 ES2020 标准，可以作为嵌入式脚本引擎使用。它的特点是小巧，快速，可以作为一个库嵌入到你的应用中。

但是你知道吗？它还支持编译为 wasm，这意味着你可以在 JS 引擎中运行 quickjs 来当做沙箱执行 JS 代码（如果你愿意的话也可以继续套娃）。

via: https://bellard.org/quickjs/

### 2024-04-09[工具]

如果你想在 node 中运行 deno 引擎， deno 引擎再运行 JS（或者 TS） 代码，那么 `node-deno-vm` 这个工具可以帮助你做到这一点。

什么情况下会用到这个工具呢？比如你想做一些权限文件读写等权限控制，就可以使用。这是因为 deno 引擎的权限控制更加严格，而 node 在这方面做的不好。

它的原理是用 node 的 spawn 来启动 deno 引擎，然后通过 websocket（deno 目前不支持 IPC） 通信来执行代码，将 websocket 的 url 通过参数传给 deno，deno 构建 websocket 客户端，然后通过 websocket 来通信。

via: https://github.com/casual-simulation/node-deno-vm

### 2024-04-01[网站]

最近 web3 特别多空投（airdrop），但是消息都比较分散，这个 metamask 钱包提供的功能可以帮助你识别你有资格参与的空投。

可惜的是很多链都不支持，比如 solana，sui 等，期待后续完善吧。

![](https://p.ipic.vip/uby8i6.png)

via: https://portfolio.metamask.io/explore

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
