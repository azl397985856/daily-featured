### 1

micro-app 是京东零售推出的一款微前端框架，它基于类 WebComponent 进行渲染，从组件化的思维实现微前端，旨在降低上手难度、提升工作效率。

它是目前接入微前端成本最低的框架，并且提供了 JS 沙箱、样式隔离、元素隔离、预加载、资源地址补全、插件系统、数据通信等一系列完善的功能。

micro-app 与技术栈无关，也不和业务绑定，可以用于任何前端框架。

一句话总结就是：或许是接入最简单的微前端框架。它的部分功能实现挺有意思的，有时间我后面会专门针对他们的部分功能进行讲解。

地址：https://github.com/micro-zoe/micro-app/blob/master/README.zh-cn.md

### 2

https://cpojer.net/posts/building-a-javascript-testing-framework

### 3

https://github.com/facebook/jest/tree/main/packages/jest-worker

### 4

https://github.com/node-fetch/node-fetch

### 5

https://gitee.com/koode/kooder

### 6

https://sqliteonline.com/

#### 7

这个 js 库可以不通过文件后缀用来检测文件类型，它的检测逻辑是：”不同的文件拥有不同的特定前后缀“。比如 png 会以这八个字节开头："\211PNG\r\n\032\n" (89 50 4E 47 0D 0A 1A 0A). PDF 则以 "%PDF" (hex 25 50 44 46) 开头. 这样就可以通过文件头（有时候你是文件结尾）来判断文件类型。

一个典型的用法：

```js
import {fileTypeFromBuffer} from 'file-type';
import {readChunk} from 'read-chunk';

const buffer = await readChunk('Unicorn.png', {length: 4100});

console.log(await fileTypeFromBuffer(buffer));
//=> {ext: 'png', mime: 'image/png'}
```

via: https://github.com/sindresorhus/file-type