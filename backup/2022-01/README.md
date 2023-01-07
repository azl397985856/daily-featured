# 每日一荐

![](https://p.ipic.vip/cjkump.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2022-01

### 2022-01-31[好文]

一个制作非常精美，我个人非常喜欢的画风的网站。内容是关于 mono repo 工具的。

如果你还不知道什么是 mono repo，或者对 mono repo 管理工具感兴趣，那么请一定花一点时间看看这个文章。

我个人还是很推荐大家尝试一下 nx 的，看了下文章的对比更加加深了我的想法。

地址：https://monorepo.tools

### 2022-01-29[随谈]

有人不知道 NFT 是什么。

其实我也不是很了解，但是 NFT 有一个重要作用值得大家注意。 NFT 将原本网络中很容易实现的复制功能，变得可识别。

比如用户 A 创作了一段代码，然后用户 B 可以将其复制。作为用户 C 很难知道 A 的代码是复制品还是 B 的代码是复制品。而如果 A 将代码发布到了 NFT，那么 C 就可以很容易知道 B 的代码是复制品。这也是为啥一些 NFT 作品被拍出了天价的重要原因。

### 2022-01-28[工具]

前端经常碰到跨域安全问题。之前我的解决方式是通过本地代理（node 或 nginx 等服务）解决。

基本思路就是给请求响应头增加大概如下内容：

```
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

后来我使用了更方便的工具： 浏览器扩展。刚开始的时候用的是一个专门给请求加跨域头的插件。后来发现有些头不会加上，比如 access-control-expose-headers 。

因此一个通用的给请求增加头信息的插件就有必要了。于是我选择了 `requestly`

![](https://p.ipic.vip/xidtqb.jpg)

美中不足是每个规则只能免费改**一个**头。不过好消息是你可以新建多个规则，每个规则改一个头就可以白嫖了。

地址：https://app.requestly.io

### 2022-01-27[技巧]

Web 上传文件，我们可以使用 input 标签 + form 表单来做。而现在更多是使用 js + formData 实现。

参考代码：

```js
const formData = new FormData();
const file = new File([buffer], filename);
formData.append("file", file, filename);
```

这样会更加自由，我们可以控制上传的文件内容。 接下来， 浏览器会给我们添加 `multipart/form-data` 以及 `WebKitFormBoundary` 等，这样文件就可以上传了。

如果是在 Node 端，FormData 是不存在的。因此前面提到的 `multipart/form-data` 以及 `WebKitFormBoundary` 等 都需要自己来完成了。这样有点麻烦，不过大家可以使用 [form-data](https://github.com/form-data/form-data) 来完成。如果是浏览器，form-data 会使用浏览器原生的 FormData，否则会自己实现一个“几乎等价” 的 FormData。

### 2022-01-26[类库]

Tauri 是一个让用户使用 JS 开发跨平台桌面程序的类库，核心是 Rust 写的（如今 web 基础工具很多都是 Rust 写的），是大名鼎鼎的 Electron 的竞品。

地址：https://tauri.studio/docs/architecture

### 2022-01-23[工具]

fuite 是一个 cli 工具，帮助你一键检测网页是否可能有**潜在的内存泄漏**。

最简单的用法：

```bash
npx fuite https://example.com
```

地址：https://github.com/nolanlawson/fuite

### 2022-01-22[仓库]

低代码已经发展了好多年了，也火了很多年。我本人也做了低代码好多年。我实在是不建议大家现在从零开始做低代码，很耗费时间，回报也不高。

目前社区有不少现成工具可以使用或者参考，比如 mometa。

地址：https://github.com/imcuttle/mometa

### 2022-01-21[工具]

使用 mono repo 的其中一个挑战就是版本管理更加复杂。原先是仅控制其中一个 package 版本就 ok 了，而现在 mono 仓库有多少 package 就需要管理多少，复杂度就增大了。

于是使用高效的版本管理工具就有必要了，这次推荐两个工具给大家。

其中一个是 [changesets](https://github.com/changesets/changesets) ，这个比较推荐。还有一个是 lerna 工具集中的一个 [lerna-changelog](https://github.com/lerna/lerna-changelog)

这两个工作方式不太一样，大家可以看文档详细了解一下。另外推荐一篇文章，这个文章列举了很多 mono tool，地址：https://turborepo.org/docs/guides/complimentary-tools

### 2022-01-20[好文]

feiker.js 作者故意添加无限死循环逻辑到代码中，这究竟是人性的扭曲还是道德的沦丧？欢迎收看本期的社会与法节目。

地址：

- [Dev corrupts NPM libs 'colors' and 'faker' breaking thousands of apps](https://www.bleepingcomputer.com/news/security/)dev-corrupts-npm-libs-colors-and-faker-breaking-thousands-of-apps/
- [下载量和 Vue 一样大的开源软件被作者恶意破坏，数千款应用受到牵连](https://mp.weixin.qq.com/s/TDh4BPeYTITjJIZ4KH-4Jw)
- [暴力拒绝白嫖，著名开源项目作者删库跑路，数千个应用程序无限输出乱码](https://www.jiqizhixin.com/articles/2022-01-10-2)

### 2022-01-19[仓库]

Electron 的竞品，用来开发桌面客户端。

![](https://p.ipic.vip/vcxw34.jpg)

地址：https://github.com/tauri-apps/tauri

### 2022-01-18[仓库]

一个自动生成中国山水画的仓库， 效果真的惊艳，可见作者的数学功底。 仓库就是一个 html，代码全部在 html 中。

地址：https://github.com/LingDong-/shan-shui-inf

### 2022-01-17[工具]

monorepo 越来越流行，相应的工具也在不断发展。

> 如果大家还不清楚什么是 monorepo 的话，可以看下这篇文章：[Monorepo vs Polyrepo: 5 Things You Should Consider](https://blog.bitsrc.io/monorepo-vs-polyrepo-5-things-you-should-consider-897f3b588e70)

其中两个工具最近很是抢眼。这两个工具其实都算是构建工具（build tool）

![](https://p.ipic.vip/in2iiv.gif)

一个是 TurboRepo，另外一个是 nx。其中 TurboRepo 借鉴了 nx 了一些内容。二者其实各有优劣。这里有一个对于二者的比较文章 [Nx and Turborepo](https://nx.dev/guides/turbo-and-nx) ，这篇文章是 nx 官方写的。

另外推荐一篇侧重讲 TurboRepo 的文章，[Why TurboRepo Will Be The First Big Trend of 2022](https://dev.to/swyx/why-turborepo-will-be-the-first-big-trend-of-2022-4gfj)

### 2022-01-14[好文]

作者用 [qwik](https://github.com/builderio/qwik) 对自己的网站进行了优化，减少了 99% 的 JS。优化后使用 PageSpeed Insights 测试为 100 分，并且是移动端和 PC 端全 100 。

地址：https://www.builder.io/blog/how-we-cut-99-percent-js-with-qwik-and-partytown

### 2022-01-13[技巧]

CSS 出了一个新的媒体查询特性 prefers-color-scheme，它可用于检测用户是否有将系统的主题色设置为亮色或者暗色。

代码示例：

```css
@media (prefers-color-scheme: dark) {
  .day.dark-scheme {
    background: #333;
    color: white;
  }
  .night.dark-scheme {
    background: black;
    color: #ddd;
  }
}

@media (prefers-color-scheme: light) {
  .day.light-scheme {
    background: white;
    color: #555;
  }
  .night.light-scheme {
    background: #eee;
    color: black;
  }
}
```

如上:

- `prefers-color-scheme: dark` 内的样式代码会在用户的浏览器是暗黑主题下启用
- `prefers-color-scheme: light` 内的样式代码会在用户的浏览器是浅色主题下启用

基于此，我们可以给网站定制不同的主题样式以适配用户电脑上的主题设置（目前就是暗黑和浅色两种）。

### 2022-01-12[技巧]

yarn 支持一个特性叫做 resolutions。它主要解决了用户不能指定依赖的依赖（嵌套依赖）的版本问题。

比如你依赖了 react，而 react 依赖了一个包 A，这个包有安全问题，但是 react 迟迟不更新，你就可以通过 resolutions 来强行升级 A （前提是升级满足 package 中的兼容性定义）

yarn 官方给的一个使用例子：

```json
{
  "name": "project",
  "version": "1.0.0",
  "dependencies": {
    "left-pad": "1.0.0",
    "c": "file:../c-1",
    "d2": "file:../d2-1"
  },
  "resolutions": {
    "d2/left-pad": "1.1.1",
    "c/**/left-pad": "^1.1.2"
  }
}
```

我们通过 resolutions 指定了 d2 的依赖 left-pad 升级到 1.1.1。

更多内容参考：https://github.com/yarnpkg/rfcs/blob/master/implemented/0000-selective-versions-resolutions.md

### 2022-01-11[工具]

vm 是 node 原生提供的一个模块， 提供了一个沙箱环境。

 比如你想造一个测试框架的轮子，那么测试用例间的隔离如何做？比如一个测试用例修改了 Array.prototype.map，那么会不会因此影响其他测试用例呢？ 使用 vm 就可以解决这个问题。

参考代码：

```js
// replace this code in worker.js:
const context = { describe, it, expect, mock };
vm.createContext(context);

// with this:
const NodeEnvironment = require("jest-environment-node");
const environment = new NodeEnvironment({
  testEnvironmentOptions: { describe, it, expect, mock },
});
vm.runInContext(code, environment.getVmContext());
```

 如上代码的 jest-environment-node 是用来模拟 node 端的环境的（而不是浏览器），我们可以使用 testEnvironmentOptions 来定制一些全局变量。

### 2022-01-10[技巧]

import map 是 ESM 中的一个特性，允许你自定义引入模块的解析逻辑。

如果不使用 import maps，直接在浏览器上执行类似下面这种绝对路径就会有问题：

```js
import moment from "moment";
import { partition } from "lodash";
```

我们可以使用 import maps 解决这个问题：

```html
<script type="importmap">
  {
    "imports": {
      "moment": "/node_modules/moment/src/moment.js",
      "lodash": "/node_modules/lodash-es/lodash.js"
    }
  }
</script>
```

这样 moment 和 lodash 就会从网站根路径的 node_modules 查找模块了。

这些特性浏览器支持还不理想，如果需要使用的话可以考虑 [es-module-shims](https://github.com/guybedford/es-module-shims)

### 2022-01-07[工具]

vue 的可视化模板编译工具 Template Explorer

如果你只是想看下 template 会被编译为怎么样的 ast 以及 render function，那么可以使用这个工具来帮你。

这个工具的源码在 Github 的 vue 仓库中，地址：https://github.com/vuejs/vue-next/tree/master/packages/template-explorer 如果你需要 debug 的话可以在仓库中启动运行，如果只是看下结果，使用在线版足够了。

地址：https://vue-next-template-explorer.netlify.com/

### 2022-01-06[工具]

clinic.js 是一个诊断工具，可以帮助你发现潜在的性能和安全问题。

![](https://p.ipic.vip/keo2t6.jpg)

如上图， clinic 可以诊断包括 CPI，内存，事件循环延迟（卡顿）以及 handlers。

它还可以直接帮你定位到具体的可能存在的问题点。如下图：

![](https://p.ipic.vip/gq273v.jpg)

clinic.js 就诊断到了代码可能存在 IO 方面的问题。

地址：https://clinicjs.org/

### 2022-01-05[工具]

类似于 apache 的 abtest， wrk 也是一个 http 压测工具，二者功能和用法都是类似的。你可以用它来测试你的代码能否满足业务要求的并发量。

地址：https://github.com/wg/wrk

### 2022-01-04[技巧]

两个问题看你有没有高并发经验。

1. 如何避免项目的错误日志扎堆上报，导致服务器瞬间压力过大？
2. 如何保证后端突然接受大量请求而不至于挂？

其实这两个问题是一个是客户端问题，一个是服务端问题，还是很有代表性的。

答案其实不唯一， 我这里简单分享个**随机丢弃**思路。

1. 可以采取随机数舍弃的方法，比如随机舍弃 50% 的请求。
2. 可以采取随机数舍弃的方法，比如在 cpu 大于 80% 的时候，随机舍弃 50% 的请求。专业一点这个叫熔断。

当然除了这个思路还可以采用异步上报，引入队列等众多方法， 这里就不多做介绍。这个随机丢弃的方式简单粗暴且有效，但是对于重要的业务，比如支付还是谨慎使用。

### 2022-01-03[工具]

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

### 2022-01-02[技巧]

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

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://p.ipic.vip/bp35i7.jpg">
