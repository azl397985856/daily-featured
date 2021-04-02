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

![bytemd 使用效果](https://tva1.sinaimg.cn/large/008eGmZEly1gow93ij9a7j30xx0mrtdj.jpg)

地址：https://github.com/bytedance/bytemd

### 2021-04-08[仓库]

为了学习 html 的解析过程，手写的一个 html 解析器，用于将 html 字符串解析为树形结构。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gov8qo72gjj30q10n2wh2.jpg)

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
