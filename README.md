# 每日一荐

![](https://p.ipic.vip/2in7io.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

在线阅读：https://leetcode-solution-leetcode-pp.gitbook.io/mz-ri-yi-jm/

电子书文件太大， 大家可到我的公众号《脑洞前端》回复“每日一荐”获取。

## :newspaper: &nbsp; RSS

大家可以用 Github 提供的 [RSS](https://github.com/azl397985856/daily-featured/commits.atom) 来订阅我的仓库更新。

## 图片加载不出来如何解决？

<https://github.com/fe-lucifer/fanqiang>

## :calendar:《91 天学算法》限时活动

很多教育机构宣传的 7 天，一个月搞定算法面试的，我大概都了解了下，不怎么靠谱。学习算法这东西，还是要靠积累，没有量变是不可能有质变的。还有的人选择看书，这是一个不错的选择。但是很多人选了过时的或者质量差的书，又或者不会去写书中给的练习题，导致效果很差。

基于这几个原因，我组织了一个 91 天刷题活动，通过一个相对比较长的时间（91 天）给出最新的学习路径，并强制大家打卡这种高强度练习来让大家**在 91 天后遇见更好的自己**。详细活动介绍可以点下方链接查看。另外往期的讲义也在下面了，大家可以看看合不合你的口味。

最后送给大家一句话： **坚持下去，会有突然间成长的一天**。

[点此参与](https://github.com/azl397985856/leetcode/discussions/532)

![](https://p.ipic.vip/plj0jz.jpg)

- 🔥🔥🔥🔥 [活动首页](https://leetcode-solution.cn/91) 🔥🔥🔥🔥
- [91 第三期讲义 - 二分专题（上）](https://github.com/azl397985856/leetcode/blob/master/thinkings/binary-search-1.md)
- [91 第三期讲义 - 二分专题（下）](https://github.com/azl397985856/leetcode/blob/master/thinkings/binary-search-2.md)

## 1V1 辅导

如果大家觉得上面的集体活动效率比较低，我目前也接受 1v1 算法辅导，价格根据你的算法基础以及想要学习的内容而定感兴趣的可以加我微信，备注“算法辅导”，微信号 DevelopeEngineer。

## 新鲜出炉 (2023-03)

### 2023-03-18[工具]

Codex-CLI 是一个基于 chatgpt 的工具， 你可以使用自然语言来描述， Codex-CLI 自动帮你转化为 cli 语言，比如 bash 语言。

对于一些经常需要查 shell 语法的人来说，简直就是福音。但是如果你很熟悉 shell 的话，基本没啥用。

对于我来说， 常见命令我都有插件（我用的是 zsh 的第三方插件， 比如 git-plugin 等），缩写很容易就敲出来了，因此用处不是很大。我这里说的是常见命令，假如我突然需要做一些非常见的任务， 那么或许对我会很有用。

via： https://github.com/microsoft/Codex-CLI

### 2023-03-17[心得]

买贵重物品东西前，可以先将价格转化为生命。比如你一天可以赚 100，买一个手机 3000，那么相等于你花了 30 天的生命买了个手机， 你觉得值么？如果你觉得值，那就买。

### 2023-03-16[工具]

一个前端打包工具 farm， 采用 rust 编写，主要卖点是快。

rspack 才出几天，farm 就出来和 rspack 比性能了 😄。 想当初 rspack 出来就和 webpack，swc 等比性能。

作者还专门写了一篇中文文章来介绍《比 Vite 快 5 倍? 2ms HMR？Farm：基于 Rust 的极速构建引擎！》via: https://zhuanlan.zhihu.com/p/611603260

via: https://github.com/farm-fe/farm
### 2023-03-15[框架]

vitest 是一个前端测试框架， 类似于 jest，用法”基本“兼容了 jest 中的常用 api， 因此很多项目都可以很容易地从 jest 迁移到 vitest。 比如大名鼎鼎的 react query 就刚刚从 jest 迁移到了 vitest。

vitest 的特点是：

- 快
- 支持 in-source 测试。即在代码文件中直接写测试（灵感来源于 rust ）
- 类型测试。还能对 TS 类型进行测试 😄
- 内置 benchmark

via: https://vitest.dev/guide/features.html

### 2023-03-14[好文]

前端最近有一个新的概念 特别火，叫 Signal，之前也在 daily featured 中介绍过。

今天给大家推荐几个资料。

- 《Demystifying Create React Signals Internals》via: https://blog.axlight.com/posts/demystifying-create-react-signals-internals/
- 《dan_abramov's reply for Discussion on: React vs Signals: 10 Years Later》via: https://dev.to/dan_abramov/comment/256g9
- 《The Evolution of Signals in JavaScript》via: https://dev.to/this-is-learning/the-evolution-of-signals-in-javascript-8ob
- 《React vs Signals: 10 Years Later》 via: https://dev.to/this-is-learning/react-vs-signals-10-years-later-3k71

### 2023-03-13[投资]

这家企业值多少钱，换句话说：

- 如果你有钱买这个公司，你愿意花多少？
- 如果你是这个公司的老板，别人出价多少你愿意卖？

这篇文章提供了三个计算方法，企业价值＝分红 /（折现率 - 增长率），这三种方法都是 DDM 估值法，只是折现率取值不一样，分别是 10%，4% 和 2.5% ，并且通过巴菲特的例子来帮助大家理解什么时候应该用哪个折现率更合适。

文章标题：《永久持股收息是兑现伟大企业价值的唯一途径》

via: https://xueqiu.com/3921480024/243769146


### 2023-03-12[投资]

芒格年度股东会（Daily Journal ）很有意思，里面很多内容都很有用。 给我的感觉就像是和一个投资界大佬谈话（实际上就是一个谈话类的会议），拓展我的投资视野。

2023 年的会议文字整理版本可以看这个，往年的大家可以自行搜索一下。

2023 年内容主要讲到了自己的投资策略和思想以及半导体行业，加密货币行业等，很有启发。

part1 via: https://xueqiu.com/1173786903/243801264
part2 via: https://xueqiu.com/1173786903/243807832
### 2023-03-11[类库]

TanStack Query (以前叫 React Query)，是一个功能异常强大的状态管理库，以前是为 React 做的。现在支持所有主流框架，就连名字都改了，目前的版本是 V4。

几大核心功能：

- fetching
- caching
- synchronizing
- updating server state

我的感受是，使用了它可以让你更方便的管理状态，尤其是服务端的数据。比如你新建了一个 mutation 是修改服务端的 post 数据， 那么这个库可以帮助你自动更新绑定了这个 post 数据源的组件。就不会发生修改了数据后，页面没有刷新的问题。同时它可以减少一些网络请求，至于什么时候以及为什么可以减少网络请求，留给大家去发现原因吧。

React 引入 hooks 之后，这个库就更好用了，核心功能就是 useQuery 的一个 hook。 代码大概这样：

```js
function Todos() {
  const { status, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodoList,
  })

  if (status === 'loading') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }

  // also status === 'success', but "else" logic works, too
  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}
```

via: https://tanstack.com/query/latest/docs/react/overview

### 2023-03-10[框架]

remix 是一个基于 JS 的全栈框架。类似于 next.js 或者 nuxt.js ，大家可以对比起来理解和学习。

它可以通过 esbuild 构建出：

- 服务端代码
- 客户端代码

并”自动”进行优化，使得发送到客户端的代码足够少，进而实现更好的性能，这也是它的主打特点。

要做到这一点，就需要严格区分 client 和 server，并贯穿整个 codebase。所以它就是一个服务端渲染+客户端渲染的框架，屏蔽了一些底层细节，开发者更好上手。

我的下一个网站就打算使用 remix 来做，看看它到底有多快。

via: https://remix.run/docs/

### 2023-03-09[工具]

我经常需要写一些脚本做一些事情，之前都是用 bash。但 bash 用起来实在没有高级语言方便，尤其是 JS。

于是后来我也尝试使用 nodejs 写脚本，但是 node 写起来真的是又臭又长。

这个工具是 Google 开源的，通过它你可以使用 JS 来写脚本，并且不会像原生 nodejs 写法一样又臭又长。尤其你需要使用 child_process 去做一些其他事情，然后需要通过进程通信传输数据的时候。

来看一个官方的例子感受一下：

```js
#!/usr/bin/env zx

await $`cat package.json | grep name`

let branch = await $`git branch --show-current`
await $`dep deploy --branch=${branch}`

await Promise.all([
  $`sleep 1; echo 1`,
  $`sleep 2; echo 2`,
  $`sleep 3; echo 3`,
])

let name = 'foo bar'
await $`mkdir /tmp/${name}`
```

以下是一些其提供的很好用的”简写“。

```js
$ · cd() · fetch() · question() · sleep() · echo() · stdin() · within() · retry() · spinner() · chalk · fs · os · path · glob · yaml · minimist · which · __filename · __dirname · require()
```

via: https://github.com/google/zx

### 2023-03-08[新闻]

Github 资料中可以编辑代称了，通过代称其他可以知道你是个人还是团体，是男的还是女的。

![](https://p.ipic.vip/o84h1m.png)

这个是 Github 2023-03-01 加的一个新功能。via: https://github.blog/changelog/2023-03-01-add-pronouns-to-your-github-profile/

### 2023-03-07[新闻]

TypeScript 5.0 RC 已经发布了，来看看人家是怎么写发布博客的。如果你也要发布重大更新，想通知他人，而不知道如何写，不妨参考一下。

另外这个博客有个很有意思的事情。”原来 anyscript 这个梗， 微软官方也玩 😄“

![](https://p.ipic.vip/paggl6.png)

via: https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-rc/#const-type-parameters

### 2023-03-06[好文]

FinalizationRegistry 是一个新的浏览器 api，可以监听 JS 中的变量的内存释放情况。

《Experiments with the JavaScript Garbage Collector》 使用了这个 API 对常见的内存泄漏情况进行了分析，非常通俗易懂。 其中有一个 case 使用 eval，非常有意思。

via: https://dev.to/codux/experiments-with-the-javascript-garbage-collector-2ae3
### 2023-03-05[类库]

texthighlighter 是一个 JS 类库，可以高亮 textarea。 

如果不使用这个库，你可能需要自己实现一个 textarea，然后用样式定制， 比较麻烦。

![](https://p.ipic.vip/a8aemg.png)

via: https://wstaeblein.github.io/texthighlighter/

### 2023-03-04[类库]

idraw 是一个画图工具， 不仅提供网页版本， 还提供一个 JS 库供开发者使用。类似 @excalidraw/excalidraw， UI 风格不太一样， 当时 API 基本是一致的。

via: https://idraw.js.org/

### 2023-03-02[好文]

deno 自从诞生就考虑安全，隐私问题。 因此使用 deno 来搭建在线环境要比使用 node 简单很多。 这篇文章就介绍如何使用 deno 来搭建一个安全的 sandbox 用于执行用户的代码，提供一个云平台（Cloud Platform）。

via: https://healeycodes.com/sandboxing-javascript-code
### 2023-03-01[好文]

一个可以去除网页中讨厌的悬浮框的小工具。 之前我都是直接打开控制台，然后找到悬浮窗手动”删除 DOM 元素“。

有了这个工具就可以自动地完成这个操作。原理也很简单， 就是直接使用 DOM API 找到 fixed 和 sticky 的 DOM，然后将其移除。代码参考：

```js
    document.querySelectorAll('body *').forEach(function(node) {
        if (['fixed', 'sticky'].includes(getComputedStyle(node).position))  {
            node.parentNode.removeChild(node);
        }
    });

    document.querySelectorAll('html *').forEach(function(node) {
        var s = getComputedStyle(node);
        if ('hidden' === s['overflow']) { node.style['overflow'] = 'visible'; }
        if ('hidden' === s['overflow-x']) { node.style['overflow-x'] = 'visible'; }
        if ('hidden' === s['overflow-y']) { node.style['overflow-y'] = 'visible'; }
    });

    var htmlNode = document.querySelector('html');
    htmlNode.style['overflow'] = 'visible';
    htmlNode.style['overflow-x'] = 'visible';
    htmlNode.style['overflow-y'] = 'visible';
```

via: https://github.com/t-mart/kill-sticky
## 历史汇总

- [SUMMARY](./SUMMARY.md)

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://p.ipic.vip/bp35i7.jpg">

大家也可以加我微信好友进行交流！

![](https://p.ipic.vip/p6dekr.jpg)

## 贡献

- 如果有想法和创意，请提 [issue](https://github.com/azl397985856/daily-featured/issues) 或者进群提
- 如果想贡献代码，请提 [PR](https://github.com/azl397985856/daily-featured/pulls)
- 如果需要修改项目中图片，[这里](./assets/) 存放了项目中绘制图的源代码， 大家可以用 [draw.io](https://www.draw.io/) 打开进行编辑。

## License

[Apache-2.0](./LICENSE)
