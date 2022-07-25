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
}



