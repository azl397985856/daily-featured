
# 每日一荐

![](https://p.ipic.vip/0bhil1.jpg)![](https://p.ipic.vip/0bhil1.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2023-11

### 2023-11-31[新闻]

excalidraw 是一个在线的白板工具，可以帮助你快速绘制一些图形，比如流程图，思维导图等。最近他新出了一个根据文字生成流程图的功能，和其他工具相比，它生成后你还可以进一步编辑，比如改变颜色，改变形状等。这本质是一个 ai 助手。

不过这个功能目前每天只能使用 10 次，也没有一个很好的教程或者内置 prompt，因此使用起来还是有一些门槛的。

![](https://p.ipic.vip/7bxb45.png)

via: https://excalidraw.com/

### 2023-11-30[文章]

ARIA 是一个被很多人忽视的东西，但是它对于一些残疾人来说是非常重要的。比如屏幕阅读器，如果你的网站没有良好的 ARIA 支持，那么屏幕阅读器就无法正常工作。

这篇文章收集了一些常见的 ARIA 角色，以及如何使用它们。

另外推荐一个 eslint 插件，可以帮助你检查 ARIA 角色是否正确使用。地址：https://www.npmjs.com/package/eslint-plugin-jsx-a11y

当你的网站搭建好了，也可以使用这个网站来检查你的网站是否有 ARIA 角色的问题：https://wave.webaim.org/

via: https://www.a11yproject.com/posts/an-indepth-guide-to-aria-roles/

### 2023-11-29[好文]

《Prettier's CLI: A Performance Deep Dive》 这篇文章讲解了 prettier 的性能优化过程，以及一些性能优化的技巧。

主要是关于匹配和缓存相关的内容，比如如何避免不必要的匹配，如何使用缓存等。

via: https://prettier.io/blog/2023/11/30/cli-deep-dive

### 2023-11-28[类库]

Million.js 是一个极其快速且轻量级的 <4kb 虚拟 DOM，使 React 速度提高了 70%。 通过使用经过微调、优化的虚拟 DOM，Million.js 减少了 React 的开销。

可以理解为是一个让 React 组件以原始 JavaScript 的速度运行的类库。

它的原理是运行时通过 ref 获取真实 dom, 然后将 state 编译为 props 形式。这样 hoc 就可以控制组件不 render ，然后自己修改 dom （上一步通过 ref 获取到的）的方式来加快速度。

官方文档里有详细的介绍用法和底层原理，感兴趣的可以试试。

这个库功能上有点类似于 react 官方后续将要推出的 react forget。

via: https://million.dev/docs

### 2023-11-27[框架]

fresh 是一个基于 deno 的 web 框架。

从本质上讲，Fresh 是**路由框架和模板引擎的组合**，可在服务器上按需呈现页面。除了在服务器上进行实时 （JIT） 呈现之外，Fresh 还提供了一个接口，用于在客户端上无缝呈现某些组件，以实现最大的交互性。该框架使用 **preact 和 JSX** 在服务器和客户端上进行渲染和模板化。

via: https://fresh.deno.dev/docs/introduction

### 2023-11-26[好文]

得益于浏览器提供的强大 API，如下简单的代码，就可以实现一个简单的录屏，并导出视频功能。

```js
const button = document.createElement("button");
button.innerHTML = "capture";
document.body.append(button);
button.addEventListener("click", async () => {
  const stream = await navigator.mediaDevices.getDisplayMedia();
  const recoder = new MediaRecorder(stream);
  // start recording
  recoder.start();
  const [video] = stream.getVideoTracks();
  video.addEventListener("ended", () => {
    // stop recording
    recoder.stop();
  });
  // save record
  recoder.addEventListener("dataavailable", (evt) => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(evt.data);
    a.download = "capture.webm";
    a.click();
  });
});
```

via: https://dev.to/ninofiliu/simple-screen-recorder-in-20-lines-of-javascript-4ina

### 2023-11-25[类库]

jest-image-snapshot 是一个 jest 插件，可以帮助你测试 UI 组件的样式是否正确。相比原生的 snapshot 测试，它基于渲染后页面进行像素级对比（可以自定义允许的像素误差），而且不对代码有任何要求，只要是浏览器可以渲染的就可以。

它扩展了 jest 的 expect 方法，你可以直接使用 expect(image).toMatchImageSnapshot() 来进行测试。

```js
const { toMatchImageSnapshot } = require("jest-image-snapshot");

expect.extend({ toMatchImageSnapshot });
```

使用:

```js
it('should demonstrate this matcher`s usage', () => {
    ...
    expect(image).toMatchImageSnapshot();
  });
