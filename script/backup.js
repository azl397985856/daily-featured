const fs = require('fs')
const path = require("path")

const renderTemplate = (title, body) => `
# 每日一荐

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g8d0sktqrwj30hs07maae.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护当前月份的内容，想看往期内容，可以翻到下方历史汇总部分，然后选择自己感兴趣的月份点进去即可。

## ${title}

${body}

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字\`脑洞前端\`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 \`脑洞前端\` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7he9xdtmyj30by0byaac.jpg">

`

const readme = fs.readFileSync(path.resolve(__dirname, '../README.md')).toString()

const title = readme.match(/新鲜出炉 ((.+))$/m)[1].slice(1, -1)
const body = /(###[\d\D]+)## 历史汇总/mg.exec(readme)[1]


const template = renderTemplate(title, body)

// 写入 backup
fs.mkdirSync(path.resolve(__dirname, `../backup/${title}`))
fs.writeFileSync(path.resolve(__dirname, `../backup/${title}/README.md`), template)

// 更新 summary

const lines = fs.readFileSync(path.resolve(__dirname, '../SUMMARY.md')).toString().split('\n')

lines.splice(1, 0, `- [${title}](backup/${title}/README.md)`)

fs.writeFileSync(path.resolve(__dirname, '../SUMMARY.md'), lines.join('\n'))




