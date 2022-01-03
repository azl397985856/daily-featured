# 每日一荐

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

在线阅读：https://leetcode-solution-leetcode-pp.gitbook.io/mz-ri-yi-jm/

电子书文件太大， 大家可到我的公众号《脑洞前端》回复“每日一荐”获取。

## :newspaper: &nbsp; RSS

大家可以用 Github 提供的 [RSS](https://github.com/azl397985856/daily-featured/commits.atom) 来订阅我的仓库更新。
​

## 新鲜出炉 (2022-01)

## 2022-01-04[技巧]

两个问题看你有没有高并发经验。

1. 如何避免项目的错误日志扎堆上报，导致服务器瞬间压力过大？
2. 如何保证后端突然接受大量请求而不至于挂？

其实这两个问题是一个是客户端问题，一个是服务端问题，还是很有代表性的。

答案其实不唯一， 我这里简单分享个**随机丢弃**思路。

1. 可以采取随机数舍弃的方法，比如随机舍弃 50% 的请求。
2. 可以采取随机数舍弃的方法，比如在 cpu 大于 80% 的时候，随机舍弃 50% 的请求。专业一点这个叫熔断。

当然除了这个思路还可以采用异步上报，引入队列等众多方法， 这里就不多做介绍。这个随机丢弃的方式简单粗暴且有效，但是对于重要的业务，比如支付还是谨慎使用。

## 2022-01-03[工具]

如果你需要做增量更新的功能，可以考虑使用这个工具集。

其中 bsdiff 用来 diff 两个二进制包 bspatch 用来将 diff 信息 patch 过去。

参考代码：

```js
var assert = require("assert"),
  bsdiff = require("bsdiff"),
  crypto = require("crypto");

// cur 是当前的二进制包
// ref 是需要更新到的二进制包
var cur = crypto.randomBytes(1024),
  ref = crypto.randomBytes(1024);

bsdiff.diff(cur, ref, function (err, ctrl, diff, xtra) {
  if (err) throw err;
  bsdiff.patch(cur.length, ref, ctrl, diff, xtra, function (err, out) {
    if (err) throw err;
    // 将 out 信息更新到当前的二进制包 cur 上
    for (var i = 0; i < cur.length; i++) {
      if (cur[i] !== out[i]) throw "Patch did not work";
    }
    console.log("Patch worked!");
  });
});
```

地址：https://github.com/mikepb/node-bsdiff

## 2022-01-02[技巧]

adb 全称 Android Debug Bridge，是安卓上的调试工具。我们可以用它做一些自动化的事情。

比如我们可以用 adb 自动录制屏幕，并获取录制的详细数据信息。

代码参考：

```bash
adb shell screenrecord --time-limit 5 --verbose /path/to/save/a.mp4
```

这比手工录制效率高很多。

小技巧：

我们可以利用上面录制的视频测量应用的首屏时间。比如我们可以使用一些工具将上面的视频帧逐个提取出来，然后利用图像识别工具反向逐个检测相邻两个图片的相似度，找出最后一张发生相似度明显变化的图片。这样首屏时间可以记为`最后一张发生相似度明显变化的图片的时间 t1 - 页面开始加载的时间 t2`

### 2022-01-01[工具]

如果你有离线化的需求，那么可以试试这个 webpack 插件。它可以帮助你预渲染出静态 html， 使得用户在离线或者弱网情况下直接打开页面，提高用户体验。

基础用法：

```js
const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  plugins: [
    ...new PrerenderSPAPlugin({
      // Required - The path to the webpack-outputted app to prerender.
      staticDir: path.join(__dirname, "dist"),
      // Required - Routes to render.
      routes: ["/", "/about", "/some/deep/nested/route"],
    }),
  ],
};
```

如上图，你告诉插件你的打包资源位置以及你需要离线化的几个路由，插件就会自动帮你生成离线化资源。更多用法参考仓库文档。

地址：https://github.com/chrisvfritz/prerender-spa-plugin

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
