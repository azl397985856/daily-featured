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

## 新鲜出炉 (2023-07)


### 2023-07-14[技巧]

借助于 HTTP 提供的 range，我们可以实现断点续传， 分段传输的功能。

也可以基于 range 实现视频快速跳转（点击指定时间就会加载那一部分的视频， 你看视频的时候的灰色区域就是通过类似的方式加载的），其实这本质也是分段传输。

实现将视频分为很多段，用户点击后判断下其属于哪一段，然后利用诸如 range 来实现分段传输即可。

via: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range

### 2023-07-13[好文]

如何破解滑动验证码？

基本思想不是图像识别。而是利用滑块验证码中的滑块与周围图片的色差进行判断。即滑块会与周围图片有很大的色差，很违和。正因为如此， 人们才能识别出来应该滑动到哪里。

代码上，你可以将滑块放到 canvas 上，然后利用 canvas api 获取图片的像素信息，进而判断滑块的位置， 最后将滑块的位置和 token 传给后端。至于 token 怎么来，不同的网站方法会不同， 这篇文章就介绍了一种方式，以及破解思路。

via: https://mp.weixin.qq.com/s/iK_JkVRrh5vIRBjnQbDOyw

### 2023-07-11[库]

我之前一直想用代码写动画。

但是太麻烦了，如果有一套声明式的代码就可以写动画，那就太好了。

我之前的想法是设计一套声明式语言，然后转为 excalidraw 组件，最后根据一系列的 excalidraw 组件调用库就可以完成。

> 有一个现成的库可以基于 excalidraw 生成 svg 动画， 我一直在用，效果不错。

但是使用我们今天介绍的网站(remotion)也是一个很不错的思路。

via: https://www.remotion.dev/
### 2023-07-10[网站]

mikan 是一个追番平台， 你可以直接在上面下载最新的番剧。我试了一下， 下载速度挺快的， 一分钟左右就可以下载一集 MP4 到本地，清晰度也不错。

![](https://p.ipic.vip/3dlv5z.png)

我下载了一个 430 M，长度为 23m40s 的视频效果。

![](https://p.ipic.vip/a73vy1.png)

你也可以使用一些工具， 在线搭载一个在线视频播放网站， 从而打造一个自己专属的视频网站。

如果你愿意，也可以公开给别人。 不过这个 CDN 的费用恐怕会很高罢了。

另外，如果结合使用这个自动追番工具（https://github.com/EstrellaXD/Auto_Bangumi/wiki）， 则会**自动**生成你的专属番剧库。

via: https://mikanani.me/

### 2023-07-09[库]

据说是取代 gitalk 的工具。 gitalk 是基于 issue 做了，而此工具是基于 discuss。你可以直接使用网站（https://giscus.app/） 来快速生成接入代码。最后将代码复制集成到你的项目就好了。但是目前我这边一些配置并不能无缝从 gitalk 迁移到 giscus，因此我并没有取迁移，期待后面的完善。

via: https://github.com/giscus/giscus

### 2023-07-06[技巧]

给任意在线网站调速度。

只要网站的视频是使用 video 标签播放的(不是 flash) 都可以用这个方法。

打开开发工具，选中我们要控制的 <video> 元素，然后输入以下内容：`$0.playbackRate = 10` ，并按 Enter 执行。你会发现，视频的播放速度已经发生变化了。

$0 表示我们最近选中的元素，playbackRate 是 video 的一个熟悉，表示视频的播放速度，10 表示的是 10倍速。

### 2023-07-02[工具]

一个免费的多语言语音转字幕工具，你可以上传一个视频过去，它会自动帮你提取其中的语音并生成字幕。

最主要的用处是帮你生成字幕，你也可以用它来快速知道视频里讲的内容， 结合 chatgpt 的总结功能， 会更好用。

via:  https://godlucky.net/whisperapp/

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
