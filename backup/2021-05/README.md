# 每日一荐

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2021-08

### 2021-08-05[类库]

在上一家公司工作的时候，我负责开发公司的 ab test 系统。说实话，我们的功能极其简单。尽管如此，这个功能也花费了我们大量的时间去设计，实现，调试，发布。

easy-abtest 正如它的名字一样，是一个使用极为简单的 abtest 框架。

有多简单呢？我们来看下。

首先是定义变量，以及权重等配置。

```js
const abtest = require("easy-abtest");
let options = {
  enabled: true,
  name: "experiment-ID-here",
  buckets: [
    { variant: 0, weight: 0.4 },
    { variant: 1, weight: 0.6 },
  ],
};
app.use(abtest(options));
```

> 字段含义参考官方文档

接下来就是使用了。经过上面的配置，你就可以在业务代码拿到之前定义的变量。比如上面的配置，你就有 40% 的请求拿到 variant 为 1，60% 请求拿到 variant 为 2。

这个数据默认是挂在 req.session.test 上的。

```js
if (req.session.test.bucket == 0) {
  return res.render("index"); // 40%
} else if (req.session.test.bucket == 1) {
  return res.render("index-new"); // 60%
}
```

这是一个刚刚发布不到一个月的产品，代码只有 100 行左右（加上测试用例代码差不多 200 行），不太建议直接在生产环境使用。

地址：https://github.com/darshanbib/easy-abtest

### 2021-08-03[好文]

RPC 是什么？自己如何实现 RPC？实现 RPC 需要考虑什么内容？听字节跳动 web infra 团队大佬娓娓道来。

![](https://tva1.sinaimg.cn/large/008i3skNly1gt82hmlkw3j30nk1ck763.jpg)
（RPC 流程图，包含通信和加解码两大部分）

https://mp.weixin.qq.com/s/Ky6SoWJv85orqYioihTRqg

### 2021-08-02[类库]

folio 是微软出品的测试框架。它的 fixture 设计我很喜欢，通过这个功能可以实现很多其他测试框架不那么容易实现的功能，值得大家尝试。

比如测试的时候我依赖了 express 服务器，并且我想启动多个进程并发地进行测试。

大家知道 express 服务需要绑定端口提供服务，那么端口号怎么填呢？

基于 folio 的 fixture 设计，我们可以这面使用：

```js
// express.spec.ts
import test from "./express-test";
import fetch from "node-fetch";

test("fetch 1", async ({ port }) => {
  const result = await fetch(`http://localhost:${port}/1`);
  test.expect(await result.text()).toBe("Hello World 1!");
});

test("fetch 2", async ({ port }) => {
  const result = await fetch(`http://localhost:${port}/2`);
  test.expect(await result.text()).toBe("Hello World 2!");
});
```

> port 需要实现注册，关于如何注册可以查看官方文档。

地址：https://github.com/microsoft/folio

### 2021-08-01[仓库]

当你试图对一个 npm 库做修改，一个常见的方法是

1. 新建一个不同的名字的库，在这个新的库里你复制原有的代码并做修改。
2. 修改依赖，引用新的被修改的库的名字。

这很不方便，且不利于追踪（比如如何查看改了什么功能？）。

patch-package 就解决了这个问题。使用方式也非常简单：

```bash
# fix a bug in one of your dependencies
vim node_modules/some-package/brokenFile.js

# run patch-package to create a .patch file
npx patch-package some-package

# commit the patch file to share the fix with your team
git add patches/some-package+3.14.15.patch
git commit -m "fix brokenFile.js in some-package"

```

地址：https://github.com/ds300/patch-package#readme

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7he9xdtmyj30by0byaac.jpg">
