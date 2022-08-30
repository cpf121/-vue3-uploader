# Vue3-uploader
之前断点上传一直用的[vue-simple-uploader](https://github.com/simple-uploader/vue-uploader/blob/master/README_zh-CN.md)，最近公司项目升级到vue3了，发现老版本的vue-simple-uploader用不了了，模仿着源代码改了改。使用[demo](https://github.com/cpf121/upload-demo)

## 用法
    npm i vue3-uploader
main.js
```js
    import {uploader} from 'vue3-uploader'
    const app=createApp(App)
    app.use(uploader)
