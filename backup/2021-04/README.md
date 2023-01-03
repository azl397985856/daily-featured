# 每日一荐

![](https://p.ipic.vip/stk75m.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2021-04

### 2021-04-30[网站]

一个可视化正则的网站。类似的网站我之前推荐过一个，之所以再次推荐这个是因为**它是基于 JS 的正则引擎**，因此如果你使用 JS 的正则，使用它可能会更精确。

> 由于不可描述的原因，不同语言正则的标准都不太一样。

地址：https://jex.im/regulex

### 2021-04-29[工具]

今天推荐的是一个 mac 端的 app 《Dropover》。通过它可以使得拖拽如丝般柔顺，实现一些很**有趣**的功能。

地址：https://dropoverapp.com/

### 2021-04-28[工具]

markdown-preview-enhanced 是一个增强版的 markdown 预览工具，目前支持 atom 和 vscode。

说它是增强版一点都不过分，它是我见过的最强的 markdown 预览插件。支持 ppt 模式，主题定制，公式显示等等诸多功能。

![markdown-preview-enhanced](https://p.ipic.vip/x962gy.jpg)

![导出的 ppt 效果](https://p.ipic.vip/4m5xxs.jpg)

地址：https://github.com/shd101wyy/markdown-preview-enhanced

此外也有一款工具也可以将 md 转化为 ppt，效果比较一般。 都是他自带了一个服务端，你可以实现云端投屏（air play）的效果。

![air play](https://p.ipic.vip/ddmbsb.jpg)

地址：https://github.com/aiyanbo/md-ppt

### 2021-04-27[言论]

我建议大家多学习几门编程语言。 这样不仅在必要的时候可以用到，而且可以扩展你的视野。 比如 JS 中有一个 import 语法。

```js
import { useState } from "react";
```

这种语法我个人觉得设计地并不好。相反，我觉得 Python 的设计就很好。Python 的话是这样导入的：

```py
from bisect import bisect_left
```

可以看出是 from 在前，这有什么好处？ 这样就可以输入 from 就有智能提示， 输入 from bisect import 会得到进一步的智能提示。而 JS 呢？

类似的例子还有很多，所以我建议大家多学习几门编程语言。 我推荐几门语言给大家吧。 **Python， Scala（或者 Elm），C++**，这几个各有特色。

### 2021-04-26[仓库]

所谓**talk is cheap， show me code**。平时我们参加面试，有时候会有一些笔试环节，让你手写代码。而现在很多都是线上的视频面试，因此很多公司开始使用云端编辑器，使得面试官和求职者贡献一个页面，实时进行”友好“交流。

大公司可能会直接自研（比如阿里的伯乐系统），也会直接买商用的（比如牛客系统）。这方面的开源工具不多，今天给大家介绍的就是一个开源的在线笔试平台 **show me the code**。

仓库地址：https://github.com/youzan/show-me-the-code

### 2021-04-23[好文]

一个非常详细的 vscode 插件编写指南。通过它你可以实现一个最简单的插件。万事开头难，等你开了头之后，后面就可以自己摸索了。

地址：https://mp.weixin.qq.com/s/OhHe1kyHzh90Utdtf2E-iw

### 2021-04-22[好文]

awk 是一个**简单，好用的**基于列的文本处理工具。如果你需要处理一些列分割的文本，那么一定考虑它。功能非常强大，很多语法和 Python 比较像，学习成本不高（一个小时就够了）。

最近看了一篇文章**使用 awk 生成二维数组，并基于此处理文本**。由于以前都没这么用过，感觉还是蛮有意思的。文章地址：https://www.lujun9972.win/blog/2021/04/15/%E4%BD%BF%E7%94%A8awk%E6%9F%A5%E6%89%BE%E5%B9%B6%E4%BF%AE%E5%A4%8D%E6%95%B0%E6%8D%AE%E4%B8%AD%E4%B8%80%E5%AF%B9%E5%A4%9A%E7%9A%84%E4%B8%8D%E4%B8%80%E8%87%B4%E9%97%AE%E9%A2%98/index.html

虽然学习 awk 不难，但是网上资料良莠不齐，我推荐一个快速入门，十分钟左右就能看完。看完掌握 80% awk 内容不成问题。

文章地址：http://www.hcs.harvard.edu/~dholland/computers/awk.html

### 2021-04-21[好文]

如何写一个 vscode 插件？这篇文章告诉你。

这篇文章的特色有：

- 提供代码，更具有实战价值。
- 系统讲解了 vscode 插件的整体结构。虽然不够详细，但是知识系统化，你需要什么更精细的内容，可以阅读官方文档或者其他细粒度的资料。
- vscode 的插件需要用到的常见 api 都进行了讲解。除此之外还讲了如何调试和测试插件，可以说相当全面了。

如果你正准备开发 vscode 插件，或者将来有开发 vscode 插件的打算，那么这篇入门文章会很适合你。

地址：https://blog.logrocket.com/writing-vs-code-extensions-in-javascript/

### 2021-04-20[好文]

vim 是一门语言。掌握 vim 的人对其爱不释手，不懂得人对其望而生畏。

> 你有过使用 vim ，却不知道如何退出的窘境么？

我的浏览器和 vscode 都装了 vim。 （如果可能的话，想给自己操作系统也装一个 vim 插件）。

文章提到了学习 vim 的几种境界：

- Level 0: not knowing about Vim
- Level 1: knows Vim basics
- Level 2: knows visual mode
- Level 3: knows various motions
- Level 4: not needing visual mode

我感觉自己在 2 和 3 之间，如果能达到 4，你肯定会对 vim 爱不释手的。

这篇文章是我见过的 vim 讲的比较不错的之一，推荐给大家。

文章地址：https://danielmiessler.com/study/vim/

#### 2021-04-19[类库]

- language: JS

你或许听说过使用 gpu 加速动画。你听过使用 gpu 运行 js 代码么？就像 web worker 一样？

gpu.js 就是这样的一个工具库，可以帮助你使用 gpu 的能力加速你的应用。不过不建议在一些简单的项目中使用，因为那样做不仅增加了项目复杂度还有可能造成性能不升反降。

地址：https://github.com/gpujs/gpu.js

#### 2021-04-16[好文]

Git Submodule 大家使用过么？ submodule 其实不难理解，它就像是一个指向另外一个远程仓库的远程指针。

我其实早就知道这个概念了，但是一直没有机会使用，直到最近在做公司的一个项目的时候。这让我感受到了”纸上得来终觉浅“。这篇文章从作者自身的角度出发，一步一步讲述了为啥使用 submodule 以及如何做的，解决了什么问题。每一个问题都讲解地很清楚。读完之后自己试下，效果更好哦~

地址：https://blog.bitsrc.io/how-to-utilize-submodules-within-git-repos-5dfdd1c62d09

#### 2021-04-15[好文]

正如文章所说，做一个打包工具其实不难的，我之前就自己徒手撸了一个小的打包器，核心代码不到 100 行，仓库地址：[从零开始开发一个 Webpack](https://github.com/azl397985856/mono-webpack)。打包器难的地方在于如何设计插件系统。以及如何支持更多其他功能（比如**虚拟模块**）。

文章标题《基于 esbuild 的 universal bundler 设计》，详细讲述了打包器是什么，以及设计一个通用的打包器需要考虑什么。

地址：https://juejin.cn/post/6940218189921910797#heading-28

#### 2021-04-14[类库]

eslint-plugin-clean-regex 是一个帮助你写出干净正则表达式的 eslint 插件。

比如如下的正则就是”不干净“的。

- /(?:\w|\d)+/
- /(?:a|(b)|c|(?:d)|(?:ee)){0,}/
- /(?<!\w)a+(?=$)/mi
- /[\s\S]#[\0-\uFFFF]/ysi
- /\d*\w(?:[a-z_]|\d+)*/im

这个插件会提示你改成下面这样（和上面一一对应）：

- /\w+/
- /(?:[acd]|(b)|ee)\*/
- /\ba+$/im
- /.#./sy
- /\w+/

地址：https://github.com/RunDevelopment/eslint-plugin-clean-regex

#### 2021-04-13[好文]

不少前端 npm script 太过依赖。将所有的命令都写到 package.json 的 script 中，然后通过 npm run xxx 的形式执行。

这在一些小项目没啥问题，甚至 react 和 vue 的脚手架生产的项目工程都是这样的。但是当你的项目规模增长，脚本增多。npm script 的问题就暴露出来了，比如依赖管理比较复杂，再比如每次构建都是全量构建（不考虑优化），即使你根本没有改变代码。相比于 npm script， 老牌的 makefile 可以很好地解决这些问题。

如果你参与的是大型项目，不妨考虑使用 makefile 来管理你的项目。

文章地址：https://spin.atomicobject.com/2021/03/22/makefiles-vs-package-json-scripts/

### 2021-04-12[好文]

美团技术团队出的优质 Flutter Web 实践文章，文章标题《Flutter Web 在美团外卖的实践》。

文章从基础架构，性能优化，流程等多方面对问题进行了分析，值得大家学习。如果你正好在学习和使用 Flutter，那么就更应该看一下啦~

文章地址：https://mp.weixin.qq.com/s/GjFC5_85pIk9EbKPJXZsXg

### 2021-04-09[类库]

bytemd 字节跳动团队开发的一个基于 svelte（一个 JS 框架）的 Markdown 编辑器。功能非常多，符合了代码高亮，流程图，主题等方方面面，掘金就是基于它开发的。你可以基于它做一些扩展，给你的网站增加 markdown 编辑的能力。

![bytemd 使用效果](https://p.ipic.vip/hg5von.jpg)

地址：https://github.com/bytedance/bytemd

### 2021-04-08[仓库]

为了学习 html 的解析过程，手写的一个 html 解析器，用于将 html 字符串解析为树形结构。

![](https://p.ipic.vip/my8nu7.jpg)

地址：https://github.com/azl397985856/html-parser

### 2021-04-07[类库]

sql.js 是一个在 web 端运行的 SQLite 库。 通过它，你就可以直接在 web 端操作”SQLite“ 了。之所以加了引号，是因为它并不是真正的 sqlite，而是符合 sqlite 规范的内存型数据库。它将所有的数据统一放到内存中进行管理。

它允许你导入已有的 sqlite 数据库，并支持导出符合 sqlite 规范的格式，很神奇吧？

下面是官方提供的演示代码：

```js
const initSqlJs = require("sql.js");

const SQL = await initSqlJs({
  locateFile: (file) => `https://sql.js.org/dist/${file}`,
});

// Create a database
var db = new SQL.Database();

// Prepare an sql statement
var stmt = db.prepare("SELECT * FROM hello WHERE a=:aval AND b=:bval");

// Bind values to the parameters and fetch the results of the query
var result = stmt.getAsObject({ ":aval": 1, ":bval": "world" });
console.log(result); // Will print {a:1, b:'world'}
```

地址：https://github.com/sql-js/sql.js

### 2021-04-06[工具]

今天介绍的 spectacle 并不是 mac 上的窗口管理工具，而是一个 JS 库。 功能和 revealjs 一样，都是用来做精美的 PPT 的。

地址：https://github.com/FormidableLabs/spectacle

### 2021-04-05[好文]

网上讲 https 文章很多。但是大多数是讲原理的，本文直接使用 openssl 通过代码（严格来说是命令行）让你理解 https，毕竟纸上得来终觉浅，绝知此事要躬行。

地址：https://cjting.me/2021/03/02/how-to-validate-tls-certificate/

### 2021-04-02[类库]

之前我关注 lit-html，现在我开始关注 linkeddom。两者都是没有编译时，在运行时解决字符串为 DOM 的类库。

一个简单的用法：

```js
const {
  // note, these are *not* globals
  window, document, customElements,
  HTMLElement,
  Event, CustomEvent
  // other exports ..
} = parseHTML(`
  <!doctype html>
  <html lang="en">
    <head>
      <title>Hello SSR</title>
    </head>
    <body>
      <form>
        <input name="user">
        <button>
          Submit
        </button>
      </form>
    </body>
  </html>
```

linkdom 功能更加丰富，而且对标准的支持更加好一点。不过两者也不是替代关系，这两个大家都可以关注一下。

### 2021-04-01[Github Action]

Issues Translator 是一个可以自动将 Github 的中文 issue 翻译为英文的 Github Action。如果你的项目是面向全世界开发者的，那么就可以考虑使用 ta 。

地址：https://github.com/marketplace/actions/issues-translator

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7he9xdtmyj30by0byaac.jpg">
