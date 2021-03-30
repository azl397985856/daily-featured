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
