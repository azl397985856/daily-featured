
# 每日一荐

![](https://p.ipic.vip/0bhil1.jpg)![](https://p.ipic.vip/0bhil1.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2023-05

### 2023-05-31[saas]

一个 saas 工具， 可以所见即所得地协作创建自己的网站，微小团队可以免费使用，可以用它接私活？

另外这个网站有很多功能是暂时没有的（比如 Git 集成），但是却出现在了宣传文章里。让我想起来了”新闻稿导向型开发”。即先出新闻稿，然后倒推。不过这个开发模式是假设产品开发出来了，要发新闻稿。而人家是真的发了新闻稿。

via: https://dynaboard.com/features

### 2023-05-23[工具]

文字转语音工具吗，特点是可以插入笑声，哭泣声等。

目前支持的特性：

- [laughter]
- [laughs]
- [sighs]
- [music]
- [gasps]
- [clears throat]
- -or ... for hesitations
- ♪ for song lyrics
- CAPITALIZATION for emphasis of a word
- [MAN] and [WOMAN] to bias Bark toward male and female speakers, respectively

使用示例：

```py
from bark import SAMPLE_RATE, generate_audio, preload_models
from scipy.io.wavfile import write as write_wav
from IPython.display import Audio

# download and load all models
preload_models()

# generate audio from text
text_prompt = """
     Hello, my name is Suno. And, uh — and I like pizza. [laughs] 
     But I also have other interests such as playing tic tac toe.
"""
audio_array = generate_audio(text_prompt)

# save audio to disk
write_wav("bark_generation.wav", SAMPLE_RATE, audio_array)
  
# play text in notebook
Audio(audio_array, rate=SAMPLE_RATE)
```

如果你想直接用，也没有这种复杂的感情需求，那么可以使用一个免费的文字转语音网站：https://ttsmaker.com/zh-cn  这个网站也支持多种语言。

![](https://p.ipic.vip/h2bvwd.png)

via ： https://github.com/suno-ai/bark

### 2023-05-22[工具]

ezno 和 esno 类似都可以代替 txc 的工具，基于 esbuild 来编译 TypeScript ，因此速度更快，主打的就是一个速度。使用方法很简单，本来用 tsc 的，直接替换为 ezno 或者 esno 即可。

via: 

- https://github.com/kaleidawave/ezno
- https://github.com/esbuild-kit/esno

### 2023-05-21[教程]

教你使用  Github Action 的一个文章，特色是交互式的网站。看完这篇教程，常见的 Action 都可以模仿它的 example 写出来。

左边是文章，右边是代码，鼠标移到文章上，会在代码中对应位置进行高亮处理。 上次看这种文章还是看的 React 的教程。

这种网站做起来比单纯写一篇文章累很多， 这我深有体会。对于读者来说， 这种效果也实实在在更好。



via: https://www.actionsbyexample.com/


### 2023-05-20[库]

用 TypeScript 开发树莓派？devicescript！

DeviceScript将TypeScript开发体验带到了低资源微控制器设备中。

via: https://microsoft.github.io/devicescript/api/settings

### 2023-05-17[工具]

midjourney 是一个 ai 工具，可以根据文字生成图片。最大的卖点就是生成后会给你若干选项， 你可以基于给出的选项不断优化图片使之满足你的预期效果，这是我在其他文字生成图片工具中没有看到的。

话说，已经有自媒体基于它给自己文章配图了。

via: https://docs.midjourney.com/docs/quick-start
### 2023-05-16[工具]

slate 是一个富文本编辑器组件，语雀就是基于它来实现的。

via: https://github.com/ianstormtaylor/slate

另外一个特别火的最新的富文本编辑器是 blocksuite，和 notion 类似，是基于 block 来组织的。

via: https://github.com/toeverything/blocksuite
### 2023-05-15[工具]

Easydict 是一个简洁易用的翻译词典 macOS App，能够轻松优雅地查找单词或翻译文本。Easydict 开箱即用，能自动识别输入文本语言，支持输入翻译，划词翻译和 OCR 截图翻译，可同时查询多个翻译服务结果，目前支持有道词典，🍎苹果系统翻译，DeepL，谷歌，百度和火山翻译。

via: https://github.com/tisfeng/Easydict

### 2023-05-13[工具]

dify 是一个支持快速根据模板生成基于 chatgpt 应用的一个网站。 也可以 fork 到自己的仓库通过修改代码的方式进行定制。默认提供 200 次免费调用额度（一般都是不够用的）。

![](https://p.ipic.vip/u4jizn.png)

网站预览图：

![](https://p.ipic.vip/heah66.png)

via: https://cloud.dify.ai/datasets

另外有一个类似的工具，它也提供了类似的方式，不过 chatllm 是没有服务器的（也就不需要 openai 的秘钥了），更牛逼了，可以直接本地化部署， 一切都在浏览器中运行，并使用 WebGPU 加速。via: https://mlc.ai/web-llm/。



## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://p.ipic.vip/bp35i7.jpg">

