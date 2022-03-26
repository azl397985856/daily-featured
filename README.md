# 每日一荐

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自
> 己感兴趣的月份点进去即可。

在线阅读：https://leetcode-solution-leetcode-pp.gitbook.io/mz-ri-yi-jm/

电子书文件太大， 大家可到我的公众号《脑洞前端》回复“每日一荐”获取。

## :newspaper: &nbsp; RSS

大家可以用 Github 提供的
[RSS](https://github.com/azl397985856/daily-featured/commits.atom) 来订阅我的仓
库更新。

## 新鲜出炉 (2022-03)

### 2022-03-27[网站]

市面上关于前端技能 roadmap 的网站很多。这个网站实话实说内容一般，没啥两点，但是
有一个创新点就是展示形式很别致。这种展示技能图谱的交互还是第一次见。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h0nk0p7p2uj22b70u0dm6.jpg)

地址：https://andreasbm.github.io/web-skills/

### 2022-03-26[工具]

阿里集团开源的低代码引擎，基于它可以创建自己的低代码平台。

地址：https://lowcode-engine.cn/

### 2022-03-25[工具]

node 内置的 vm 模块提供了“安全”运行 js 代码的沙箱环境。不过其本质也是有很多不安
全的地方，社区的 vm2 解决了一些问题。

而这次推荐 safeify 是基于 vm2 继续封装的应用，支持更多特性并且理论更加安全。

地址：https://github.com/Houfeng/safeify

### 2022-03-22[工具]

前一段时间写书的时候被标点符号，字符格式折磨地不行。

后来我使用了几个工具，一定程度上解决了我一些问题。

他们分别是：