```

via: https://github.com/americanexpress/jest-image-snapshot

### 2023-11-24[类库]

tencent design 是腾讯的一套 ui 组件库，支持 web，小程序，flutter（这算是一个亮点），可以帮助你快速搭建应用。

它的文档设计地很好，进入到某一个组件，可以看到这个组件对应的 issue 有多少，以及多少是 open 的，组件最近更新的时间，以及组件最早可用版本等非常有用的信息。

![](https://p.ipic.vip/jtt7g1.png)

另外有指南来告诉你组件的最佳实践，也有实时预览（嵌入一个 iframe）。虽然这两个都是标配了，但是我还是从他的指南学到了一些东西。

via: https://tdesign.tencent.com/

### 2023-11-23[好文]

Preact 出了一个 singals 的状态管理库，大小仅为几 kb，但是功能却很强大。

原理类似 vue3 里的响应式，能够自动跟踪依赖，实现应用的局部更新。正因为如此 react 团队觉得其和 react 基本理念不一致，因此不会将其集成到 react 中。但是表示会有一种类似的东西推出。

singals 不再像 hooks 一样局限于函数组件，而是可以在任何地方使用，并且可以做到按需局部更新。感兴趣的可以看看这一个科普视频

via: https://www.youtube.com/watch?v=SO8lBVWF2Y8

### 2023-11-22[好文]

v8 是如何给字符串分配内存的？什么时候回收分配的内存？这里设计到很多性能方面的设计和考虑。

这篇文章详细地讲解了 v8 字符串分配的逻辑。

虽然内容用处不是很大，但是这篇文章的做事方法值得我们学习。学习一下作者是如何学习的，如果是让你去研究下 v8 字符串内存分配，你能做的和他一样好，甚至更优吗？

via：https://iliazeus.github.io/articles/js-string-optimizations-en/

### 2023-11-21[好文]

chatgpt 允许你自己导入知识库，从而创建一个有专业知识的 ai。

比如你可以给它导入一本书， 然后问他任何关于这本书的问题。

更深入一点， 我们可以将某个网站做成知识库，导入进去，它就是这个网站的专家， 直接替代现在网站题目的 faq 或者人工智障机器人。

[gpt-crawler](https://github.com/BuilderIO/gpt-crawler) 可以帮助将任意网站只作为知识库输出一份 json，你只需要登录 openai 将其导入就可以快速生成有这样知识库的专业机器人。

via: https://www.builder.io/blog/custom-gpt

### 2023-11-19[好文]

如何从零做一个拖拽的功能？

这篇文章你可以学到很多有用的和[指针](https://zh.javascript.info/pointer-events)有关知识。比如 setPointerCapture 是干嘛用的？也能学到很多设计思路。比如如果用户用的是触屏而不是鼠标怎么办？

via: https://www.redblobgames.com/making-of/draggable/

### 2023-11-18[技巧]

之前 textarea 不能像 div 那样根据内容自动撑开。因此如果你只能使用类似 rows 属性给他指定高度，如果用户输入内容过多，那么就会隐藏一部分。

而新的 CSS 属性可以解决这个问题。只需要一行代码：

```css
textarea {
  form-sizing: normal;
}
```

### 2023-11-14[新闻]

新的 chrome (112 或之后的版本)升级了无头浏览器，现在无头浏览器不再会出现**真实浏览器和无头浏览器不一致的情况了**。

如果你在项目中使用了无头浏览器进行端到端测试，不妨进行升级一下。

via: https://developer.chrome.com/articles/new-headless/

### 2023-11-10[仓库]

一个关于 web3 的学习资料集合页，不仅有入门，也有实战，新闻媒体，工具等。

如果你想学习 web3，尤其是快速入门 web3 ， 这是一个还算不错的资料。

via: https://github.com/jameslee-7/Web3.0-club

### 2023-11-09[仓库]

一个 waf 工具， 可以直接私有化部署。

想当年我也给我们公司做过 waf，也是花了至少几个月时间来完成的。如果你没这个预算，这个就是不错的选择。

配置要求也不高：

```
操作系统：Linux
指令架构：x86_64
软件依赖：Docker 20.10.6 版本以上
软件依赖：Docker Compose 2.0.0 版本以上
最小化环境：1 核 CPU / 1 GB 内存 / 10 GB 磁盘
```

via: https://github.com/chaitin/SafeLine

### 2023-11-08[仓库]

facebook 开源的 docusaurus，社区算是比较活跃的， 基于 MDX，用户直接写 markdown， 帮你转化为网站，支持插件，主题，搜索等高级功能。

via: https://github.com/facebook/docusaurus

### 2023-11-07[仓库]

一个 docx 渲染器，原理是将 docx 里的 xml 格式转成 html

相对于 Canvas 渲染，这个实现方案比较简单，最终页面也可以很方便复制，但无法保证和原始 docx 文件展现一致，因为有部分功能难以在 HTML 中实现，比如图文环绕效果。

你可以将他直接集成到你的项目中，无需后端服务，无需付费就可以架设一个 word 解析网站。

via: https://github.com/baidu/amis/tree/master/packages/office-viewer

### 2023-11-06[好文]

如果你是一个 react 库的开发者。不免会使用 npm link 来测试。而这样会因为使用了 react 两个不同的包副本。当我们运行 npm link 时，我们不仅需要链接我们的项目，我们还需要链接 react 和 react-dom 以确保只有一个副本。

使用 yalc 可以解决这个问题，yalc publish 会在本机上进行发布，而不会发布到 npm。

via: https://www.propelauth.com/post/test-your-react-libraries-with-yalc

### 2023-11-04[网站]

一个在线网站， 可以帮你生成隐私声明网页。

如果你是一个工具开发者（比如浏览器扩展），并且会收集一些隐私数据，比如用户当前访问的网站地址，有很多提供商现在要求你提供的工具的隐私声明网页。

我的 chrome 插件最近就遇到了这个问题。于是我就使用了这个网站，不到一分钟就生成了，谷歌审核还真就通过了。

via: https://www.generateprivacypolicy.com/#wizard

### 2023-11-03[库]

FFCreator 是腾讯视频团队开源的生成视频的 JS 库。通过它可以将图片，音频或者视频片段按照各种方式组合起来，从而形成一个视频。

使用 FFCreator 和 vue.js，可以开发可视化拖拽搭建短视频的 web 项目，使用就像 h5 搭建工具一样的简单。

via: https://github.com/tnfe/FFCreator

### 2023-11-02[工具]

一个脚本工具，可以集成到 ci 中，自动将你的 markdown 翻译为多种语言。由于集成了 chatgpt，因此翻译质量也很好。

这里的翻译质量很大程度上取决于你的 prompt。让大家看看人家的其中一段 prompt 是怎么写的，大家可以作为参考。

```
You are a professional translation engine, please translate the text into a colloquial, professional, elegant and fluent content, without the style of machine translation. You must only translate the text content, never interpret it.
```

via: https://github.com/linyuxuanlin/Auto-i18n

### 2023-11-01[库]

我们平时做前端开发的时候，不免需要 mock 数据。最简单的写法自然是代码中写死。但是这样不利于维护和复用。 比较常见的做法是：

1. 写一个 baseurl，将所有请求封装为 baseUrl 拼接的形式。这样只需要将 baseUrl 改为一个提供 mock 服务的服务器地址即可。
2. 启动一个代理。配置一个规则， 这个规则将当前请求的 baseUrl 改掉转发到一个提供 mock 服务的服务器。

msw 类似于 2，相当于在浏览器上直接启动了一个代理（原理是使用 service worker）。不同之处是，它不仅是代理， 也是 mock 服务器，本身可以配置规则直接返回数据。

参考代码：

```js
// src/mocks.js
// 1. Import the library.
import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

// 2. Describe network behavior with request handlers.
const worker = setupWorker(
  http.get("https://github.com/octocat", ({ request, params, cookies }) => {
    return HttpResponse.json(
      {
        message: "Mocked response",
      },
      {
        status: 202,
        statusText: "Mocked status",
      }
    );
  })
);

// 3. Start request interception by starting the Service Worker.
worker.start();

// Performing a GET https://github.com/octocat request in your application will result into a mocked response that you can inspect in your browser's "Network" tab
```

![](https://p.ipic.vip/sqarjj.jpg)

via: https://github.com/mswjs/msw



## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://p.ipic.vip/bp35i7.jpg">

