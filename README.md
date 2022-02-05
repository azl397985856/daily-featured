# 每日一荐

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

在线阅读：https://leetcode-solution-leetcode-pp.gitbook.io/mz-ri-yi-jm/

电子书文件太大， 大家可到我的公众号《脑洞前端》回复“每日一荐”获取。

## :newspaper: &nbsp; RSS

大家可以用 Github 提供的 [RSS](https://github.com/azl397985856/daily-featured/commits.atom) 来订阅我的仓库更新。
​

## 新鲜出炉 (2022-02)

### 2022-02-03[视频]

一个非常好的关于 nx 科普的视频，尤其推荐 8:12 开始的那个分享。

地址：https://www.youtube.com/watch?v=VKVTzVM0nVM&list=PLakNactNC1dG1CoyVWFppw3X8hnXRhFuy

### 2022-02-02[好文]

swc 作者打算使用 Go 重写 tsc，目的是为 tsc 提速，进而减少大家 CI/CD 的时间。 该项目目前正在进行中。

值得注意的是作者之前已经让 swc 支持 ts 的编译工作了，且速度比使用 ts 原生编译器快很多。后续它还会做一些其他工作，旨在全面提升前端编译速度。

如下是他的 roadmap

- ✅ Transpilation (replacing Babel)
- 🚧 Type Checking (replacing tsc)
- 🚧 Minification (replacing Terser)
- 🚧 Bundling (replacing webpack)

地址：https://kdy1.dev/posts/2022/1/tsc-go

### 2022-02-01[好文]

你听说过 React Server Componnet 么？

React Server Component 是一种只运行在服务端的组件，它的主要目的是为了解决以下两个问题：

1. 如果一个组件的渲染依赖于一些请求，那么组件渲染速度会严重收到请求的时间（要知道网络 IO 速度是很慢的），让服务端渲染这些组件，并在客户端进行直接展示（就是不走 render 逻辑，直接服务端吐出一个 dom 字符串，客户端直接用就行）。

2. 如果某个组件依赖了一个很大的包（比如一些 markdown 解析包就很大），那么会导致客户端需要先加载一个很大的 js 然后运行并渲染。如果组件在服务端 render，那么客户端就不需要加载这个 JS，速度也就提升了。

总而言之，React Server Componnet 就是为了让“渲染”更快。

这个文章详细讲述了 React Server Componnet 是什么，以及其原理。

React Server Componnet 其中的序列化原理我觉得很有意思，大家如果需要做序列化可以参考一下他们的实现。

他们是根据 filename 做序列化的。由于服务端和客户端都可以拿到 filename 指定的组件内容，并且 filename 是字符串可直接序列化。核心代码：

```js
{
  $$typeof: Symbol(react.element),
  // The type field  now has a reference object,
  // instead of the actual component function
  type: {
    $$typeof: Symbol(react.module.reference),
    // ClientComponent is the default export...
    name: "default",
    // from this file!
    filename: "./src/ClientComponent.client.js"
  },
  props: { children: "oh my" },
}
```

具体内容可以参考下原文。

地址：https://blog.plasmic.app/posts/how-react-server-components-work/

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
