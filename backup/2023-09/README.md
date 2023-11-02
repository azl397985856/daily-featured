
# 每日一荐

![](https://p.ipic.vip/0bhil1.jpg)![](https://p.ipic.vip/0bhil1.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2023-09

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



## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://p.ipic.vip/bp35i7.jpg">

