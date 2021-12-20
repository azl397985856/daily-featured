# 每日一荐

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

在线阅读：https://leetcode-solution-leetcode-pp.gitbook.io/mz-ri-yi-jm/

电子书文件太大， 大家可到我的公众号《脑洞前端》回复“每日一荐”获取。

## :newspaper: &nbsp; RSS

大家可以用 Github 提供的 [RSS](https://github.com/azl397985856/daily-featured/commits.atom) 来订阅我的仓库更新。
​

## 新鲜出炉 (2021-12)

### 2021-12-20[技巧]

相信大家都有过 copy 对象的经验，包括浅拷贝和深拷贝。

深拷贝一般都是使用 JSON.stringify, MessageChannel 或者 一些第三方库，比如 lodash。 而浏览器 HTML 规范增加了一个新的 api structuredClone，可以在浏览器层面上深拷贝对象，和内置的 JSON.stringify 不同的是，它支持的数据格式更多。

值得注意的是，structuredClone 目前浏览器的兼容性比较差，chrome 最新版也是不支持的，主流的差不多就 firefox 支持。

地址：https://developer.mozilla.org/en-US/docs/Web/API/structuredClone

## 2021-12-17[网站]

Github 年度统计，以下是我的 Github 年度统计，大家可以用下面的网站自己生成自己的 Github 年度统计。

> 统计数据不包括私有仓库，但包括你的所有个人账户和组织（比如下图的 leetcode-pp 就是组织）下的数据

![](https://tva1.sinaimg.cn/large/008i3skNly1gxkhrchc0gj31ez0u0tdc.jpg)

地址： https://wrapped.run/

### 2021-12-14[好文]

jest 是一个非常流行的前端框架。jest 是如何 mock 模块的呢？ 官方文档给了详细的文档，比如 jest.mock('axios') 就可以 mock axios，然后:

```ts
const resp = { data: users };
axios.get.mockResolvedValue(resp);
```

就可以 mocj axios 的 get 方法。

具体参考：https://jestjs.io/docs/mock-functions

那么对于全局变量，比如 WebSocket，fetch 等，如果进行 mock 呢？

这篇文章从基础 mock 到 jest.spyOn 一步步教你如果 mock 全局变量。

文章地址：https://benjaminjohnson.me/mocking-fetch

### 2021-12-10[工具]

firefox relay 是 firefox 官方出品的邮箱转发工具。

它可以帮助你解决很多问题。比如有一个网站每个邮箱可以免费试用一个月，那么到期后你可以选择换一个邮箱。但是毕竟注册不同邮箱毕竟麻烦，甚至有些网站对注册进行了各种各样的限制。这个时候 firefox relay 就派上用场了。

另外你不想泄漏你的邮箱信息，打算糊弄一下注册过去先试试也可以使用 firefox relay。

地址：https://relay.firefox.com/

### 2021-12-09[工具]

该工具可以直接将 html 转化为 markdown(简称 md)，如果你想要 md 源码可以尝试使用它。

对于我来说，就可以将 html 转化为 md，然后再通过工具讲 md 转化为符合我风格的 html。关于如何将 md 转化为格式良好的 html， 可以使用我的工具 [Markdiwn Reader](https://leetcode-solution.cn/github)

原理是根据语义化标签来做的，比如 h1 标签就转义为 markdown 的 `#`。

地址：https://devtool.tech/html-md

### 2021-12-03[技巧]

浏览器加载资源是有优先级的，他们分别是 high，medium 和 low。浏览器默认会给资源一个优先级，优先级高的会优先加载，相同优先级的按照出现顺序依次加载。

chrome 中 你可以给资源手动地指定优先级。如果浏览器目前还不支持，可以在 Experimental Web Platform Features 中 打开。

```
<!-- We don't want a high priority for this above-the-fold image -->
<img src="/images/in_viewport_but_not_important.svg" importance="low" alt="I'm an unimportant image!">

<!-- We want to initiate an early fetch for a resource, but also deprioritize it -->
<link rel="preload" href="/js/script.js" as="script" importance="low">

<script>
  fetch('https://example.com/', {importance: 'low'}).then(data => {
    // Trigger a low priority fetch
  });
</script>

<!-- The third-party contents of this iframe can load with a low priority -->
<iframe src="https://example.com" width="600" height="400" importance="low"></iframe>
```

如上，我们可以指定图片，js，uframe，甚至是 fetch 请求的优先级。这有时候在提高 LCP 等性能数据的时候很有用。

### 2021-12-02[工具]

相信大家都或多或少有被无良商家贩卖信息的经历。这些数据大多就是访问网站的时候被窃取的。我们可以不暴露这些隐私吗？

答案是很难。不过我们可以通过一些手段，比如限制浏览器的某些获取信息的 api 而减少一些信息泄漏， JavaScript Restrictor 就是这样的工具。

友情提示：很多网站如果使用了这个工具可能就直接无法访问了。大家可以设置白名单或者给不同网站设置不同限制级别来完成。

我使用的是 chrome，因此点击这里就可以下载插件了。如果你是其他浏览器，那么就点击对应链接即可。

![](https://tva1.sinaimg.cn/large/008i3skNly1gx1sw2j5ttj31010u0qdp.jpg)

地址：https://polcak.github.io/jsrestrictor/

### 2021-12-01[好文]

如何制作一个 CPU？

这个标题是不是很吸引人？当我点进去的时候，我迅速翻了一下文章。第一张图片和最后一张图片的对比逗笑了我。

第一步，取一块石头：

![](https://tva1.sinaimg.cn/large/008i3skNly1gx1szxnz6dj31lm0mewi4.jpg)

最后一步（第 19 步），CPU 做好了。

![](https://tva1.sinaimg.cn/large/008i3skNly1gx1t0kpqo3j31980u0gpw.jpg)

地址：https://blog.robertelder.org/how-to-make-a-cpu/

## 历史汇总

- [2021-11](https://github.com/azl397985856/daily-featured/tree/master/backup/2021-11/README.md)
- [2021-10](https://github.com/azl397985856/daily-featured/tree/master/backup/2021-10/README.md)
- [2021-09](https://github.com/azl397985856/daily-featured/tree/master/backup/2021-09/README.md)
- [2021-08](https://github.com/azl397985856/daily-featured/tree/master/backup/2021-08/README.md)
- [2021-06](https://github.com/azl397985856/daily-featured/tree/master/backup/2021-06/README.md)
- [2021-05](https://github.com/azl397985856/daily-featured/tree/master/backup/2021-05/README.md)
- [2021-04](https://github.com/azl397985856/daily-featured/tree/master/backup/2021-04/README.md)
- [2021-03](https://github.com/azl397985856/daily-featured/tree/master/backup/2021-03/README.md)
- [2021-02](https://github.com/azl397985856/daily-featured/tree/master/backup/2021-02/README.md)
- [2021-01](https://github.com/azl397985856/daily-featured/tree/master/backup/2021-01/README.md)
- [2020-12](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-12/README.md)
- [2020-11](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-11/README.md)
- [2020-10](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-10/README.md)
- [2020-09](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-09/README.md)
- [2020-08](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-08/README.md)
- [2020-05](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-05/README.md)
- [2020-04](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-04/README.md)
- [2020-03](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-03/README.md)
- [2020-02](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-02/README.md)
- [2021-01](https://github.com/azl397985856/daily-featured/tree/master/backup/2021-01/README.md)
- [2019-12](https://github.com/azl397985856/daily-featured/tree/master/backup/2019-12/README.md)
- [2019-11](https://github.com/azl397985856/daily-featured/tree/master/backup/2019-11/README.md)
- [2019-10](https://github.com/azl397985856/daily-featured/tree/master/backup/2019-10/README.md)
- [2019-09](https://github.com/azl397985856/daily-featured/tree/master/backup/2019-09/README.md)

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7he9xdtmyj30by0byaac.jpg">

大家也可以加我微信好友进行交流！

![](https://tva1.sinaimg.cn/large/008i3skNly1gx11szd02ej30e80e8dg3.jpg)

## 贡献

- 如果有想法和创意，请提 [issue](https://github.com/azl397985856/daily-featured/issues) 或者进群提
- 如果想贡献代码，请提 [PR](https://github.com/azl397985856/daily-featured/pulls)
- 如果需要修改项目中图片，[这里](./assets/) 存放了项目中绘制图的源代码， 大家可以用 [draw.io](https://www.draw.io/) 打开进行编辑。

## License

[Apache-2.0](./LICENSE)
