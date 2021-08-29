# 每日一荐

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。。

## 2019-11

### 2019-11-29[网站]

之前我在每日一题出了一道题[ 2019-08-16 - 怎么在浏览器中操作本地的文件](https://github.com/azl397985856/fe-interview/issues/16)。 一个可行的思路就是在本地创建一个服务器，比如 node 服务器，浏览器操作发送请求到服务器，然后 node 去操作本地文件。

现在 Chrome 支持 native fs api，使得这个过程原生支持，想要体验的可以访问这里 https://labs.vaadin.com/native-fs/ ， 如果你愿意，你可以将它添加为 Chrome APP。

### 2019-11-28[工具]

今天给大家推荐的工具是效率类软件 Alfred 的灵魂 workflows（工作流）。

以下是我使用频率比较高的 workflow，使用频率低的会被我定期清理掉。

> 我自己制作的工作流不在这里展示和推荐

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g9dintchy7j30950ay74e.jpg)

下载地址：

- [Chrome Bookmarks](../../assets/2019-11/ChromeBookmarks.alfredworkflow)

- [Colors](../../assets/2019-11/Colors.alfredworkflow)

- [Dash](../../assets/2019-11/Dash.alfredworkflow)

- [Kill Process](../../assets/2019-11/KillProcess.alfredworkflow)

- [RamdaDocs](../../assets/2019-11/RamdaDocs.alfredworkflow)

- [TerminalFinder](../../assets/2019-11/TerminalFinder.alfredworkflow)

- [Yosemite iOS Simulator](../../assets/2019-11/YosemiteiOSSimulator.alfredworkflow)

- [Youdao](../../assets/2019-11/Youdao.alfredworkflow)

### 2019-11-27[软件]

mac 端不能右键新建文件，这在某些时候不是很方便。 没有这个软件的时候，我是在编辑器中新建或者是使用 touch 命令。 使用了这个`New File Menu`软件之后多了一种更方便的选择，你可以直接右键新建，Just Like Windows Users。

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g9b8meuak2j30gu04yaa8.jpg)

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g9b8k1tqqdj30od0f7n3b.jpg)

地址： https://apps.apple.com/cn/app/new-file-menu/id1064959555?l=en&mt=12

### 2019-11-26[网站]

一个网站，可以分析的 Github 仓库，采用手绘风格，对于厌倦了标准图形的我来说简直是耳目一新的感觉。

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g9aj5o2tu5j30qv0pmgmq.jpg)

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g9aj7mseg4j30qr0cyjrn.jpg)

项目地址： https://repo-analytics.github.io/

### 2019-11-25[技巧]

Chrome 开发者工具有非常好用但是却鲜为人知的功能。今天给大家介绍一个功能 - 代码覆盖率。 指的是你下载的代码有多少是被执行了的，这在做性能优化的时候很有用。如果一些代码根本没执行，就可以延迟加载。

使用方法：

- `Ctrl+Shift+P` for windows `CMD+Shift+P` for mac
- 输入 coverage， 选择如图的选项，并确定。

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g9a2gz99paj30f504hglj.jpg)

然后你就能看到检测结果了：

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g9a2h750eij30fk0563yl.jpg)

### 2019-11-22[工具]

Github Large File Storage （简称 git-lfs）, 可以用来存储大文件，比如上 GB 的大文件，相比于传统的 Github 存储，这种方式空间更大，速度更快，并且工作流程和传统 Git flow 并无二致。

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g95pqj3vo9j30rs0gowec.jpg)

地址：https://git-lfs.github.com/

### 2019-11-21[娱乐]

文章标题 【The skeptic's guide to interpreting developer marketing speak 🗺️】 - 暂翻译为【如何翻译开发人员的营销术语】

里面讲了各种开发人员常用的营销术语，以及对应我们应该怎么去解读 ta。比如：

- `现代化` 就是说`刚刚git init`
- `AI加持` 就是说`无数的if else switch case语句`
- `最小化` 就是说`没有测试用例，没有例子`
- `跨平台` 就是说`我听说Electron可以跨平台，于是我就用它写了`
- ...

文章地址： https://changelog.com/posts/the-skeptics-guide-to-interpreting-developer-marketing-speak

