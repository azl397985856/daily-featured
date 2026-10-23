const fs = require("fs");
const path = require("path");

// 把 README 上的最新一期归档到 backup/YYYY-MM/README.md，并更新 SUMMARY.md。
// 在开始写新一期之前运行：node script/backup.js

const renderTemplate = (title, body) => `
# 每日一荐

![](https://p.ipic.vip/0bhil1.jpg)

每天给你推荐一个新奇，好玩，高品质的开源库，好文，观点或言论等。

> 项目主页维护最新一期内容（不定期更新），想看往期内容，可以翻到下方历史汇总部分，选择自己感兴趣的期数点进去。

## ${title}

${body}

## 关注我

我重新整理了下自己的公众号，并且我还给它换了一个名字\`脑洞前端\`，它是一个帮助你打开大前端新世界大门的钥匙 🔑，在这里你可以听到新奇的观点，看到一些技术尝新，还会收到系统性总结和思考。

在这里我会尽量通过图的形式来阐述一些概念和逻辑，帮助大家快速理解，图解是我的目标。

之后我的文章会同步到微信公众号 \`脑洞前端\` ，你可以关注获取最新的文章，并和我进行交流。

另外你可以回复大前端进大前端微信交流群， 回复 leetcode 拉你进 leetcode 微信群，如果想加入 qq 群，请回复 qq。

<img width="300" src="https://p.ipic.vip/bp35i7.jpg">

`;

const readme = fs
  .readFileSync(path.resolve(__dirname, "../README.md"))
  .toString();

// 期标题形如：## 2026-10：世界之窗、文件头与被没收的比特币
const issueMatch = /^## (\d{4}-\d{2})[：:]\s*(.+)$/m.exec(readme);
if (!issueMatch) {
  console.error("README 中没有找到期标题（## YYYY-MM：标题）");
  process.exit(1);
}

const month = issueMatch[1];
const title = `${month}：${issueMatch[2]}`;
const bodyMatch = new RegExp(`(###[\\d\\D]+)## 历史汇总`).exec(readme);
if (!bodyMatch) {
  console.error("README 中没有找到“## 历史汇总”，无法确定期内容边界");
  process.exit(1);
}
const body = bodyMatch[1].trim();

const backupDir = path.resolve(__dirname, `../backup/${month}`);
if (fs.existsSync(backupDir)) {
  console.error(`backup/${month} 已存在，不要重复归档`);
  process.exit(1);
}

fs.mkdirSync(backupDir);
fs.writeFileSync(path.resolve(backupDir, "README.md"), renderTemplate(title, body));

// 更新 summary，插到 [最新] 后面
const summaryPath = path.resolve(__dirname, "../SUMMARY.md");
const lines = fs.readFileSync(summaryPath).toString().split("\n");
const latestIndex = lines.findIndex((l) => l.includes("](./README.md)"));
lines.splice(latestIndex + 1, 0, `- [${title}](backup/${month}/README.md)`);
fs.writeFileSync(summaryPath, lines.join("\n"));

console.log(`已归档 ${title} -> backup/${month}/README.md`);
