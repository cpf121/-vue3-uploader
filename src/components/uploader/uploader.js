import Uploader from 'simple-uploader.js'
import { ref, onMounted, watch, onUnmounted } from 'vue'

export default function useuploader(options,autoStart,fileStatusText){
    options.initialPaused=!autoStart
    const uploader =new Uploader(options)
    uploader.fileStatusText=fileStatusText

    return {uploader}
}

const EVENTSMAP = {
    [FILE_ADDED_EVENT]: true,
    [FILES_ADDED_EVENT]: true,
    [UPLOAD_START_EVENT]: 'uploadStart'
}
//注册所有事件
function allEvent(...args){
    const name = args[0]
    const handler = EVENTSMAP[name]
    if(handler){
        if (handler === true) {
            return
        }
        if(proxy[handler]){
            proxy[handler].apply(proxy, args.slice(1))
        }else{
            console.error("方法未注册成功")
        }
    }
    proxy.$emit(name, ...args.slice(1))
}



