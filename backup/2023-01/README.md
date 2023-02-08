
# 每日一荐

![](https://p.ipic.vip/0bhil1.jpg)![](https://p.ipic.vip/0bhil1.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2023-01

### 2023-01-31[插件]

error lens 是一个 vscode 插件， 可以内敛的形式显示错误信息。在这之前大家需要在 output 或者 problems 面板查看，相当麻烦。

![](https://p.ipic.vip/6kpp7b.png)

比如你的括号少了一个， 它就立马提示你哪里需要添加一个括号。大家 vscode 插件市场搜索 Error Lens 即可安装。 

### 2023-01-30[好文]

Zod: The Next Biggest thing after Typescript

本文介绍了 zod 如何同时在运行时和编译时进行类型校验的。 有点像一次编写，到处运行？

via: https://dev.to/jareechang/zod-the-next-biggest-thing-after-typescript-4phh

### 2023-01-28[库]

你可能遇到文本换行后第二行只有一个字的情况， 这个时候会显得不美观，能不能让他们挤挤，弄到一行呢？

react-wrap-balancer 就可以满足这个需求， 它是一个优化换行样式的 react 库。当浏览器视口发生变化的时候，它能适应这个变化，然后以最佳的方式展现换行文字。

via: https://www.npmjs.com/package/react-wrap-balancer

### 2023-01-20[技巧]

如何实现弹幕防遮脸功能？


其实很简单。 普通的弹幕都是在视频上放一些 div 然后滚动即可， 防遮挡只需要：

1. 预先处理出一个遮罩图片。
2. 将遮挡图片放到弹幕和视频之间即可。用 CSS 的 [mask-image](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image) 就可以实现。

关键是如何预处理出遮罩图片呢？我们可以在后台利用人脸识别技术对视频中的每一帧进行人脸识别， 并将人脸处理成一张遮罩图片。这样我们得到了每一帧的遮罩图片， 前端根据视频进度不断更新对应这道图片即可。

### 2023-01-19[仓库]

这是一个给 JS 选手的 Go 语言学习手册。

通过一个个常见的 case 的 JS 写法和 Go 写法对照，帮你快速掌握 Go。 之前我也分享过一些各种语言主流写法对比，感兴趣的可以翻翻历史记录。

![](https://p.ipic.vip/9unsf7.png)

这个仓库的对比写法或许有用， 不过大家千万不能仅仅阅读一下就完事了，这不是 API 手册。

我的方法是每天通过刷力扣的时候使用 Go 来刷来强化， 话说我的 Python 就是这么学习的 😄。

![](https://p.ipic.vip/de8c5c.png)

via: https://github.com/miguelmota/golang-for-nodejs-developers

### 2023-01-18[扩展]

meduim 是一个很流行的国外网站， 里面各种内容都有， 我之前会时常在里面看一些技术文章。

这个网站很反人性的一点是，他会给你每一月的阅读额度，超过后需要付费才能继续看。这本身可以理解， 但是竟然只要你使用无痕模式就没有这种限制，这让付费的我很难接受。

这个扩展工具可以在你没有额度的时候通过点击一下立马解锁阅读权限，原理和上面类似，就是退出登录并将一些标记你身份的信息消除。

![](https://p.ipic.vip/18p8e2.png)

via: https://chrome.google.com/webstore/detail/unlimited-medium/medpfcealkejgpagldhgadbfaejjacaa/

### 2023-01-17[类库]

astro 是一个不错的框架，不过给我印象最深的是它的 tutorial，做的太好了，值得我学习。

我已经完成了它的全部教程 🎉

![](https://p.ipic.vip/cixlhd.png)

他有很多特性非常有意思，比如：

- CSS，JS 和 HTML 写到一个文件里。 上面可以写 JS 然后用分隔符分割。

![](https://p.ipic.vip/gxbr09.png)

- 默认 0 JS。

![](https://p.ipic.vip/gsdbm5.png)

- 开箱即用的 RSS， 对博客用户非常优化啊，不用找第三方插件，而且定制性很强，你甚至可以过滤一些不想被 RSS 的文章。

![](https://p.ipic.vip/xyisvn.png)

等等。更多特性，请参考官方网站。

via: https://docs.astro.build/en/tutorial/0-introduction/

### 2023-01-13[仓库]

根据文件的引用关系计算文件的重要程度，被引用的越多越重要，这个思路和代码其实都蛮简单的。大家没必要真的项目中使用，主要就是学习思路。

via: https://github.com/codemix/deprank

### 2023-01-12[教程]

这个视频教程教你如何使用 JavaScript 在几分钟内实现一个迷你区块链，二倍速观看效果更佳。看完后你会对区块链背后的技术有一个简单认知， 别小看这个简单认知， 这就是区块链的核心。一些其他都是围绕这个核心展开。

> 这是第一部分，视频的介绍部分有第二部分的链接。为了防止修改， 我贴一下 https://youtu.be/HneatE69814

via: https://www.youtube.com/watch?v=zVqczFZr124

### 2023-01-11[教程]

《The Newbies Guide to Crypto》一个面向新手（无需编程语言基础）的加密货币，区块链教程。 更加侧重的是实用角度，你如何想开发，可以关注一下智能合约， Dapp 等， Github 也有很多优秀的资料。

via: https://helpthisbook.com/sunny/the-newbies-guide-to-crypto/42abff74-1052-4181-a097-ca0309c4cc15

### 2023-01-04[工具]

中国的称谓真的很复杂， 很多时候面对一些常见不见的亲戚我都反应不过来叫啥。

这个工具可以直接根据关系计算称谓。

![](https://p.ipic.vip/aruc0c.png)

via: https://github.com/mumuy/relationship

### 2023-01-03[工具]

大家上网的时候一定见过 placeholder， 在图片没有加载出来之前用来占位。很多网站的 placeholder 都是一个样子。 而有的做的更精进一点的是先加载一个分辨率很低的 placeholder。

而这个工具可以根据原图计算一个哈希，然后根据这个哈希可以直接在本地渲染一个 placeholder， 这个 placeholder 在上一个解决方案的基础上还不用占用网络带宽。

via: https://github.com/woltapp/blurhash

### 2023-01-02[网站]

又一个好用的在线画图工具来了，测试了一下， UI 非常好看，share 功能很好用，易用性有待提高。好在现在是 beta 阶段，后面应该会进行优化，期待后续的表现吧。

![](https://p.ipic.vip/iaowp9.png)

via: https://beta.tldraw.com/

### 2023-01-01[仓库]

iptv(Internet Protocol television) 可以让你看世界各地的电视直播，我自己试了一下，频道非常多，流畅度也不错。甚至可以看一些成人电视（当然建议你过滤掉这些成人内容，这个仓库也贴心地提供了一个过滤了成人内容的 m3u 地址）。

使用方式很简单：

- 选择你想看的直播列表
- 复制链接，粘贴到支持 m3u 的播放器（比如 IINA）。

![](https://p.ipic.vip/75t0y9.jpg)

via: https://github.com/iptv-org/iptv



## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://p.ipic.vip/bp35i7.jpg">

