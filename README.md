# 每日一荐

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

在线阅读：https://leetcode-solution-leetcode-pp.gitbook.io/mz-ri-yi-jm/

电子书文件太大， 大家可到我的公众号《脑洞前端》回复“每日一荐”获取。

## 新鲜出炉 (2021-01)

### 2020-01-22[工具]

vite 是尤雨溪写的一个代替 webpack 的工具，它包含了本地开发服务器和打包模块。除了支持 vue，其还拓展支持了 react 和 preact 等流行框架。

> vite 在法语中是快的意思，尤雨溪这货还真是喜欢法语啊。

地址：https://vitejs.dev/guide/introduction.html

### 2020-01-21[视频教程]

vue 作者尤雨溪本身亲自下海讲课，手把手教你实现一个 mini-vue，来看下作者本人的思路吧。

地址：https://www.vuemastery.com/courses/vue3-deep-dive-with-evan-you/vue3-overview

### 2020-01-20[工具]

一个在线展示 latex 效果的网站， 你输入 latex，它可以实时展示效果，并支持多种格式的导出。

https://www.codecogs.com/latex/eqneditor.php?lang=zh-cn

### 2020-01-19[工具]

给不同的网站和应用不同的密码以防止密码泄露带来的大规模问题已经是一个公认的方法。可是密码设置地太过简单很容易被破解，设置太复杂自己又很难记住。

试想你能记住以下 3 个不同的复杂密码么？

