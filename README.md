# 每日一荐

![历史共访问次数](https://visitor-count-badge.herokuapp.com/total.svg?repo_id=azl397985856.daily-featured)
![今天被访问次数](https://visitor-count-badge.herokuapp.com/today.svg?repo_id=azl397985856.daily-featured)

> 统计数据的时间是从 2019-09-15 16:50 起至今

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 新鲜出炉 (2020-05)

### 2020-05-30[好文]

前端有 ES3 规范，有 ES5 规范。。。 为什么没有 ES4 呢？

实际上 ES4 是有的，只不过改动太大，导致浏览器厂商纷纷不干（这需求做不来）。比如 ES4 增加了 TS 中的类型，范型，增加了 Java 中的包，增加了很多年后的 JSX，还增加了至今没有规范化的尾递归等。

这篇文章告诉你 ES4 到底有什么，为什么没有被规范化。

文章地址：https://evertpot.com/ecmascript-4-the-missing-version/

### 2020-05-29[工具]

2020 京东 618 叠蛋糕活动，类似于天猫的盖楼活动。这个工具可以帮助你自动完成每日任务，实现自动盖楼，除了战队和邀请任务之外都可以自动完成。

其基本原理是：

- 调用一个获取所有任务的接口，所有的任务会在返回的 JSON 中包含。
- 遍历这个任务对象，依次发送接口完成任务。

这里京东有几个防范措施：

- 它会判断你的 ua，如果没有 jdapp，则认为不合法。
- 它会校验 cookie
- 它会校验接口请求间隔，如果太短则会报错“请稍后再试”之类。

因此一个简单的想法是：

- 设置浏览器 UA 为 jdapp。
- 打开京东网页版，并登陆，在该网页的控制台执行我们的 hack 脚本（即上面的基本原理部分）。
- 每个接口之间适当增加间隔。

这个工具的原理正是如此， 具体使用方法在[这里](https://github.com/zarkin404/sweater/tree/master/jingdong/2020_cake_baker "2020 京东 618 叠蛋糕活动脚本")。

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gf9ab99jlnj30a00f90ue.jpg)

提前祝大家 618 快乐？😂😂😂

<!-- ### 2020-05-29[好文]

原文标题《Why is This Website Port Scanning me?》。讲的是自己的一次“本地端口莫名被网站拥有者扫描”的经过。

这个脑洞还是蛮大的，其利用了 websocket 去和 localhost 本地各个端口进行连接，然后根据报错信息就能知道你的机器上的端口开放情况。

PS：为什么不用 HTTP 去扫描呢？

文章链接：https://nullsweep.com/why-is-this-website-port-scanning-me/ -->

### 2020-05-28[好文]

很多人说编译原理很重要。 但是也有很多前端觉得用不到这些知识，真的是这样么？先不说编译原理中大量的数据结构和算法对你编程思路上的扩展。单单说编译原理在前端的应用就有很多。

比如早期的 Taro 以及很多多端框架就是将一套代码编译成多端。再比如小程序严格的代码审核机制，导致发布不能随着自己的节奏走，那么我们其实可以利用编译的知识自己动态更新小程序的内容，从而绕开小程序内部的审核机制。

今天给大家分享的是一个系列教程，讲述的是`如何用JS写一个JS解释器`，你给它一段 JS 代码，它能帮你执行出来，原文标题《Build a JS Interpreter in JavaScript Using Acorn as a Parser》。

原文地址：https://blog.bitsrc.io/build-a-js-interpreter-in-javascript-using-acorn-as-a-parser-5487bb53390c

另外有一个`JS实现JS解释器`的仓库也一并推荐给大家，地址：https://github.com/zuluoaaa/makeJs。

### 2020-05-26[随笔]

HTML5 中竟然还有为视频定制的字幕标签 track。而在 Chrome 中，这个功能由 webCore 模块支持。

```html
<vedio>
  <source src="video.mp4" type="video/mp4" />
  <track src="captions.vtt" kind="subtitle" srclang="en" label="English" />
</vedio>
```

更多关于 track 的介绍，参考：https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/track

### 2020-05-22[仓库]

小公司经常会使用一些业界口碑好的开源产品。比如我们公司就用都了开源的堡垒机，开源的 NPM 仓库。今天给大家介绍的是一个开源的运维平台 `spug`，定位是面向中小型企业设计的轻量级无 Agent 的自动化运维平台，整合了主机管理、主机批量执行、主机在线终端、应用发布部署、在线任务计划、配置中心、监控、报警等一系列功能。。

如果你是一家创业公司，前期不妨考虑直接使用开源的产品，等到确实有必要的时候再自研哦。

地址：https://github.com/openspug/spug

### 2020-05-21[仓库]

如果你想写一门高级语言，那么除了设计语法，另外一个很重要的事情是写编译器，将你的高级语言的源代码转化为相应的汇编语言。

对于编译器部分，你可以使用`手动方式`，它的好处是你可以对底层有更多的控制，因此性能一般而言会更好，比如 GCC 编译器，而相应的就是开发难度比较大。

另一个选择是`自动方式`， 该工具的功能是，你给的一个`上下文无关的语法`，其帮你生成对应的`parser`。

Bison 做的就是这样的事情（准确的说是完成这个需求中的一环）， 它是 GBU 托管的一个开源项目（Yacc 的 GNU 版）。 对 Bison 不熟悉的朋友推荐看一下这个[新手教程](http://dinosaur.compilertools.net/bison/bison_4.html "Bison 新手教程")

而今天介绍给大家的是 Bison 的 JS 版本， 名字是 Jison，也就是 JS + Bison 的意思，简单来说和 Bison 很像，不同的是他是利用 JS 去解析产生式子（JS 驱动），并且 Jison 也扩展了一些新的功能，感兴趣的赶紧下载下来试试吧。

项目地址： https://github.com/zaach/jison

### 2020-05-15[仓库]

blitz 是一个类似 CRA 和 vue-cli 的脚手架工具，只不过其提供的内容更加丰富，包括后端数据库，后端定时任务，utils 等。

最终产生出的脚手架是基于 React 的单体应用，想比 CRA 的好处就是更加完善，初始化之后做的工作更小。当然如果你的应用是纯前端应用，使用 CRA 配合 CRA 提供的模板就足够了。

项目地址： https://github.com/blitz-js/blitz

### 2020-05-14[好文]

原文标题《OpenCV directly in the browser (webassembly + webworker)》， 讲述的是如何在浏览器使用 OpenCV。

基本思路是将 opencv 编译成 webassembly，然后通过 web worker 加载 webassembly 脚本实现。大家有做计算机视觉，且想让其在浏览器端发光发热的可以看下。

![](https://tva1.sinaimg.cn/large/007S8ZIlly1get9s6ix35j30mm0by0w8.jpg)

文章地址：https://aralroca.com/blog/opencv-in-the-web

### 2020-05-12[仓库]

和 webpack，pacel 类似，esbuild 是一个 JS 的打包和压缩工具。不同的是，其采用 Go 语言编写，且编译环节采用并行的方式，用作者的话来说就是“设计之初，就想着怎么提高性能”。

从 Benchmark 上来看， 其性能有着明显的优势，从实际使用上来说也是如此。但是目前其还不是很稳定，大家可以先关注一下。

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gepil3ncjbj30pe0dq0to.jpg)

地址：https://github.com/evanw/esbuild

### 2020-05-11[仓库]

webpack 是最流行的打包工具之一，尤其是对于业务类型的应用来说。虽然很多工具，比如 vue-cli 或者 create-react-app 等已经帮我们进行了一波封装， 但是我们仍然常常不可避免的需要对其进行配置。

很多人的选择是复制粘贴的模式。 这本身无可厚非，因为 webpack 的语法很多，并且还是经常变化的。这个仓库提供了一种新的方式，你可以将所有的 webpack 配置封装到一个个函数中，然后通过函数实现复用。 这样业务内的 webpack 配置就可以很方便的共享， 因为函数更容易被定制。

![](https://tva1.sinaimg.cn/large/007S8ZIlly1geocd0j9woj30ps02z74t.jpg)

项目地址：https://github.com/andywer/webpack-blocks

### 2020-05-09[工具]

如果你在做 graphql 方面的开发， 那么应该听说过 Facebook 的 relay 和 Apollo 的 ApolloGraphql。 而这两个我更推荐你使用后者。

如果你用到了 ApolloGraphql， 那么一个调试工具肯定能让你事半功倍，这个 Chrome 调试工具请收好。

Chrome 商店地址：https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm/related

### 2020-05-08[教程]

课程内容与赫尔辛基大学计算机科学系的 2020 春季课程【全栈课程】相同，含金量比较高。 我大概看了下，内容写的还不错。相信看完之后， 简单的全栈开发已经难不倒你了。

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gel0jycsdqj30z50qljux.jpg)
（部分课程）

这门课程`从基本的 web 开发到 react，redux，typescript，graphql 一应俱全，一共是 10 章内容`。该课的合作伙伴和友情机构包括 Houston Inc, Terveystalo, Elisa, K-ryhmä, Unity Technologies 以及 Konecranes。这里可以观看由我们的合作伙伴和友情机构的多为专家提供的与本门课程主题相关的客座讲座。

地址：https://github.com/fullstack-hy2020/fullstack-hy2020.github.io

### 2020-05-07[网站]

今天给大家推荐的是一个薪资职级统计网站。这里可以看到各大公司（包括金融公司和科技公司）的薪水情况，以及职级对比情况。

这个网站有两个特点：

- 数据相对真实，这个是听朋友说的。
- 数据比较全。 除了基础薪资（Base）还有签字费（Sign-On），股票等信息。
- 可以很方便对比各个公司的职级。

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gel0dr41ykj31dz0j4diq.jpg)
（薪资数据经常会更新，实时性好）

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gel0db9vnvj31b40o8aen.jpg)
（收录了很多大公司，国内国外都有）

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gel0cs7ce2j31c70o1dhn.jpg)
（公司职级对比）

