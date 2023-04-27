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

## 新鲜出炉 (2023-04)

### 2023-04-23[网站]

自从 openai 公布自己的 chatgpt 后，各大公司也都在跟进，推出自己的 ai 产品。

vercel 就出了一个 playground ，集成了市面上常见的 ai 聊天引擎，你可以直接提问，并且支持选择引擎。然后根据对比两者的答案。

![](https://p.ipic.vip/rxs7ek.png)

via: https://play.vercel.ai/

### 2023-04-11[新闻]

Github 官方推出了商店系统，可以在上面购物，不过目前能买的东西比较少。

https://www.thegithubshop.com/

### 2023-04-10[类库]

以更可读的方式操作 AST。

比如你想给一个文件增加一个导出成员，可以这样：

```js
import { loadFile, writeFile } from "magicast";

const mod = await loadFile("config.js");

mod.exports.default.foo.push("b");

await writeFile(mod);
```

其底层会操作 AST 来完成， 而如果你来操作 AST， 肯定会复杂一点。如果是我的话，还会去查一下 AST 操作库的 api 文档。 而使用了这个库就不用查询文档了，基本都是比较符合直觉的。

via: https://github.com/unjs/magicast

### 2023-04-09[新闻]

copilot 集成了 chatgpt， 可以通过自然语言聊天实现修改代码了（会有一个类似聊天的窗口）。

copilot lab 扩展（https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-labs）还可以直接翻译代码， 自动生成测试用例等。（虽说不用这个也可以，但是却更加方便，相当于chatgpt 的 prompt）

via: https://code.visualstudio.com/blogs/2023/03/30/vscode-copilot

### 2023-04-02[网站]

UX matters！

这是一个讲如何优化 UX，里面还有一些专业术语表 。更关键的是 UX 的好处，比如变现，提高满意度。

其中还有 case study 栏目， 其中第一个就是一个之前看过的比较老套的案例，但是确实值得一些公司学习。

via: https://builtformars.com/
### 2023-04-01[好文]

代码同构对很多前端开发都不陌生。讲的是服务端和客户端都用一样库，这样可以实现代码共用。

但是如果你使用 ssr，那么实际上服务端是需要运行客户端代码的（生成 html 发给客户端）。因此就有了将客户端和服务端代码写到一个项目的实践，比如 .server.js 放服务端逻辑 .client.js 放客户端逻辑。然后通过打包分别生成服务端和客户端代码。

这有时候不是很方便， 因为客户端有时候也想访问服务端的一些东西， 如果能将其写到一个文件就好了。

《WTF Is Code Extraction》就讲了三种将客户端和服务端代码写到一起的方式， 以及都有什么问题需要解决，最后图穷匕见地安利了一下自己的产品😄 （它安利的那个库我没用过）

![](https://p.ipic.vip/nldp9u.jpg)

via: https://www.builder.io/blog/wtf-is-code-extraction

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
