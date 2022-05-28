# 每日一荐

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

在线阅读：https://leetcode-solution-leetcode-pp.gitbook.io/mz-ri-yi-jm/

电子书文件太大， 大家可到我的公众号《脑洞前端》回复“每日一荐”获取。

## :newspaper: &nbsp; RSS

大家可以用 Github 提供的 [RSS](https://github.com/azl397985856/daily-featured/commits.atom) 来订阅我的仓库更新。

## 新鲜出炉 (2022-05)

### 2022-05-30[工具]

前端写 UI 的时候可能会想找几个图片进行测试，这就需要这个图片没有防盗链。再加上我们有时候还对图片的尺寸有要求，于是就有了各种 image placeholder 服务。比如我今天介绍的这个。

用法非常简单,直接 url 上跟着长宽就行。

```
https://picsum.photos/200/300
```

如上就是一个 200 x 300 的图片。如果省略高的话，就是正方形的图片。另外还支持灰度设置，设置具体的图片等等功能。

via: https://picsum.photos/

### 2022-05-30[网站]

如果你用过 PS，应该知道 PS 可以更改图片的背景。如果是纯色的就更好了。

这个工具就是一个网页版的证件照换底色。支持常见的红色底，蓝色底和白色底三种颜色的互转。

via: https://www.bgconverter.com/

### 2022-05-29[网站]

一个可以帮助你制作 logo 的工具，我记得我的力扣加加的 logo 就是用它做的？

via: https://www.designevo.com/cn/logo-maker/

### 2022-05-28[网站]

一个可以查询化妆品成分的网站。

via: https://cosdna.com/chs/product.php

### 2022-05-27[工具]

一个可以帮你查看其他扩展程序源码的工具。不过这个源码可能是编译后的代码，因为上传到 chrome 商店的就有可能是编译后的代码。

无论如何，它能帮你查看和下载作者提交到 chrome 商店的代码。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h2o7dzddmkj20hs0b43zc.jpg)

via: https://chrome.google.com/webstore/detail/chrome-extension-source-v/jifpbeccnghkjeaalbbjmodiffmgedin

### 2022-05-26[仓库]

一个基于 React 的后台管理系统的 UI。基于它，你可以快速开发同一个后台管理系统。

via: https://github.com/adrianhajdin/project_syncfusion_dashboard

### 2022-05-25[好文]

一个关于部署的专栏，其中有一章比较有意思，就是根据分支不同，部署到不同的地方，能通过不同的 URL 地址访问。

比如:

- feature-preview 分支部署在 https://feature-preview.lucifer.ren
- feature-prod 分支部署在 https://feature-prod.lucifer.ren

via: https://q.shanyue.tech/deploy/ci-preview.html

### 2022-05-24[仓库]

ya-webadb（yet another webadb） 是一个在 web 上操作安卓设备的工具。注意是操作安卓设备，不是调试安卓设备上的网页。

比如你可以通过它截屏，安卓 apk 应用，开关机等等操作。

via: https://github.com/yume-chan/ya-webadb

### 2022-05-23[仓库]

得益于无头浏览器（headless browser），我们可以对 UI 进行自动化测试。

也因为无头浏览器，我们可以自动化检测应用可能的内存泄漏。原理也很容易，使用无头浏览器打开网页，然后使用浏览器的相关 api 检测堆内存，通过对比不同时间内存使用情况从而检查出潜在的内存泄漏。

这款工具就可以捕获浏览器的堆内存使用情况。

使用起来也非常简单：

```js
const browser = await Puppeteer.launch();
const page = await browser.newPage();

await page.goTo("https://google.com");

const heapSnapshot = await captureHeapSnapshot(await page.target());
```

via: https://github.com/adriancooney/puppeteer-heap-snapshot

### 2022-05-22[好文]

原文标题：《Tree shaking 问题排查指南来啦》，这是字节团队出品的好文，应用价值比较高，如果你有类似的需求， 那么有很大的参考价值。

via: https://mp.weixin.qq.com/s/SfZbBg0lWhvgzS023wTjYA

### 2022-05-21[仓库]

一个可以美化你 Github Profile 页面的资料集合。

