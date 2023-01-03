
# 每日一荐

![](https://p.ipic.vip/ptsz11.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2022-11

### 2022-11-30[软件]

Syncthing 是一个在不同设备之间同步文件的软件， 你可以用它来备份还原。

使用方法很简单，下载后双击打开后访问：http://127.0.0.1:8384/#

接下来选择你需要同步的文件， 然后添加远程设备（输入一个设备 ID 就好了）就可以发送文件了。

![](https://p.ipic.vip/arcjyh.jpg)

via: https://syncthing.net/

一个类似的软件是 Sendy，通过它可以分享文件，生成链接给任意朋友，当然你也可以发送给自己实现跨设备发送文件。地址：https://chrome.google.com/webstore/detail/sendy-for-chrome-gmail-sl/pagahecnnmjjlpoakhagcpnalaodfbkk

### 2022-11-29[算法]

输入一个 DOM， 返回这个 DOM 的选择器（selector）。

Given a DOM, can you return its selector?

```js
function t(dom: HTMLElement): string {}
```

我们可以从当前 DOM 借助 parentNode 属性往上找到根节点， 路上的节点通过选择器进行定位，最后拼接即可。代码参考：

```js
function t(dom: HTMLElement): string {
  if (dom.tagName.toLowerCase() == "html") return "HTML";
  let str = dom.tagName;
  str += dom.id != "" ? "#" + dom.id : "";
  if (dom.className) {
    str += dom.className
      .split(/\s/)
      .map((c) => `.${c}`)
      .join("");
  }
  return t(dom.parentNode) + " > " + str;
}
```

其实我们还可以做的更好一点，那就是遇到 ID 选择器直接 break。

```js
function t(dom: HTMLElement): string {
  if (dom.tagName.toLowerCase() == "html") return "HTML";
  let str = dom.tagName;
  str += dom.id != "" ? "#" + dom.id : "";
  if (dom.id) return str;
  if (dom.className) {
    str += dom.className
      .split(/\s/)
      .map((c) => `.${c}`)
      .join("");
  }
  return t(dom.parentNode) + " > " + str;
}
```

### 2022-11-24[网站]

如果你发现一个网站无法打开，你可能会想知道是你打不开了还是所有都打不开了。

这个时候一个检查网站目前是否可用的工具就很重要了。这里介绍一个我使用过的网站。

via: https://downforeveryoneorjustme.com/

### 2022-11-17[好文]

论算法的重要性。 原帖标题《十年程序员难倒了一个算法上面，真的老了》

via: https://www.v2ex.com/t/895464#reply135

简单说一下这道题。 如果第一个数组只有一项，那么就是一个典型的背包问题。 不过，背包问题求的是组合数或者极值，而这道题是求匹配方案， 因此我们不得不采用回溯的方法。

另外，第一个数组不止一项，怎么办呢？其实我们还是用回溯的思路，新建一个数组来标记一下第二个数组中每一项的选择情况即可。

### 2022-11-16[好文]

github 代码搜索确实不好用，以至于我一般都是直接将 .com 改为 .dev 然后在一个在线版的 VSCODE 中搜索。

而现在搜索功能以及代码阅读等都进行了增强，比如可以通过正则来搜代码。

![](https://p.ipic.vip/lj25qz.jpg)

via: https://github.blog/2022-11-15-a-better-way-to-search-navigate-and-understand-code-on-github/

### 2022-11-15[技巧]

有时候我们使用的 Mac 应用突然间挂了，你又想知道为什么挂了。可以将 mac 应用使用终端（terminal） 打开，这样应用如果有打印日志的话，你就可以看到。

那么如何将 mac 应用使用终端打开呢？大家可以在应用文件夹中找到你想打开的应用，然后右键**显示包内容**（show package contents），里面找到一个 Contents/MacOS/ 下 找到一个可执行文件，将其拖到终端即可。

比如 /Applications/Karabiner-EventViewer.app/Contents/MacOS/Karabiner-EventViewer

你也可以直接将上面的路径粘贴到终端执行。

### 2022-11-14[工具]

electron-log 是 electron 上一个日志管理工具，可以输入日志到终端，文件，也可以重写后上报到后端。其还支持很多功能， 比如 Catch Error， 从而上用户手动上报错误等。

via: https://github.com/megahertz/electron-log

### 2022-11-13[网站]

一个开发人员参考手册，内容一般，但是界面还是蛮漂亮的，期待后续的完善吧。

![](https://p.ipic.vip/lj25qz.jpg)

- 英文版: https://github.com/Fechin/reference
- 中文版：https://github.com/jaywcjlove/reference

### 2022-11-11[工具]

AutoCut: 通过字幕来剪切视频

这意味着你只需要文本编辑器就可以剪辑视频。

via: https://github.com/mli/autocut

### 20220-11-04[网站]

fly.io 是一个类似 heroku， vercel 的免费代码托管平台，相当于得到了一个免费的云服务器。

via: https://fly.io/docs/



## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7he9xdtmyj30by0byaac.jpg">

