# 每日一荐

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

在线阅读：https://leetcode-solution-leetcode-pp.gitbook.io/mz-ri-yi-jm/

电子书文件太大， 大家可到我的公众号《脑洞前端》回复“每日一荐”获取。

## :newspaper: &nbsp; RSS

大家可以用 Github 提供的 [RSS](https://github.com/azl397985856/daily-featured/commits.atom) 来订阅我的仓库更新。
​

## 新鲜出炉 (2021-10)

### 2021-10-28[技巧]

chrome 95 出了一个新的 api `EyeDropper` 蛮有意思的。 据说这个功能是微软大佬贡献的。

使用后会出来一个采集颜色的光标，当你确定后会在用户选择的颜色的 rgb 值返回你。

代码：

```js
const eyeDropper = new EyeDropper();
const result = await eyeDropper.open();
// result = {sRGBHex: '#160731'}
```

大家可以直接在 chrome 95 以上的浏览器上在 devtool 的 console 中输入上面的代码查看效果。

更多 chrome 95 新特性：https://developer.chrome.com/blog/new-in-chrome-95/

### 2021-10-27[好文]

chrome 扩展想必大家都用过么？ 那你有想过开发一款 chrome 扩展么？

西法就开发了一款 chrome 扩展：《leetcode-cheatsheet》https://leetcode-solution.cn/download

chrome 扩展开发最最头疼的就是各种通信，比如 content-script 和 backgound 通信， background 如何和 popup 通信等等。这篇文章对这些常见的扩展开发问题进行了讲述，并有大量的代码和图片，使得内容通俗易懂。

比如如果在 devtool 新建一个 panel？怎么在 devtool 的 elements 面板新建一个侧边栏。

代码演示:

```js
// 创建自定义面板，同一个插件可以创建多个自定义面板
// 几个参数依次为：panel标题、图标（其实设置了也没地方显示）、要加载的页面、加载成功后的回调
chrome.devtools.panels.create('MyPanel', 'img/icon.png', 'mypanel.html', function(panel)
{
  console.log('自定义面板创建成功！'); // 注意这个log一般看不到
});

// 创建自定义侧边栏
chrome.devtools.panels.elements.createSidebarPane("Images", function(sidebar)
{
  // sidebar.setPage('../sidebar.html'); // 指定加载某个页面
  sidebar.setExpression('document.querySelectorAll("img")', 'All Images'); // 通过表达式来指定
  //sidebar.setObject({aaa: 111, bbb: 'Hello World!'}); // 直接设置显示某个对象
});
```

图片演示：

![](https://tva1.sinaimg.cn/large/008i3skNly1gvvdqdygloj30al063jrd.jpg)

![](https://tva1.sinaimg.cn/large/008i3skNly1gvvdqjzykhj306s03ldfv.jpg)


文章很长，有几万字，大家可以根据自己的需要挑重点看。

地址：https://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html

### 2021-10-26[好文]

OAuth 是什么？你如果还不知道就太 out 了。我的《91天学算法》官方网站就用了 OAuth 来链接 Github 登录，地址：https://leetcode-solution.cn/91

本文以 Github 为例，讲解如果从零接入 OAuth2，适合新手。

地址：https://www.honeybadger.io/blog/oauth-nodejs-javascript/

### 2021-10-25[工具]

一个语法检查的工具，注意这里的语法是自然语言的语法，不是编程语言的语法，这同时也是该工具独特的地方。

地址：https://caderek.github.io/gramma/

### 2021-10-19[工具]

上家公司一直想做一个前端工具链，其中一环就是在编辑器（我们是 vscode）中集成工作流。比如在编辑器中新建工程，提交代码，发布代码， code review ， 代码检查等等。

只不过这个还是需要很多时间投入的，截止到我离职也没有做的很完善。而这个开源产品做的已经相当完善了。如果你的公司有类似的需求，不妨直接尝试使用，或者 fork 一份修改，能够省去不少时间。

这个工具是直接集成到 vscode 中的，无需切换到其他窗口，对于程序来说方便许多。

![](https://tva1.sinaimg.cn/large/008i3skNly1gvky0grh7jj61d30u0wkx02.jpg)

地址：https://github.com/apptools-lab/AppWorks

### 2021-10-18[好文]

最近在开发小程序的调试工具，类似微信的调试工具。参考了几篇文章，如果你也在做类似的事情，不妨参考下这几篇文章。

- [深入理解 Chrome DevTools](https://zhaomenghuan.js.org/blog/chrome-devtools.html#chrome-devtools-protocol)
- [devtools](http://quickapp.vivo.com.cn/tag/devtools/)

不过说实话这几篇文章的思路很值得借鉴，但是缺乏细节，并且部分细节由于版本原因已经缺乏参考性了（新版本 devtool api 发生了些变化），大家在阅读的时候注意一下。

### 2021-10-15[资讯]

Github 中的 markdown 语法支持脚注（Footnotes）了。

你可以使用如下语法

```
Here is a simple footnote[^1].

[^1]: My reference.
```

这样就可以渲染出如下带有脚注的内容：

![](https://tva1.sinaimg.cn/large/008i3skNly1gvh9d925moj615u08kt8x02.jpg)

类似地，之前其他平台有类似如下的渲染脚注的语法，它通过扩展 markdown 链接语法的形式实现了脚注。

```
Here is a simple [footnote](http://xxx.com "My reference")
```

不过限制也很明显，那就是必须是链接才能生成脚注，Github 的这种脚注语法就很好地解决了这个问题。

更多关于 Github markdown 的语法可以参考这篇文章：https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

### 2021-10-13[工具]

Graphql 是 facebook 开源的一门查询语言（query language）。

如今在国内的普及程度还远远不够，主要原因就是上手难度高以及国内社区和大公司输出不够（很多大公司其实都在用）。它不仅仅是前端的一个 client，还需要后端 server 的配合。

而如果运用得到，甚至可以用来“替代” service worker，redux 等工具。另一方面和 ts 配合，可以大大完善后端接口类型，这个我在 9 月份的每日一荐推荐过相关的工具。今天推荐的是 Graphql 在社区非常有名的一个框架，它的估值也在随着它的流行越来越高。

地址：https://www.apollographql.com/docs

### 2021-10-12[工具]

ES Module Lexer 是一个针对 ESM 的词法分析器，使用它可以对 ESM 文本进行分析，vite 中就使用了它分析文件依赖。由于使用了 wasm（默认情况下）， 它的速度很快。

地址：https://github.com/guybedford/es-module-lexer

### 2021-10-11[好文]

vue 中可以用 v-html 直接动态注入 html，类似地，React 则可以通过 dangerouslySetInnerHTML 设置 html。

但是如果不加以处理，很可能会遭遇 xss 攻击。 一种简单的方法就是 html entity 转义。社区也有类似的解决方案，比如 DomPurify。而这次官方标准出来了，它就是 Sanitizer API。这篇文章就详细讲述了 sanitizer 是什么，有什么用，兼容性如何，demo 程序，如何开启等等一系列问题。

地址：https://web.dev/sanitizer/

### 2021-10-10[组件库]

Webview UI Toolkit for Visual Studio Code 是一个针对 vscode 开发的组件库，由微软官方开发。

相比于其他组件库，它有如下特点：

1. 针对 vscode 定制，不仅 UI 更加一致，并且还能根据 vscode 主题变换样式
2. 使用 web components，因此理论上可以应用于任何前端框架
3. 注重可访问性。这点是国内的很多组件库都不注重的，但是这点却很重要，不仅仅是针对障碍人士，对待一些正常人这也是必要的。比如我习惯使用 ESC 来关闭弹窗，但是很多网站却关不掉，这让我想起了垃圾广告横行的年代。
4. 官方出品，必数精品。

地址：https://microsoft.github.io/vscode-webview-ui-toolkit/

### 2021-10-09[网站]

很多人会问这样的问题：**xx 语言的 yy 特性在 zz 语言中怎么写啊？** 比如 Python 语言的 reverse 在 C++ 中怎么实现？

我其实刚刚在用新语言的时候脑子也潜意识的有这种疑问，今天介绍的网站就整理了**很多常见操作的不同语言对比实现**

仍然以 C++ 的 reverse 为例:

![](https://tva1.sinaimg.cn/large/008i3skNly1gv9ez855smj31lo0din01.jpg)

你可以点击上面的编程语言查看其他语言的 reverse 是如何实现的，目前该网站已经提供了 277 个语言特性，这个工具网站对那些刚开始学习新语言的人非常有用。

我们甚至可以直接开启对比模式，以 Python 和 C++ 对比为例：

![](https://tva1.sinaimg.cn/large/008i3skNly1gv9f2k5i2uj60y50u0wiy02.jpg)

地址：https://programming-idioms.org/idiom/19/reverse-a-list

## 历史汇总

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

## 贡献

- 如果有想法和创意，请提 [issue](https://github.com/azl397985856/daily-featured/issues) 或者进群提
- 如果想贡献代码，请提 [PR](https://github.com/azl397985856/daily-featured/pulls)
- 如果需要修改项目中图片，[这里](./assets/) 存放了项目中绘制图的源代码， 大家可以用 [draw.io](https://www.draw.io/) 打开进行编辑。

## License

[Apache-2.0](./LICENSE)
