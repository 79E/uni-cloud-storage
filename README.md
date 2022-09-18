<div align="center">
  <h3>uni-cloud-storage<h3>
  <h5>uniCloud 云存储进行API化的SDK</h5> 
</div> 

<div align="center">
  <img alt="releases" src="https://img.shields.io/badge/author-79W-blue.svg?style=flat-square&longCache=true">
  <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
    <img alt="node" src="https://img.shields.io/badge/node-%3E=10.9.0-green.svg?style=flat-square&logo=Node.js&longCache=true">
  </a>
    <img alt="license" src="https://img.shields.io/badge/license-MIT-green.svg?style=flat-square&longCache=true">
</div>

### 说明📖

此SDK是对`uni-app-cloud `云存储的API化

仅用于个人项目（官方明确说明不可用于图床相关操作）

官方说明：https://ask.dcloud.net.cn/article/39390

目的：此项目是有一些处理需要交给服务端进行处理所以需要客户端将文件传给服务端后判断是否需要上传等一系列操作

### 安装🔧

需要存在node环境 npm :

```javascript
npm i uni-cloud-storage
```

Yarn :

```javascript
yarn add uni-cloud-storage
```

浏览器 ( script )

```javascript
<script src="https://cdn.jsdelivr.net/gh/79W/uni-cloud-storage@master/dist/index.js"></script>
```

### 使用👋

##### node

`node`环境下 `file`参数需要传入文件`<Buffer>`并且需要传递文件名称:（fileName.png）

```javascript
// 导入包
const UniCloudStorage = require('uni-cloud-storage');
// 初始化(两个必传参数)
const unics = new UniCloudStorage(spaceId, clientSecret);
// 使用
unics.upload(file,fileName?):Promise
```

##### web

将`File`类型文件直接传入就可以了无需传入文件名称

```javascript
// 导入包
<script src="https://cdn.jsdelivr.net/gh/79W/uni-cloud-storage@master/dist/index.js"></script>
<script>
	  // 初始化(两个必传参数)
		const unics = new UniCloudStorage(spaceId, clientSecret);
</script>
```

##### es6

将`File`类型文件直接传入就可以了无需传入文件名称

```javascript
// 导入包
import UniCloudStorage from 'uni-cloud-storage'
```

##### 成功返回值

```json
{
    "success": true,
    "data": {
        "id": "",
        "cdnDomain": "",
        "signature": "",
        "policy": "",
        "accessKeyId": "",
        "ossPath": "021de.png",
        "host": "",
        "target": "https://vkceyugu.cdn.bspapp.com/V1de.png"
    }
}
```

##### 错误返回值

```json
{
    "success": false,
    "error":{
      "code":"uploadFileError",
      "message":"上传文件失败"
    }
}
```

### 感谢🙏

[uni-app](https://dcloud.net.cn/)

### License📖

Lexical is [MIT licensed](https://github.com/79W/uni-cloud-storage/blob/master/LICENSE).
