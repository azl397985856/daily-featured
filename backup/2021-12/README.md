# 每日一荐

![](https://p.ipic.vip/73g74n.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2021-12

### 2021-12-31[技巧]

今天是我的生日，祝我生日快乐！🎂🎂🎂 我们明年见~

随着 Webpack 逐步发展，其性能越来越强，用户接入成本也越来越低。但是我们仍然会有自定义打包配置的时候， 而 webpack 的配置实在是多，并且配置的格式以及可选项也很复杂。大多数我们只能通过查官方文档的方式来解决。

今天介绍一个小技巧，使用 vscode 的 ts 只能提示来提示你配置该怎么去写。众所周知，webpack 的配置文件一个 js 文件并且运行在 node 环境。那如何用 ts 实现智能提示呢？我们可以引入 webpack 对外暴露的 Configuration 对象，并使用 JS 注释告诉 vscode 我们的 config 是 Configuration 类型即可。

代码演示:

```js
// webpack.config.js
import { Configuration } from "webpack";

/**
 * @type {Configuration}
 */

const config = {
  entry: "./src/main.js",
  mode: "development",
  output: {
    filename: "bundle.js",
  },
};

module.exports = config;
```

我刚刚说了 webpack.config.js 是运行在 node 的，因此 node 低版本 import 是无法直接运行的，会报错。这个时候大家需要注释掉 import 代码，等到需要智能提示再加上即可。

## 2021-12-30[工具]

ts-node 是一个可以直接执行 TypeScript 代码的工具。

它的原理很简单，就是先调用 tsc 生成 js，然后再执行生成后的 js 文件。对于开发者而言就是简化了一部操作。

地址：https://github.com/TypeStrong/ts-node

### 2021-12-28[工具]

npm 和 yarn 的早期版本在处理依赖的时候，会将依赖安装 hoist 到顶层的 node_modules。这意味着：源码可以访问 本不属于当前项目所设定的依赖包。

并且多个项目的依赖是不共享的。这意味着：当使用 npm 或 Yarn 时，如果你有 100 个项目，并且所有项目都有一个相同的依赖包，那么， 你在硬盘上就需要保存 100 份该相同依赖包的副本。

pnpm 很好地解决了这些问题。当你使用 Monorepo 管理代码的时候，这种优点会被放大。

地址：https://github.com/pnpm/pnpm

### 2021-12-27[仓库]

Rust 在前端的基建发挥越来越重要的作用，很多新的流行构建工具都是 rust 写的，比如 [swc](https://github.com/swc-project/swc)。也有一些插件被 rust 重写用于提高性能，比如 [postcss-rs](https://github.com/postcss-rs/postcss-rs)。

这个仓库集合了这些前端使用的 Rust 项目以及前端领域的 rust 先导者。其实这个仓库就类似于 awesome-xxxx

地址：https://github.com/i5ting/rust-fe

### 2021-12-24[好文]

cookie、session、token、jwt 傻傻分不清楚？这篇文章给你解惑。

地址：https://zhuanlan.zhihu.com/p/446379414

### 2021-12-20[技巧]

相信大家都有过 copy 对象的经验，包括浅拷贝和深拷贝。

深拷贝一般都是使用 JSON.stringify, MessageChannel 或者 一些第三方库，比如 lodash。 而浏览器 HTML 规范增加了一个新的 api structuredClone，可以在浏览器层面上深拷贝对象，和内置的 JSON.stringify 不同的是，它支持的数据格式更多。

值得注意的是，structuredClone 目前浏览器的兼容性比较差，chrome 最新版也是不支持的，主流的差不多就 firefox 支持。

地址：https://developer.mozilla.org/en-US/docs/Web/API/structuredClone

### 2021-12-19[工具]

如果你使用 jest 不做任何配置并使用 import 语句的话，很可能会得到一个报错。

不仅仅是 jest，其实大多数的 node 工具都不认识 import。 对于 jest 来说，我们可以使用 babel-jest，并配置一下 babel 环境为 node 即可。

babel jest 之前是一个独立的仓库，现在已经迁移到了 jest 的 mono repo 中，由 jest 项目统一维护了。

地址:https://github.com/facebook/jest/tree/main/packages/babel-jest

## 2021-12-17[网站]

Github 年度统计，以下是我的 Github 年度统计，大家可以用下面的网站自己生成自己的 Github 年度统计。

> 统计数据不包括私有仓库，但包括你的所有个人账户和组织（比如下图的 leetcode-pp 就是组织）下的数据

![](https://p.ipic.vip/fgsa3z.jpg)

地址： https://wrapped.run/

### 2021-12-14[好文]

jest 是一个非常流行的前端框架。jest 是如何 mock 模块的呢？ 官方文档给了详细的文档，比如 jest.mock('axios') 就可以 mock axios，然后:

```ts
const resp = { data: users };
axios.get.mockResolvedValue(resp);
```

就可以 mocj axios 的 get 方法。

具体参考：https://jestjs.io/docs/mock-functions

那么对于全局变量，比如 WebSocket，fetch 等，如果进行 mock 呢？

这篇文章从基础 mock 到 jest.spyOn 一步步教你如果 mock 全局变量。

文章地址：https://benjaminjohnson.me/mocking-fetch

### 2021-12-10[工具]

firefox relay 是 firefox 官方出品的邮箱转发工具。

它可以帮助你解决很多问题。比如有一个网站每个邮箱可以免费试用一个月，那么到期后你可以选择换一个邮箱。但是毕竟注册不同邮箱毕竟麻烦，甚至有些网站对注册进行了各种各样的限制。这个时候 firefox relay 就派上用场了。

另外你不想泄漏你的邮箱信息，打算糊弄一下注册过去先试试也可以使用 firefox relay。

地址：https://relay.firefox.com/

### 2021-12-09[工具]

该工具可以直接将 html 转化为 markdown(简称 md)，如果你想要 md 源码可以尝试使用它。

对于我来说，就可以将 html 转化为 md，然后再通过工具讲 md 转化为符合我风格的 html。关于如何将 md 转化为格式良好的 html， 可以使用我的工具 [Markdiwn Reader](https://leetcode-solution.cn/github)

原理是根据语义化标签来做的，比如 h1 标签就转义为 markdown 的 `#`。

地址：https://devtool.tech/html-md

### 2021-12-05[技巧]

很多人把 @ts-expect-error 当然是 ignore 来用。比如我有一个 ts error，就加一个 @ts-expect-error 注解。

这是不对的，@ts-expect-error 不是这么用的。 @ts-expect-error 的其中一个用法是做类型单元测试。

代码演示：

```ts
it("number can't assign to string", () => {
  let a: string = "xx";
  // @ts-expect-error
  a = 3;
});
```

在这里 @ts-expect-error 被当做断言来使用了。

### 2021-12-04[技巧]

sourcemap 可以帮助我们定位打包之前的代码。

如果不使用 sourcemap，比如我们的代码报错，则只能看到编译打包之后的，很难定位到源代码。这个时候 sourcemap 就有用了。

我个人使用 sourcemap 是在开发的时候使用 cheap-module-eval-source-map， 而在发布上线的时候使用 nosource-source-map。

代码参考：

```js
// webpack.config.js

module.exports = (env, args) => {
  // common config  正式使用的话更多的是 webpack.common.js
  const config = {
    // ...
  };

  // 正式使用的话更多的是  webpack.development.js
  if (env === "development") {
    config.mode = "development";
    config.devtool = "cheap-module-eval-source-map";
  } else {
    // 正式使用的话更多的是  webpack.production.js
    config.mode = "production";
    config.devtool = "nosource-source-map";
  }

  return config;
};
```

这里的 cheap 指的是只能定位到行，不能定位到列，对大多数人来说到行就够了，这样本地开发打包编译也快一点。module 指的是定位到源代码，而不是经过 loader 等处理后的代码。eval 指的是代码会包裹在 eval 函数执行。nosource 指的是仅显示出错的源代码位置，而无法定位到源代码，这对我们的生产环境起到了保护作用，避免被其他人拿到前端完整的源代码。

### 2021-12-04[技巧]

TypeScript 中如何判断一个类型是否是 any 呢？

我们可以自定义一个泛型来实现。

由于**只有** any 和 1 交叉后的类型为 0 的父类型，因此可以这样写。

```ts
type isAny<T> = 0 extends 1 & T ? true : false;

type A = isAny<any>; // true   any 和 1 的交叉类型为 any
type B = isAny<number>; // false number 和 1 的交叉类型为 1
type C = isAny<3>; // false  3 和 1 的交叉类型为 never
```

当然你可以使用其他数字，甚至使用其他类型代替，思路是一样的。

### 2021-12-03[技巧]

浏览器加载资源是有优先级的，他们分别是 high，medium 和 low。浏览器默认会给资源一个优先级，优先级高的会优先加载，相同优先级的按照出现顺序依次加载。

chrome 中 你可以给资源手动地指定优先级。如果浏览器目前还不支持，可以在 Experimental Web Platform Features 中 打开。

```
<!-- We don't want a high priority for this above-the-fold image -->
<img src="/images/in_viewport_but_not_important.svg" importance="low" alt="I'm an unimportant image!">

<!-- We want to initiate an early fetch for a resource, but also deprioritize it -->
<link rel="preload" href="/js/script.js" as="script" importance="low">

<script>
  fetch('https://example.com/', {importance: 'low'}).then(data => {
    // Trigger a low priority fetch
  });
</script>

<!-- The third-party contents of this iframe can load with a low priority -->
<iframe src="https://example.com" width="600" height="400" importance="low"></iframe>
```

如上，我们可以指定图片，js，uframe，甚至是 fetch 请求的优先级。这有时候在提高 LCP 等性能数据的时候很有用。

### 2021-12-02[工具]

相信大家都或多或少有被无良商家贩卖信息的经历。这些数据大多就是访问网站的时候被窃取的。我们可以不暴露这些隐私吗？

答案是很难。不过我们可以通过一些手段，比如限制浏览器的某些获取信息的 api 而减少一些信息泄漏， JavaScript Restrictor 就是这样的工具。

友情提示：很多网站如果使用了这个工具可能就直接无法访问了。大家可以设置白名单或者给不同网站设置不同限制级别来完成。

我使用的是 chrome，因此点击这里就可以下载插件了。如果你是其他浏览器，那么就点击对应链接即可。

![](https://p.ipic.vip/ff2ezc.jpg)

地址：https://polcak.github.io/jsrestrictor/

### 2021-12-01[好文]

如何制作一个 CPU？

这个标题是不是很吸引人？当我点进去的时候，我迅速翻了一下文章。第一张图片和最后一张图片的对比逗笑了我。

第一步，取一块石头：

![](https://p.ipic.vip/31fvxm.jpg)

最后一步（第 19 步），CPU 做好了。

![](https://p.ipic.vip/vtz31q.jpg)

地址：https://blog.robertelder.org/how-to-make-a-cpu/

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://p.ipic.vip/bp35i7.jpg">
