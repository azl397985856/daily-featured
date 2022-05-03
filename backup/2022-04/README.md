
# 每日一荐

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2022-04

### 2022-04-28[工具]

import-local 是一个 NodeJS 端的工具，用于检测本地是否安装了某个包。如果你在开发一个 node 的 cli 应用，并且想要提高性能使用用户本地安装好的包，它就很适合你。

地址：https://github.com/sindresorhus/import-local

### 2022-04-28[好文]

rest api 中的 POST 和 PUT 有什么区别？一个用于新建资源，一个用于更新资源？不是的！

地址：https://stackoverflow.com/questions/630453/what-is-the-difference-between-post-and-put-in-http

### 2022-04-25[网站]

一个低代码平台，通过它可以拖拽生成自己的网站。

值得一提的是，一些框架已经开始集成它了。你可以通过 builder.io 导出代码，然后通过一些工具生成各个框架的中间代码（比如 react，vue），也可以直接生成原生 JS 代码。

地址：https://www.builder.io/

### 2022-04-24[工具]

今天是中国五一假期的调休。调休真的是一个反人类的设计。

cypress 是一个 e2e 测试工具，可以很容易地集成到各个测试框架中去，比如 jest。

地址：https://github.com/cypress-io/cypress

### 2022-04-23[好文]

Navidrome 是一个音乐管理系统，你可以将其部署到本地，然后通过网页播放器播放**本地音乐**。Navidrome 体验地址：https://demo.navidrome.org/app/

很多其他的工具使用的都是网上现成的资源，比如 1listen 就是使用的虾米，QQ 和网易云的音乐源。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h1ika0dv7mj20sm0fut9d.jpg)

地址：https://www.navidrome.org/

### 2022-04-22[好文]

之前我写过 TypeScript 系列教程，其中有一篇是 [上帝视角看 TypeScript](https://segmentfault.com/a/1190000023489694)

这个文章和我的那篇很像，都是从宏观上带大家理解 TypeScript 究竟做了什么。这篇文章比我的更细致一点，推荐大家结合起来阅读。

地址：https://www.huy.rocks/everyday/04-01-2022-typescript-how-the-compiler-compiles

### 2022-04-21[网站]

yandex 提供了简洁的在线翻译功能。 你可以直接输入文字进行翻译，也可以上传文件整体翻译。

它还提供了 api 供开发者使用，我的 leetcode 项目的部分内容就是用它进行翻译的。不得不承认，专有名词的翻译还是不行，比如动态规划会翻译为 dynamic planning。

地址：https://translate.yandex.com/

### 2022-04-20[好文]

只要 5 美元就可以破解指纹解锁？Your Fingerprint Can Be Hacked For $5. Here’s How.

地址：https://blog.kraken.com/post/11905/your-fingerprint-can-be-hacked-for-5-heres-how/

### 2022-04-19[好文]

如果检测有没有全局变量引起的内存泄漏？这篇文章告诉你，作者提供了 js 代码，大家可以直接拿来主义。

文中有一点没有提到，其实很多全局变量是需要一定条件才会触发的。因此要想真正将其集成到项目的 CI 中，还需要一些额外的条件，那就是在程序中手动多次调用检测方法，而不是调用一次就完事了。

地址：https://mmazzarolo.com/blog/2022-02-14-find-what-javascript-variables-are-leaking-into-the-global-scope/

### 2022-04-18[工具]

上海疫情使得很多人买不到菜。热爱折腾的网友开源了抢菜软件。

注：如非必要，不要使用这种极端方法，这会给其他没有菜吃的人带来很多麻烦。

地址：

- [ddshop](https://github.com/zc2638/ddshop)
- [dingdong-helper](https://github.com/JannsenYang/dingdong-helper)

### 2022-04-15[技巧]

Github 的 issue 有很多不好用的地方，比如不支持 comment 自定义排序，以至于有一些插件“钻了空子”，提供了按照 reactions 进行排序的功能。

Disscussion 弥补了这块空白。 Disscussion 内置两种排序规则，分别是时间顺序和投票数。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h17zutur0fj20w80u0n16.jpg)

你可以结合使用 issue 和 Disscussion 获得更好的体验。

近期 Github 还给 Disscussion 提供了问答社区才有的功能 - **选为答案**。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h17ztg5lguj20yl0u0ado.jpg)

只需要在新建 Disscussion 的时候类别选择 Q&A 就可以体验这个功能了。

地址：https://github.com/azl397985856/leetcode/discussions

### 2022-04-14[好文]

JS 的继承和传统的 class 继承（比如 Java 的）有什么区别？（How does JavaScript's prototypal inheritance differ from classical inheritance?）

地址：https://dev.to/chalarangelo/how-does-javascripts-prototypal-inheritance-differ-from-classical-inheritance-oii

### 2022-04-13[网站]

和昨天的推荐类似，这个网站也是移除不想要的部分的神奇网站。

只不过它不是移除图片中不想要的部分，而是分离音频中的人声和非人声。这样就可以达到**移除人声或者移除噪音的效果**。

地址：https://vocalremover.org/

### 2022-04-12[网站]

一个无需注册的在线网站，你可以用它来移除图片中的部分内容。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h13qrdsd1cg20g40g4x1e.gif)

