# Vue3-uploader
之前断点上传一直用的[vue-simple-uploader](https://github.com/simple-uploader/vue-uploader/blob/master/README_zh-CN.md)，最近公司项目升级到vue3了，发现老版本的vue-simple-uploader用不了了，模仿着源代码改了改。

## 用法
    npm i vue3-uploader
main.js
```js
import {uploader} from 'vue3-uploader'
const app=createApp(App)
app.use(uploader)
app.mount('#app')
```

然后就能使用uploader,uploader-btn,uploader-drop,uploader-unsupport,uploader-list,uploader-file组件标签了,组件预留了插槽可自定义样式。使用[demo](https://github.com/cpf121/upload-demo)，其中upload-front文件夹内是前端代码，upload-node文件夹内是node接收文件分片和合并分片的代码。