### 2019-11-20[工具]

微信的一个插件，功能有很多。 不过目前已经不再维护了。

- 消息自动回复
- 消息防撤回
- 远程控制(已支持语音)
- 微信多开
- 第二次登录免认证
- 聊天置底功能(类似置顶)
- 微信窗口置顶
- 会话多选删除
- 自动登录开关
- 通知中心快捷回复
- 聊天窗口表情包复制 & 存储
  ...

我用的比较多的功能恐怕就是双开和防撤回了。

- 消息防撤回
  ![消息防撤回.gif](http://upload-images.jianshu.io/upload_images/965383-30cbea645661e627.gif?imageMogr2/auto-orient/strip)

- 微信多开
  ![微信多开.gif](http://upload-images.jianshu.io/upload_images/965383-51d8eae02d48fda9.gif?imageMogr2/auto-orient/strip)

仓库地址：https://github.com/TKkk-iOSer/WeChatPlugin-MacOS/tree/master

### 2019-11-19[工具]

JS 依赖检测工具，可以用来生成图片，可视化程度很高，还可以做成自动化，集成到 CI CD ，支持 CommonJS，AMD 和 ES Module。

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g92f3pun36j30h90awt8w.jpg)

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g92f3yps0zj30a905g745.jpg)

项目地址： https://github.com/pahen/madge

### 2019-11-18[娱乐]

今天给大家推荐一个在线 nokia 短信图片生成器，可以自己输入短语，一键生成。

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g91bohz6xyj30hc0j9di2.jpg)

网站地址： https://zzkia.noddl.me:8020/

### 2019-11-15[网站]

有的什么我们需要在 Google Play 上下载软件，但是苦于没有通畅的网络(关于如何获取畅通的网络我在 2019-11-01 讲到，感兴趣可以翻过去看看)。因此一个 Google Play 镜像就很重要了。 这就如同我们 npm 和 cnpm 的关系。我们可以在这里直接下载 apkx。

> apkx 需要特殊的安装工具，或者一些小技巧才能安装。

网站地址： https://apkpure.com/

### 2019-11-14[技巧]

很多时候我们会看到一些英文的简写。比如邮件，IM 等，这些简称能够帮我们提高沟通效率，如果你不知道一些常见的简写，沟通的时候就难免有障碍，以下是一些常见的简写，欢迎补充。

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8wp5bq01zj30hs18xn0d.jpg)

### 2019-11-13[技巧]

今天要分享的是关于 Bash 中历史记录那些事。

- 第一个要介绍的是`history`, history is an alias for fc -l 1,你可以通过这个命令来查看最近你使用的命令。 然后你可以用!n(n 指的是 history 命令返回的命令编号)再次执行。其中有许多缩写，最有用的就是 !\$， 用于指代上次键入的参数，!! 可以指代上次键入的命令。

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8vi04t5qnj307j02baa0.jpg)

- 第二个要介绍的是历史搜索`ctrl + r`, 然后输入你想搜索的关键字即可

- 第三个要介绍的是`上下方向键`，你可以通过他在历史记录中上下移动。即按下上返回当前上一个命名，按下下返回当前下一个命令。

- 还有一个小插曲，似乎和历史有那么一点点关系。 就是`cd -`,切换到上一次的工作路径

如果你还知道什么和历史记录相关的命令，欢迎大家补充。

### 2019-11-12[技巧]

dig 命令是常用的域名查询工具，可以用来测试域名系统工作是否正常。

如下`dig lucifer.ren`， 可以发现很多信息，包括域名最终解析到了到了另外一个域名`azl397985856.github.io`, IP 是`185.199.108.153`.

这个工具在很多情况下非常有用，尤其是对于喜欢命令行的你来说。

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8ugp99e01j30hj0d8mxo.jpg)

其实 dig 是`usr/bin`下的一个可执行文件，更多用法请`man dig`查看。

```bash
~ type dig
# dig is /usr/bin/dig
```

### 2019-11-11[分享]

今天是双十一，大家剁手快乐。

