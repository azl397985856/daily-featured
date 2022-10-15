# 每日一荐

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

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

![](https://tva1.sinaimg.cn/large/008i3skNly1gq0mm4lscqj313h0r0diy.jpg)

- 🔥🔥🔥🔥 [活动首页](https://leetcode-solution.cn/91) 🔥🔥🔥🔥
- [91 第三期讲义 - 二分专题（上）](https://github.com/azl397985856/leetcode/blob/master/thinkings/binary-search-1.md)
- [91 第三期讲义 - 二分专题（下）](https://github.com/azl397985856/leetcode/blob/master/thinkings/binary-search-2.md)

## 新鲜出炉 (2022-10)

### 2022-10-15[网站]

输入文字自动生成高清视频，视频素材打打字就能搞定？ 或许吧，目前网站还在预定中，对这个功能感兴趣的可以先预定。

> 目前市面上已经有竞品了，这对用户来说是好事 😄

via: https://makeavideo.studio/

### 2022-10-16[教程]

keynote 自从有了**神奇移动** 动效后， 我发现用 keynote（类似于 windows 的 ppt） 做动画很简单。很多人也发现了这一点。同时我看了一些教程，现在基本上大多数的动画只要看一眼就大概知道怎么去做了。

这里推荐我看过的一个教程，里面有几十个 demo，每一个都用一分钟左右的碎片化时间完成。看完你会发现，使用到的技巧其实就那么几种。然而恰好就是这几种就能完成大多数的动画效果，而且还**特别简单**。

via: https://space.bilibili.com/25777113/channel/collectiondetail?sid=83180

### 2022-10-06[好文]

一个可以在 web 上直接接入打赏功能的工具。

打赏者需要下载一个浏览器插件并注册一个账号，被打赏者需要在网站增加一个 link 标识一下网站的被打赏人的基本信息。

感觉之后的自媒体会往这个方向发展，结合 web3 逐渐弱化中心化的自媒体平台。

via: https://blog.logrocket.com/getting-started-web-monetization-api/#using-coil-extension-send-money

> 目前也有一些自媒体工具，可以直接给你生成一个属于你自己的自媒体平台。比如这个 https://ghost.org

### 2022-10-05[好文]

分享一篇雪球上的关于投资的好文。《众所周知，最有价值的投资资料，都是免费的》

via: https://xueqiu.com/1830902728/230241156#h5o-8

### 2022-10-04[仓库]

novu 是一个关于消息推送的解决方案。

它提供了易于使用的 JS 客户端。

如下代码可以精准地向某一个用户推送一条 hello world 消息，并附带一个 logo。

```js
import { Novu } from "@novu/node";

const novu = new Novu(process.env.NOVU_API_KEY);

await novu.trigger("<TRIGGER_NAME>", {
  to: [
    {
      subscriberId: "<UNIQUE_IDENTIFIER>",
      email: "john1@doemail.com",
      firstName: "John",
      lastName: "Doe",
    },
  ],
  payload: {
    name: "Hello World",
    organization: {
      logo: "https://happycorp.com/logo.png",
    },
  },
});
```

其中 NOVU_API_KEY 就是你在 novu 上申请的一个秘钥，由于服务端验证。

via: https://github.com/novuhq/novu

### 2022-10-03[仓库]

一个可以不多写一行代码就给 Java 项目生成 API 文档的工具。 基本原理是基于 AST 去分析代码，然后给其添加 API Doc。

Node 项目很难使用这种方法，因此 JS 是一门动态语言， 很难通过 AST 去分析出所有的路由定义信息，除非加一些显式的约定。

via: https://github.com/tudou527/OneAPI

### 2022-10-02[技巧]

大家可能看过这种表格，里面的上涨和下跌使用不同深度的颜色来区分。

![](https://tva1.sinaimg.cn/large/006y8mN6ly1h6qsaflgmbj30do0l4jvn.jpg)

使用 excel 可以很容易实现这个需求。

具体操作为：选择“条件格式”-“色阶”-“红白绿色阶”，这样就使得涨幅大的数据自动显示深红色，跌幅大的数据自动显示深绿色。

### 2022-10-01[资料]

操作系统是计算机专业重要的课程，对每一个从事软件开发的人都是很重要的课程。

- 从思想上， 你可以学到先辈的先进思想和经验，比如操作系统中的各种数据结构和算法。
- 从操作上， 可以帮助你更高效地使用操作系统。比如学习 shell 可以帮你更快写出脚本。

因此非常推荐大家进行学习。这里推荐一份《如何从零开始编写一个操作系统!》

via: https://github.com/ruiers/os-tutorial-cn

如果实在觉得啃得困难，可以看看《重学操作系统》这个资料 https://kaiwu.lagou.com/course/courseInfo.htm?courseId=478#/sale

## 历史汇总

- [SUMMARY](./SUMMARY.md)

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7he9xdtmyj30by0byaac.jpg">

大家也可以加我微信好友进行交流！

![](https://tva1.sinaimg.cn/large/008i3skNly1gx11szd02ej30e80e8dg3.jpg)

## 贡献

- 如果有想法和创意，请提 [issue](https://github.com/azl397985856/daily-featured/issues) 或者进群提
- 如果想贡献代码，请提 [PR](https://github.com/azl397985856/daily-featured/pulls)
- 如果需要修改项目中图片，[这里](./assets/) 存放了项目中绘制图的源代码， 大家可以用 [draw.io](https://www.draw.io/) 打开进行编辑。

## License

[Apache-2.0](./LICENSE)
