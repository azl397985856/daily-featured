
# 每日一荐

![](https://p.ipic.vip/0bhil1.jpg)![](https://p.ipic.vip/0bhil1.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## 2024-08

### 2024-08-31[工具]

一个可以自动生成会议记录的 ai 工具，它是通过监控你的麦克风和音频输出来生成会议记录的。目前支持 mac 平台。

![](https://p.ipic.vip/f0v9fq.png)

via: https://www.guillaume.sh/watson

### 2024-08-30[网站]

一个可以将白话文转化为文言文的网站，速度还行，就是一次不能处理太多文本。

via: https://modelscope.cn/studios/chostem/ancient_Chinese_text_generator

### 2024-08-29[新闻]

HTTP 请求有一个幂等性的概念，即无论调用多少次，结果都是一样的。

GET 请求被要求是幂等的，通常它只是获取数据，不会对服务器状态产生影响。但是这只是预期和约定，你仍然可以在 Get 请求做一些修改操作，只是不推荐。

GET 有一个问题，这并不是 GET 协议本身的问题，而是浏览器的问题。由于 GET 参数是拼接在 url 上的，所以 GET 请求的 url 长度有限制，这个限制是由浏览器和服务器共同决定的。

因此如果你想遵守“幂等性”约定对幂等请求使用 GET，但是又需要传递大量参考该怎么办？

普遍的做法是将请求拆分为多个，比如 api1 和 api2。api1 接受 a，b，c 参数，api2 接受 d，e，f 参数。这样就可以避免 url 长度的限制。

现在有了一个新的提案，截止到目前（2024-10-07），它还是一个草案，但是它提供了一个新的方法 QUERY，类似于在 GET 请求中传递 body。有了这个新的方法，你就可以遵守幂等性约定，同时又可以传递大量参数。

一个可能得请求：

```http
QUERY /contacts HTTP/1.1
Host: example.org
Content-Type: example/query
Accept: text/csv

select surname, givenname, email limit 10
```

一个可能的对应响应：

```http
HTTP/1.1 200 OK
Content-Type: text/csv

surname, givenname, email
Smith, John, john.smith@example.org
Jones, Sally, sally.jones@example.com
Dubois, Camille, camille.dubois@example.net
```

如上只是一个示意，至于 “body”的格式是什么样的，还需要进一步的讨论。

via: https://www.ietf.org/archive/id/draft-ietf-httpbis-safe-method-w-body-05.html

### 2024-08-28[网站]

很多开源作者都不知道如何选取一个合适的开源许可证，基本就是随便弄一个，甚至压根没有。虽然说大多数这个东西并不会有什么问题，但是如果你的项目真的有价值，那么这个东西就会变得很重要。而这个工具可以帮助你选择一个合适的开源许可证。你只需要回答几个简单的问题，它就会给你推荐一个合适的开源许可证。

![](https://p.ipic.vip/fj349i.png)

via: https://open-source-license-chooser.toolsnav.top/zh/

### 2024-08-27[网站]

一个特别有趣的吐槽网站，作者真的做了一个大家平时遇到过的垃圾网站，故事的开始是你想通过搜索引擎搜索一个东西。原谅我真的绷不住。

via: https://how-i-experience-web-today.com/

### 2024-08-26[网站]

google 出品的一个文字转播客的网站。上传文字，甚至直接贴一个网站的链接，它就会帮你生成一个播客。

我试了下，大概就是生成了几个主持人的对话。他们会模仿自己拿到了作者的文章投稿，然后进行讨论和介绍。最后你甚至可以对他围绕文章的内容进行提问，或者直接让他帮你总结一下。

实际用起来效果很一般。因为我平时都是将播客转为为文字，而不是将文字转为播客。不过如果你想玩玩，或者想练习下英语，那么这其实是一个不错的选择。另外它的背后是 google 的 ai 技术，所以还是值得期待的。

via: https://notebooklm.google.com/

### 2024-08-25[网站]

一个让你当产品经理的工具。你描述下需求，直接帮你生成前后端代码，并且可以直接运行和部署。

via: https://bolt.new/

### 2024-08-20[工具]

在一个地方牌几张照片，然后它就可以帮你生成一个全景照片，效果还不错。

![](https://p.ipic.vip/i9j3ik.png)

via: https://github.com/krupkat/xpano

### 2024-08-18[私有化部署]

一个开源的在线配音工具，提取视频中的语音，将其转化为其他语言，支持多种语言，支持多种音色。工具特别优化了对中文的支持。

部署好后就可以通过 web 来访问了，效果图：

![](https://p.ipic.vip/f2ui3r.png)

via: https://github.com/Kedreamix/Linly-Dubbing

### 2024-08-17[私有化部署]

一个开源且可自托管的 Heroku / Netlify / Vercel 替代品，可以用来部署你的应用，包含前端应用和后端应用。

via: https://github.com/coollabsio/coolify

### 2024-08-16[新闻]

《ECMAScript 错误安全赋值运算符草案》

之前我们可能会这么写代码：

```js
try {
  // try expression
} catch (error) {
  // catch code
}

// or

promise // try expression
  .catch((error) => {
    // catch code
  })
```

而有了这个特性后就可以这样写：

```js
const [error, data] ?= expression

if (error) {
  // catch code
} else {
  // try code
}
```

它不仅仅免去了嵌套，使得代码更简洁，还避免了一些块级作用域问题。

由于目前还是草案阶段，后续 API 可能会有所变动，甚至根本无法通过。

via: https://github.com/arthurfiorette/proposal-safe-assignment-operator

### 2024-08-15[工具]

一个 TTS 工具，可以将文字转化为语音，支持多种语言，支持多种音色。

![](https://p.ipic.vip/dqp7qq.png)

via: https://tiktokvoice.net/

### 2024-08-14[工具]

部分代码工具提供了动态 IP， 你可以自己选择 IP 地址。这款工具的优势在于 IP 可以更加精确，目前可以精确到城市级别。另外有多种收费规则，基于使用量，基于时间收费等。

via: https://www.proxy302.com/features/

### 2024-08-12[好文]

中国的高级资格「系统架构设计师」的考试应该如何准备，这篇文章给出了一些建议，比如要了解考试的内容，要有一定的实践经验，要有一定的技术深度等等。

via: https://nekonull.me/posts/ruankao-architect/#

### 2024-08-11[工具]

ChatTTS 是一个 ai 工具，可以将文字转化为语音，支持多种语言，支持多种音色。

其最大的特点是支持笑声，停顿等等，让语音听起来更加自然。基本上听不出来是机器生成的，而就像是真人在说话。这让我不免想到将来反诈骗是不是更加困难了。

如果你不想私有化部署，只是想试试，这里有一些基于它的衍生品，大家可以直接尝试使用，via: https://github.com/libukai/Awesome-ChatTTS

虽然目前的用法需要你输入控制字符 [laugh_0] [break_4] 等等，但是我相信不久的将来，它就可以根据上下文和预制的一些参数自动插入控制字符，而最大限度减少人为的参与。

via: https://github.com/2noise/ChatTTS

### 2024-08-02[工具]

Stirling PDF 是一个自托管的 pdf 工具，它可以帮助你修改，合并，转化 pdf 文件。

![](https://p.ipic.vip/r13cl5.png)

![](https://p.ipic.vip/svq13w.png)

via: https://github.com/Stirling-Tools/Stirling-PDF

### 2024-08-01[好文]

openai 官方提供的 node 版本的 sdk，可以方便的调用 openai 的 api，支持所有的 model，比如 gpt-3.5-turbo。

```ts
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

async function main() {
  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  });
}

main();
```

同时也支持上传文件。

```ts
const fileList = [
  createReadStream('/home/data/example.pdf'),
  ...
];

const batch = await openai.vectorStores.fileBatches.uploadAndPoll(vectorStore.id, fileList);
```

via: https://github.com/openai/openai-node




## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字`脑洞前端`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 `脑洞前端` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://p.ipic.vip/bp35i7.jpg">

