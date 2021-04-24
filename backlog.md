## 2021-05-07[工具]

如何观察你的电脑上的 DNS 请求呢？

由于 DNS 查询同时使用了 TCP 和 UDP，因此我们可以考虑使用 tcpdump 来进行查看。这虽然可以达到目标，但是 tcpdump 信息比较繁琐。

于是有人制作了一个 DNS 工具 dnspeep（需下载安装），帮助你查看本机发送的所有 DNS 查询。地址：https://github.com/jvns/dnspeep

另外它还搞了两个 DNS 小工具（在线版，无需下载）：

- https://dns-lookup.jvns.ca 一个发送 DNS 请求的工具。
- https://dns-lookup.jvns.ca/trace.html 一个可以查询 DNS 详细工具过程的工具

## 2021-05-06[工具]

![](https://tva1.sinaimg.cn/large/008i3skNly1gptj6rdktlj30go0esq3y.jpg)
