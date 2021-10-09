# 每日一荐

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2021-09

### 2021-09-30[工具]

GraphQL Code Generator 是一个 GraphQl 生态的一个很有名的代码生成工具。基本上有一些 GraphQL 工程经验的人都知道它。

 简单来说你可以将它看成是一个黑盒：

- 输入是 graphql 的 schema（查询语句以及类型定义等），yml （配置文件）和 operation（操作，这个是可选的）。
- 输出是代码文件

 比如你在 yml 中配置了 ts 插件，那么输出就是一个 ts 文件。其整体是插件化的，因此功能也会随着插件的完善而变得多样。比如实际工程中你可以在启动项目的时候生成 ts 代码，帮助你在获得更好的 ts 智能提示。

地址：https://www.graphql-code-generator.com/

### 2021-09-29[好文]

copilot 是一个基于 AI 的编程辅助工具。目前已经集成在了 vscode 中，后续可能集成到更多平台和工具，目前还是测试阶段。

地址：https://mp.weixin.qq.com/s?__biz=MzA3MjU5NjU2NA==&mid=2455508654&idx=1&sn=8f5e4c94a10d683cc4e2d15193c620c7

### 2021-09-28[好文]

阿里巴巴淘系的 graphql 解决方案，他们是如何在工具集成 graphql 的？遇到了哪些问题？又是如何解决的？

另外很有意思的点是，他们利用 cdn 的分布式能力，将 graphql 缓存写入 cdn 从而有效降低了 QPS。

地址：https://mp.weixin.qq.com/s/ZO1Vpslk3-17YxUVt9Vhrw

### 2021-09-21[工具]

apollographql 是很有名的 graphql 工具。它提供了服务端和客户端全套解决方案。

当然这不意味着你必须使用一个客户端框架才可以用，你完全可以使用原生的 http 去集成 graphql。不过客户端框架可以帮助我们解决很多问题，比如缓存策略，样板代码等等。比如 apollo 就集成了 React Hooks，使得你可在 React 应用中非常舒适地使用 graphql。

地址：https://www.apollographql.com/docs/react/data/queries/

### 2021-09-18[好文]

ESM 可以借助浏览器的模块化能力从而实现”无打包“，这样前端也不需要安装 node_modules，而仅仅是 import cdn 上的文件即可了。借助包的分发服务，甚至能将本地安装依赖的速度提升 10 倍。

不过现有的许多 npm 包是 cjs 的，那么将 CJS 转化为 ESM 如何进行？有哪些坑？这篇文章告诉你。

地址：https://mp.weixin.qq.com/s?__biz=MzA3MjU5NjU2NA==&mid=2455508622&idx=1&sn=10f0d16a4becb945e849e49d3af478f3

### 2021-09-17[工具]

这个工具可以让你将一个网页版的 vscode 部署在你的云端服务。

你可以将其部署到一些免费的平台，比如 heroku 的 free plan。这样你就可以拥有一个自己独有的云端 vscode 了。