地址：https://www.salarytics.com/

### 2020-05-06[工具]

今天给大家分享的是 mac 上的一款截图工具，这是我目前见过的最好用的截图工具。 官方的话说“其不仅是一个截图工具，而是一个工作流”。

主要功能有截图（包含滚动截长图），标注，录屏，截图置顶，一键分享，云端存储等。

唯一的“缺点”就是，这个软件是收费的。

官网： https://getcleanshot.com/

### 2020-05-04[仓库]

今天给大家分享的是一个“换脸”工具。其基于著名的人工智能框架 tensorflow 生成。 可以将照片，影片中中的人物头像发生变化，变成别人的头像。甚至可以实时处理，这就非常可怕了。图谋不轨的人可以用来发展色情产业，敲诈勒索等等。当然运用得当的话，会产生意想不到的效果，比如给电影人物换脸，每个人可以在看电影的时候将影片中的人物实时换算成任意人物（比如自己）。

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gegbcx4yfwj30xz0u0b29.jpg)

https://github.com/deepfakes/faceswap

### 2020-05-03[技巧]

今天发现 Github 更新了一个很有意思的功能，据说是为了有时差远程办公的人设计的。

如果用户设置了地理位置，那么将鼠标悬浮到头像上，会显示其当地时间。

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gedvhuahc3j31000e2417.jpg)

