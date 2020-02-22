# 每日一荐

![历史共访问次数](https://visitor-count-badge.herokuapp.com/total.svg?repo_id=azl397985856.daily-featured)
![今天被访问次数](https://visitor-count-badge.herokuapp.com/today.svg?repo_id=azl397985856.daily-featured)

> 统计数据的时间是从 2019-09-15 16:50 起至今

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 新鲜出炉(2020-02)

### 2020-02-22[工具]

age 是一款加解密命令行工具，类似 ssh，我们可以生成自己的公钥，并基于自己的公钥加密，使用自己的私钥进行解密，age 也可以和 ssh 进行很好的合作。

使用口令对文件进行加密是常见的做法，而现在我们可以对信息进行一次公钥加密，这样任何人除非获取到你的私钥才能破解，这要比口令要安全。另外我们也可以基于此实现一个聊天，文件传输程序，并基于 age 来实现加解密，增加安全性，当然如果要做的话这中间的性能损耗也是一个需要考虑的问题。

仓库地址： https://github.com/FiloSottile/age

### 2020-02-21[工具]

有时候我们开发了一个应用，想给别人看下效果，而这个人不和你一个局域网，并且你没有公网 IP。那么你可以使用一种叫做内网穿透的技术，其中比较有名的有花生壳，如果不熟悉内网穿透的可以看下这篇科普文 https://zhuanlan.zhihu.com/p/30351943。 而我现在使用的是 ngrok：

![](https://tva1.sinaimg.cn/large/0082zybply1gc42ncii7vj30m80duabo.jpg)

ngrok 主页： https://ngrok.com/

### 2020-02-20[仓库]

STPyV8 是一个允许你在 JavaScript（基于 V8） 和 Python 之间互操作的仓库，STPPyV8 是 fork 自 PyV8 项目，目的是为了跟进最新的 V8 和 Python3。

地址： https://github.com/area1/stpyv8

### 2020-02-19[仓库]

NodeTube 是一个使用 node 构建的 用来取代 youtube 的客户端，支持私有化部署。

技术栈：

- Node.js 8.0+
- MongoDB
- Redis
- ffmpeg

你可以使用 NodeTube + ngrok 快速搭建一个公网可以访问的类 Youtube 网站。

仓库地址： https://github.com/mayeaux/nodetube

### 2020-02-18[好文]

AWS 是什么？都有哪些功能？如果你不知道，那么这篇文章可以帮到你。这篇文章很详细地讲解了 AWS 提供的服务。

![](https://tva1.sinaimg.cn/large/0082zybply1gbztweann6j30hs0v6jvz.jpg)

文章地址： https://blog.logrocket.com/aws-services-cheat-sheet/

### 2020-02-17[好文]

如果你还没听过或者不知道 JWT 是干嘛的，那么你可以看下这篇文章《一分钟简单了解 JSON Web Token》，当然这和很多入门科普文章一样缺乏深度，但是对你完全不了解的人来说还是很友好的。

文章地址： https://mp.weixin.qq.com/s/i3UbVlVfa--vnqg697xgRQ

### 2020-02-14[工具]

祝大家情人节快乐。 🌹🌹🌹🌹🌹🌹🌹🌹 哦，不对应该是 😷😷😷😷😷😷😷😷😷😷😷

今天介绍一个脑洞很大的 Chrome 扩展程序， 可以在你购物的时候帮助你找到优惠券。只是这款扩展不支持国内的网站，感觉这一个商机呢？ 感兴趣的小伙伴可以做一下。地址：https://help.joinhoney.com

### 2020-02-13[工具]

对于 serverless，很多厂商都在做。而每个云厂商都有自己的 cli 工具，各个标准都不统一，也没有什么规范。 这个工具将其进行了统一，它支持 aliyun ， aws 众多云厂商。地址：https://github.com/serverless/serverless

### 2020-02-12[网站]

今天推荐给大家一个交互式学习网站，会给你准备一些环境，这样就不需要在本地安装环境了，并且还可以检测你的操作是否正确等，类似国内的实验楼。

![](https://tva1.sinaimg.cn/large/0082zybply1gbtqjql0csj32lg0p6q84.jpg)

![](https://tva1.sinaimg.cn/large/0082zybply1gbtr376ka9j32290u0gui.jpg)

地址： https://www.katacoda.com

## 历史汇总

- [2020-01](./backup/2020-01/)
- [2019-12](./backup/2019-12/)
- [2019-11](./backup/2019-11/)
- [2019-10](./backup/2019-10/)
- [2019-09](./backup/2019-09/)

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7he9xdtmyj30by0byaac.jpg">

## 贡献

- 如果有想法和创意，请提[issue](https://github.com/azl397985856/daily-featured/issues)或者进群提
- 如果想贡献代码，请提[PR](https://github.com/azl397985856/daily-featured/pulls)
- 如果需要修改项目中图片，[这里](./assets/)存放了项目中绘制图的源代码， 大家可以用[draw.io](https://www.draw.io/)打开进行编辑。

## License

[Apache-2.0](./LICENSE)