![](https://tva1.sinaimg.cn/large/008i3skNly1gukrsa7xzej61ca0tmjw002.jpg)

地址：https://github.com/cdr/deploy-code-server

### 2021-09-16[工具]

MDVideo 是一个可以将 markdown 转为视频的插件。其支持：

- 自动”剪辑“
- 添加字幕
- 语言合成
- 。。。

不过目前仍然不支持 mac 平台且语言实现相对简单，期待功能更加完善。

地址：http://mdvideo.gshll.com/

### 2021-09-15[工具]

gron 是一个使得**grep 可以处理格式化 json 结构的文本的工具**。

比如你有这样一个 json：

```json
[
  {
    "commit": {
      "author": {
        "date": "2016-07-02T10:51:21Z",
        "email": "mail@tomnomnom.com",
        "name": "Tom Hudson"
      }
    }
  }
]
```

你可以 `gron test.json | fgrep "commit.author"` 就可以获得这样的结果(获取到 json 中的 author 字段的信息)：

```js
json[0].commit.author = {};
json[0].commit.author.date = "2016-07-02T10:51:21Z";
json[0].commit.author.email = "mail@tomnomnom.com";
json[0].commit.author.name = "Tom Hudson";
```

地址：https://github.com/tomnomnom/gron

### 2021-09-14[类库]

lit 是一个我关注了蛮长时间的库。这个库目前完善了很多功能，这里推荐给大家。

它可以用声明式的方式去写前端应用。并且非常小巧，只有 几 kb。

![](https://tva1.sinaimg.cn/large/008i3skNly1guczoeowfxj30wo0u0tbv.jpg)

地址：https://lit.dev/

### 2021-09-13[类库]

webpack 是很优秀，全面，生态完好的前端构建工具。而 vite 是最近流行的基于 esm **无打包** 的前端构建工具。

而很多公司和个人都在使用 webpack，他们也想获得 vite 的开发体验。大多数人的做法是按照一些教程手动替换，而今天介绍的工具 Webpack to Vite 可以自动完成这一任务。

地址：https://github.com/originjs/webpack-to-vite

### 2021-09-10[库]

教师节快乐 ✿✿ ヽ(°▽°)ノ ✿

mafs 是一个基于 React 的可视化数学公式的库。其不仅提供了公式的可视化，还可以完成一些交互动作。

地址：https://mafs.dev/guides/examples/projectile/

### 2021-09-09[好文]

Postman 是一个非常著名的接口调试工具，开发者可以使用它来完成接口的功能测试。

新版本的 postman 增加了很多有用的功能，比如环境变量，接口预处理等等。这篇文章带你了解它。

地址：https://mp.weixin.qq.com/s/WYGjvmsGG3D8sJ9j5i-d7w

### 2021-09-08[小技巧]

GUI 的优点就是入门比较快，操作简单。但很多时候却给我带来困扰，比如死活找不到某个功能的入口在哪，更可气的是好不容易记清楚了软件的功能入口，软件升级某一个功能的入口会发生变化，你又要摸索。使用命令行就没有这个问题。

命令行可以使用一些约定好的命令展示软件的所有功能，比如 -h。

好在有一些工具可以查看当前软件的信息，比如查看当前软件的所有快捷键，这个之前我们介绍过了。

而 GUI 程序毕竟是主流，因此我们也必须要要适应。这次介绍的是另外一个**无需安装任何软件**就可以使用的技巧。这里介绍一个小技巧：在 mac 下按 `cmd + ,` 可以直接打开当前应用程序的设置页面。并且几乎所有主流的应用程序都遵守这个约定。

### 2021-09-07[工具]

API Extractor 是一个帮你更好地管理 ts 声明文件的工具。API Extractor 和 TypeScript 都是微软的开源安排，第一方工具用起来肯定放心。

它可以帮你：

- 生成 md 后缀的报告文件
- 打包 .d.ts 声明文件
- 生成 api 文档

![](https://tva1.sinaimg.cn/large/008i3skNly1gu3tw7h7m6j604k046wed02.jpg)

如果你是一个库的开发者，不妨尝试一下这个工具。如果你的仓库是 mono repo，那就更推荐使用了。

地址：https://api-extractor.com/

### 2021-09-06[新闻]

近日 Github 推出 Github 全球大学（Introducing GitHub Global Campus）功能。

你可以在这里申请：https://education.github.com/discount_requests/student_application

![](https://tva1.sinaimg.cn/large/008i3skNly1gu2n2awta8j60yt0u0adn02.jpg)

地址：https://education.github.com/

### 2021-09-03[工具]

最近 Github 更新了凭证（credential）认证机制，因此很多人碰到了这样的报错：

```
refusing to allow a Personal Access Token to create or update ....
```

这就是 Git 凭证没有配置正确的结果。解决的方式很多，不过我强烈推荐你使用 Git-Credential-Manager-Core，这个是微软自己出的工具。众所周知微软收购了 Github。因此这个工具可谓是为 Github 量身打造，并可以扩展到其他基于 git 的平台上。

mac 用户可以安装 pkg 文件，windows 用户可以安装 exe 文件。之后第一次 push 的时候会提示你认证，你只需按照提示操作就行。

地址：https://github.com/microsoft/Git-Credential-Manager-Core

### 2021-09-02[趣闻]

一个可以摆在桌子上的**监控服务器的小摆件**。

![](https://tva1.sinaimg.cn/large/008i3skNly1gu1i395vywj60m80dh76e02.jpg)

它可以可以实现通用服务器或计算机的数据监控，包括 CPU 占用、RAM 占用、两个硬盘的可用空间、硬盘读写速度、网络 IO 速率。

> 这动手能力还不错嘛

地址：https://www.v2ex.com/t/799177?

### 2021-09-01[工具]

前端越来越卷很大程度上取决于前端工具迭代太快，同类工具太多。比如打包工具就有很多，比如 webpack，rollup，vite，esbuild，swc 等等。

这不仅让我们疲于学习各种框架和库，而且还疲于应付编写各个端插件。比如我写了一个 webpack 的插件，如果想让 rollup 用，那不得不重新开始写。类似的问题是编写微信小程序，如果想编写一个支付宝小程序也要做一些改变。 由于 taro 等跨端工具就产生了。

unplugin （是 universal plugin 的缩写，中文为通用插件）也是一样的，只不过它的目标是打包插件，而不是小程序罢了。

使用它，你可以同时编写 rollup，vote 以及 webpack 三端的插件。和 taro 等跨端工具一样，它也只能无缝转化**多端交叉的功能**。如果某一端特有的功能，可以使用特殊的 api 来定制。

地址：https://github.com/unjs/unplugin

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7he9xdtmyj30by0byaac.jpg">
