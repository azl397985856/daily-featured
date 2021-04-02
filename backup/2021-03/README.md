# 每日一荐

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2021-04

### 2021-04-02[类库]

之前我关注 lit-html，现在我开始关注 linkeddom。两者都是没有编译时，在运行时解决字符串为 DOM 的类库。

一个简单的用法：

```js
const {
  // note, these are *not* globals
  window, document, customElements,
  HTMLElement,
  Event, CustomEvent
  // other exports ..
} = parseHTML(`
  <!doctype html>
  <html lang="en">
    <head>
      <title>Hello SSR</title>
    </head>
    <body>
      <form>
        <input name="user">
        <button>
          Submit
        </button>
      </form>
    </body>
  </html>
```

linkdom 功能更加丰富，而且对标准的支持更加好一点。不过两者也不是替代关系，这两个大家都可以关注一下。

### 2021-04-01[Github Action]

Issues Translator 是一个可以自动将 Github 的中文 issue 翻译为英文的 Github Action。如果你的项目是面向全世界开发者的，那么就可以考虑使用 ta 。

地址：https://github.com/marketplace/actions/issues-translator

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7he9xdtmyj30by0byaac.jpg">
