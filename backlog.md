### 2021-04-04[类库]

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

### 2021-04-04[工具]

今天介绍的 spectacle 并不是 mac 上的窗口管理工具，而是一个 JS 库。 功能和 revealjs 一样，都是用来做精美的 PPT 的。

地址：https://github.com/FormidableLabs/spectacle

### 2021-04-03[好文]

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

### 2021-03-31[工具]

一个可以实时翻译不同语言，以支持不同语言的人一起开会。这或许就是跨国远程办公党的胜利？

> 赚美刀 ^\_^

https://business-review.eu/tech/cisco-webex-breaks-through-language-barriers-and-launches-real-time-translation-217869

### 2021-03-30[类库]

prisma 是一个 Nodejs 端的 ORM 框架。和 [waterline](https://github.com/balderdashy/waterline "waterline") 类似，也提供了多种主流数据库的接入，以及统一的便捷的封装函数。

从使用体验上来看，prisma 更加舒服。 prisma 通过自己定义一套 DSL（prisma 文件中使用的语法），并自己解析，使得开发体验更加友好。另外从 Github 的 star 数以及 npm 上的下载量来看，prisma 都表现地不错。

使用示例(Create a new User and a new Post record in the same query)：

```js
// Run inside `async` function
const user = await prisma.user.create({
  data: {
    name: "Alice",
    email: "alice@prisma.io",
    posts: {
      create: { title: "Join us for Prisma Day 2021" },
    },
  },
});
```

Update an existing Post record

```js
// Run inside `async` function
const post = await prisma.post.update({
  where: { id: 42 },
  data: { published: true },
});
```

地址：https://github.com/prisma/prisma

### 2021-03-29[工具]

一个可以运行在多端(window, linux 和 mac)的 switch 模拟器。从此畅玩 switch？

地址：https://ryujinx.org/download

### 2021-03-26[工具]

https://github.com/azl397985856/UnicomTask

### 2021-03-25[好文]

OpenSSH 是使用 SSH 透过计算机网络加密通信的开源免费实现。大多数程序员都或多或少和它打过交道。

OpenSSH 实践手册详细讲解了如何使用 ssh，比如 sshpass 实现无密码登录，做 Socks 代理，端口转发等。我想**大多数人都没有彻底利用好 ta**。

地址：https://engr-z.com/326.html
