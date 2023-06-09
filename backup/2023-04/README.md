
# 每日一荐

![](https://p.ipic.vip/0bhil1.jpg)![](https://p.ipic.vip/0bhil1.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2023-04

### 2023-04-30[工具]

将可视化测试集成到你的系统？ 本工具（chromatic）是著名的 storybook 开发的。

via: https://www.chromatic.com/docs/

### 2023-04-29[工具]

这是一个类似 chatgpt ，只不过其实一个 IDE 插件， 并且只是为了生成测试用例和优化代码。

我预测，将来一定会有很多仅覆盖某个领域的工具产生。

比如只喂法律数据源的法律 AI， 只喂前端数据源的前端助手等等。这样不仅回答更加专业，而且对于用户来说也更容易写提示词（prompt）。

via: https://www.codium.ai/

### 2023-04-28[新闻]

亚马逊也推出了自己对标微软 copilot 的产品 CodeWhisperer，对个人免费，企业收费。

via: https://aws.amazon.com/blogs/aws/amazon-codewhisperer-free-for-individual-use-is-now-generally-available/

### 2023-04-27[好文]

讲解 chatgpt 的原理的一篇文章，比较浅显，但是对于想了解但又不愿意花时间学习的外行来说很有用。

简单来说就是根据大数据建立模型， 并使用训练数据调整参数。 当用户提问时，它会内部使用机器学习算法计算出多种 output，然后取概率最大的 output 返回给用户。

via: https://typefully.com/DanHollick/yA3ppZC

### 2023-04-23[网站]

自从 openai 公布自己的 chatgpt 后，各大公司也都在跟进，推出自己的 ai 产品。

vercel 就出了一个 playground ，集成了市面上常见的 ai 聊天引擎，你可以直接提问，并且支持选择引擎。然后根据对比两者的答案。

![](https://p.ipic.vip/rxs7ek.png)

via: https://play.vercel.ai/

### 2023-04-22[库]

一个基于 svelt 的移动端组件库，特点是体积小， 速度快（无运行时 diff）。

via: https://github.com/dufu1991/stdf

### 2023-04-23[库]

如何在 node 中引用其他语言写的库？

你可以使用 Node.js 的 child_process 模块来在 Node.js 中调用其他语言编写的库。具体而言，您可以使用 child_process 模块的 exec 或 spawn 方法来执行其他语言编写的可执行文件或脚本，并从 Node.js 中传递参数和接收输出。另外，您也可以使用 Node.js 的 C++ 插件来编写与其他语言库交互的 Node.js 模块。

linker.js 可以帮助你轻松生成 binding， 从而实现在 nodejs 中调用 cpp，rust，go 等代码。

via: https://github.com/bitair-org/linker.js

### 2023-04-22[好文]

使用 webworker 来解决主进程负载过高是一个好的办法。 不过有如下问题：

1. 无法对 DOM 进行访问，因此设计到 DOM 时代码会比较复杂，需要不停地传输数据。 这个文章介绍可以通过 https://github.com/ampproject/worker-dom 来封装，屏蔽掉细节
2. 通信开销。 虽然减少了主进程的占用， 但是总的计算不但没有少，还增加了通信时间。如果通信数据很大，或者很频繁，那么这个开销就不可忽略。文章也提供了一种简单的参考方式。

via: https://www.smashingmagazine.com/2023/04/potential-web-workers-multithreading-web/

### 2023-04-18[好文]

文章介绍了如果溯源 NPM 包，从而发现 npm 包是否是正规的（不是山寨的），有没有被篡改，最近有没有异常提交， 有没有危险的依赖等等。

但是这个成立的前提是这些 npm 包是通过 github action 发布的。

这或许是微软的一个野心，收购 github 和 npm，然后将其完全整合。

via: https://github.blog/2023-04-19-introducing-npm-package-provenance/

### 2023-04-11[新闻]

Github 官方推出了商店系统，可以在上面购物，不过目前能买的东西比较少。

https://www.thegithubshop.com/

### 2023-04-10[类库]

以更可读的方式操作 AST。

比如你想给一个文件增加一个导出成员，可以这样：

```js
import { loadFile, writeFile } from "magicast";

const mod = await loadFile("config.js");

mod.exports.default.foo.push("b");

await writeFile(mod);
```

其底层会操作 AST 来完成， 而如果你来操作 AST， 肯定会复杂一点。如果是我的话，还会去查一下 AST 操作库的 api 文档。 而使用了这个库就不用查询文档了，基本都是比较符合直觉的。

via: https://github.com/unjs/magicast

### 2023-04-09[新闻]

copilot 集成了 chatgpt， 可以通过自然语言聊天实现修改代码了（会有一个类似聊天的窗口）。

copilot lab 扩展（https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-labs）还可以直接翻译代码， 自动生成测试用例等。（虽说不用这个也可以，但是却更加方便，相当于chatgpt 的 prompt）

via: https://code.visualstudio.com/blogs/2023/03/30/vscode-copilot

### 2023-04-02[网站]

UX matters！

这是一个讲如何优化 UX，里面还有一些专业术语表 。更关键的是 UX 的好处，比如变现，提高满意度。

其中还有 case study 栏目， 其中第一个就是一个之前看过的比较老套的案例，但是确实值得一些公司学习。

via: https://builtformars.com/
### 2023-04-01[好文]

代码同构对很多前端开发都不陌生。讲的是服务端和客户端都用一样库，这样可以实现代码共用。

但是如果你使用 ssr，那么实际上服务端是需要运行客户端代码的（生成 html 发给客户端）。因此就有了将客户端和服务端代码写到一个项目的实践，比如 .server.js 放服务端逻辑 .client.js 放客户端逻辑。然后通过打包分别生成服务端和客户端代码。

这有时候不是很方便， 因为客户端有时候也想访问服务端的一些东西， 如果能将其写到一个文件就好了。

《WTF Is Code Extraction》就讲了三种将客户端和服务端代码写到一起的方式， 以及都有什么问题需要解决，最后图穷匕见地安利了一下自己的产品😄 （它安利的那个库我没用过）

![](https://p.ipic.vip/nldp9u.jpg)

via: https://www.builder.io/blog/wtf-is-code-extraction



## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://p.ipic.vip/bp35i7.jpg">

