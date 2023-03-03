
# 每日一荐

![](https://p.ipic.vip/0bhil1.jpg)![](https://p.ipic.vip/0bhil1.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2023-02

### 2023-02-28[新闻]

chrome 的 headless 模式（无头浏览器）可以做一些集成测试。而之前由于 headless 模式和非 headless 模式两者是使用不用的技术实现，因此会有一些 bug（比如在无头浏览器好好的，在有头浏览器就有 bug，反之亦然）。

新的 chrome (版本大于等于 Chrome 112) 无头浏览器和有头浏览器采用的技术（codebase）是一样的， 因此不会有上面提到的问题。

via: https://developer.chrome.com/articles/new-headless/

### 2023-02-27[好文]

《useSignal() is the Future of Web Frameworks》这篇文章解释了为什么 react 不能像 vue 那样智能追踪需要更新的组件。react 想做到这一点，就需要引入类似 useSignal() 这样的机制。而 preact 就对 useSignal() 进行了支持。

目前  Vue, Preact, Solid 和 Qwik 都支持。

via: https://www.builder.io/blog/usesignal-is-the-future-of-web-frameworks

### 2023-02-26[库]

> A 'CSS reset' for TypeScript, improving types for common JavaScript API's

ts-reset 是一个类似于垫片的库，可以”修复“一些 ts 上的诡异行为。

Without ts-reset:

- 🚨 .json (in fetch) and JSON.parse both return any
- 🤦 .filter(Boolean) doesn't behave how you expect
- 😡 array.includes often breaks on readonly arrays
ts-reset smooths over these hard edges, just like a CSS reset does in the browser.

With ts-reset:

- 👍 .json (in fetch) and JSON.parse both return unknown
- ✅ .filter(Boolean) behaves EXACTLY how you expect
- 🥹 array.includes is widened to be more ergonomic
- 🚀 And several more changes!

via: https://github.com/total-typescript/ts-reset

### 2023-02-25[工具]

The fastest JSON schema Validator. Supports JSON Schema（最快的 JSON schema 验证器，支持 JSON schema）。

via: https://github.com/ajv-validator/ajv

如果你有验证 JSON 的需求，可以一试。

下面是一个使用 ajv 的简单例子。

```js
// or ESM/TypeScript import
import Ajv from "ajv"
// Node.js require:
const Ajv = require("ajv")

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const schema = {
  type: "object",
  properties: {
    foo: {type: "integer"},
    bar: {type: "string"},
  },
  required: ["foo"],
  additionalProperties: false,
}

const data = {
  foo: 1,
  bar: "abc",
}

const validate = ajv.compile(schema)
const valid = validate(data)
if (!valid) console.log(validate.errors)
```

另外它的报错相对于用户来说不友好，可以结合使用 
better-ajv-errors 来获得更好的效果。

![](https://p.ipic.vip/s7ifcr.jpg)

via: https://github.com/atlassian/better-ajv-errors


### 2023-02-24[类库]

一个帮助你 debug 的库。可以：

- 通过环境变量显示指定的信息（信息过滤的作用
- 自动在尾部添加时间消耗
- 不同颜色高亮显示
- 等等

支持在 nodejs 和 浏览器中使用。

![](https://p.ipic.vip/eamq1p.jpg)

![](https://p.ipic.vip/9czksq.jpg)

via: https://www.npmjs.com/package/debug

### 2023-02-15[教程]

这个教程内容其实一般，不是我看过的同类型中质量最好的，但是其交互式的这种形式我特别喜欢，想要借鉴。

这真的是一个我一直想做的类型 - 交互式教程。我的想法是做一个交互式的算法教程，我之前没有接触过这种形式，但是在我的想象中如果做出来，那么肯定能帮助到很多人。

这个教程是使用 JS 编写 Lisp 的编译器。可以帮助你理解：

- 词法分析
- 语法分析
- AST 遍历
- 代码生成

另外可以帮助你理解语言规范，递归等内容。

via: https://citw.dev/tutorial/create-your-own-compiler
### 2023-02-14[新闻]

chrome 110 新增一个新的伪类选择器：:picture-in-picture 可以自定义画中画元素样式。

其实从 chrome 69 开始我们就可以通过 api 来让视频画中画播放。

```js
function togglePictureInPicture() {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else if (document.pictureInPictureEnabled) {
    video.requestPictureInPicture();
  }
}
```
不过现在我们甚至可以为其自定义样式。

via: https://developer.mozilla.org/en-US/docs/Web/CSS/:picture-in-picture

### 2023-02-10[技巧]

分享几个 git 配置技巧。

1. 先配 name 和 email。
```bash
git config --global user.name "Your Name"
git config --global user.email "you@your-domain.com"
```

2. 再执行这两条命令。
```bash
git config --global --add push.default current
git config --global --add push.autoSetupRemote true
```

你会收获两个好处。

- 1）不需要「git push origin xxx」，只要「git push」

- 2）再也不会遇到「no upstream branch」的报错，也不需要「git push --set-upstream origin test && git push」。

因为我们执行 git push 的大部分场景都是 push 到同名的 remote branch。来源是 Auto setup remote branch and never again see an error about the missing upstream

3. 再修改 ~/.gitignore_global，加入和你 IDE 相关的 ignore 配置。

我会把 .idea 加进去，这是和你相关的专有配置，如果给其他用 VSCode 的作者的项目提交时，都加上 .idea 的 .gitignore 配置，其实并不太礼貌。反之，VSCode 或其他编辑器工具的用户也要加上自己的。

```
*~
.DS_Store
.idea
```
### 2023-02-07[工具]

turbo 管理 mono 有一很吸引我的点就是它的 cache。它会利用尽可能多的信息（比如参数， 环境变量等），判断 output 在之前是否已经生成了，进行减少重复工作。它甚至支持服务端缓存， 整个开发团队共享一份 cache，那么构建速度肯定会显著提高。

via: https://turbo.build/repo/docs

### 2023-02-06[工具]

Tauri 是一个 electron 的竞品， 在 2022 年非常闪耀。

via: https://tauri.app/

### 2023-02-05[工具]

和 deno，node 以及 quickjs 类似， Bun 是一个 JavaScript 引擎，采用 zig 编写，性能很强。

![](https://p.ipic.vip/32xrod.jpg)

via: https://byteofdev.com/posts/what-is-bun/

### 2023-02-02[好文]

浏览器提供了一个内置的 API： structured-clone 用来深拷贝。

via: https://www.builder.io/blog/structured-clone

### 2023-02-01[好文]

chrome 浏览器提供了一些新的 api： document.onscrollend

```js
document.onscrollend = event => {…}
```

可以用来监听是否滚动已经停止。

via: https://developer.chrome.com/blog/scrollend-a-new-javascript-event/


## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://p.ipic.vip/bp35i7.jpg">

