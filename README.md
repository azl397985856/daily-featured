# 每日一荐

![历史共访问次数](https://visitor-count-badge.herokuapp.com/total.svg?repo_id=azl397985856.daily-featured)
![今天被访问次数](https://visitor-count-badge.herokuapp.com/today.svg?repo_id=azl397985856.daily-featured)

> 统计数据的时间是从 2019-09-15 16:50 起至今

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 新鲜出炉 (2020-08)

### 2020-08-25[工具]

有时候大家会碰到网页不能复制（比如禁止转载）的情况，我们可以使用开发者工具来解决。而这个有点复杂。

这里推荐一个插件 Simple Allow Copy，只需轻轻一点即可随意复制网页内容。插件地址： https://chrome.google.com/webstore/detail/simple-allow-copy/aefehdhdciieocakfobpaaolhipkcpgc

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gi2w0ge1wdj319805vdgw.jpg)

没有科学的同学可以去我的公众号《力扣加加》 回复 Allow Copy 即可获取。

另外我打算之后再这里维护科学资料， 需要的自取 https://github.com/azl397985856/cdn/blob/master/README.md

### 2020-08-24[好文]

这是一个讲 V8 内部实现原理的深度好文，主要讲了 V8 在对象访问方面做的优化，比如用到了 shape， IC（inline cache） 等，并且难得的是有大量图片，内容也层层递进，即使你没有基础也可以听懂一部分。

文章地址： https://mathiasbynens.be/notes/shapes-ics

### 2020-08-19[工具]

我们可以将 TypeScript 编译成 JavaScript，我们也可以将 JavaScript + .d.ts 反编译成 TypeScript。 于是我一直思考， 有没有一种方法能够不依赖 .d.ts 直接将 JavaScript 转换为 TypeScript 项目呢？ 我觉得是可行的。 我们要做的无非就是动态类型推导，即根据值的分布情况（有可能值的分布满足正太分布？^\_^）推导变量的类型。 实际上这是个理想的情况。

不过八天前 Airbnb 发布的一个仓库 ts-migrate 则和我的想法类似，大家可以关注一下。

仓库主页：https://github.com/airbnb/ts-migrate

相关文章： https://medium.com/airbnb-engineering/ts-migrate-a-tool-for-migrating-to-typescript-at-scale-cd23bfeb5cc

### 2020-08-18[好文]

你或许已经熟悉了 ESM 了，那 importmap 呢？

```js
// index.html

<script type="importmap">
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js"
  }
}
</script>
```

如上代码什么意思？如果你还不知道，可以看下这个文章。还是一如既往的循序渐进的风格， 很适合新手阅读。

文章地址：https://blog.logrocket.com/es-modules-in-browsers-with-import-maps/

### 2020-08-17[工具]

我们知道 deno 是基于 ESM 的，并且没有统一的包管理平台的。那如果你在使用 deno，并且想要用 npm 上的包怎么办？如果你想要用的 node 上的包是 ESM 格式的，可以通过一些 CDN 工具，比如 unpkg，比如：

```js
import throttle from https://unpkg.com/lodash@4.17.19/throttle.js
```

如果源码是 ESM，但是最终被编译成了别的模块语法。你可以直接用 URL 引用源码，比如：

```js
import throttle from "https://raw.githubusercontent.com/lodash/lodash/master/throttle.js";
```

而如果源码也是 commonjs 写的，那么你可以使用这个在线服务，可以帮助你无感知转换格式。使用方法：

```js
import lodash from "https://dev.jspm.io/lodash";
```

工具地址： https://jspm.org/

### 2020-08-10[好文]

手把手教你自建图床。

文章地址： https://sspai.com/post/61624

> 除了使用 OSS+ CDN 的方式，我们也可以选择白嫖 Github。使用全免费方案：用 github 做图床，jsDelivr 做 cdn 加速。在 GitHub 上开一个 public 的仓库，然后把图片传上去，访问的时候用 https://cdn.jsdelivr.net/gh/<user_name>/>repo_name>/<file_name> 来访问就行。

### 2020-08-09[好文]

这个是个将 Git Workflow 的文章，特点是讲解了多种 workflow 方式，包括主干式，feature 分支式等，并每一种都给了非常好看的配图。

![](https://tva1.sinaimg.cn/large/007S8ZIlly1ghi0t97nkwj30nl0al0u3.jpg)

文章地址：https://zepel.io/blog/5-git-workflows-to-improve-development/

### 2020-08-08[网站]

想学 Go 却不想装环境？或者装了环境，不想每次都新建文件，然后执行？这个在线 Go 执行网站或许可以帮到你。

地址：https://play.studygolang.com/

### 2020-08-07[工具]

Tooling.Report 是一个帮助你从多个维度分析 web 打包工具的平台，包括 browserify，parcel，rollup，webpack。这个网站给的比较非常的直观，测试用例（每个比较维度都有很多测试用例）也很多。

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gheuqngi4xj30zp0aodh6.jpg)

地址：https://bundlers.tooling.report/

### 2020-08-06[好文]

一个适合 JavaScript 程序员看的 Rust 系列教程，目前更新了三篇。

地址： http://www.sheshbabu.com/posts/rust-for-javascript-developers-functions-and-control-flow/

### 2020-08-05[工具]

alinode 技术负责人开发的一个 高度模仿 alinode 的开源产品。和 alinode 的定位一样，也是企业级 Node.js 应用性能监控与线上故障定位解决方案。

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gh98dsq4g7j315g0n3gp0.jpg)

Github 地址： https://github.com/hyj1991/easy-monitor

### 2020-08-04[工具]

如果你需要给被人发一个消息，为了安全，你可以选择加密解密，也可以选择阅后即焚，这个工具就是做这个事情的。 不过这确实是一个尝鲜属性大于实用属性的一个工具。

地址：https://pasteme.cn/

### 2020-08-03[工具]

bubblewrap 是 GoogleChromeLab 在 Google web 大会上推出的一个 CLI 工具，帮助开发者一键将 PWA 应用转化为可以上架的安卓应用，前提是你需要安卓他们的标准开发。

Github 地址： https://github.com/GoogleChromeLabs/bubblewrap

### 2020-08-02[类库]

esbuild 是一个 JavaScript 和 TypeScript 打包和压缩器，采用 Go 语言编写，以速度快著称。著名的打包工具 snowpack 和 vite 底层就是用的它。

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gh6nh2fgerj31es0rstbs.jpg)

（esbuild 和 主流打包器的速度对比）

项目地址：https://github.com/evanw/esbuild

### 2020-08-01[好文]

我们平时做单元测试都会将请求给 mock 掉，这本身没有问题，但是 mock 请求做的太简单的话会起不到测试的效果。比如，我请求 body 少传递一个属性， 单元测试是不会报错的，但是我们的想法肯定是能够检测到这种潜在的问题，报错给我们。这篇文章详细介绍了如何解决这个问题。

文章地址：https://kentcdodds.com/blog/stop-mocking-fetch

## 历史汇总

- [2020-05](./backup/2020-05/)
- [2020-04](./backup/2020-04/)
- [2020-03](./backup/2020-03/)
- [2020-02](./backup/2020-02/)
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

- 如果有想法和创意，请提 [issue](https://github.com/azl397985856/daily-featured/issues) 或者进群提
- 如果想贡献代码，请提 [PR](https://github.com/azl397985856/daily-featured/pulls)
- 如果需要修改项目中图片，[这里](./assets/) 存放了项目中绘制图的源代码， 大家可以用 [draw.io](https://www.draw.io/) 打开进行编辑。

## License

[Apache-2.0](./LICENSE)