我的 [Github Profile](https://github.com/azl397985856 "Github Profile") 所有内容都被这个仓库收录了。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h2dyjpe127j217b0u0tde.jpg)

via: https://github.com/rzashakeri/beautify-github-profile

### 2022-05-20[工具]

国内音乐这块网易云很受欢迎。因此有很多针对网易云的工具。

比如这款将其他平台版权的歌曲收录到网易云的，表现上就是你可以在网易云听网易没版权（灰色）的歌曲。

via: https://github.com/nondanee/UnblockNeteaseMusic

另外还有网友做了网易云的 sdk 供大家使用，你可以用它搭建自己的音乐客户端。

via: https://github.com/Binaryify/NeteaseCloudMusicApi

### 2022-05-19[工具]

一个老照片修复的工具。

之前听过有人利用这个信息差，有偿给别人修复老照片赚翻了，不知道真假。不过信息差确实是个好东西。我们每个人都生活在信息差中。

via: https://jpghd.com/

### 2022-05-18[网站]

一个云逛街网站，可以去世界各地云旅游。国内有好几个地方可以去，比如长沙，重庆，成都。

如下是我云旅游东京的效果：

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h2akh7otscj21e60u0nbz.jpg)

PS：似乎有点吃性能

via: https://citywalks.live/

### 2022-05-17[好文]

一个没啥用的正则，功能是识别一个数字是否是质数。除了炫酷之外，应该没什么其他用了。

```js
/^1?$|^(11+?)\1+$/;
```

大概原理是使用正则的回溯机制，具体大家可以看看这篇文章。

via: https://www.noulakaz.net/2007/03/18/a-regular-expression-to-check-for-prime-numbers/

### 2022-05-16[技巧]

两行命令可以审查 macos 系统 UI。

```bash
defaults write NSGlobalDomain WebKitDeveloperExtras -bool true
defaults write -g WebKitDeveloperExtras -bool YES
```

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h27zhe2s0pj20u00v142c.jpg)

via: https://blog.jim-nielsen.com/2022/inspecting-web-views-in-macos/

### 2022-05-15[仓库]

微软出品的前端基础学习资料。话说微软在技术入门资料这块发力不少啊？刚看完 Python， 前端又出来了。

via: https://github.com/microsoft/Web-Dev-For-Beginners

### 2022-05-14[好文]

Web 可以读取 USB 数据？可以通过蓝牙进行数据传输？还能用 NFC?

这份资料讲解了 web （这里是 chrome 为例）如何与硬件进行交互。

via: https://web.dev/devices/

### 2022-05-13[网站]

Google 开发的前端学习网站，用于谷歌技术布道(给自己打广告)以及一些学习资料。强烈建议前端开发者关注。

via: https://web.dev/

### 2022-05-12[仓库]

在 JS 中 调用 Python。不仅支持 python 的语法，还支持 python 的三方库。

比如你想用 numpy 提供的功能，你就可以这样写：

```py
# data.py
import numpy as np

def make_x_and_y(n):
    x = np.random.randn(n)
    y = np.random.randn(n)
    return x, y
```

然后在 JS 中进行调用。

```html
<html>
  <head>
    <link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
    <script defer src="https://pyscript.net/alpha/pyscript.js"></script>
    <py-env> - numpy - matplotlib - paths: - /data.py </py-env>
  </head>

  <body>
    <h1>Let's plot random numbers</h1>
    <div id="plot"></div>
    <py-script output="plot">
      import matplotlib.pyplot as plt from data import make_x_and_y x, y =
      make_x_and_y(n=1000) fig, ax = plt.subplots() ax.scatter(x, y) fig
    </py-script>
  </body>
</html>
```

via: https://github.com/pyscript/pyscript

### 2022-05-11[好文]

如果公司有一个公共的代码需要在多个项目间使用，你的做法是什么？ 复制粘贴？npm？cdn + external？ 你可以试试 webpack5 中的 Module Federation！

via: https://mp.weixin.qq.com/s?__biz=Mzg2MDY5MTMxOA==&mid=2247485894&idx=1&sn=debfda7356d2d3098c78bd0f436c1510

### 2022-05-10[好文]

如何落地一个客户机器人？这个文章告诉你。

这个文章是那种实战型的，没有理论基础讲解。因此如果你有类似需求的话倒是可以读一下。或者收藏一下等到用的时候借鉴一下。如果你纯粹想知道技术原理的话，这篇文章不是很适合。

via: https://zoo.team/article/intelligent-robot

### 2022-05-09[工具]

客户遇到问题了，如何远程调试？devtools-remote 这个工具帮助你。

客户只需要安装这个插件，然后你在自己的应用中进行集成即可。

其原理很简单，代码也只有短短的 200 行左右。核心原理是利用 CDP（chrome devtool protocol） 和远程通信，将本地的支持 CDP 应用的信息同步到远程。 其实就是一个调试代理。

值得注意的是这个工具仅支持 **支持 CDP 的客户端**，比如 chrome。如果客户端不支持 CDP 是不行的。

