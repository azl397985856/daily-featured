# 每日一荐

![](https://p.ipic.vip/875iym.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2020-09

### 2020-09-30[网站]

Google 有一个服务 automl， 旨在降低人工智能的学习和使用成本，可以在运动训练数据，使用简单。

![](https://p.ipic.vip/x7txop.jpg)

地址：https://cloud.google.com/automl

### 2020-09-29[技能]

shell 是程序员的标配技能之一。掌握基础的 shell 是每个程序员必备的， 除此之外， 也有一些复杂的 shell 。 比如这个：

![](https://p.ipic.vip/4a5lhr.jpg)

这是一个中高难度的 shell 题目，地址：https://github.com/azl397985856/fe-interview/issues/151。

如果你对 shell 感兴趣，可以去 leetcode shell 专区找几个题做（截止目前， 一共四道题，真希望他们多出一点）。

![](https://p.ipic.vip/v7vgb5.jpg)

地址： https://leetcode-cn.com/problemset/shell/

### 2020-09-28[组件]

antd pro 新增了图形编辑器。如果你有类似流程编辑器，脑图编辑器的需求可以试试。

![](https://p.ipic.vip/4fphg4.jpg)

https://preview.pro.ant.design/editor/flow

### 2020-09-27[网站]

Service Worker Cookbook 是 Mozilla 发起的一个网站，该网站包含了一系列实用的 Service Worker 例子，并从功能维度进行了划分。

如果你想用 Service Worker 增强你的应用， 基本都可以在这个网站找到对应的 Demo。网站还贴心地按照难度进行了区分，有 `Beginner`， `Intermediate` 和 `Advanced` 难度。

![](https://p.ipic.vip/0bnbex.jpg)

地址：https://serviceworke.rs/

### 2020-09-18[工具]

大家写 ts 的时候是不是写了 好多 any。你可以通过 typeof 利用 ts 的类型推导来自动生成类型。不过还是有点麻烦。 大家可以试试 `JSON To TS` ， 复制你的 JSON 自动生成 interface。

![](https://p.ipic.vip/685q9h.jpg)

地址:http://www.jsontots.com/

### 2020-09-17[类库]

React Hooks library for remote data fetching。一个专注于请求的 hooks 库， 有缓存管理的功能，在某些时候可以显著地帮助你减少请求量。当然功能远不止这个，还有：

- Transport and protocol agnostic data fetching
- Revalidation on focus
- Interval polling
- Request deduplication
- Local mutation
- Pagination
- SSR support
- Suspense mode

等等。

地址：https://github.com/vercel/swr

### 2020-09-16[好文]

这是一份 ES decorators 的提案。 如果你不懂 ES decorators，那么这是一个很好的学习资料， 如果你懂 ES decorators， 那么看完之后你可能会觉得你不懂。

地址：https://github.com/tc39/proposal-decorators/blob/simplified/README.md

### 2020-09-15[类库]

有一个网络抓包工具 lightproxy。这是由阿里巴巴出品的扩展了 whitsle 的抓包工具，跨平台。目前已经支持 Mac 和 window，linux 正在开发中。

界面都是直接用的 whistle：

![](https://p.ipic.vip/thhmkc.jpg)

支持 ES6 模板字符串， 语法上来说更爽了?(Maybe) 我的态度是观望。

地址：https://github.com/alibaba/lightproxy

### 2020-09-14[库]

vuedraggable 是一个支持拖拽的高阶组件，可用于实现拖拽排序的功能。start 数比较高， 且更新稳定，很多项目都在用。

![](https://p.ipic.vip/2uzbtg.jpg)

地址：https://github.com/SortableJS/Vue.Draggable

### 2020-09-13[技巧]

VSCode 有一个快捷键，非常好用，就是返回上一个光标 (上一个浏览位置)，你知道么？

- Windows: Alt + ←
- Linux: Ctrl + Alt + -
- Mac: Ctrl + -

VSCode 的 Keyboard Shortcuts” 中搜索 “前进 / Go Forward 或 后退 / Go Back”，可以对其定制。

### 2020-09-11[经验分享]

会正则真的可以为所欲为。

![](https://p.ipic.vip/8eh2kl.jpg)

（力扣真题 https://leetcode-cn.com/problems/check-if-word-is-valid-after-substitutions/）

![](https://p.ipic.vip/jgpkkq.jpg)

（牛客真题）https://github.com/azl397985856/leetcode/issues/424

### 2020-09-10[工具]

[ngrok](https://ngrok.com/) 是一个可以允许你暴露内网服务的简单快捷的方法， 有时候还是很有用的。而今天介绍的工具是一个在 VSCODE 中控制 ngrok 的扩展程序，使用起来异常简单。

地址： https://github.com/philnash/ngrok-for-vscode

### 2020-09-09[小技巧]

如何检测是否打开了 chrome 控制台？下面代码可以帮你:

```js
var devtools = function () {};
devtools.toString = function () {
  if (!this.opened) {
    alert("Opened");
  }
  this.opened = true;
};

console.log("%c", devtools);
```

你知道原理么？

### 2020-09-08[工具]

一个适合程序员的，充满极客风的，非常硬核的 PPT 制作工具。

![](https://p.ipic.vip/pz4170.gif)

地址： https://github.com/vinayak-mehta/present

### 2020-09-07[好文]

在 Vue 中，我们可以使用 keep-alive 包裹一个动态组件，从而缓存不活跃的实例，而不是直接销毁他们：

```jsx
<keep-alive>
  <component :is="view"></component>
</keep-alive>
```

这对于某些路由切换等场景非常好用，例如，如果我们需要实现一个列表页和详情页，但在用户从详情页返回列表的时候，我们不希望重新请求接口获取，也不希望重置列表的过滤、排序等条件，那这时就可以对列表页的组件用 keep-alive 包裹一下，这样，当路由切换时，Vue 会将这个组件“失活”并缓存起来，而不是直接卸载

原文标题《在 React 中实现 keep alive》，脑洞很大，值得一看，文章也很短，地址：https://zhuanlan.zhihu.com/p/214166951

### 2020-09-01[工具]

np - A better npm publish。 如果大家在 npm 上发过包，一定知道什么是 npm publish，不管你是私有包还是公开包。可是这个命令的功能仅仅是发布一个包，该包的版本需要在 package.json 中声明。而这个工具可以帮助你 bump version，并发布到包管理平台。

仓库地址：https://github.com/sindresorhus/np

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://p.ipic.vip/bp35i7.jpg">