- [pangu formater](https://github.com/vinta/pangu.js) 这个主要解决是排版，句法语
  法等问题
- [markdownlint](https://github.com/markdownlint/markdownlint) 它则主要是格式校
  验。比如一行最多多少字符，禁用裸 URL，禁用原生 HTML 标签 等等。

pangu 的话更多情况我使用 vscode 插件
[pangu-markdown-vscode](https://github.com/zhuyuanxiang/pangu-markdown-vscode)，markdownlint
则是集成到 ci 系统中。
[这个 yml 文件](https://github.com/azl397985856/leetcode/blob/master/.github/workflows/ci.yml#L26)给
大家演示了如何在实际 ci 中使用 markdownlint。

### 2022-03-21[技巧]

我的输入法是搜狗输入法，我使用这个输入法十几年了，一直都没有换。

它有很多小技巧，比如输入 sj 可以快速打出`当前系统时间`，也可以 rq 快速打出
`当前系统日期`等。今天再分享一个小技巧给大家。

那就是 U 模式 和 V 模式。

U 模式用于输入那些你读不出来的字。你有没有一些字可以写，但是就读不出来进而使用拼
音输入法打不出来？这就是**拼音输入法的一个诟病**。不过使用 U 模式可以解决问题。
比如犇(ben)字你不知道怎么读。就可以先输入 u，然后**依次输入偏旁部首**，这里我们
依次输入牛牛牛。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h0fanfa2jlj20cg02y0sn.jpg)

看见没？字出来了，还告诉你咋读。

另外还有一个类似的 V 模式。

V 模式用于快速打出阿拉伯数字的大写。比如 8765 的大写就是 `捌仟柒佰陆拾伍`

你只要输入 v 后再输入 8765 即可。

由于西法我是双拼选手，因此 u 其实是 **sh** 。因此 u 模式和 v 模式无法通过先输入
u 来开启。这个时候你可以使用 shift + u 和 shift + v 来开启。

- [U 模式笔画输入](https://pinyin.sogou.com/help.php?list=3 "U 模式笔画输入")
- [V 模式](https://pinyin.sogou.com/help.php?list=3&q=10 "V 模式")

### 2022-03-18[仓库]

如果你在准备面试一家公司，那么最有效的面经一定是你想要面试的公司的最近的面经。

这个仓库就按照公司和岗位收录了国内大厂的 LeetCode 算法面试题（数据来源于社区网友
分享），并且是免费的。

地址：https://github.com/afatcoder/LeetcodeTop

### 2022-03-17[网站]

一个可视化数据结构与算法的网站。除了使用动画来演示数据结构与算法外，其还包含了对
其进行详细讲解的 ppt 内容，是目前我见过的最好的动画数据结构与算法网站。

地址：https://visualgo.net/en

### 2022-03-15[技巧]

Github 终于可以对 star 的项目进行分类了。

在 star 的旁边多了一个下拉，你可以点击下拉将其添加到合适的分类列表中。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h0axhwei86j21l80aqq4t.jpg)

### 2022-03-11[网站]

禁用 JS 也能追踪用户生成唯一指纹？简直太不要脸了 😁

地址：https://noscriptfingerprint.com/

### 2022-03-10[工具]

mongodb 出品的 基于 bson （Binary JSON）序列化和反序列化的 JS 工具。

地址：https://github.com/mongodb/js-bson

### 2022-03-09[好文]

软件调试是程序员的必修课，而前端使用的最多的自然是 chrome devtool 调试。这篇文章
就讲了很多使用的调试方法，从简单到复杂，各个阶段的人都能获益。

这里提到的调试工具和技巧都用过，还是很常见的。另外一些针对特殊库的调试方法也很有
用（前提是你需要调试到他们的时候）。

地址：https://flaviocopes.com/debugging/

### 2022-03-08[好文]

如何读 ECMA 规范的好文，是我目前见过写的最好的版本。作者也是 Google 大牛，是很多
开源社区的成员。这个系列可惜断更四年了，大概率也不会更新了。

地址：https://timothygu.me/es-howto/

### 2022-03-07[仓库]

在 JS 中增加类型系统？这玩意难道不是 TypeScript 么？一起来看看！

地址：https://github.com/giltayar/proposal-types-as-comments

### 2022-03-04[仓库]

如果你开发过 chrome 插件，会发现其实开发一个简单的插件很容易。你只需要随便找一个
脚手架就行了。比如我的
[LeetCode-Cheatsheet](https://github.com/azl397985856/leetcode-cheat) 就是用的
Create React App 脚手架做的，build 后将文件夹发布到 chrome store 即可。

而如果你要开发复杂一点的插件，使用 background，定制 DevTools ，并且还要通信，那
就稍微有点不方便了。

这个 cli 工具（脚手架）就是帮你做这个事情的。

地址：https://github.com/dutiyesh/chrome-extension-cli

### 2022-03-03[好文]

文章对比了 Python 和 TypeScript 两种编程语言的类型系统中的**两个特性** 。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1gzy1c12761j212o086gmd.jpg)

对深度理解两种编程语言的类型系统有很大的帮助。

地址：https://medium.com/@Pilot-EPD-Blog/typescript-for-pythonistas-f90bbb297f0a

### 2022-03-02[网站]

作者是 iOS / macOS 的开发程序员，另外也是北航软院的一名非全硕士（在读）。曾在大
学期间学习过算法知识，并参加过 3 年的 ACM 比赛。从 2021 年 03 月 30 日开始每日在
LeetCode 刷题，到 2021 年 11 月 26 日已经刷了 700+ 道题目，并且完成了 650+ 道题
解。

这是他的经验总结《算法通关手册（LeetCode）》

大家可以搭配我的仓库
[leetcode 刷题秘籍](https://github.com/azl397985856/leetcode) 进行学习

地址：https://algo.itcharge.cn

### 2022-03-01[好文]

微信团队写的《Web 内核微信小程序框架实践》，借鉴 PWA 的思路，将小程序底层进行了
改造，不管是扩展性还是性能都得到了大幅度的提升。

里面的内容比较深奥，对于没有接触过引擎底层的东西的人来说相对难以理解。而且通篇并
没有代码进行辅助理解，因此很可能造成理解偏差。因此我建议从借鉴思路的角度来读这篇
文章。

另外如果你公司在搭建小程序引擎，那么就非常值得一读。

地址：https://mp.weixin.qq.com/s/S3Fj3cbXurIlgopm6_cL0w

## 历史汇总

- [SUMMARY](./SUMMARY.md)

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打
开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会
收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标
。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行
交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，
如果想加入 qq 群，请回复 qq。

<img width="300" src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7he9xdtmyj30by0byaac.jpg">

大家也可以加我微信好友进行交流！

![](https://tva1.sinaimg.cn/large/008i3skNly1gx11szd02ej30e80e8dg3.jpg)

## 贡献

- 如果有想法和创意，请提
  [issue](https://github.com/azl397985856/daily-featured/issues) 或者进群提
- 如果想贡献代码，请提
  [PR](https://github.com/azl397985856/daily-featured/pulls)
- 如果需要修改项目中图片，[这里](./assets/) 存放了项目中绘制图的源代码， 大家可
  以用 [draw.io](https://www.draw.io/) 打开进行编辑。

## License

[Apache-2.0](./LICENSE)
