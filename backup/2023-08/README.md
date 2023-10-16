
# 每日一荐

![](https://p.ipic.vip/0bhil1.jpg)![](https://p.ipic.vip/0bhil1.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2023-08

### 2023-08-31[好文]

ECMAScript 终于要推出 using 了。之前上大学的时候学习的事 C#，ECMAScript 的 using 和 C# 的恰好是一样的。TypeScript 5.2 也对 using 进行了抢先支持 👍。

如果你仅仅是做前端的，可能影响不大。毕竟客户端代码跑在客户电脑上，而且硬件配置一直在提高。因此问题不大。 但是如果你是做服务端的，你如用 node 来做后端服务，那么就必须考虑资源回收的问题。那么使用 using 则可以大大减少你的代码量，进而减少一些潜在的 bug 出现。

via: https://mp.weixin.qq.com/s?__biz=MzU2MTIyNDUwMA==&mid=2247522542

### 2023-08-27[类库]

一个移除背景的 JS 库，你可以通过它搭建一个在线的去除背景的网站。

via: https://github.com/imgly/background-removal-js

### 2023-08-26[好文]

很有意思的一个想法。 通过 API 发送 UI，这样可以更容易做到千人千面的个性化 UI 页面。 然后发布也更容易。

不过似乎也加大了平台的审核难度。因为代码是通过 API 来发送的，而 API 可能不是部署到平台的，这样平台就很难审核。所以后期这个技术发展起来了，平台有可能会进行抵制。

via: https://www.builder.io/blog/ui-over-apis

### 2023-08-25[类库]

Make React Faster. Automatically.

一个基于编译时的类库， 通过它可以将 react 应用重新编译（主要是加速 VDOM 算法），并获得性能提升。

比如你使用 CRA（create react app）创建 react 项目，那么就可以通过简单地如下配置接入 million。

```js
const million = require('million/compiler');
module.exports = {
  webpack: {
    plugins: { add: [million.webpack({ auto: true })] }
  }
};
```
via: https://million.dev/
### 2023-08-24[新闻]

idx 是谷歌的线上开发环境，支持 AI 辅助编程。目前还没发布， 不过可以申请内测资格， 一变第一时间进行体验。（我已经申请啦~）

via: https://addyosmani.com/blog/project-idx/

### 2023-08-23[好文]

一个 css 属性，轻松制作缩略图？

用法很简单，只需要给想显示缩略图的元素一个属性即可。代码：

```css
mini-map .screen-image .canvas {
  background: white -moz-element(#main) no-repeat scroll center center / contain;
}
```

其中  -moz-element(#main) 是关键。 main 是想要显示缩略图的主体 DOM 的 id。

效果如下图（注意右面的缩略图）：

![](https://p.ipic.vip/7ekyiq.jpg)

你也可以监听点击时间，从而做一个可交互的缩略图。用户点击到哪里，页面就跳转到对应位置。类似 VSC 的缩略图。

via: https://www.stefanjudis.com/a-firefox-only-minimap/

### 2023-08-16[好文]

文章名：<The virtual keyboard API>

一个目前只有 chrome for android 才有的 api。通过它，可以给 input 指定弹起的键盘的位置。有了它，web 越来越逼近小程序了。如果继续发展， 或许小程序会消失也不一定？

![](https://p.ipic.vip/zockv1.jpg)

via: https://ishadeed.com/article/virtual-keyboard-api/

### 2023-08-15[类库]

一个 chatgpt 网页风格的 UI 库。 如果你想要搭建一个基于类似 chatgpt 的网站，那么这个还算有点用，会让你快速搭建一个大家普遍熟悉的 ai 聊天网站。

via: https://www.langui.dev/components/prompt-containers

### 2023-08-04[库]

neutralinojs 是一个类似于 electron 以及 NWJS 的桌面应用程序框架。主打的就是体积小，内存占用少，构建速度快。

via:  https://github.com/neutralinojs/neutralinojs

### 2023-08-02[库]

Mapkick 是一个地图库（sdk）， 支持 Mapbox and MapLibre，通过它除了可以实现诸如地图标点，地图画区域等功能。也可以实现诸如位置共享，轨迹回放等进阶功能。

via:  https://chartkick.com/mapkick-js



## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://p.ipic.vip/bp35i7.jpg">

