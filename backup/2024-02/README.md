
# 每日一荐

![](https://p.ipic.vip/0bhil1.jpg)![](https://p.ipic.vip/0bhil1.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2024-02

### 2024-02-29[字体]

《京華老宋体》是一个特别好看的字体，有浓厚的中国风，适合用来做一些中国风的设计。

不过实际使用上来看，锐化的效果不是特别好，不知道是不是 mac 设备的原因。

via: https://zhuanlan.zhihu.com/p/637491623

### 2024-02-28[网站]

输入 ts 类型，帮你生成 ts 类型的图表，可以帮助你更好地理解 ts 类型。

![](https://p.ipic.vip/e3jg1u.png)

via: https://tsdiagram.com/

### 2024-02-27[工具]

kiss-translator 是一个双语对照翻译工具，有对应的浏览器和油猴脚本。

对于有一定英语背景但不是特别好的人来说，**双语对照**可以帮助你更好地理解英文文章，提高你的英文阅读能力。

via: https://github.com/fishjar/kiss-translator

### 2024-02-26[教程]

一个超级实用和简短的 svg 教程，画面非常精美。

![](https://p.ipic.vip/y37zjg.png)

一共 25 个“关卡"。

里面讲了 svg 中如何用 g 来 group 元素，如何处理事件，如何使用动画，如何使用滤镜高阶等等。

via: https://svg-tutorial.com/

### 2024-02-25[工具]

我们见过不少 markdown 转化成 pdf，epub 的工具。但是反向地将 pdf，epub 转化成 markdown 的工具就比较少了。

这个工具借助了人工智能，可以帮你将 pdf，epub 转化成 markdown。

via: https://github.com/VikParuchuri/marker

### 2024-02-23[网站]

一个可以帮你保持屏幕常亮的网站，可以帮助你在一些需要屏幕常亮的场景下使用。

其基本原理是使用了 noSleep.js 这个库，这个库可以阻止屏幕自动关闭。

[noSleep.js](https://github.com/richtr/NoSleep.js/blob/master/src/index.js) 的原理是播放一个无限循环的假视频，让浏览器错误地认为你在看视频，从而阻止屏幕常亮。不过由于 浏览器的 [navigator.wakeLock](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/wakeLock) API 的出现，这个库会优先使用这个 api 来阻止屏幕常亮。

via: https://www.keepscreenon.com/

### 2024-02-22[好文]

学习一个东西就是要从大的方向高屋建瓴地去理解。

这篇文章就将 web 应用从是否动态和是否在线两个维度进行了分类，然后讲解了每一种类型的特点。

两个维度，一共分了 2 * 2 = 4 种类型。

![](https://p.ipic.vip/ptfto1.png)

并且拿具体的知名的网站作为例子，讲解了每一种类型的特点，以及什么情况下使用什么样的技术栈构建什么样的类型 web 应用。

via: https://jakelazaroff.com/words/the-website-vs-web-app-dichotomy-doesnt-exist/

### 2024-02-21[好文]

chrome 出了很多的 web vitals 监控指标，比如 First Contentful Paint，Cumulative Layout Shift，但是这些指标是如何收集的呢？

说实话很难收集。而 chrome 修改了 performance API，可以帮助我们直接收集这些指标。

比如如下代码就可以手机 Cumulative Layout Shift。

```js
const observer = new PerformanceObserver((list) => {
  let cumulativeLayoutShift = 0;
  list.getEntries().forEach((entry) => {
    // Don't count if the layout shift is a result of user interaction.
    if (!entry.hadRecentInput) {
      cumulativeLayoutShift += entry.value;
    }
    console.log({ entry, cumulativeLayoutShift });
  });
});

// Call the Observer.
observer.observe({ type: "layout-shift", buffered: true });

```

via: https://www.smashingmagazine.com/2024/02/reporting-core-web-vitals-performance-api/

### 2024-02-19[工具]

《Remix 入门实战》讲的内容比较浅显，但是却可以让你快速上手 Remix，了解它的基本使用方法。Remix 是一个新的 React 框架，它的目标是让开发者更容易地构建出高质量的 Web 应用。它的特点是开箱即用，自带了很多功能，比如路由、状态管理等。这篇文章是一个入门实战，通过一个简单的例子，让你快速上手 Remix。

如果有一些基础的话，阅读时间大概半个小时到一个小时。

via: https://remix.lutaonan.com/

### 2024-02-18[好文]

相信大家都看到过视频下方有一些 ai 工具对视频内容进行总结的情形。这篇文章就告诉你如何对视频内容进行总结，生成一些文字内容。

主要用到了  OpenAI API 和 the LangChain。

via: https://blog.logrocket.com/extracting-youtube-video-data-openai-langchain/

### 2024-02-17[好文]

目前很多监控摄像头都是 wifi 传输的，本身没有内置 sd 卡，导致你可以简单地使用 wifi 干扰器来将其干掉。

因此我的做法就是使用 sd 卡 + wifi，并且电池+电源双保险。不管你是切断电源还是干扰 wifi，都无法干掉我的摄像头。当然也有很多别的方式罢了，只是这帮我们多加了一层防护。

via: https://www.tomshardware.com/networking/wi-fi-jamming-to-knock-out-cameras-suspected-in-nine-minnesota-burglaries-smart-security-systems-vulnerable-as-tech-becomes-cheaper-and-easier-to-acquire

### 2024-02-16[好文]

sytax 的一期节目，标题是《how-to-be-productive》

以下是我提取的博客重点内容：

1. 最重要的是你首先要检查你当前的习惯。是什么阻碍了你？你在做什么？日常生活中有哪些事情让你感到困惑？
2. 安排专注时间，排除干扰，专注于具体的一件事情。这个时间段不做其他事情，比如社交媒体，邮件等等，不要让别人打扰你。
3. 专注的时间最好是固定时间。比如可以用番茄工作法，25 分钟专注，5 分钟休息。专注时间最好是创造性的工作，也就是说专注时间里创造性的工作的优先级更高。
4. 改变习惯可能是很难的，但是轻微的环境变化可以改掉坏习惯。比如你可以把手机放在另外一个房间，这样你就不会一直看手机了。
5. 你有一堆的事情要做，如何排序？按焦虑程度对待办事项进行排序
6. 日历是最好的生产力工具。 这里其实关键点在于 deadline。你可以把 deadline 放在日历上，然后扫一下你就知道今天要做什么了。这个技巧我用了好久，现在一般我也会结合使用月度计划，周计划。而日历在我这里更像是部分日计划。
7. 这条是我加的。如果完成了自己的计划，要给自己奖励。这个奖励可以是一些小的东西，比如吃一顿好的，看一部电影等等。这样可以让你更有动力去完成自己的计划。


via: https://syntax.fm/show/717/how-to-be-productive/transcript#scott-formally-diagnosed-with-adhd-re-examining-how-he-works

### 2024-02-15[工具]

pa11y 是一个 web 端无障碍测试工具，可以帮助你测试你的网站是否符合无障碍标准。

你可以使用 cli，也可以使用 api 来测试。

cli 的使用方式如下：

```bash
npx pa11y https://example.com
```

api 的使用方式如下：

```js
const pa11y = require('pa11y');

pa11y('https://example.com').then((results) => {
    // Use the results
});
```

扩展性也是有的，你可以通过 action 自定义一些浏览器的操作，这些操作和 puppeteer 的操作类似。


via: https://github.com/pa11y/pa11y

### 2024-02-14[新闻]

JSR，Deno团队的新包注册表，旨在解决npm的限制。

用户可以直接编写 TypeScript 发布到 JSR，JSR 会完成 ts 编译，ESM 转义等操作。而且据说还更加安全。

via: https://socket.dev/blog/jsr-new-javascript-package-registry

### 2024-02-13[好文]

《How does B-tree make your queries fast?（B 树如何让您的查询更快？）》这篇文章讲解了 B 树的原理，以及为什么 B 树可以让你的数据库查询更快。

文章总结了两个原因：

1. every node may contain more than one value(每个节点可能包含多个值)
2. inserting a new value is followed by a self-balancing algorithm(插入新值之后是自平衡算法)

这是我见过的 B 树讲解最直观最好理解的一篇文章，图文并茂，讲解清晰。

via: https://blog.allegro.tech/2023/11/how-does-btree-make-your-queries-fast.html

### 2024-02-12[好文]

vercel 的产品好多体验都不错。比如今天介绍的这个。它借助于 react server components 和 openai，可以让你在服务端渲染 react 组件，然后再将其传递给客户端。用户可以用纯文本或者图片输入，然后回复给用户一个可以交互的程序，而不是传统的纯文本回复，极大增强了用户体验，也扩展了 openai 产品的使用场景。

![](https://p.ipic.vip/ehn5d4.png)

你也可以直接使用这套 sdk 来构建自己的交互式程序。

```js
import { render } from 'ai/rsc'
import OpenAI from 'openai'
import { z } from 'zod'

const openai = new OpenAI()

async function submitMessage(userInput) { // 'What is the weather in SF?'
  'use server'

  return render({
    provider: openai,
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are a helpful assistant' },
      { role: 'user', content: userInput }
    ],
    text: ({ content }) => <p>{content}</p>,
    tools: {
      get_city_weather: {
        description: 'Get the current weather for a city',
        parameters: z.object({
          city: z.string().describe('the city')
        }).required(),
        render: async function* ({ city }) {
          yield <Spinner/>
          const weather = await getWeather(city)
          return <Weather info={weather} />
        }
      }
    }
  })
}
```

via: https://vercel.com/blog/ai-sdk-3-generative-ui

### 2024-02-08[好文]

tinyMCE@6 是一个富文本编辑器，它有很多的功能，比如图片上传，表格编辑，代码高亮等等。

使用起来也非常简单，初始化一下就可以直接用了。

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'emoticons',
  toolbar: 'emoticons',
  a_plugin_option: true,
  a_configuration_option: 400
});
```

它的最大特点是插件化，你可以根据自己的需求来选择插件，比如 save 插件，全屏插件，emoji 插件等等。甚至还有 ai 插件，https://www.tiny.cloud/docs/tinymce/6/ai/

相比于新兴的编辑器，它的优势在于稳定，功能齐全，插件丰富。缺点就是体积比较大，而且有些功能可能不够现代化。

via: https://www.tiny.cloud/docs/tinymce

### 2024-02-7[好文]

这篇文章讲解了 chrome extension 是如何滥用权限来监控用户的行为，比如监控用户的点击行为，监控用户的输入行为等等。

这提示我们在使用 chrome extension 的时候，一定要注意权限，不要随便安装一些不知名的插件。

我对插件非常挑剔，只会安装很少的插件，同时也会注意权限。

但是这其实很难避免被监控，因为插件是会静默更新的，你不知道它更新了什么。对此其实我也比较无奈。大家如果有好的解决方法，欢迎留言告诉我。

因此最主要的方式应该是浏览器厂商加强审核，不要让一些恶意插件进入到插件商店。同时对所有敏感权限都要明确提示用户(类似于插件想要读取剪贴板时候的浏览器提示)。

via: https://mattfrisbie.substack.com/p/spy-chrome-extension

### 2024-02-06[组件库]

daisyui 是一个 tailwindcss 的组件库，它提供了一些常用的组件，比如按钮，表单，卡片等等。

和其他组件库不同的是，它的组件是基于 tailwindcss 的，作为 tailwindcss 的插件进行安装。

```js
// tailwind.config.js
module.exports = {
  //...
  plugins: [require("daisyui")],
}
```

使用的时候，你可以直接在 html 中使用 tailwindcss 的类名，然后就可以使用这些组件了。 而不需要像其他组件库一样引入组件。

```html
<button class="btn">Button</button>
<button class="btn btn-primary">Button</button>
<button class="btn w-64 rounded-full">Button</button>
```

原子化的类名，让你可以更加灵活地使用组件。

via: https://github.com/saadeghi/daisyui

### 2024-02-03[工具]

rspack 出的辅助工具，可以帮你分析项目信息，打包信息，帮助你更好地了解项目的构建情况，做出优化决策。

lucifer PS：如果你也在做工具，不妨参考这个工具来做一个自己的辅助工具，帮助开发者更好地使用你的工具，同时也方便你收集用户的使用情况，定位问题等等。

via: https://rsdoctor.dev/zh/guide/start/intro

### 2024-02-02[工具]

openai 出的文字生成视频的工具，可以生成文字对应的视频，可以用来做一些文字生成的视频，比如一些短视频，或者一些文字解说的视频。

大家可以根据 demo 体验一下，效果非常的惊艳！

via: https://openai.com/sora

### 2024-02-01[工具]

亚马逊出品的 JavaScript 运行时，是 V8，quickjs 的竞品，据说速度更快，有需要的可以看看。

via: https://github.com/awslabs/llrt



## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://p.ipic.vip/bp35i7.jpg">

