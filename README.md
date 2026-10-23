# 每日一荐

![](https://p.ipic.vip/2in7io.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护最新一期内容（不定期更新），想看往期内容，可以翻到下方历史汇总部分，选择自己感兴趣的期数点进去。

在线阅读：https://leetcode-solution-leetcode-pp.gitbook.io/mz-ri-yi-jm/

电子书文件太大， 大家可到我的公众号《脑洞前端》回复“每日一荐”获取。

## :newspaper: &nbsp; RSS

大家可以用 Github 提供的 [RSS](https://github.com/azl397985856/daily-featured/commits.atom) 来订阅我的仓库更新。

## 图片加载不出来如何解决？

<https://github.com/fe-lucifer/fanqiang>

## 2026-10：世界之窗、文件头与被没收的比特币

> **本期导读**（共 14 条）：接入最简单的微前端框架 micro-app · 不看后缀识别文件类型的 file-type · 随机看世界各地窗外的 WindowSwap · 美国政府是如何没收大量比特币的 · AI 存储潮的底层逻辑 · 100 行手写一个测试框架 ······

### 开源项目

#### micro-app：或许是接入成本最低的微前端框架

micro-app 是京东零售推出的一款微前端框架，它基于类 WebComponent 进行渲染，从组件化的思维实现微前端，旨在降低上手难度、提升工作效率。

它是目前接入微前端成本最低的框架，并且提供了 JS 沙箱、样式隔离、元素隔离、预加载、资源地址补全、插件系统、数据通信等一系列完善的功能。

micro-app 与技术栈无关，也不和业务绑定，可以用于任何前端框架。

一句话总结就是：或许是接入最简单的微前端框架。它的部分功能实现挺有意思的，有时间我后面会专门针对他们的部分功能进行讲解。

via: https://github.com/micro-zoe/micro-app/blob/master/README.zh-cn.md

#### file-type：不看文件后缀，也能知道它的真实类型

这个 js 库可以不通过文件后缀用来检测文件类型，它的检测逻辑是：”不同的文件拥有不同的特定前后缀“。比如 png 会以这八个字节开头："\211PNG\r\n\032\n" (89 50 4E 47 0D 0A 1A 0A). PDF 则以 "%PDF" (hex 25 50 44 46) 开头. 这样就可以通过文件头（有时候你是文件结尾）来判断文件类型。

一个典型的用法：

```js
import {fileTypeFromBuffer} from 'file-type';
import {readChunk} from 'read-chunk';

const buffer = await readChunk('Unicorn.png', {length: 4100});

console.log(await fileTypeFromBuffer(buffer));
//=> {ext: 'png', mime: 'image/png'}
```

via: https://github.com/sindresorhus/file-type

#### jest-worker：把重任务丢进子进程并行跑

Jest 团队出品的 Node.js 模块，用于把重任务分发到多个 fork 出的子进程中并行执行：提供基于 Promise 的接口，开销很小，worker 数量可控。Jest 自己跑测试就是靠它。如果你的 Node 服务里也有 CPU 密集型任务（图片处理、压缩、编译等），可以直接拿它当进程池用。

via: https://github.com/facebook/jest/tree/main/packages/jest-worker

#### node-fetch：给 Node.js 带来 Fetch API 的元老级库

在 Node 还没有内置 fetch 的年代，就是这个轻量模块让 Node 有了和浏览器一致的 fetch API。Node 18 之后全局内置了 fetch，它算是完成了历史使命，但无数存量项目和教程仍在使用，了解它依然有价值。

via: https://github.com/node-fetch/node-fetch

#### kooder：为代码托管平台加上代码搜索

Gitee 官方开源的代码搜索系统，可以为 Gitee、GitLab、Gitea 等代码托管平台提供代码搜索服务。公司自建了 GitLab 但搜索一直不好用的，可以看看这个。

via: https://gitee.com/koode/kooder

### 工具

#### ai-video-editor：在线剪视频，素材不出本地

在线剪辑视频，使用本地数据和资源， 不上传到服务器，保护隐私。

via: https://github.com/MartinDelophy/ai-video-editor

#### staticshield：给前端网站加上 AES 加密

给你的前端网站加上 AES 加密的工具，适合“内容只想给一部分人看”的静态页面场景。

via: https://github.com/wangshengithub/staticshield

### 网站

#### sqliteonline：浏览器里直接写 SQL

不需要安装任何客户端，在浏览器里就能连接 SQLite、PostgreSQL、MySQL、SQL Server 等数据库执行查询，也支持直接打开本地的 SQLite 文件。临时验证一段 SQL、随手查点数据的时候非常好用。

via: https://sqliteonline.com/

#### window-swap：随机打开一扇世界各地的窗

随机打开一个世界各地的窗户，看看外面的风景， 是动态的风景，不是静态的。（可以付费选择地区）

via: https://www.window-swap.com/Window

### 好文

#### Building a JavaScript testing framework：100 行手写一个测试框架

Jest 前维护者 cpojer 的教程：利用 Jest 体系里的现成包（jest-haste-map、jest-worker、expect、jest-circus 等），一步步实现一个约 100 行的迷你测试框架。过程中讲清楚了测试框架的几个核心问题——如何找到测试文件、如何并行执行、断言怎么实现、如何用 Node 的 vm 模块做用例间隔离。想搞懂测试框架原理的值得一读。

via: https://cpojer.net/posts/building-a-javascript-testing-framework

#### AI 热起来后，存储的需求和底层逻辑

AI 热起来之后，存储的需求和底层逻辑发生了什么变化？这篇文章把需求端和底层逻辑都讲了一遍，还聊到了去中心化存储的机会。

via: https://abmedia.io/ai-storage-boom-decentralized-storage

### 知识

#### 不同片源和介质，适合什么影厅？

不同比例（画面长宽比）和介质（胶片，数码）的片源（杜比， IMAX 等）适用的影厅类型表，买票前可以对号入座。

![](https://cdnfile.sspai.com/2026/07/27/c3cb0e75e198e799b23b004c9e30f386.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1/format/webp)

via: https://sspai.com/post/112380

### web3

#### airdrop 集合 + 教程类网站

- https://dappradar.com/rewards/airdrops
- https://cryptorank.io/drophunting

#### 《美国政府是如何没收大量比特币的》

你说我要是早点知道这个漏洞，是不是早就发财了？现在或许还有这样的漏洞摆在那里，只是我不知道~

via: https://brainz.fun/blog/2026/06/01/mei-guo-zheng-fu-shi-ru-he-mei-shou-da-liang-bi-te-bi-de/

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
