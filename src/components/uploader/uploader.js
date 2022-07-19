import Uploader from 'simple-uploader.js'
import { ref, onMounted, watch, onUnmounted } from 'vue'

export default function useuploader(options,autoStart,fileStatusText){
    options.initialPaused=!autoStart
    const uploader =new Uploader(options)
    uploader.fileStatusText=fileStatusText

    return {uploader}
}



