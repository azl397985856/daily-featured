# 每日一荐

![历史共访问次数](https://visitor-count-badge.herokuapp.com/total.svg?repo_id=azl397985856.daily-featured)
![今天被访问次数](https://visitor-count-badge.herokuapp.com/today.svg?repo_id=azl397985856.daily-featured)

> 统计数据的时间是从 2019-09-15 16:50 起至今

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 新鲜出炉(2019-12)

### 2019-12-09[类库]

对于前端，我们经常需要将组件进行可视化的展示。在 Vue 中，我们通常会用 [docsify](https://github.com/docsifyjs/docsify) 或者 [vuepress](https://github.com/vuejs/vuepress) 等。而对于 react 比较有名的有 [storybook](https://github.com/storybookjs/storybook) 和 [docz](https://github.com/doczjs/docz)。

当然这并不是绝对的，比如 storybook 也在支持 vue 和 webcomponents。

### 2019-12-06[技能]

在分析 CPU、内存、磁盘等的性能指标时，有几种工具是高频出现的，如 top、vmstat、pidstat，这里稍微总结一下:

CPU：top、vmstat、pidstat、sar、perf、jstack、jstat；
内存：top、free、vmstat、cachetop、cachestat、sar、jmap；
磁盘：top、iostat、vmstat、pidstat、du/df；
网络：netstat、sar、dstat、tcpdump；
应用：profiler、dump 分析。
排查 Java 应用的线上异常或者分析应用代码瓶颈，可以使用阿里开源的 Arthas ，nodejs 应用可以使用 alinode

![](https://tva1.sinaimg.cn/large/006tNbRwgy1g9jphsv3t0j30u01b5tbj.jpg)

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

![](https://tva1.sinaimg.cn/large/006tNbRwgy1g9kuat53elj30u00lgdhe.jpg)

文章地址： https://mp.weixin.qq.com/s/rYNsKPhw2zR84-4K62gliw

### 2019-12-04[工具]

相信大家使用 shell 的时候，会经常碰到忘记的 option，或者某一个用法记不清楚。遇到这种问题通常我们会用 man 或者命令提供的--help 查看用法。 这里给大家介绍另外一种工具`tldr`, 它是一个将 man page 进行简化，将大家常用的用法总结出来的工具。

安全也非常简单，只需要 `npm install -g`(前提是你必须安装 node)， 如果你不想安装也没有关系，它还提供了[web 版](https://tldr.ostera.io/)。另外你也可以参考这里[定制你的主题](https://github.com/tldr-pages/tldr-node-client#configuration)

![](https://tva1.sinaimg.cn/large/006tNbRwgy1g9jmo8sh8jj30ic0ei3zt.jpg)

仓库地址： https://github.com/tldr-pages/tldr

### 2019-12-03[技巧]

今天给大家介绍的是`Google高级搜索技巧`。我们经常使用搜索引擎搜索一些东西，不管是遇到问题想寻求解决方案也好，想学习一些新东西也好，掌握一定的搜索技巧是可以让你搜索的过程事半功倍，尤其是常用的技巧一定要记住。

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g9dy1kml11j30u02pkdsk.jpg)

### 2019-12-02[软件]

我们公司在使用的一个完全开源的堡垒机，是符合 4A 的专业运维审计系统。

![](https://tva1.sinaimg.cn/large/006tNbRwgy1g9i8em5x8sj31ht0u0td1.jpg)

![](https://tva1.sinaimg.cn/large/006tNbRwgy1g9i8et0f9hj31mk0u0ten.jpg)

![](https://tva1.sinaimg.cn/large/006tNbRwgy1g9i8ey12vhj31i60u0taw.jpg)

地址： https://github.com/jumpserver/jumpserver

## 历史汇总

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

- 如果有想法和创意，请提[issue](https://github.com/azl397985856/daily-featured/issues)或者进群提
- 如果想贡献代码，请提[PR](https://github.com/azl397985856/daily-featured/pulls)
- 如果需要修改项目中图片，[这里](./assets/)存放了项目中绘制图的源代码， 大家可以用[draw.io](https://www.draw.io/)打开进行编辑。

## License

[Apache-2.0](./LICENSE)