- Y~u(pX'}>an<>d'<bQAq
- \X$^<e~>m#-;MfbTf&,.
- n(P7^VwLf3`OdJur`uZJ

一种方法是自己只记住一个主密码，让密码管理器帮你生成以及记住**其他所有密码**。

只要你上网，那么密码管理都是每个人不得不面对的一件事。当初我在郑州的一个公司面试的时候，就有这样一个面试题“如何管理你的各种密码”。我当时就给了一种解决方案**密码管理器**，即记住主密码，让主密码帮你管理剩下的密码。

KeePassXC 以及 1 password 就是这样的密码管理工具。

- KeePassXC 是开源免费的，不过没有浏览器插件等辅助工具，因此使用上不方便，需要自己手动保存各种密码。https://keepassxc.org/
- 1 password 体验很好，很多人都推荐。不过它是一个付费软件。 https://1password.com/

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmf3akup6jj309s08c3zc.jpg)

### 2021-01-18[技巧]

App 在 macOS Catalina 下**提示已损坏，无法打开**解决办法。

1. 打开终端；
2. 输入以下命令，回车；

```bash
sudo xattr -d com.apple.quarantine /Applications/xxxx.app
```

> 注意：/Applications/xxxx.app 换成你的 App 路径（推荐直接将.app 文件拖入终端中自动生成路径，以防空格等转义字符手动复制或输入出现错误）

3. 重启 App 即可。

### 2021-01-15[好文]

NodeJS 中的流和 Buffer 是两个很重要的概念，几乎所有的内容都与他们有关。如果你想精通 NodeJS ，这肯定是绕不开的坎。Buffer 是流的基础，这篇文章算是 Buffer 的入门文章了，详细讲解了各个 Buffer 的 API 的用法。

地址：https://blog.logrocket.com/node-js-buffer-a-complete-guide/

### 2021-01-14[工具]

有时候你需要进行性能分析，那么使用火焰图绝对是一个不错的选择。

FlameGraph 是一个对操作系统的性能制作火焰图的工具。

![FlameGraph](https://tva1.sinaimg.cn/large/008eGmZEly1gme7d6beljj30x80gsq6j.jpg)

我们知道火焰图横轴表示的是时间长短，越宽表示运行的时间越长。纵轴表示的是调用栈，可以看出代码的执行顺序。

Chrome 的 Performance 面板就使用了火焰图。

![Chrome Performance 的火焰图](https://tva1.sinaimg.cn/large/008eGmZEly1gme7eomq4zj30ni0qc78g.jpg)

你可以用它分析应用的性能瓶颈，除此之外，Chrome 还提供了饼图，智能诊断等其他工具，帮助你更好的发现潜在的性能问题。

地址：https://github.com/brendangregg/FlameGraph

### 2021-01-13[经验分享]

source script.sh 和 ./script.sh 有什么区别?

这两种情况 script.sh 都会在 bash 会话中被读取和执行，不同点在于哪个会话执行这个命令。 对于 source 命令来说，命令是在当前的 bash 会话中执行的，因此当 source 执行完毕，对当前环境的任何更改（例如更改目录或是定义函数）都会留存在当前会话中。 单独运行 ./script.sh 时，当前的 bash 会话将启动新的 bash 会话（实例），并在新实例中运行命令 script.sh。 因此，如果 script.sh 更改目录，新的 bash 会话（实例）会更改目录，但是一旦退出并将控制权返回给父 bash 会话，父会话仍然留在先前的位置（不会有目录的更改）。 同样，如果 script.sh 定义了要在终端中访问的函数，需要用 source 命令在当前 bash 会话中定义这个函数。否则，如果你运行 ./script.sh，只有新的 bash 会话（进程）才能执行定义的函数，而当前的 shell 不能。

### 2021-01-12[工具]

lnav 是一个日志查看工具。使用方式超级简单，直接打开就行。

它会帮助你自动分析当前目录下所有的日志，并根据时间戳自动排序。如果来自不同的文件，他也会进行分组，并使用不同的颜色加以区分。

![不同颜色区分的日志](https://tva1.sinaimg.cn/large/008eGmZEly1gme77g4zb1j30mt0hkgrl.jpg)

只要你的日志是以时间戳开始，都可以被 Lnav 捕获到。另外它还提供了常见的过滤功能，更有意思的是它竟然内置了 sqlLite 数据库，使得你可以使用 sql 语言来对日志进行查询。

![使用 SQL 查询](https://tva1.sinaimg.cn/large/008eGmZEly1gme7aeg8zdj30lm0fl79s.jpg)

地址：http://lnav.org/features

### 2021-01-11[经验分享]

一般来说，特定种类的文件存储有一定的规范，文件系统，层次结构标准（Filesystem, Hierarchy Standard）可以查到我们讨论内容的详细列表。

- /bin - 基本命令二进制文件
- /sbin - 基本的系统二进制文件，通常是 root 运行的
- /dev - 设备文件，通常是硬件设备接口文件
- /etc - 主机特定的系统配置文件
- /home - 系统用户的家目录
- /lib - 系统软件通用库
- /opt - 可选的应用软件
- /sys - 包含系统的信息和配置(第一堂课介绍的)
- /tmp - 临时文件( /var/tmp ) 通常在重启之间删除
- /usr/ - 只读的用户数据
- /usr/bin - 非必须的命令二进制文件
- /usr/sbin - 非必须的系统二进制文件，通常是由 root 运行的
- /usr/local/bin - 用户编译程序的二进制文件
- /var -变量文件 像日志或缓存

### 2021-01-08[工具]

[交互式记事本](https://en.wikipedia.org/wiki/Notebook_interface)可以帮助开发者进行与运行结果交互等探索性的编程。现在最受欢迎的交互式记事本环境大概是 [Jupyter](https://jupyter.org/)。它的名字来源于所支持的三种核心语言：Julia、Python、R。[Wolfram Mathematica](https://www.wolfram.com/mathematica/) 是另外一个常用于科学计算的优秀环境。

### 2021-01-07[工具]

[Hammerspoon](https://www.hammerspoon.org/) 是面向 macOS 的一个桌面自动化框架。它允许用户编写和操作系统功能挂钩的 Lua 脚本，从而与键盘、鼠标、窗口、文件系统等交互。

下面是 Hammerspoon 的一些示例应用：

- 绑定移动窗口到的特定位置的快捷键
- 创建可以自动将窗口整理成特定布局的菜单栏按钮
- 在你到实验室以后，通过检测所连接的 WiFi 网络自动静音扬声器
- 在你不小心拿了朋友的充电器时弹出警告

从用户的角度，Hammerspoon 可以运行任意 Lua 代码，绑定菜单栏按钮、按键、或者事件。Hammerspoon 提供了一个全面的用于和系统交互的库，因此它能没有限制地实现任何功能。你可以从头编写自己的 Hammerspoon 配置，也可以结合别人公布的配置来满足自己的需求。

### 2021-01-06[经验分享]

大多数工具中，使用 - 代替输入或者输出文件名意味着工具将从标准输入（standard input）获取所需内容，或者向标准输出（standard output）输出结果。

### 2020-01-05[好文]

如何做一个换肤的功能？主要的思路有两个，一个是基于运行时，一个是基于编译时，各有优缺点，当然你也可以将二者结合。

这篇文章讲的是如何使用 react + style-component 实现网站换肤功能，结合实例，一步步教你怎么做。

地址：https://css-tricks.com/theming-and-theme-switching-with-react-and-styled-components/#top-of-site

### 2021-01-04[工具]

pdb，即 Python Debugger 是 Python 的官方内置调试器，也就是说你可以直接使用如下命令加载：

```py
python3 -m pdb a.py
```

个人感觉它的设计哲学还是很不错的，上到 API 设计，下到代码实现都透露出满满的优雅。如果我下次需要做调试器的话，恐怕会参考它 和 vscode debugger 的实现。

地址：https://docs.python.org/3/library/pdb.html#module-pdb

## 历史汇总

- [2020-12](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-12/README.md)
- [2020-11](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-11/README.md)
- [2020-10](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-10/README.md)
- [2020-09](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-09/README.md)
- [2020-08](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-08/README.md)
- [2020-05](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-05/README.md)
- [2020-04](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-04/README.md)
- [2020-03](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-03/README.md)
- [2020-02](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-02/README.md)
- [2020-01](https://github.com/azl397985856/daily-featured/tree/master/backup/2020-01/README.md)
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
