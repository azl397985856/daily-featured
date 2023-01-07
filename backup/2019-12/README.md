# 每日一荐

![](https://p.ipic.vip/u6q9jv.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2019-12

### 2019-12-31[见闻]

今天是我的生日，祝我生日快乐 🎂 ～～～～

一般公司的卫生间贴的都是公司信息或心灵鸡汤，但是谷歌卫生间贴的是`如何找到代码 Bug`，不得不感叹“这实在是太硬核了”！

![](https://p.ipic.vip/bfit09.jpg)

![](https://p.ipic.vip/0gd54s.jpg)

### 2019-12-24[技巧]

今天是平安夜，苹果 🍎 和圣诞礼物 🎁 都收到了么？

今天给大家推荐的是一个 linux 中非常常见的命令 `grep` 的常用用法。

图版本：

![](https://p.ipic.vip/9e2qrv.jpg)

文字版本：

Matches patterns in input text.Supports simple patterns and regular expressions.

- Search for an exact string: grep search_string path/to/file

- Search in case-insensitive mode: grep -i search_string path/to/file

- Search recursively (ignoring non-text files) in current directory for an exact string: grep -RI search_string .

- Use extended regular expressions (supporting ?, +, {}, () and |): grep -E ^regex\$ path/to/file

- Print 3 lines of [C]ontext around, [B]efore, or [A]fter each match: grep -C|B|A 3 search_string path/to/file

- Print file name with the corresponding line number for each match: grep -Hn search_string path/to/file

- Use the standard input instead of a file: cat path/to/file | grep search_string

- Invert match for excluding specific strings: grep -v search_string

### 2019-12-23[学习方法]

很多人问我如何保持高效率。 首先要说的是我的效率并不是很高，这也就是我为什么还在不断学习提高效率的原因之一。那么既然有人问了我就班门弄斧回答一下，大家有什么好的方法和技巧欢迎提出来交流。

为了让自己保持高效率，我自己开了一个仓库记录了自己保持“高效率”的方式。希望可以给大家启发，本仓库内容持续更新～

仓库大纲：

![](https://p.ipic.vip/71p5ni.jpg)

仓库截图：

![](https://p.ipic.vip/nqiimi.jpg)

仓库地址：https://github.com/azl397985856/To-Be-Productive

### 2019-12-20[新闻]

Facebook 发布 Hermes， 一个新的专门用于 React Native 的 JS 引擎。

文章地址：https://facebook.github.io/react-native/blog/2019/07/17/hermes

### 2019-12-19[好文]

很多高级语言有自动的垃圾回收器，比如 JS，JAVA，Go 等。其会自动地进行垃圾回收工作，而不必像诸如 C 和 C++那样手动分配和清除内存。

对于 old space 的垃圾回收算法有一个是标记清除，从一个根对象开始对于所有可达的对象进行标记，剩下的就是不可达的，我们将其进行清除，本文讲解了三色标记法（黑色，白色和灰色），三色标记法本质上进行一次 DFS，并将内存对象分到三个部分，DFS 完成之后清除不可达的内存（白色）。这篇文章以动画形式讲解了三色标记法的具体过程。

文章（《一张图了解三色标记法》）地址：http://idiotsky.top/2017/08/16/gc-three-color/

### 2019-12-18[教程]

哈弗大学 CS50 系列，内容持续更新，现在最新的是 2019 年。 你可以跟着教程来重新学习 CS 基础。

![](https://p.ipic.vip/9rrggw.jpg)

地址：https://cs50.harvard.edu/college/

### 2019-12-17[网站]

Learn Git Branching 是一个交互式学习 Git 的网站。沙盒里你能执行相应的命令，还能看到每个命令的执行情况； 通过一系列刺激的关卡挑战，逐步深入的学习 Git 的强大功能，在这个过程中你可能还会发现一些有意思的事情。

![](https://p.ipic.vip/s0e35u.jpg)

![](https://p.ipic.vip/s389jc.jpg)

地址： https://learngitbranching.js.org/

### 2019-12-16[新闻]

最新版本的 Chrome 和 Firefo 浏览器取消 EV 证书的显示。

![](https://p.ipic.vip/85srjg.jpg)

![](https://p.ipic.vip/8p40n5.jpg)

只有用户点击了锁 🔒，才会显示出 EV 证书的信息。

![](https://p.ipic.vip/upqiv2.jpg)

为什么会这样？想要知道答案的可以点击原文阅读。

原文地址：[Chrome and Firefox Changes Spark the End of EV Certificates](https://www.bleepingcomputer.com/news/software/chrome-and-firefox-changes-spark-the-end-of-ev-certificates/)

### 2019-12-13[类库]

loki 是一个 React Storybook 组件回归测试工具。React Storybook 是一个我 15 年就开始关注的一个工具，本身的设计思想我比较喜欢。现在除了支持 React，也支持 React Native，Vue，Angular 等，甚至最新的 Svelte 也支持。

loki Github 地址： https://github.com/oblador/loki

### 2019-12-12[技巧]

Angular 的 Commit Message Conventions 是一套很流行的 Commit Message 规约。简单方便，一目了然，更重要的是这种约定化如果形成一种默契，不管对于之后查看，还是生成各种外部资料（比如 CHNAGELOG）都是非常方便的。

![](https://p.ipic.vip/hpabfc.jpg)

详细信息： https://gist.github.com/stephenparish/9941e89d80e2bc58a153

相关工具也有很多，我个人使用的是[Commitizen](https://github.com/commitizen?type=source "Commitizen")

### 2019-12-11[好文]

文章标题 《花椒前端基于 WebAssembly 的 H.265 播放器研发》，本文从背景介绍，技术调研，实际方案到最后的实践效果，完整地讲述了通过 `wasm` 将 H.265 应用到不支持其的浏览器的过程。干货满满，其架构图画的也是我比较喜欢的风格。

![](https://p.ipic.vip/mjubl8.jpg)

文章地址： https://zhuanlan.zhihu.com/p/73772711

### 2019-12-10[技巧]

我们有时候需要在终端访问一些国外的资源。我目前采取的措施主要是给终端设置 proxy。

```
alias proxy='export all_proxy=socks5://127.0.0.1:1086'
alias unproxy='unset all_proxy'
```

其中`socks5://127.0.0.1:1086`是我的本机的正向代理地址。

如下是使用效果： ![](https://p.ipic.vip/jhy93x.jpg)

如图显示我们代理成功了，而且我们可以方便的在不想要代理的时候去掉代理。

### 2019-12-09[类库]

对于前端，我们经常需要将组件进行可视化的展示。在 Vue 中，我们通常会用 [docsify](https://github.com/docsifyjs/docsify "docsify") 或者 [vuepress](https://github.com/vuejs/vuepress "vuepress") 等。而对于 react 比较有名的有 [storybook](https://github.com/storybookjs/storybook "storybook") 和 [docz](https://github.com/doczjs/docz "docz")。

当然这并不是绝对的，比如 storybook 也在支持 vue 和 webcomponents。

### 2019-12-06[技能]

在分析 CPU、内存、磁盘等的性能指标时，有几种工具是高频出现的，如 top、vmstat、pidstat，这里稍微总结一下:

CPU：top、vmstat、pidstat、sar、perf、jstack、jstat；内存：top、free、vmstat、cachetop、cachestat、sar、jmap；磁盘：top、iostat、vmstat、pidstat、du/df；网络：netstat、sar、dstat、tcpdump；应用：profiler、dump 分析。排查 Java 应用的线上异常或者分析应用代码瓶颈，可以使用阿里开源的 Arthas ，nodejs 应用可以使用 alinode

![](https://p.ipic.vip/mojctf.jpg)

### 2019-12-05[好文]

如果你想做微前端，一定要能够回答出这 10 个问题。

1. 微应用的注册、异步加载和生命周期管理；
2. 微应用之间、主从之间的消息机制；
3. 微应用之间的安全隔离措施；
4. 微应用的框架无关、版本无关；
5. 微应用之间、主从之间的公共依赖的库、业务逻辑(utils)以及版本怎么管理；
6. 微应用独立调试、和主应用联调的方式，快速定位报错（发射问题）；
7. 微应用的发布流程；
8. 微应用打包优化问题；
9. 微应用专有云场景的出包方案；
10. 渐进式升级：用微应用方案平滑重构老项目。

今天推荐的这个文档，区别与别的微前端文章的点在于其更加靠近规范层面，而不是结合自己的业务场景做的探索。这篇文章来自于阿里团队。

![](https://p.ipic.vip/uoc9pv.jpg)

文章地址： https://mp.weixin.qq.com/s/rYNsKPhw2zR84-4K62gliw

### 2019-12-04[工具]

相信大家使用 shell 的时候，会经常碰到忘记的 option，或者某一个用法记不清楚。遇到这种问题通常我们会用 man 或者命令提供的--help 查看用法。 这里给大家介绍另外一种工具`tldr`, 它是一个将 man page 进行简化，将大家常用的用法总结出来的工具。

安全也非常简单，只需要 `npm install -g`(前提是你必须安装 node)， 如果你不想安装也没有关系，它还提供了[web 版](https://tldr.ostera.io/)。另外你也可以参考这里[定制你的主题](https://github.com/tldr-pages/tldr-node-client#configuration)

![](https://p.ipic.vip/k7vcv6.jpg)

仓库地址： https://github.com/tldr-pages/tldr

### 2019-12-03[技巧]

今天给大家介绍的是`Google高级搜索技巧`。我们经常使用搜索引擎搜索一些东西，不管是遇到问题想寻求解决方案也好，想学习一些新东西也好，掌握一定的搜索技巧是可以让你搜索的过程事半功倍，尤其是常用的技巧一定要记住。

![](https://p.ipic.vip/ivt52q.jpg)

### 2019-12-02[软件]

我们公司在使用的一个完全开源的堡垒机，是符合 4A 的专业运维审计系统。

![](https://p.ipic.vip/nni6z9.jpg)

![](https://p.ipic.vip/hw7we2.jpg)

![](https://p.ipic.vip/8ffklu.jpg)

地址： https://github.com/jumpserver/jumpserver

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://p.ipic.vip/bp35i7.jpg">
