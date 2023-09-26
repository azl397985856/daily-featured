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

## 新鲜出炉 (2023-09)

### 2023-09-26[网站]

一个非常好用的编程语言互相转换的在线工具。

我试用了一下，效果非常好，应该有 AI 的加持。

我在刷题的时候，写题解需要提供多种编程语言就使用过这个工具，真的好用。

via: https://www.codeconvert.ai/c++-to-python-converter

### 2023-09-25[插件]

一个油猴脚本。安装后可以直接在豆瓣读书中，下载对应的 pdf 和 epub 文件。

![](https://p.ipic.vip/e2enzk.jpg)

via: https://greasyfork.org/en/scripts/461293-%E6%88%91%E5%8F%AA%E6%83%B3%E5%A5%BD%E5%A5%BD%E7%9C%8B%E4%B9%A6

### 2023-09-19[好文]

《Design Trade-offs in Bundler: The Rationale Behind Creating Rspack 》是 rspack 的作者在字节对外的 github 组织下的一篇 discuss 分享。 讲述了为什么要自己开发 rspack，其解决了什么问题。

通过这个文章，我学习了两点。

1. webpack 中部分 loader 会 parse 生成 ast，原来这部分时间这么长。 文章作者通过复用 ast 达到了优化的目的。（当然其他构建工具也有复用 ast 的问题）如下图：

![](https://p.ipic.vip/yku6ee.jpg)

2. github dicsussion 支持了一个新的 markdrown 语言。用来给 quote 增加一些样式。如下图：

![](https://p.ipic.vip/5qosmd.png)

> 更多： https://github.com/orgs/community/discussions/16925

via: https://github.com/web-infra-dev/wg/discussions/1

### 2023-09-14[工具]

一个油猴脚本，可以帮助你解决一些网站跳转到第三种需要你二次确认的问题。通过它，直接一键跳转到目标第三方网站。

via: https://greasyfork.org/zh-CN/scripts/462796-%E5%A4%96%E9%93%BE%E8%87%AA%E5%8A%A8%E8%B7%B3%E8%BD%AC

### 2023-09-13[网站]

Tabserve 允许你将本地服务（通过 localhost 提供的服务）暴露到互联网。其他人可以通过一个域名直接访问到你的本地服务。而完成这个你不需要安装软件，只需要打开一个网站即可。

原理很简单，但是很有趣。

其原理大概是在你本地启动一个 websocket， 域名访问到 Tabserve 的服务后，会转发到你本地的 websocket，然后你本地的 websocket 转发到 localhost，然后将响应回传过去。**其实就是在你本地启动一个 websocket 充当代理。**

via: https://tabserve.dev/

### 2023-09-08[工具]

pdf-poppler 是一个讲 pdf 转化为图片的库，通过它你可以自己搭建一个 pdf 预览服务。前端请求一个资源路径， node 端返回图片到前端进行展示即可。相比于浏览器端直接展示 pdf，兼容性和一致性都会有优势。

参考代码：

```js
const path = require('path');
const pdf = require('pdf-poppler');
 
let file = 'C:\\tmp\\convertme.pdf'
 
let opts = {
    format: 'jpeg',
    out_dir: path.dirname(file),
    out_prefix: path.baseName(file, path.extname(file)),
    page: null
}
 
pdf.convert(file, opts)
    .then(res => {
        console.log('Successfully converted');
    })
    .catch(error => {
        console.error(error);
    })
```

via: https://www.npmjs.com/package/pdf-poppler

### 2023-09-07[网站]

一个在线工具，可以将音频转化为文字。目前支持三种方式，From URL，From file 和 Record。

via: https://huggingface.co/spaces/Xenova/whisper-web

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
