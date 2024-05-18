
# 每日一荐

![](https://p.ipic.vip/0bhil1.jpg)![](https://p.ipic.vip/0bhil1.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2024-04

### 2024-04-30[工具]

一个像素级别的 diff 工具，可以帮助你比较两个图片的差异。或许可以用来分析白屏问题，或者是图片是否加载成功等。

via: https://github.com/dmtrKovalenko/odiff

### 2024-04-29[工具]

和上一个工具有点像，也是提取视频下载地址的，只不过这个不针对某个特定网站，而是利用 chrome 的 devtools 来提取视频地址。因此好处是使用范围更广，坏处是精细化程度可能不如专门针对某个网站的工具。

via: https://github.com/xifangczy/cat-catch

### 2024-04-28[工具]

bilibili 手机端是可以下载视频的（部分视频由于版权限制也无法下载），但是电脑端就不行了。这个网站可以帮助你下载 bilibili 视频，你只需要输入 bilibili 视频的地址，然后点击“提取”，等待分析完成后，点击“下载”就可以下载视频了。

![](https://p.ipic.vip/d1srux.png)

via: https://snapany.com/zh/bilibili

### 2024-04-27[工具]

一行命令直接将你的命令行分享给别人，让别人可以直接通过浏览器访问你的命令行。这对于远程调试，教学，合作等还是蛮有用的。比发文字图片告诉对方如何操作效率高多了。

via: https://sshx.io/

### 2024-04-24[新闻]

TestCafe v3.6.0 可以直接拿到 CDP（chrome devtool protocol） 链接，这样你就可以直接通过 CDP 来和 chrome 浏览器通信，做到更多 TestCafe 本身不支持而 CDP 支持的功能。

```js
fixture `Get current CDP session`
    .page('https://devexpress.github.io/testcafe/example');

test(`Get current CDP session`, async t => {
    const mainWindowId = await t.testRun.activeWindowId;

    let clientCDP = await t.getCurrentCDPSession();

    await t.expect(clientCDP.webSocketUrl).contains(mainWindowId);
}
```

via: https://github.com/DevExpress/testcafe/releases/tag/v3.6.0

### 2024-04-23[工具]

previewjs 是一个 IDE 插件，通过它可以让你在你的 IDE 中预览 UI 组件， 如果你了解 Storybook，那么你就可以很快上手 previewjs。 实际上通过 previewjs 甚至直接生成 Storybook 文件，实现和 storybook 的无缝衔接。

对不熟悉 storybook 的同学我简单介绍下它。storybook 是一个 UI 组件的开发环境，它可以让你独立的开发 UI 组件，然后通过 storybook 来预览你的 UI 组件。通过 storybook 你可以很方便的查看 UI 组件的各种状态，比如 hover，active 等。组件的 props 也可以通过 storybook 来调整，最后这些属性组合什么的可以作为一个个 user case 来展示，也叫做用户故事（Storybook）。

下面这个视频展示了 previewjs 的功能，你可以看到它是如何在 IDE 中预览 UI 组件的，是如何修改代码，然后实时预览的。

<!-- <div><video controls src="https://previewjs.com/videos/demo.mp4" muted="false"></video></div> -->

https://github.com/azl397985856/daily-featured/assets/12479470/a1bf8307-7d8e-4e8e-81a9-40a5574fb25c

如果你要做一个类似的插件，其实也不难。核心只要：

1. 拿到当前的组件代码，然后调用库的 api 来 render 就可以了，比如 react 的话，你可以用 react-dom 的 render 方法来 render 你的组件。
2. 至于下面的面板： Story，console，properties。这其实 vscode 等编辑器都有专门的文档告诉你怎么实现。至于展示的数据从哪里来，当前是解析组件的 props 类型定义之类的。
3. 最后就是监听代码变化，然后重新 render。

总的来说，我认为它是**和 wallaby.js 一样好用的工具，都是让你更快的看到你的代码的运行结果。** 而这种快速反馈正是提高开发效率的关键。

via: https://previewjs.com/

### 2024-04-22[工具]

由于我经常用 markdown 写一些教程，因此常常会想：“如果 markdown 中可以直接嵌入代码，让文章既有代码又可以交互多好。”

实际上这并不难实现。由于我写的 markdown 最终都是通过一些工具转成 html 来展示（比如我的博客）。因此只需要按照一定格式去写代码，然后将你的 markdown 编译一下，取出对应代码，将其插入到 html 对应位置即可。

只是做这个插件需要时间，做好后每次写文章也会多很多工作量，因此就没有做。但是如果你有这个需求，可以参考这个工具，它可以让你在 markdown 中嵌入代码，然后通过一个插件来实现代码的交互。

其直接内置了一些 UI 库和 helper 函数，让你可以很方便的实现代码的交互。当然你也可以自己引入你的库，然后实现你想要的效果。

![](https://p.ipic.vip/32pgn5.png)

via: https://genji-md.dev

### 2024-04-18[工具]

figma 是一个非常好用的设计工具，同时它的插件生态也非常丰富，你可以通过插件来扩展 figma 的功能。这是因为 figma 丰富的接口设计，figma 提供了 widget api，rest api 和 plugin api 来让扩展 figma 变得非常容易。

- widget api：可以让你在 figma 中嵌入 ui 组件。
- rest api：可以让你通过 restful api 来操作 figma 的文件，节点等。
- plugin api：可以让你通过 JavaScript 来操作 figma 的文件，节点等。

figma 的插件类似于浏览器的插件，你可以通过插件来实现一些自动化的操作，比如自动生成代码，自动生成图表等。也是用 JavaScript 来编写的。

所谓万事开头难，如果你想自己写一个 figma 插件，看官方文档不那么容易上手。那么这个工具可以帮助你快速创建一个 figma 插件项目。

使用它可以快速生成 typescript 项目，也可以生成 react 项目，让你可以专注于业务逻辑的实现。

via: https://yuanqing.github.io/create-figma-plugin/quick-start/

### 2024-04-12[工具]

准备好你的数据库，执行 `npx dashpress`， 就可以生成一个完整的后台管理系统，包括前端和后端。体验 demo：https://demo.dashpress.io/

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

### 2024-04-08[工具]

2022-03-04 给大家推荐了一个工具 chrome-extension-cli，这个工具可以帮助你简化 chrome 插件的开发。

今天给大家推荐一个类似的工具，个人感觉也更加好用。你不仅可以用它来开发新的 chrome 插件，还能用它来开发调试现有的 chrome 插件。

via: https://extension.js.org/

### 2024-04-02[网站]

tradingview 是一个提供经济数据的网站，它提供了各种股票，期货，加密货币市场的图表，指标等。

当然有些经济指标是有很多水分的，大家注意分辨。

![](https://p.ipic.vip/quzn8x.png)

值得一提的是，虽然大部分数据是免费的，但是有些数据是需要付费的，比如一些高级指标，高级图表等。你可以使用部分加密货币直接购买，加密货币购买方面是由 [coinbase](https://www.coinbase.com) 提供支持。

如果你只想看加密货币的数据，也可以直接使用 [coinmarketcap](https://coinmarketcap.com)，它提供了更加专业的加密货币数据。

via: https://cn.tradingview.com/markets/#economy

### 2024-04-01[网站]

最近 web3 特别多空投（airdrop），但是消息都比较分散，这个 metamask 钱包提供的功能可以帮助你识别你有资格参与的空投。

可惜的是很多链都不支持，比如 solana，sui 等，期待后续完善吧。

![](https://p.ipic.vip/uby8i6.png)

via: https://portfolio.metamask.io/explore



## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://p.ipic.vip/bp35i7.jpg">

