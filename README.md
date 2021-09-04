# 每日一荐

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

在线阅读：https://leetcode-solution-leetcode-pp.gitbook.io/mz-ri-yi-jm/

电子书文件太大， 大家可到我的公众号《脑洞前端》回复“每日一荐”获取。

## :newspaper: &nbsp; RSS

大家可以用 Github 提供的 [RSS](https://github.com/azl397985856/daily-featured/commits.atom) 来订阅我的仓库更新。
​

## 新鲜出炉 (2021-09)

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

## 历史汇总

- [2021-08](https://github.com/azl397985856/daily-featured/tree/master/backup/2021-08/README.md)
- [2021-06](https://github.com/azl397985856/daily-featured/tree/master/backup/2021-06/README.md)
- [2021-05](https://github.com/azl397985856/daily-featured/tree/master/backup/2021-05/README.md)
- [2021-04](https://github.com/azl397985856/daily-featured/tree/master/backup/2021-04/README.md)
- [2021-03](https://github.com/azl397985856/daily-featured/tree/master/backup/2021-03/README.md)
- [2021-02](https://github.com/azl397985856/daily-featured/tree/master/backup/2021-02/README.md)
- [2021-01](https://github.com/azl397985856/daily-featured/tree/master/backup/2021-01/README.md)
- [2020-12](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-12/README.md)
- [2020-11](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-11/README.md)
- [2020-10](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-10/README.md)
- [2020-09](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-09/README.md)
- [2020-08](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-08/README.md)
- [2020-05](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-05/README.md)
- [2020-04](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-04/README.md)
- [2020-03](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-03/README.md)
- [2020-02](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-02/README.md)
- [2021-01](https://github.com/azl397985856/daily-featured/tree/master/backup/2021-01/README.md)
- [2019-12](https://github.com/azl397985856/daily-featured/tree/master/backup/2019-12/README.md)
- [2019-11](https://github.com/azl397985856/daily-featured/tree/master/backup/2019-11/README.md)
- [2019-10](https://github.com/azl397985856/daily-featured/tree/master/backup/2019-10/README.md)
- [2019-09](https://github.com/azl397985856/daily-featured/tree/master/backup/2019-09/README.md)

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7he9xdtmyj30by0byaac.jpg">

## 贡献

- 如果有想法和创意，请提 [issue](https://github.com/azl397985856/daily-featured/issues) 或者进群提
- 如果想贡献代码，请提 [PR](https://github.com/azl397985856/daily-featured/pulls)
- 如果需要修改项目中图片，[这里](./assets/) 存放了项目中绘制图的源代码， 大家可以用 [draw.io](https://www.draw.io/) 打开进行编辑。

## License

[Apache-2.0](./LICENSE)
