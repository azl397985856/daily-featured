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

## 新鲜出炉 (2024-11)

### 2024-11-30[好文]

一个 AI 工具，允许你使用自然语言编写基于浏览器的集成测试的测试用例。只需要：

1. 配置好你的 openapi 秘钥
2. 用自然语言描述：Action，query，assertion。Action 就是你想要做什么，query 是你想要获取什么信息，assertion 是你期望的结果。
3. 点击 Run 按钮，即可得到一个可以直接运行的测试用例。

![](https://p.ipic.vip/hjrnz2.png)

via: https://github.com/web-infra-dev/midscene

### 2024-11-29[好文]

自从有了 url 这个东西，人们就在考虑是否有一种方式可以直接链接到页面的某个地方，于是锚点就出现了。那么如果想直接链接到页面的某一句话呢，甚至更复杂的 pattern 呢？类似于我们 ctrl + f 的效果。于是 Text fragments（文本片段）出现了。这篇文章介绍了 Text fragments 的用法。

via: https://alfy.blog/2024/10/19/linking-directly-to-web-page-content.html

### 2024-11-27[网站]

和普通的文件分享不同，它需要两个客户端同时在线。两个客户端都是独立的，都可以发送和接受文件。

使用方法很简单，只要输入对方的 code 就好。如图 WKXR 就是当前自己的 code。我们需要输入的是对方的 code，然后点击输入框右边的链接即可。比如这里输入了 3JE9，就是和 code 为 3JE9 的客户端链接。

![](https://p.ipic.vip/8znnqc.png)

链接后可以发送文件，接受文件，甚至可以收发消息。

这在你需要分享一些东西，但是又不想留在互联网上被别人看到有用。

> 虽然分享文件可以设置密码，但是还是会被看到。这种点对点的方式还是比设置密码更安全。

via: 
### 2024-11-26[好文]

文章分享了六条 shell 编写技巧。完整六条如下：

1. 全面的错误处理和输入验证。包括用法错误、文件不存在等
2. 清晰多彩的输出。包括颜色、格式、表格等
3. 详细进度报告。类似于 debug 日志
4. 使用“set -e”和“set +e”进行策略性错误处理。在不需要停止脚本的情况下，可以跳过错误，需要的时候再开启。
5. 特定于平台的调整。如果你的脚本需要运行在多个平台则需要考虑。另外即使你的用户只在一个平台使用，但测试机可能在另一个平台，因此这种情况也需要额外考虑。
6. 多次运行的时间戳文件输出。每次运行都用时间戳作为文件名生成日志（由于第三条的铺掉，我们只需要将其重定向到文件即可），可以帮助你跟踪脚本的运行情况。

via: https://nochlin.com/blog/6-techniques-i-use-to-create-a-great-user-experience-for-shell-scripts

### 2024-11-24[好文]

一个讲如何缩小 git 仓库体积的文章。文章说他将 git 仓库体积缩小了 94% ！

我之前就经手过一个非常大的 mono 仓库，各种语言的项目都放在里面，体积非常大。每次同步都很久，后续甚至不得不通过减少 depth 来减少同步时间。

作者做了以下两点来缩小仓库体积：

1. Don't keep thousands of things in a single folder. 不要将数千个东西保存在一个文件夹中。
2. git repack -adf --path-walk 可以将仓库打包压缩，减少体积。如果你在大型 monorepo 中工作，并且您有 CHANGELOG.md 或实际上任何具有相对较长名称（>16 个字符）且反复更新的文件，您可能需要密切关注这条路径东西。

你还可以尝试新的 git survey 命令来查看各种新的启发式方法，例如按磁盘大小排列的热门文件、按膨胀大小排列的热门目录或按膨胀大小排列的热门文件。这些启发式方法将帮助您了解路径行走工作是否也会影响你的仓库大小。

![](https://p.ipic.vip/ko61lh.png)

via: https://www.jonathancreamer.com/how-we-shrunk-our-git-repo-size-by-94-percent

### 2024-11-22[工具]

一个在线制作印章的工具，开源的时间不久，但是功能已经很完善了。你可以通过这个工具制作一个印章，然后下载下来，用于你的文档或者其他地方。代码是开源的，仓库甚至连 license 都没有，你可以自己部署到自己的服务器上。

另外一个功能看起来更多，但是不提供源代码，只能在线使用。https://btbsm.com/ovalseal4

via: https://github.com/xxss0903/drawstamputils

### 2024-11-12[网站]

一个在线抓取博客的网站，可以抓取 微信公众号，CSDN，博客园，简书，掘金，思否。输出支持 HTML,Markdown,PDF,MHTML

个人认为比较有用的是输出 markdown 格式，可以直接导入到博客编辑器中。输出 markdown 其实一个反过程。比如 markdown 的 `[title](link)` 转化为 html 的时候会变成 `<a href="link">title</a>`，但是在博客编辑器中，自动解析 `<a href="link" title="title">title</a>` 然后转化为 `[title](link)`。 虽然听起来很简单，但是不同的网站兼容性可能不一样，所以还是需要注意一下。这也是它只支持这几个博客网站，而不是全部的博客网站的原因。

via: https://www.blog-keeper.com/

### 2024-11-06[工具]

如果你是一个站长，可能有过接入第三方登录的经历。第三方登录可以让用户更方便的登录你的网站，同时也可以减少用户的注册成本。

比如我自己的网站： https://leetcode-solution.cn/91 ，我就接入了 github 登录，但是我并没有实现后端。如果你只是想识别一下用户，或许我这种就够了。你如果你不满意于此，可以尝试下 workos。

![](https://p.ipic.vip/wlju64.png)

workos 是一个可以帮助你接入第三方登录的工具，但是接入你需要自己实现后端，但是支持的第三方更多，定制化更高，如果你有这方面的需求，可以考虑一下。

via: https://workos.com/docs/user-management/vanilla/nodejs


### 2024-11-05[经验]

随着 AI 的不断发展。现在多了很多自然语言编程的产品，有了它们，你可以通过自然语言来编程，而不需要写代码。

比如：

- https://github.com/corbt/agent.exe
- https://github.com/guoriyue/LangCommand
- https://github.com/Skyvern-AI/Skyvern

目前我的体验是：

1. 这些产品还不够成熟，比如我明确告诉它，它的解决方案有问题，并进行了解释，它还是无法理解，给出错误的解法，以及错误的解释。但是它们的出现确实给了我们一些启示，未来的编程可能会变得更加简单。

2. 有些时候使用自然语言效率更低。比如我想查看 git 的日志。直接输入 git log 就好了。如果是自然语言很难比这个更快。

3. 自然语言有什么有歧义。做过开发，对接产品的人应该都知道，需求文档中的需求有时候就是有歧义的，这个时候就需要沟通。自然语言编程也是一样，有时候你的自然语言描述可能会有歧义，这个时候就需要沟通。而这个沟通的成本可能会比直接写代码高。当然如果你压根不会写代码，那么这个成本可能就不算什么了。



### 2024-11-04[好文]

如果你使用 git 来管理你的代码。并且在某一天突然遇到一个 bug，你只知道上个 release 是好的。但是距离上个 release 已经有非常多提交了。

正常的人第一想法通常是使用二分的方法来找到这个 bug 的提交。但是这个方法有一个问题，就是你需要一个一个找到具体的 commit，然后 checkout ，再测试，这个过程是非常繁琐的。

这篇文章介绍了一个命令 `git bisect`，这个工具可以帮助你快速定位 bug 的提交。具体的使用方法可以参考这篇文章。

via: https://www.mikebuss.com/posts/debugging-till-dawn


### 2024-11-01[经验]

你有没有遇到过使用了代理，但是谷歌搜索出来的东西还都是中文，即使你使用了英文关键字来搜索。甚至使用了隐身模式也不行。

这其实有很多可能，这里提供几个思路。

1. 使用 google 高级搜索技巧，按语言来搜索。比如 `language:en lucifer.ren`
2. 修改你的系统语言为英文，然后再搜索。
3. google 判定你的 IP 是中国人在使用，尽管你的代理 IP 可能是美国，所以你可以尝试换个代理来解决。
4. DNS 命中到了 google 中国的服务器，你可以尝试修改 DNS 。


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