via: https://github.com/auchenberg/devtools-remote

### 2022-05-06[好文]

文章标题：Using GitHub Actions to get notified when an API response (or web page) changes

如果你想监控一个网页的状态你会怎么做？比如抢购一个商品？

最简单的思路就是写一个脚本不断轮训。如果没有现成接口，也可以使用爬虫来做。

这篇文章就是类似的思路，只不过其借助了 Github Action 这个自动化工具来完成。

这个是作者使用的完整 github action yml 文件：

```yml
on:
  schedule:
    # Run every hour, on the hour. This can be customized to checking as frequently as every 5 minutes.
    - cron: "0 * * * *"

name: Check for changes

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      # Use cURL to fetch the given URL, saving the response to `data.json`
      - name: Fetch data
        run: curl "<URL YOU WANT TO CHECK HERE>" -o data.json

      # Optionally, use `jq` to pull one or more fields from the JSON to include in the SMS message
      - name: Parse data
        id: parse_data
        run: echo '::set-output name=someField::'$(jq -r '.someField' data.json)

      # Compare the response to the previous run, using a hash of the response as the cache key
      - name: Fetch Cache
        id: cache
        uses: actions/cache@v2
        with:
          path: data.json
          key: ${{ hashFiles('data.json') }}

      # If there was not a cache hit (meaning the response changed), notify me via text message
      # See https://github.com/twilio-labs/actions-sms for setup instructions
      # You could use a different notification action here, so long as you include the `if` condition below
      - name: Notify if data has changed
        uses: twilio-labs/actions-sms@v1
        if: steps.cache.outputs.cache-hit != 'true'
        env:
          TWILIO_ACCOUNT_SID: ${{ secrets.TWILIO_ACCOUNT_SID }}
          TWILIO_API_KEY: ${{ secrets.TWILIO_API_KEY }}
          TWILIO_API_SECRET: ${{ secrets.TWILIO_API_SECRET }}
        with:
          fromPhoneNumber: ${{ secrets.from_phone }}
          toPhoneNumber: ${{ secrets.to_phone }}
          message: "There's been a change! someField is now ${{ steps.parse_data.outputs.someField }}."
```

via: https://ben.balter.com/2021/12/15/github-actions-website-api-change-notification/

### 2022-05-05[好文]

我们常常听说某某网站被注入恶意 JS 脚本，造成 xxx 的严重后果。但是你听过 CSS 也可以用来攻击么？

CSS 不仅可以窃取你的访问记录，知道你访问了哪些网站，还能窃取你的密码，从而造成更严重后果。

文章讲的 CSS 攻击技巧很有趣，同时也给我们提了一个醒，大家上网的时候多多留意，做好防范。

via:

- [Can you get pwned with CSS?](https://scotthelme.co.uk/can-you-get-pwned-with-css/)
- [Retrieving your browsing history through a CAPTCHA](https://varun.ch/history)

### 2022-05-04[技巧]

测试用例可以通过 only 和 skip 实现仅测试部分测试用例。主流测试框架都支持它们。

```js
describe.skip("skip test", () => {});
// or
it.skip("skip test", () => {});

describe.only("only test", () => {});
// or
it.only("only test", () => {});
```

具体来说，skip 可以跳过测试用例。only 可以只测试部分测试用例。

### 2022-05-03[网站]

actual 是最近上 Github trending 的一个仓库。

它的核心理念是**本地优先，并尽可能和网络进行同步**，这和常规的网络系统是相反的。

如下图是我本地部署 actual 后的效果。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h1vmj3dcabj21hz0u0ju3.jpg)

如果你满足以下两点，那么可以考虑使用这个支持私有化部署的**个人记账理财工具**。

1. 对信息比较敏感，不想把信息存到别人的服务器或者希望自己的数据放在自己机器
2. 想增加一些特别定制化的功能

相反，如果这两点你都不是特别在意，使用目前现有的记账理财软件也是 ok 的。

via: https://github.com/actualbudget/actual

### 2022-05-02[仓库]

一个后台管理系统的前端 UI。我之前的公司内部的系统就和这个长的几乎一样。如果当时直接拿过来用，岂不是省了很多时间么？

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h27zk8mxsqj21hc0u0dit.jpg)

via: https://github.com/HalseySpicy/Geeker-Admin

### 2022-05-01[工具]

一个可以下载咪咕音乐曲库的 cli 工具。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h27zzxnfs1j20vg07i0uf.jpg)

via: https://github.com/zonemeen/musicn

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
