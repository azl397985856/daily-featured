# 每日一荐

![](https://p.ipic.vip/qcm31p.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2020-12

### 2020-12-31[好文]

啊哈！今天是我的生日 🎂

**管道和重定向**是 shell 中两个非常重要的概念，搞不懂它那么就无法精通 shell，很多高阶操作都依赖于 ta。

这篇文章讲解地非常细致，且例子很丰富，排版也很棒，让你有学习的欲望。

https://ryanstutorials.net/linuxtutorial/piping.php

### 2020-12-30[教程]

《The Missing Semester of Your CS Education》，中文是《计算机教育中缺失的一课》。其实之前就已经听说过了，也看了看。内容比较少，但是却都很实用。刚看到了中文翻译，就立马推荐给大家了。

> 翻译的质量不高，我读了几章，发现了很多错别字，并提交了 pr。

其中部分章节讲的非常精简，但是讲解角度很奇妙，比市面上大多数的文章要好，比如 [版本控制(Git)](https://missing-semester-cn.github.io/2020/version-control/ "版本控制(Git)") 这一节。

- 英文版：https://missing.csail.mit.edu/
- 中文版： https://missing-semester-cn.github.io/

### 2020-12-28[好文]

到年底了，很多平台都开始了一年一度的年度总结。Github 在这一年都做了什么大事呢？这篇文章告诉你~

https://www.toutiao.com/i6909426764825494028

### 2020-12-25[好文]

圣诞节快乐 🎄

bash 大家可能在工作中都用过。不过很多人写的 bash 都比较粗糙，没有错误处理，打印不友好，没有帮助文档等等。

这其中的主要原因在于 bash 比较难，还有一个原因是 bash 不是我们工作的主要内容。但其实用好 bash 能很大提高工作的质量和效率，并且 bash 中的很多知识（比如管道）也可以迁移到其他地方。

而这篇文章不是教你 bash 的，而是告诉你一个合格的 bash 脚本应该有什么，并直接给出了模板，大家之后直接“套”即可。

文章地址：https://betterdev.blog/minimal-safe-bash-script-template/

另外我将其中的模板提取到了 gist，大家可以直接访问 https://gist.github.com/azl397985856/40cd0d80f5cb3e011ebc62bf98246f77。

### 2020-12-23[仓库]

fuse.js 是一个前端模糊搜索的库，帮助你在不依赖后端的情况下实现模糊搜索。

https://github.com/krisk/fuse

### 2020-12-22[工具]

可视化递归过程的网站。

![](https://p.ipic.vip/e22cl9.jpg)

https://recursion.now.sh/

### 2020-12-18[工具]

pycallgraph 是一个可以可视化代码执行过程的 Python 工具，底层基于大名鼎鼎的图形库 graphviz 实现。

使用效果：

![](https://p.ipic.vip/tujt9c.jpg)

一个更复杂的例子：

![](https://p.ipic.vip/cxa4js.jpg)

http://pycallgraph.slowchop.com/en/master/index.html

### 2020-12-17[工具]

大家可能用过 top 和 iotop 查看机器的负载情况。而 htop 是一个功能更强大的替代工具，UI 更美观，且支持功能更多，用户自定义的选项有很多。

mac 用户可直接使用 brew 安装：

```bash
brew install htop
```

使用效果：

![](https://p.ipic.vip/f8m3rz.jpg)

地址：https://htop.dev/

### 2020-12-16[工具]

你可能对自己写的代码进行过基准测试，那你对命令行程序进行过基准测试么？hyperfine 就是一个对命令行进行基准测试的工具。

使用方式非常简单， 最简单的用法是直接 hyperfine + command 即可 比如：

```bash
hyperfine 'sleep 0.3'
```

ta 还支持很多选项，可以说是一个合格的基准测试工具了。

地址：https://github.com/sharkdp/hyperfine

### 2020-12-15[杂谈]

Python 是一门动态语言，但是它却同 Java，C++等一样是强类型的，这体现在其不会发生隐式类型转换。而弱类型语言，比如 JS 和 PHP 则会发生隐式类型转换。

Python 可以选择性地给变量加类型签名。在 Python 3.x 之前，只能使用注释的方式增加类型注解：

```py
def is_palindrome(s):
    # type: (str) -> bool
    return s == s[::-1]
```

在 Python 3.x 中，我们可以使用如下的方式添加类型定义:

```py
from typing import Iterator

def fib(n: int) -> Iterator[int]:
    a, b = 0, 1
    while a < n:
        yield a
        a, b = b, a + b
```

这样你就可以对代码进行静态检查，并且其也不会对代码运行时产生影响，你如果不需要检查了，也可以选择性去除，这在重构遗留系统是一样的。如果你懂 JS 和 TS，那么一定能够感同身受。更详细的介绍大家可以参考官方文档： http://www.mypy-lang.org/

除了静态类型分析，有时候我们也需要对代码风格和语法逻辑等进行检查，这在大型项目中尤为重要，尤其是一堆不太熟悉 Python 的人，比如从 Java 转来的开发。

如果大家需要对**代码风格**进行校验，那么推荐使用 Pylint，默认是 PEP-8 风格。

如果大家需要对**语法或者逻辑**进行校验，那么推荐使用 PyFlakes，其并不会检查上面的代码风格问题。

> PEP-8 是 Python 的官方编码风格指导

### 2020-12-14[视频教程]

**网络，操作系统，数据结构与算法**都是程序员的内功，学好这些内功可使你的学习效率大增，之后学习其他知识就会得心应手。相信我，各位程序员一定先打好基础，练好内功，不可着急去学语言框架这种东西。

这是一个北京大学的操作系统原理课，一共 82 集，每集大概十几分钟的样子。如果正想要学习操作系统，并且偏好视频的方式学习，那么不妨试试这个。

https://www.bilibili.com/video/BV1Gx411Q7ro?p=1

### 2020-12-11[工具]

一个可以帮助你可视化递归过程的工具，我在[几乎刷完了力扣所有的树题，我发现了这些东西。。。](https://lucifer.ren/blog/2020/11/23/tree/)中提到过 ta。

![递归计算 fib 的过程图](https://p.ipic.vip/yo6ys2.jpg)

https://recursion.now.sh/

### 2020-12-10[工具]

很多人问我使用的画图工具是什么。这里就介绍一个我经常使用的一个画图工具 - **excalidraw**。它可以快速画出一些基本图形，并且支持手写风（目前仅支持英文手写风，中文是不行的）。

![](https://p.ipic.vip/11cn3q.jpg)

> 不过这对于写题解的我来说还是不够方便，于是我有了自己做一个画图工具的打算，主要功能就是根据数据结构直接生成图片，省去了手绘的过程。

地址：https://excalidraw.com/

### 2020-12-09[工具]

我写的一个刷题插件，帮助你高效刷题，不仅内置各种常见算法模板，时间复杂度估算表，学习路线，题解等学习资源。更重要的是，提供了**一键复制所有用例**，**禅定模式**等实用功能以增强刷 leetcode 的体验。欢迎多题意见哦~

https://chrome.google.com/webstore/detail/leetcode-cheatsheet/fniccleejlofifaakbgppmbbcdfjonle/related?hl=zh-CN&authuser=0

> 打不开的朋友可使用离线版，离线版可关注我的公众号《力扣加加》回复插件获取。 不过还是建议有条件的使用在线版，毕竟咱的更新还是蛮快的。

### 2020-12-08[cheatsheet]

如果你使用 markdown 写东西，需要用到数学公式等特殊符号，那么掌握 latex 就很有必要了。

这里有一份 latex 语法手册，需要用的时候看一下，多用几次就熟练了。

https://assets.ctfassets.net/nrgyaltdicpt/4e825etqMUW8vTF8drfRbw/d4f3d9adcb2980b80818f788e36316b2/A_quick_guide_to_LaTeX__Overleaf_version.pdf

### 2020-12-07[好文]

ShellCheck 是一个帮助你检查 shell 错误的工具，本质就是一个 lint 工具，和 eslint 等工具的功能是类似的。

![](https://p.ipic.vip/zxuq37.jpg)

https://github.com/koalaman/shellcheck

### 2020-12-04[好文]

NPM 7 发布了，新增重要功能 **workspace**，这不是一个无感升级，需要用户手动配合。这项功能可以在你的多个项目有很多公共依赖的时候发挥重大作用，使得你可以不必安装重复依赖。

详情：https://blog.bitsrc.io/npm-7-this-is-what-i-call-an-update-de17a34ab787

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://p.ipic.vip/bp35i7.jpg">