地址：https://www.magiceraser.io/

### 2022-04-11[网站]

一个俄罗斯的网站，据说是全世界最大的**名画博物馆**。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h13famjjjtj21el0u0ae7.jpg)

并且提供免费的高清下载，比如蒙娜丽莎这里可以直接下载，分辨率是 3931 \* 5178，4 M 左右的大小。

地址：https://gallerix.asia/

### 2022-04-08[网站]

Games104 网站提供了从零学习游戏引擎的教程，有成型的完整代码托管在开源的 Github 仓库。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h12buulgk5j21wp0u0tby.jpg)

有做游戏的，或者想了解游戏引擎的可以看一下。

地址：https://games104.boomingtech.com/sc/course-list/

### 2022-04-07[好文]

chrome 103 目前支持了 fs api。

用户可以通过 fs api 来读取文件，写入文件，删除文件，创建文件等。

比如读取文件的代码：

```js
let fileHandle;

document.querySelector(".pick-file").onclick = async () => {
  [fileHandle] = await window.showOpenFilePicker();

  const file = await fileHandle.getFile();
  const content = await file.text();

  return content;
};
```

除了 chrome 103 ，其他部分浏览器的新版本也提供了支持，具体支持情况如下图。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h12jqsmkbnj20nw0m6q4s.jpg)

地址：https://css-tricks.com/getting-started-with-the-file-system-access-api/

### 2022-04-06[杂谈]

想去贵州看樱花~

地址：https://fashion.sina.cn/l/ds/2022-03-07/detail-imcwipih5777616.d.html

### 2022-04-05[工具]

bitbucket 是一个开源的代码仓库，可以用来存放开源项目的代码。

和 Github，Gitlab 不同，bitbucket 内置了 jira 用于管理需求 ，snyk 用于管理 包安全。个人感觉 Github 和 Gitlab 在这几方面体验还没那么好。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h0yxmq4gwoj21r70u0tfa.jpg)

地址：https://bitbucket.org

### 2022-04-03[技巧]

vscode 中会自动为 typescript 项目选择 workspace 的 node_modules 的 typescript，但是我们可以手动选择 workspace。

方法很简单， 你只需要打开一个 workespace 下的 TypeScript 文件，然后点击右下角的 TypeScript 旁边的版本号。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h0wl93ju5oj20o006lgm9.jpg)

然后会让你选择版本。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h0wl8r7c9xj217q0bqjtn.jpg)

如果有多个 TypeScript ，错误使用其他版本的 TypeScript 会导致编译失败。项目中可以通过配置 vscode 的方式解决这问题。

具体地，大家可以在项目根目录的 .vscode 文件夹下新建一个 setting.json 然后进行如下配置。

```json
{
  "typescript.tsdk": "node_modules/typescript/lib/typescript.js"
}
```

更多用法参考官方文档：https://code.visualstudio.com/docs/typescript/typescript-compiling

### 2022-04-02[好文]

Github 面试还会布置家庭作业？

家庭作业也通过 Github 进行。大概是给你一个仓库，然后你 fork 过去后进行编辑，完成后 pr 到原仓库进行 review。

地址：https://github.blog/2022-03-31-how-github-does-take-home-technical-interviews/

### 2022-04-01[网站]

CS 61A: Structure and Interpretation of Computer Programs

一个 CS 课程，前半部分以 Python 为主，后半部分以 Schema 为主。网站资源很丰富，作为一个普通游客最主要的就是课件，其提供了 html 和 pdf 两种格式。课件图文丰富，这和其他同级别课程差异很大，对新手比较友好。

地址：https://cs61a.org/



## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7he9xdtmyj30by0byaac.jpg">

