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

## 新鲜出炉 (2024-02)

### 2024-02-29[字体]

《京華老宋体》是一个特别好看的字体，有浓厚的中国风，适合用来做一些中国风的设计。

不过实际使用上来看，锐化的效果不是特别好，不知道是不是 mac 设备的原因。

via: https://zhuanlan.zhihu.com/p/637491623

### 2024-02-28[网站]

输入 ts 类型，帮你生成 ts 类型的图表，可以帮助你更好地理解 ts 类型。

![](https://p.ipic.vip/e3jg1u.png)

via: https://tsdiagram.com/

### 2024-02-27[工具]

kiss-translator 是一个双语对照翻译工具，有对应的浏览器和油猴脚本。

对于有一定英语背景但不是特别好的人来说，**双语对照**可以帮助你更好地理解英文文章，提高你的英文阅读能力。

via: https://github.com/fishjar/kiss-translator

### 2024-02-26[教程]

一个超级实用和简短的 svg 教程，画面非常精美。

![](https://p.ipic.vip/y37zjg.png)

一共 25 个“关卡"。

里面讲了 svg 中如何用 g 来 group 元素，如何处理事件，如何使用动画，如何使用滤镜高阶等等。

via: https://svg-tutorial.com/

### 2024-02-25[工具]

我们见过不少 markdown 转化成 pdf，epub 的工具。但是反向地将 pdf，epub 转化成 markdown 的工具就比较少了。

这个工具借助了人工智能，可以帮你将 pdf，epub 转化成 markdown。

via: https://github.com/VikParuchuri/marker

### 2024-02-23[网站]

一个可以帮你保持屏幕常亮的网站，可以帮助你在一些需要屏幕常亮的场景下使用。

其基本原理是使用了 noSleep.js 这个库，这个库可以阻止屏幕自动关闭。

[noSleep.js](https://github.com/richtr/NoSleep.js/blob/master/src/index.js) 的原理是播放一个无限循环的假视频，让浏览器错误地认为你在看视频，从而阻止屏幕常亮。不过由于 浏览器的 [navigator.wakeLock](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/wakeLock) API 的出现，这个库会优先使用这个 api 来阻止屏幕常亮。

via: https://www.keepscreenon.com/

### 2024-02-22[好文]

学习一个东西就是要从大的方向高屋建瓴地去理解。

这篇文章就将 web 应用从是否动态和是否在线两个维度进行了分类，然后讲解了每一种类型的特点。

两个维度，一共分了 2 * 2 = 4 种类型。

![](https://p.ipic.vip/ptfto1.png)

并且拿具体的知名的网站作为例子，讲解了每一种类型的特点，以及什么情况下使用什么样的技术栈构建什么样的类型 web 应用。

via: https://jakelazaroff.com/words/the-website-vs-web-app-dichotomy-doesnt-exist/

### 2024-02-21[好文]

chrome 出了很多的 web vitals 监控指标，比如 First Contentful Paint，Cumulative Layout Shift，但是这些指标是如何收集的呢？

说实话很难收集。而 chrome 修改了 performance API，可以帮助我们直接收集这些指标。

比如如下代码就可以手机 Cumulative Layout Shift。

```js
const observer = new PerformanceObserver((list) => {
  let cumulativeLayoutShift = 0;
  list.getEntries().forEach((entry) => {
    // Don't count if the layout shift is a result of user interaction.
    if (!entry.hadRecentInput) {
      cumulativeLayoutShift += entry.value;
    }
    console.log({ entry, cumulativeLayoutShift });
  });
});

// Call the Observer.
observer.observe({ type: "layout-shift", buffered: true });

```

via: https://www.smashingmagazine.com/2024/02/reporting-core-web-vitals-performance-api/

### 2024-02-19[工具]

《Remix 入门实战》讲的内容比较浅显，但是却可以让你快速上手 Remix，了解它的基本使用方法。Remix 是一个新的 React 框架，它的目标是让开发者更容易地构建出高质量的 Web 应用。它的特点是开箱即用，自带了很多功能，比如路由、状态管理等。这篇文章是一个入门实战，通过一个简单的例子，让你快速上手 Remix。

如果有一些基础的话，阅读时间大概半个小时到一个小时。

via: https://remix.lutaonan.com/

### 2024-02-18[好文]

相信大家都看到过视频下方有一些 ai 工具对视频内容进行总结的情形。这篇文章就告诉你如何对视频内容进行总结，生成一些文字内容。

主要用到了  OpenAI API 和 the LangChain。

via: https://blog.logrocket.com/extracting-youtube-video-data-openai-langchain/

### 2024-02-17[好文]

目前很多监控摄像头都是 wifi 传输的，本身没有内置 sd 卡，导致你可以简单地使用 wifi 干扰器来将其干掉。

因此我的做法就是使用 sd 卡 + wifi，并且电池+电源双保险。不管你是切断电源还是干扰 wifi，都无法干掉我的摄像头。当然也有很多别的方式罢了，只是这帮我们多加了一层防护。

via: https://www.tomshardware.com/networking/wi-fi-jamming-to-knock-out-cameras-suspected-in-nine-minnesota-burglaries-smart-security-systems-vulnerable-as-tech-becomes-cheaper-and-easier-to-acquire

### 2024-02-03[工具]

rspack 出的辅助工具，可以帮你分析项目信息，打包信息，帮助你更好地了解项目的构建情况，做出优化决策。

lucifer PS：如果你也在做工具，不妨参考这个工具来做一个自己的辅助工具，帮助开发者更好地使用你的工具，同时也方便你收集用户的使用情况，定位问题等等。

via: https://rsdoctor.dev/zh/guide/start/intro

### 2024-02-02[工具]

openai 出的文字生成视频的工具，可以生成文字对应的视频，可以用来做一些文字生成的视频，比如一些短视频，或者一些文字解说的视频。

大家可以根据 demo 体验一下，效果非常的惊艳！

via: https://openai.com/sora

### 2024-02-01[工具]

亚马逊出品的 JavaScript 运行时，是 V8，quickjs 的竞品，据说速度更快，有需要的可以看看。

via: https://github.com/awslabs/llrt

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
