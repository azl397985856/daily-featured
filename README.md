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

## 新鲜出炉 (2024-01)

### 2024-01-12[好文]

sms-active 是一个可以帮助你接收短信验证码的网站，它可以帮助你接收各种网站的短信验证码，从而帮助你注册各种网站。

这在：

1. 网站需要短信验证码的时候非常有用，比如你想注册一个网站，但是你**不想给他们你的手机号**，那么你可以使用这个网站来接收验证码。
2. 网站限定手机归属地必须是某个国家的时候，你可以使用这个网站来接收验证码。

这个网站是付费的。

via: https://sms-activate.org/en/getNumber

### 2024-01-11[好文]

很多网站提供了 RSS 订阅，但是 RSS 的订阅地址并不是很好找，网站作者很少有一个认知，那就是：如果你提供了 RSS 订阅，那么大方地放在主页上，这样可以让更多的人知道你提供了 RSS 订阅。

你如果你使用 RSS 管理工具， 一定试过将一个你关心的网站添加到 RSS 订阅却发现找不到订阅地址。而其实网站提供了 RSS 订阅地址，只是藏的很深。因此网站作者在主页标签里明确告诉读者和 RSS 阅读器：”我提供了 RSS 订阅，你可以订阅我的 RSS“ 是一种非常好的做法。

我的博客就提供了这样的一个标签来告诉大家我提供了 RSS 订阅，你可以在这里找到我的 RSS 订阅地址。

```html
<link rel="alternate" href="/blog/atom.xml" title="lucifer的网络博客">
```

这篇文章 《Exposed RSS （公开的 RSS）》  就讨论了这个问题。

> 博客地址：https://lucifer.ren/blog/

via: https://chriscoyier.net/2024/01/13/exposed-rss/

### 2024-01-08[工具]

oxlint 是一个用于检查 rust 代码的工具，它可以检查 rust 代码中的一些常见错误。相比 eslint 来说， 它更快，并且提示信息更加友好。

使用方法和 eslint 类似，集成到你的项目也非常的简单，可能就只需要几秒钟。不过它并不是 eslint 的替代品，目前还不支持插件。不过我相信它会越来越好用的。

via: https://oxc-project.github.io/blog/2023-12-12-announcing-oxlint.html

### 2024-01-07[好文]

这是一篇关于如何在浏览器中实现一个协同编辑器的文章，它介绍了如何使用 OT 算法来实现一个协同编辑器。

OT 算法是一种用于解决协同编辑问题的算法，它的核心思想是将编辑操作转换为操作序列，然后在客户端和服务端分别执行这个操作序列，从而达到同步的目的。 实现上， 客户端和服务端通过 docReq 和 docRes 两个接口来进行通信。

如果你对协同编辑器感兴趣或者正在实现协同编辑，那么这篇文章是一个不错的开始，尽管这篇文章使用 GO 写的，但是重在领会思想。

via: https://www.aadhav.me/posts/collaborative-editor#h5o-23

### 2024-01-04[好文]

这篇文章介绍了如何在 mac 上使用两个 github 账号，这在我们同时使用公司和个人账号的时候非常有用。

通过这篇文章，我学到了：

1. 通过如下命令可以切换 ssh 验证使用的私钥

```bash
alias git_personal="(ssh-agent) && ssh-add ~/.ssh/personal"
alias git_work="(ssh-agent) && ssh-add ~/.ssh/work"
```

2. git config 文件可以使用 path 来指定配置文件位置。

3. git config 支持条件语句 `includeIf`

```bash
[includeIf "gitdir:~/"]
path = ~/.gitconfig-personal

[includeIf "gitdir:~/Work/"]
path = ~/.gitconfig-work

[core]
excludesfile = ~/.gitignore
```

via: https://fayazahmed.com/articles/how-to-use-two-github-accounts-on-a-macbook-the-right-way

### 2024-01-03[工具]

pix2tex - LaTeX OCR 是一个将图片转换为 LaTeX 的工具，它可以将图片中的公式转换为 LaTeX 代码，从而直接粘贴出来。

这在一些不提供复制功能的地方很有用。 虽然我认为网站应该自己提供复制功能，但是有时候我们也无法改变这些事实，所以这个工具还是很有用的。

不过可惜的是，这个工具还不是特别好用，算是勉强可用吧，毕竟是免费的工具。它的准确率还不是特别高，不过这个工具还是很有潜力的，我相信它会越来越好用的。

via: https://github.com/lukas-blecher/LaTeX-OCR

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
