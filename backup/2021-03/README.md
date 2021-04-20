# 每日一荐

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2021-03

### 2021-03-31[工具]

一个可以实时翻译不同语言，以支持不同语言的人一起开会。这或许就是跨国远程办公党的胜利？

> 更容易赚美刀 ^\_^ 啦？

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

### 2021-03-18[仓库]

波兰的的一个牛人用 JS 实现了一个非常火爆的像素风游戏 《我的世界》。服务端和客户端代码全部开源。

地址：https://github.com/michaljaz/web-minecraft

### 2021-03-17[网站]

OrbitDB 一个去中心化的 p2p 数据库，非常有意思。相对于传统的集中式， OrbitDB 将数据分布在我们每个人的机器上。你可以通过他们的网站来感受一下。

地址：https://orbitdb.org/

### 2021-03-16[类库]

一些网站会有一些新手导航，就是下一步上一步的那个蒙层，用来帮助用户快速了解网站的使用方式。

之前刚毕业的时候用过一个这种类库，是基于 React 的 reactour。 类似的还有 react-wizard-tour 等。

今天给大家介绍的是一个原生 JS 写的类库 - shepherd，其不仅支持原生，还提供了所有主流框架的集成版本，比如 react，vue，angular 等等。此外其 api 设计比较好，star 也比较多。

地址：https://github.com/shipshapecode/shepherd

### 2021-03-15[好文]

广告无处不在，它是支撑互联网高速发展的经济基石。互联网广告对互联网公司意味着什么？互联网的产业组成有哪些？CPC/CPM/CPS/CPI，这些术语意味着什么？各种 Vlog 博主能赚多少钱？普通人如何利用互联网广告赚钱？这篇文章告诉你答案。

地址：https://www.bmpi.dev/dev/what-is-internet-advertising/

### 2021-03-12[好文]

很多技术人员到了一定的阶段（年纪）都会转到管理岗。而技术转管理很多人一开始是不适应的，毕竟工作内容以及责任发生了很大的变化。从对自己负责变成了对整个团队负责。

人的习惯是难以改变的，这需要大家不断地有意识地提醒自己并纠正才可以。除此之外一个指导准则也很重要，这几篇文章是我整理的适合技术转管理看的文章列表。

> 列表后续也会持续更新

- [如何做好技术 Team Leader？](https://mp.weixin.qq.com/s/U-hqectN-fes7Td6Osut7Q)
- [想要做大事，就要有高效的协作机制](https://mp.weixin.qq.com/s/2o5Ib23SaOSqs5yW71W-Eg)

### 2021-03-11[好文]

很多公司都在讲 OKR。但说实话落地起来都效果不好，各种走偏。这其实也和当前的发展阶段有关。相关的 OKR 文章我也看过一些， 而这篇文章是字节飞书团队写的，是我见过**实操性最强的文章**。不仅有大量的例子还有工具（飞书 OKR 模块）配合。如果你正在用 OKR 或者即将使用 OKR，一定不要错过~

文章列表：

- [5 分钟快速掌握 OKR 管理法 - OKR 理论篇](https://bytedance.feishu.cn/docs/doccnASRymC3YRjobicaOacpLFc#)
- [5 分钟快速掌握 OKR 管理法 - OKR 实施篇](https://bytedance.feishu.cn/docs/doccnzkPxGyukUNZWr9sgJgouVf)
- [制定与撰写 OKR | 两种思路与七类方法](https://bytedance.feishu.cn/docs/doccnF0yzGWKvRomAw0Ely9CJhg#)

### 2021-03-10[好文]

文章名《如何构建一款超级玛丽》。虽然说是教你构建超级玛丽，其实就是一个简单的小人运动，并没有什么吃蘑菇的场景。不过基于它的代码再去实现也不是难事，毕竟入门是最难的。作者写了好几篇博客来讲构建超级玛丽的细节。

![](https://tva1.sinaimg.cn/large/008eGmZEly1go7ygjneihg318y0cy4c4.gif)

文章地址：http://www.wopaige.cn/views/JS%E5%9F%BA%E7%A1%80/Super.html

### 2021-03-09[仓库]

随着 vue3.0 的发布 elementui 也开始跟进，推出了 elementui-plus。如果你对 element-ui 比较熟悉，那么使用它的话过渡也会比较自然。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gocg8zb556j30sv0ozgox.jpg)

地址：https://github.com/element-plus/element-plus

### 2021-03-08[仓库]

一个关于 JS 统计的仓库，收集一些比较流行的框架，工具等，并按照多个维度进行整合，帮助大家**快速了解最近有哪些 JS 技术值得关注**。

地址：https://github.com/bestofjs/javascript-risingstars

### 2021-03-05[好文]

有道前端团队出品的《有道云笔记新版编辑器架构设计 》，分为上下两篇。详细讲述了**富文本编辑器**的采坑之路。如果你对**富文本编辑器** 感兴趣，千万不要错过。

文章地址：

- 上篇：https://zhuanlan.zhihu.com/p/345895871
- 下篇：https://zhuanlan.zhihu.com/p/347415991

### 2021-03-04[仓库]

![](https://tva1.sinaimg.cn/large/008eGmZEly1gocg4np4s6j31980e0q4b.jpg)

类似于 Rust，deno 等，rome 是对 JS,TS, JSON, HTML, CSS 等资源进行管理的一体化工具。之所以说是一体化，指的是其提供 lint，编译，打包，测试等全生命周期。

它的出现就是位了取代 babel，eslint，webpack，prettier，jest 等等，可以看出其野心之大。这或许也是没有被大家广泛使用的原因之一吧。现在项目已经 14.8 star，值得大家关注一波。

地址：https://github.com/rome/tools

### 2021-03-03[好文]

一个关于 Ryan Dahl （nodejs 和 deno 的作者）的采访。来看看，大佬是如何看待当前大环境的，以及大佬有哪些良好的习惯可以借鉴吧！

地址：https://evrone.com/ryan-dahl-interview

### 2021-03-02[网站]

有时候你想快速运行一个代码片段，而不想繁琐地准备一大堆环境。JS 有类似的工具浏览器控制台或者 runjs，而其他语言呢？

其实很多语言都有在线运行网站，这里推荐一个在线运行各种语言的网站（现在支持语言有十余种）。免去了你准备环境的烦恼，直接打开浏览器输入代码就可运行看效果。

![网站效果](https://tva1.sinaimg.cn/large/e6c9d24ely1go5pivwe8ij20tr09r3zx.jpg)

地址： https://www.onlinegdb.com/online_python_compiler

### 2021-03-01[好文]

91 天学算法是我和几个算法大佬一起组建的一个算法提高班。通过 91 天的集中化的学习，让你**遇见更好的自己**。

这是 91 天学算法第三期视频会议的一个文字版总结。

地址：https://lucifer.ren/blog/2021/03/01/91meeting-season-3-1/

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7he9xdtmyj30by0byaac.jpg">
