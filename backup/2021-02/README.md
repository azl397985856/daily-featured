# 每日一荐

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2021-02

### 2021-02-28[好文]

是不是有许多小伙伴在刷力扣的时候感觉无从下手？从头按顺序开始刷的童鞋们可能会比较有感触，为什么才第四题就感觉很难了?没关系，本文将对力扣的 1-700 题中不需要会员的数据结构与算法题目(数据库与 shell 除外)进行分类，并推荐一个刷题的顺序。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gnzsviwg53j30k00pl41f.jpg)

（部分题目）

文章地址：https://leetcode-cn.com/circle/article/48kq9d/

### 2021-02-27[好文]

A\* 算法是一种比较复杂的启发式算法，在面试中考察的次数不多。但是其本身覆盖的知识很广，也可以解决很多实际问题，比如游戏路径指引（我承认很多算法没有用）。因此我建议学有余力的同学可以尝试学习一下。 而今天这篇文章是我见过的 A\* 算法讲的最好的文章之一。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gnzsypjm6yj30n20obacx.jpg)

（部分目录）

文章地址：http://theory.stanford.edu/~amitp/GameProgramming/AStarComparison.html#the-a-star-algorithm

### 2021-02-26[仓库]

这是一个关于 Domain-Driven Design（领域驱动设计），简称 DDD 的一个聚合型仓库。里面包含了基本概念，六边形理论，原则方法，例子，最佳实践等。**是我见过最全的 DDD 知识仓库**。最近这个仓库也登上了 Github Trending。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gnzsn98drpj30ee0m140e.jpg)

（仓库部分目录）

仓库地址：https://github.com/Sairyss/domain-driven-hexagon#Architecture

### 2021-02-25[框架]

rest_rpc 是一款由 C++ 编写的，使用简单，高性能跨平台，支持 callback 和 future 两种风格的 rpc 框架。

用官方的话来说就是：

> rest_rpc 是一个高性能、易用、跨平台、header only 的 c++11 rpc 库，它的目标是让 tcp 通信变得非常简单易用，即使不懂网络通信的人也可以直接使用它。 可以快速上手，使用者只需要关注自己的业务逻辑即可。

由于它的实现足够简单， 你可以通过 ta 来学习 rpc 的原理。

### 2021-02-24[好文]

默认情况下，React 采用的更新方式是自顶向下全局更新的，而不像 vue 一样“局部”更新。如果想实现局部更新的效果，则需要我们手动实现。

目前常用的方式有：

- 拆分组件
- 使用 children
- 采用 useMemo 或者 重写 shouldComponentUpdate 生命周期

这篇文章通过一个具体的例子，演示了如何通过一些技巧实现“局部更新”以优化性能的。

> 不管使用的是什么框架，也不管你再做什么应用，务必记住“仅更新确实需要更新的部分”。

地址：https://overreacted.io/before-you-memo/

### 2021-02-23[工具]

pipcook 是阿里开源的人工智能在前端领域的一个工具。使用它，你可以在不借助后端的情况下直接使用人工智能算法，这得益于著名框架 tensorflow 出的 tensorflow.js。将运算转移到客户端，无疑缓解了 AI 对算力的要求。

pipcook 目前主要的功能是图片和文字识别创造等传统的功能，如果你有类似的需求，而不打算投入服务器算力资源，那么可以考虑使用。

有的人担心直接使用 JS  玩 AI 是不是不太靠谱，还是觉得 Python 比较稳。没有关系， pipcook 也考虑到了这一点， 它提供了一个包 **boa**，从而允许你在 js 中直接使用 Python 中的函数。比如：

```js
const boa = require("@pipcook/boa");
const os = boa.import("os");
console.log(os.getpid()); // prints the pid from python.

// using keyword arguments namely `kwargs`
os.makedirs(
  "..",
  boa.kwargs({
    mode: 0x777,
    exist_ok: false,
  })
);

// using bult-in functions
const { range, len } = boa.builtins();
const list = range(0, 10); // create a range array
console.log(len(list)); // 10
console.log(list[2]); // 2
```

地址：https://alibaba.github.io/pipcook

### 2021-02-22[网站]

type-challenges 是一批 ts 爱好者搞出来的一个网站，它提供了大量的 ts 练习题，现在已经有 70 道题了，而且还在不断增加。

这个网站最大的特点是不仅按照难度对问题进行了归类，而且难度非常大，比我在市面上看到的题目难度高出不少，适合想挑战自己的人。当然如果你觉得自己能力还不够，可以尝试从简单难度开始。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gnsmc2xsfoj30te0gltcm.jpg)

地址：https://github.com/type-challenges/type-challenges/blob/master/README.zh-CN.md

### 2021-02-20[工具]