### 2020-05-02[技巧]

今天给大家介绍两个 Github 技巧，应该用的人不多。

1. 快捷回复

你可以在 Github 回复他人的时候使用快捷回复的功能，从而更快的进行回复。

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gedulo7cboj31840fa418.jpg)

默认只有一条回复， 快捷键是`ctrl + 1` - 插入回复`Duplicate of #`，这个快捷键只有在点击上图红色部分的时候才管用。

2. suggestion

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1geduo4gwcij32qg0fw41a.jpg)

如上图在进行 pull request 的 review 的时候，可以点击加号位置，使用类似评论的功能。注意这里多了一个项目，点击可以添加修复建议。

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1geduq3istyj318o0hygnt.jpg)

效果如下：

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gedur0x5elj318y0jo41r.jpg)

## 历史汇总

- [2020-03](./backup/2020-03/)
- [2020-02](./backup/2020-02/)
- [2020-01](./backup/2020-01/)
- [2019-12](./backup/2019-12/)
- [2019-11](./backup/2019-11/)
- [2019-10](./backup/2019-10/)
- [2019-09](./backup/2019-09/)

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7he9xdtmyj30by0byaac.jpg">

## 贡献

- 如果有想法和创意，请提 [issue](https://github.com/azl397985856/daily-featured/issues) 或者进群提
- 如果想贡献代码，请提 [PR](https://github.com/azl397985856/daily-featured/pulls)
- 如果需要修改项目中图片，[这里](./assets/) 存放了项目中绘制图的源代码， 大家可以用 [draw.io](https://www.draw.io/) 打开进行编辑。

## License

[Apache-2.0](./LICENSE)
