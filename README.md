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

### 2024-01-31[工具]

drizzle-orm 是一个用于操作数据库的无头 ORM，它可以帮助你更加方便地操作数据库。

之前我一直使用的是 waterline 和 prism。

via: https://github.com/drizzle-team/drizzle-orm

### 2024-01-30[工具]

从代码中删除过时内容的价值是不可否认的。然而，找到它们是一项手动且乏味的工作。这就是 Knip 的用武之地。随着代码库的复杂性和规模的增长，自动化和全面的工具变得至关重要。

via: https://knip.dev/overview/getting-started

### 2024-01-29[工具]

给大家推荐几个 ai 聊天工具。

1. Google 出的 Google Gemini Pro，可以免费使用。地址： https://googlegemini.co/try-google-gemini-for-free
2. perplexity 是我最早使用的 ai 聊天工具之一，同样免费使用。地址：www.perplexity.ai
3. glados 也支持集成 chatgpt。如果你使用了 glados 的服务，那么也可以免费使用。地址：https://glados.space/landing/M9OHH-Q88JQ-DX72D-R04RN
4. 如果有条件，可以直接使用 openai（主要是可能会限制某些区域的 IP 地址）。 https://platform.openai.com
5. 豆包。头条出的 ai 聊天工具，可以免费使用。地址：https://www.doubao.com/?hh=1
6. copilot。如果你使用了 copilot，那么 copilot chat 也可以免费使用。比如我使用了 vscode，那么右下角就会出现一个 chat 的按钮，点击即可使用。

我个人更建议使用 3 和 6，这也是目前我在使用的两个工具。

### 2024-01-28[好文]

Heat.js 是一个用于创建和管理热图的 JavaScript 库。热图是一种数据可视化技术，它使用颜色的强度来表示数据的大小或密度。类似于 Github 上的提交热图。

![](https://p.ipic.vip/ureb9t.png)

这个库的工作原理如下：

- 初始化：首先，你需要创建一个 Heat 对象。这个对象需要一个配置对象，其中包含了创建热图所需的所有信息，如元素的 id、热图的宽度和高度、颜色梯度等。

- 添加数据：一旦你有了一个 Heat 对象，你就可以开始添加数据了。数据是一个包含 x 和 y 坐标以及一个值的对象。这个值将决定该点在热图上的颜色。

- 渲染热图：添加完所有数据后，你可以调用 Heat.render 方法来渲染热图。这个方法会遍历所有的数据点，根据每个点的值和颜色梯度来确定其颜色，然后在相应的位置上画出一个颜色块。

- 更新和清除数据：你可以使用 Heat.clear 方法来清除所有的数据，或者使用 Heat.update 方法来更新某个数据点的值。

在代码层面，Heat.js 主要由以下几个部分组成：

- Heat 类：这是库的主要接口，用于创建热图、添加数据、渲染热图等。
- Gradient 类：这个类用于创建颜色梯度。它接受一个包含颜色和位置的对象，然后使用线性插值来创建一个连续的颜色梯度。
- Canvas 类：这个类封装了 HTML5 Canvas API，用于在 canvas 上绘制热图。
- Point 类：这个类表示一个数据点。它包含 x 和 y 坐标以及一个值。

via: https://github.com/williamtroup/Heat.js

### 2024-01-22[好文]

Refine 在设计上是 headless(无头)的，因此提供了无限的样式和自定义选项。

"headless" 指的是一个系统或框架没有预定义的前端界面。这意味着它不会限制你如何设计和实现用户界面。你可以使用任何你喜欢的技术和工具来创建用户界面，这就为样式和定制提供了无限的可能性。

在 web 开发中，"headless" 通常用于描述那些只提供 API（如 RESTful API 或 GraphQL API）而不提供预定义用户界面的后端系统。这种设计方式的优点是灵活性高，可以根据项目的需要选择最合适的前端技术。缺点是可能需要更多的开发工作，因为你需要自己从头开始创建用户界面。

via: https://github.com/refinedev/refine

### 2024-01-19[技巧]

如何清除 input 输入框历史下拉数据？

有时候我们在 input 中输入东西的时候会出现历史记录，这很容易泄漏隐私。一般的浏览器清除是无法清除这样的数据的。那么如何清除呢？

主要有两种方式：

1. 取消自动填充。

这里以谷歌浏览器为例，在浏览器地址栏输入：

```
chrome://settings/autofill
```

关闭自动填充表单即可（自动填充和密码下面的每一项都可以关闭），这样处理后所有网站下的 input 框都不会出现历史记录了。

2. 删除历史输入记录。

当已输入过的输入框中，点一下输入框就会自动带出先前所输入过的文字，接着当要删除某个文字记录时，只需将滑鼠滑到上方，再按 Shift+fn+Del 键(MAC)/Shift+Del 键(Win)，就可将它删除。

个人推荐第二种，毕竟第一种会影响其他网站的自动填充功能，并且无法再次开启的话仍然会再次泄漏隐私。

### 2024-01-18[好文]

原文标题：《The Who, What, When, Where, Why and How of Image Optimization in Angular》。

本文结合 chrome 提出的若干关键浏览器指标，介绍了如何使用 angular 来优化图片加载。

angular 新增了 ngSrc 指令，它可以帮助我们更好地优化图片加载。这篇文章介绍了如何使用这个指令来优化图片加载。

这是 angular 团队与 chrome 团队合作成果！尽管你仍然可以自己去实现这个功能，但是这个指令可以帮助你更加方便地实现这个功能。结合 provider 可以更加精细化控制图片的加载策略。比如这里的 loaderParams。

```js
<img
    [ngSrc]="'photo-1417325384643-aac51acc9e5d'"
    [loaderParams]="{ compression: 50 }"
    fill
    priority
    ngSrcset="300w, 800w, 1500w"
/>
```

via: https://angularindepth.com/posts/1522/the-who-what-where-when-why-and-how-of-image-optimization-in-angular

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
<link rel="alternate" href="/blog/atom.xml" title="lucifer的网络博客" />
```

这篇文章 《Exposed RSS （公开的 RSS）》 就讨论了这个问题。

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
