# 每日一荐

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

在线阅读：https://leetcode-solution-leetcode-pp.gitbook.io/mz-ri-yi-jm/

电子书文件太大， 大家可到我的公众号《脑洞前端》回复“每日一荐”获取。

## :newspaper: &nbsp; RSS

大家可以用 Github 提供的 [RSS](https://github.com/azl397985856/daily-featured/commits.atom) 来订阅我的仓库更新。
​

## 新鲜出炉 (2021-11)

### 2021-11-04[网站]

在线生成头像的一个网站， 我用它生成了一个有点像自己的头像。

![](https://tva1.sinaimg.cn/large/008i3skNly1gw02awdp67j3080080gln.jpg)

要不是怕换了头像大家都不认识我了，我就换上啦 😄

地址：https://notion-avatar.vercel.app/zh


### 2021-11-03[好文]

photoshop 之前尝试做 web 版本，但是由于 JS 性能问题而放弃了。得益于 web assembly 的发展，性能问题逐渐被解决。网页版本的 photoshop 变得可行起来。另外由于本身就是 c++ 写的，因此使用 c++ 编译为 web assembly 并在 js 中引用可以很大程度上复用之前的代码。

这提示我们以前由于性能问题不做在前端的功能可以考虑使用 web assembly 的方式解决。

地址：https://web.dev/ps-on-the-web/

### 2021-11-02[工具]

yarn 现在支持可选依赖，你可以选择为不同的平台安装不同的包。

```yaml
supportedArchitectures:
  os: [linux, darwin]
  cpu: [x64, arm64]
```

并且新版本node（大于等于16.9）可以通过再 package.json 中增加字段指定使用 yarn 作为包管理工具，而不是默认的 npm。

```json
{
  "packageManager": "yarn@3.1.0"
}
```

### 2021-11-01[知识]

Node 中有流的概念以及专门的 api，而在浏览器端虽然大家一直在使用流，但是浏览器却没有专门为其提供流的 api。比如浏览器中请求就是一个流：

```js
new Response(stream, {
  headers: { 'Content-Type': 'text/html' },
})
// request 也是同理
```

现在浏览器终于有了这样的 api，比如 ReadableStream ，WritableStream，TransformStream 等等。


## 历史汇总

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

## 贡献

- 如果有想法和创意，请提 [issue](https://github.com/azl397985856/daily-featured/issues) 或者进群提
- 如果想贡献代码，请提 [PR](https://github.com/azl397985856/daily-featured/pulls)
- 如果需要修改项目中图片，[这里](./assets/) 存放了项目中绘制图的源代码， 大家可以用 [draw.io](https://www.draw.io/) 打开进行编辑。

## License

[Apache-2.0](./LICENSE)