今天给大家分享一下前一段时间刚刚举行的大会`React Conf 2019`，这个是 React 最高规模的技术会议。喜欢 React 的小伙伴千万不要错过了，这里有全套视频。

地址：https://www.youtube.com/playlist?list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh

### 2019-11-08[好文]

前几天读了一篇文章《Scaling webapps for newbs & non-techies》，文章从最简单的单体应用，逐步讲到大型应用架构，不仅讲的通俗易懂，并且图画的也非常好，是我喜欢的风格。 很期待他的第二篇《the cloud for newbs and non-techies》。

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8pr18vd6ij30jg0bu74f.jpg)
（A single server + database）
![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8pr1kkny7j30jg0al74f.jpg)
（Adding a Reverse Proxy）

文章地址： https://arcentry.com/blog/scaling-webapps-for-newbs-and-non-techies/

### 2019-11-07[学习方法]

前一段时间看了一篇文章 -《如何构建自己的产品知识库》。这篇文章的亮点在于其所提到的技巧能够横向类比到任何领域。换句话说你可以按照它将的方法构建你自己的知识库。

里面有一句话`产品知识体系是对产品知识搜集、筛选、整理后形成的知识组合，并且这些知识能够用于解决实际遇到的问题。` 学习任何知识又何尝不是呢？很多人问我学习方法，其实这个东西非常地系统，很难通过几个技巧完成，也很难在短期内看到很明显的效果。大家可以看一下，说不定对你的学习和生活所有启发，即便你不是一个产品经理。

文章地址: https://www.toutiao.com/a6738596936057618951/

> 后期如果有机会的话，我也会分享一下自己的学习方法

### 2019-11-06[工具]

像 PS 和 Sketch 一样，figma 也是一个设计工具，和其他相比团队显得更简单，这点有点像蓝湖。做设计的同学要了解起来了。

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8nh14xlj6j30tn0fbdhb.jpg)

地址： https://www.figma.com/

### 2019-11-05[观点]

VSCode 和 MDN 进行了官方联动，[详情](https://code.visualstudio.com/updates/v1_38#_mdn-reference-for-html-and-css).

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g8mx8cmd5vj30lh0eo0vr.jpg)

再也不用跳出 IDE 用 Dash 查了。 用 Alfred + Dash 虽然方便，但是不免有一种`应用跳出`的感觉。现在就很方便了，如果之后有更多的联动支持，相信体验会越来越好。

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g8mxbj2wh4j30fn0dfaah.jpg)

### 2019-11-04[好文]

最近几年啊，我本人也看了很多关于微服务的介绍，理念，落地等技术文章，今天给大家推荐一篇阿里飞冰团队发布的技术文，这或许是最简单的微服务落地技术文章。这篇文章详细讲述了业务场景，并详细记录了解决问题的过程以及对比了业界的一些解决方案，管中窥豹，让读者慢慢走进微服务，从这篇文章可以学习到`icestark`这个微服务的解决方案是怎么从从到有再到落地产生实际业务价值的。

文章地址： https://zhuanlan.zhihu.com/p/88449415#h5o-9

### 2019-11-01[工具]

身为一个程序员，科学上网是标配。市面上免费的软件大多不稳定，出了问题很难及时解决。 自建服务器虽然好，但是还是有一点繁琐的，尤其是碰到了“开会”，IP 端口就会被封锁，自己处理就比较麻烦了。

今天给大家推荐一下 SSNG 的订阅功能，有了这个订阅地址就相当于有了无数的`自建服务器`，然后你可以在不同的节点之间进行切换。一般而言，我会对服务器进行测速，然后选择速度最快，如果某一个服务器挂了，我只需要一键切换到另外一个即可，无需额外操作。

市面上有很多这种订阅服务，这里推荐一个付费的服务 ，用户体验真的是好，用起来超简单， 提供一站式工具，包括网络检测工具，浏览器插件等，支持多种客户端（还有我最喜欢的 Switch 加速器），价格也不贵，基础套餐折算到月大约 11.2 块/月。它还支持签到送天数，也就是说你可以每天签到无限续期。地址：https://glados.space/landing/M9OHH-Q88JQ-DX72D-R04RN

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

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7he9xdtmyj30by0byaac.jpg">
