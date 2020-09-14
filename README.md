# 每日一荐

![历史共访问次数](https://visitor-count-badge.herokuapp.com/total.svg?repo_id=azl397985856.daily-featured)
![今天被访问次数](https://visitor-count-badge.herokuapp.com/today.svg?repo_id=azl397985856.daily-featured)

> 统计数据的时间是从 2019-09-15 16:50 起至今

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 新鲜出炉 (2020-09)

### 2020-09-14[库]

vuedraggable 是一个支持拖拽的高阶组件，可用于实现拖拽排序的功能。start 数比较高， 且更新稳定，很多项目都在用。

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gimrdl34brj308a03f74c.jpg)

地址：https://github.com/SortableJS/Vue.Draggable

### 2020-09-13[技巧]

VSCode 有一个快捷键，非常好用，就是返回上一个光标 (上一个浏览位置)，你知道么？

- Windows: Alt + ←
- Linux: Ctrl + Alt + -
- Mac: Ctrl + -

VSCode 的 Keyboard Shortcuts” 中搜索 “前进 / Go Forward 或 后退 / Go Back”，可以对其定制。

### 2020-09-11[经验分享]

会正则真的可以为所欲为。

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gimhwl6jpkj30q70k076l.jpg)

（力扣真题 https://leetcode-cn.com/problems/check-if-word-is-valid-after-substitutions/）

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gimhwvvsguj30nj0ojjvz.jpg)

（牛客真题）https://github.com/azl397985856/leetcode/issues/424

### 2020-09-10[工具]

[ngrok](https://ngrok.com/) 是一个可以允许你暴露内网服务的简单快捷的方法， 有时候还是很有用的。而今天介绍的工具是一个在 VSCODE 中控制 ngrok 的扩展程序，使用起来异常简单。

地址： https://github.com/philnash/ngrok-for-vscode

### 2020-09-09[小技巧]

如何检测是否打开了 chrome 控制台？下面代码可以帮你:

```js
var devtools = function () {};
devtools.toString = function () {
  if (!this.opened) {
    alert("Opened");
  }
  this.opened = true;
};

console.log("%c", devtools);
```

你知道原理么？

### 2020-09-08[工具]

一个适合程序员的，充满极客风的，非常硬核的 PPT 制作工具。

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gimsl44w6og30s40i23zg.gif)

地址： https://github.com/vinayak-mehta/present

### 2020-09-07[好文]

在 Vue 中，我们可以使用 keep-alive 包裹一个动态组件，从而缓存不活跃的实例，而不是直接销毁他们：

```jsx
<keep-alive>
  <component :is="view"></component>
</keep-alive>
```

这对于某些路由切换等场景非常好用，例如，如果我们需要实现一个列表页和详情页，但在用户从详情页返回列表的时候，我们不希望重新请求接口获取，也不希望重置列表的过滤、排序等条件，那这时就可以对列表页的组件用 keep-alive 包裹一下，这样，当路由切换时，Vue 会将这个组件“失活”并缓存起来，而不是直接卸载

原文标题《在 React 中实现 keep alive》，脑洞很大，值得一看，文章也很短，地址：https://zhuanlan.zhihu.com/p/214166951

### 2020-09-01[工具]

np - A better npm publish。 如果大家在 npm 上发过包，一定知道什么是 npm publish，不管你是私有包还是公开包。可是这个命令的功能仅仅是发布一个包，该包的版本需要在 package.json 中声明。而这个工具可以帮助你 bump version，并发布到包管理平台。

仓库地址：https://github.com/sindresorhus/np

## 历史汇总

- [2020-08](./backup/2020-08/)
- [2020-05](./backup/2020-05/)
- [2020-04](./backup/2020-04/)
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