midwayjs 是阿里淘宝前端团队在 serverless 领域开源的一个行业标杆级产品。除了提供”完善的 serverless 生命周期管理，不绑定某一家云服务厂商，提供方便的从其他框架迁移功能“等核心功能之外。其还提供了一些通用组件，hooks 能力，丰富的装饰器等辅助功能。更加令人欣慰的是，它还提供了 vscode 的良好支持，使得我们可以在 vscode 中方便地进行调试，以及查看接口信息。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gnsm76n0q6j30lp0nhq8s.jpg)

地址：https://www.yuque.com/midwayjs/faas/what_to_do

### 2021-02-19[网站]

Github 老是挂。但是最近 Github 在这方面做得努力真的令人佩服，不仅有事故报告，值班制度，工单系统等，还提供了 github status，方便你查看现在 github 的状况。通过它，你可以知道 Github Action 是挂的。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gn3dqpxbsxj30pt0n3n1h.jpg)

它精确地告诉了你事故发生的时间以及具体影响的业务，真的是很贴心了，我希望更多的产品都能提供这样的功能。

地址：https://www.githubstatus.com/

### 2021-02-18[好文]

文章标题：《Serverless 如何让前端程序员没有后端也能完成项目?》，文章脑洞比较大，前端直接调用后端的数据库等组件。这在技术上很容易实现，但是业务上肯定有很多的问题需要解决，比如安全性以及性能问题，这篇文章提供了一些不错的思路。

文章地址：https://www.codingstyle.cn/topics/75

### 2021-02-12[好文]

pnpm 是什么？相比于 npm 和 yarn ，它的优势在哪里？本文带你解密。

文章地址：https://juejin.cn/post/6932046455733485575

### 2021-02-11[好文]

如何给自己的 Github 主页增加**自动更新博客文章**的功能？

### 2021-02-10[好文]

掘金点赞超 1000 的文章。详细列举了各种 web 前端设计技巧。注意有如下内容：

- 各种布局方式
- 页面设计优化
- 字体优化
- 可访问性

文章地址：https://juejin.cn/post/6932647134944886797

### 2021-02-09[仓库]

良好的命名是好的代码的基本条件。不过要想写出通俗易懂，一致性的命名可不简单。这供仓库列举了关于命名的原则和最佳实践，帮助你写出良好的命名。

仓库地址：https://github.com/kettanaito/naming-cheatsheet

### 2021-02-08[工具]

骨架图是一种又爱又恨的东西，虽然它都提升性能没有任何帮助。但是有时候却可以缓解用户等待的焦急情绪。

生成骨架图方式有很多。一种简单的实现方式就是使用无头浏览器渲染页面，并加页面中的**关键位置**做灰色背景处理，最后使用无头浏览器的截图功能生成图片即可。

今天给大家推荐的这个工具是网易考拉团队开源的一个生成骨架图的工具。使用方式很简单：

安装：

```bash
npm i awesome-skeleton -g
```

使用：

```bash
skeleton -c ./skeleton.config.json
```

仓库地址：https://github.com/kaola-fed/awesome-skeleton

### 2021-02-04[网站]

skypack 允许你直接**在浏览器引入 npm 库**，而不需要在本地 npm 安装。

类似如下方式：

```js
import confetti from "https://cdn.skypack.dev/canvas-confetti";
confetti();
```

https://www.skypack.dev/

### 2021-02-03[工具]

功能强大的 Kafka 集群监控和运维管理平台

![](https://tva1.sinaimg.cn/large/008eGmZEly1gn7urs549qj30u00h6q4f.jpg)

地址：https://github.com/didi/Logi-KafkaManager

### 2021-02-02[网站]

如果你想要学习 Python，可以先看下入门书籍或者官方的文档，之后可以做一些练习来巩固。今天就给大家推荐一个在线练习 Python 的网站。

该网站目前提供了 36 道练习题，覆盖了 Python 中绝大数知识点，每一道题都提供了答案，方便你卡壳的时候参考。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gnsm0bciw6j30mv0ezgoi.jpg)

地址： http://www.practicepython.org/

### 2021-02-01[工具]

transform 是一个提供在线**数据格式转换**服务的网站。它提供了众多数据结构的互相转换功能。

从大的层面上，其输入支持 SVG，HTML，JSON，CSS，JS，TS ,GraphQL 等。输出也非常丰富，不同输入对应的也导出输出种类也不相同。

比如你可以将 JSON 转为 MYSQl。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gn1be3crfyj31ae0bfmyt.jpg)

再比如你可以将 JSON 转换为 TS 的 interface。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gn1bgrpq5mj31ar08lmyg.jpg)

总之你如果需要数据格式转换，请务必考虑一下。值得注意的是，其不仅提供在线网站，还提供 API 供开发者调用，以更灵活的方式集成到自己的业务中。

地址：https://transform.tools/json-to-mysql

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7he9xdtmyj30by0byaac.jpg">
