# 每日一荐

![历史共访问次数](https://visitor-count-badge.herokuapp.com/total.svg?repo_id=azl397985856.daily-featured)
![今天被访问次数](https://visitor-count-badge.herokuapp.com/today.svg?repo_id=azl397985856.daily-featured)

> 统计数据的时间是从 2019-09-15 16:50 起至今

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 新鲜出炉(2019-11)

### 2019-11-18[娱乐]

今天给大家推荐一个在线nokia短信图片生成器，可以自己输入短语，一键生成。

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g91bohz6xyj30hc0j9di2.jpg)

网站地址： https://zzkia.noddl.me:8020/

### 2019-11-15[网站]

有的什么我们需要在Google Play上下载软件，但是苦于没有通畅的网络(关于如何获取畅通的网络我在2019-11-01讲到，感兴趣可以翻过去看看)。因此一个Google Play镜像就很重要了。 这就如同我们npm和cnpm的关系。我们可以在这里直接下载apkx。

> apkx需要特殊的安装工具，或者一些小技巧才能安装。

网站地址： https://apkpure.com/
### 2019-11-14[技巧]

很多时候我们会看到一些英文的简写。比如邮件，IM等，这些简称能够帮我们提高沟通效率，如果你不知道一些常见的简写，沟通的时候就难免有障碍，以下是一些常见的简写，欢迎补充。

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8wp5bq01zj30hs18xn0d.jpg)

### 2019-11-13[技巧]

今天要分享的是关于Bash中历史记录那些事。

- 第一个要介绍的是`history`, history is an alias for fc -l 1,你可以通过这个命令来查看最近你使用的命令。 然后你可以用!n(n指的是history命令返回的命令编号)再次执行。其中有许多缩写，最有用的就是 !$， 用于指代上次键入的参数，!! 可以指代上次键入的命令。

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8vi04t5qnj307j02baa0.jpg)

- 第二个要介绍的是历史搜索`ctrl + r`, 然后输入你想搜索的关键字即可

- 第三个要介绍的是`上下方向键`，你可以通过他在历史记录中上下移动。即按下上返回当前上一个命名，按下下返回当前下一个命令。

- 还有一个小插曲，似乎和历史有那么一点点关系。 就是`cd -`,切换到上一次的工作路径

如果你还知道什么和历史记录相关的命令，欢迎大家补充。


### 2019-11-12[技巧]

dig命令是常用的域名查询工具，可以用来测试域名系统工作是否正常。

如下`dig lucifer.ren`， 可以发现很多信息，包括域名最终解析到了到了另外一个域名`azl397985856.github.io`, IP是`185.199.108.153`.

这个工具在很多情况下非常有用，尤其是对于喜欢命令行的你来说。

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8ugp99e01j30hj0d8mxo.jpg)


其实dig是`usr/bin`下的一个可执行文件，更多用法请`man dig`查看。

```bash
~ type dig
# dig is /usr/bin/dig
```

### 2019-11-11[分享]

今天是双十一，大家剁手快乐。

今天给大家分享一下前一段时间刚刚举行的大会`React Conf 2019`，这个是React最高规模的技术会议。喜欢React的小伙伴千万不要错过了，这里有全套视频。

地址：https://www.youtube.com/playlist?list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh

### 2019-11-08[好文]

前几天读了一篇文章《Scaling webapps for newbs & non-techies》，文章从最简单的单体应用，逐步讲到大型应用架构，不仅讲的通俗易懂，并且图画的也非常好，是我喜欢的风格。 很期待他的第二篇《the cloud for newbs and non-techies》。

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8pr18vd6ij30jg0bu74f.jpg)
（A single server + database）
![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8pr1kkny7j30jg0al74f.jpg)
（Adding a Reverse Proxy）


文章地址： https://arcentry.com/blog/scaling-webapps-for-newbs-and-non-techies/

### 2019-11-07[学习方法]

前一段事件看了一篇文章 -《如何构建自己的产品知识库》。这篇文章的亮点在于其所提到的技巧能够横向类比到任何领域。换句话说你可以按照它将的方法构建你自己的知识库。

里面有一句话`产品知识体系是对产品知识搜集、筛选、整理后形成的知识组合，并且这些知识能够用于解决实际遇到的问题。` 学习任何知识又何尝不是呢？很多人问我学习方法，其实这个东西非常地系统，很难通过几个技巧完成，也很难在短期内看到很明显的效果。大家可以看一下，说不定对你的学习和生活所有启发，即便你不是一个产品经理。

文章地址: https://www.toutiao.com/a6738596936057618951/

> 后期如果有机会的话，我也会分享一下自己的学习方法

### 2019-11-06[工具]

像PS和Sketch一样，figma也是一个设计工具，和其他相比团队显得更简单，这点有点像蓝湖。做设计的同学要了解起来了。

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8nh14xlj6j30tn0fbdhb.jpg)

地址： https://www.figma.com/

### 2019-11-05[观点]

VSCode和MDN进行了官方联动，[详情](https://code.visualstudio.com/updates/v1_38#_mdn-reference-for-html-and-css).

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g8mx8cmd5vj30lh0eo0vr.jpg)


 再也不用跳出IDE用Dash查了。 用Alfred + Dash 虽然方便，但是不免有一种`应用跳出`的感觉。现在就很方便了，如果之后有更多的联动支持，相信体验会越来越好。

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g8mxbj2wh4j30fn0dfaah.jpg)


### 2019-11-04[好文]

最近几年啊，我本人也看了很多关于微服务的介绍，理念，落地等技术文章，今天给大家推荐一篇阿里飞冰团队发布的技术文，这或许是最简单的微服务落地技术文章。这篇文章详细讲述了业务场景，并详细记录了解决问题的过程以及对比了业界的一些解决方案，管中窥豹，让读者慢慢走进微服务，从这篇文章可以学习到`icestark`这个微服务的解决方案是怎么从从到有再到落地产生实际业务价值的。

文章地址： https://zhuanlan.zhihu.com/p/88449415#h5o-9

### 2019-11-01[工具]

身为一个程序员，科学上网是标配。市面上免费的软件大多不稳定，出了问题很难及时解决。 自建服务器虽然好，但是还是有一点繁琐的，尤其是碰到了“开会”，IP端口就会被封锁，自己处理就比较麻烦了。

今天给大家推荐一下SSNG的订阅功能，有了这个订阅地址就相当于有了无数的`自建服务器`，然后你可以在不同的节点之间进行切换。一般而言，我会对服务器进行测速，然后选择速度最快，如果某一个服务器挂了，我只需要一键切换到另外一个即可，无需额外操作。

市面上有很多这种订阅服务，这里推荐一个付费的服务 [KyCloud](https://my.kynetwork.ltd/aff.php?aff=12225&gid=8)，挺便宜的，我订阅的是45／季度，平均一个月15，50G流量，基本对于我来说非常够用了。

使用方式也非常简单，只需要以下三步即可。

1. 下载对应客户端

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8icx1bv11j30980bcgls.jpg)


2. 点击复制订阅地址

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8icwarcwmj30a70a0wef.jpg)

3. 将地址粘贴到客户端

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8icygoun8j30ec058aag.jpg)

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8icz2pwwuj30d704vjr9.jpg)


提示： 你也可以像我一样测速，然后根据速度选择节点。

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8iczzsgq4j308s05ot8s.jpg)



## 历史汇总

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
