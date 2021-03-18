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

### 2021-03-24[类库]

vue-use-gesture 是一个 vue 的 hooks 库，用于手势控制。可以使得任意的元素可拖动。你还可以配合 `vue-use-spring` 实现更多动画效果。

![](https://tva1.sinaimg.cn/large/008eGmZEly1goh5o62202g30jc08y4qq.gif)

地址：https://vue-use-gesture.netlify.app/docs

### 2021-03-23[工具]

今天介绍的是一个打包工具 snowpack。它借助了现代浏览器支持 ESM 的特性，使得开发的时候不进行打包，而是每次修改文件只修改改变部分的 ESM 模块，使得热更新的时间复杂度从 $O(n)$,降低到 $O(1)# 其中 n 为模块数目。

推荐的做法是开发中用 snowpack 的 ESM 构建使得构建速度不会随着项目变大而增长，发布的时候根据自己项目的需要支持的浏览器进行打包。

snowpack 也提供了类似 React 的 create-react-app。使用方式很简单，敲以下命令就可以了:

```bash
npx create-snowpack-app react-snowpack --template @snowpack/app-template-react
```

地址：https://www.snowpack.dev/

### 2021-03-22[类库]

console-ban 是一个脑洞很大的库。其可以让你的前端代码免于被人打开控制台查看，减少了前端代码被分析，盗取的风险。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gog22w36j7j30p90nbdhu.jpg)

地址：https://github.com/fz6m/console-ban

### 2021-03-19[类库]

nolimits4web（一个俄国程序员） 写的 swiper 或许是最好的 swiper 插件了。唯一的缺点就是太大了，不过你可以懒加载它。如果你的需求比较轻量，不想引入那么大的文件可考虑使用 tiny-swiper，地址：https://github.com/joe223/tiny-swiper

swiper 地址：https://github.com/nolimits4web/swiper
