# 每日一荐

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

在线阅读：https://leetcode-solution-leetcode-pp.gitbook.io/mz-ri-yi-jm/

电子书文件太大， 大家可到我的公众号《脑洞前端》回复“每日一荐”获取。

## :newspaper: &nbsp; RSS

大家可以用 Github 提供的 [RSS](https://github.com/azl397985856/daily-featured/commits.atom) 来订阅我的仓库更新。

## 新鲜出炉 (2022-04)

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

## 历史汇总

- [SUMMARY](./SUMMARY.md)

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
