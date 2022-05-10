# 每日一荐

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

在线阅读：https://leetcode-solution-leetcode-pp.gitbook.io/mz-ri-yi-jm/

电子书文件太大， 大家可到我的公众号《脑洞前端》回复“每日一荐”获取。

## :newspaper: &nbsp; RSS

大家可以用 Github 提供的 [RSS](https://github.com/azl397985856/daily-featured/commits.atom) 来订阅我的仓库更新。

## 新鲜出炉 (2022-05)

### 2022-05-15[仓库]

微软出品的前端基础学习资料。话说微软在技术入门资料这块发力不少啊？刚看完 Python， 前端又出来了。

地址：https://github.com/microsoft/Web-Dev-For-Beginners

### 2022-05-14[好文]

Web 可以读取 USB 数据？可以通过蓝牙进行数据传输？还能用 NFC?

这份资料讲解了 web （这里是 chrome 为例）如何与硬件进行交互。

地址：https://web.dev/devices/

### 2022-05-13[网站]

Google 开发的前端学习网站，用于谷歌技术布道(给自己打广告)以及一些学习资料。强烈建议前端开发者关注。

地址： https://web.dev/

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

地址：https://github.com/pyscript/pyscript

### 2022-05-11[好文]

如果公司有一个公共的代码需要在多个项目间使用，你的做法是什么？ 复制粘贴？npm？cdn + external？ 你可以试试 webpack5 中的 Module Federation！

地址：https://mp.weixin.qq.com/s?__biz=Mzg2MDY5MTMxOA==&mid=2247485894&idx=1&sn=debfda7356d2d3098c78bd0f436c1510

### 2022-05-10[好文]

如何落地一个客户机器人？这个文章告诉你。

这个文章是那种实战型的，没有理论基础讲解。因此如果你有类似需求的话倒是可以读一下。或者收藏一下等到用的时候借鉴一下。如果你纯粹想知道技术原理的话，这篇文章不是很适合。

地址:https://zoo.team/article/intelligent-robot

### 2022-05-09[工具]

客户遇到问题了，如何远程调试？devtools-remote 这个工具帮助你。

客户只需要安装这个插件，然后你在自己的应用中进行集成即可。

其原理很简单，代码也只有短短的 200 行左右。核心原理是利用 CDP（chrome devtool protocol） 和远程通信，将本地的支持 CDP 应用的信息同步到远程。 其实就是一个调试代理。

值得注意的是这个工具仅支持 **支持 CDP 的客户端**，比如 chrome。如果客户端不支持 CDP 是不行的。

地址：https://github.com/auchenberg/devtools-remote

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

地址：https://ben.balter.com/2021/12/15/github-actions-website-api-change-notification/

### 2022-05-05[好文]

我们常常听说某某网站被注入恶意 JS 脚本，造成 xxx 的严重后果。但是你听过 CSS 也可以用来攻击么？

CSS 不仅可以窃取你的访问记录，知道你访问了哪些网站，还能窃取你的密码，从而造成更严重后果。

文章讲的 CSS 攻击技巧很有趣，同时也给我们提了一个醒，大家上网的时候多多留意，做好防范。

地址：

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

地址：https://github.com/actualbudget/actual

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
