import Uploader from 'simple-uploader.js'


export function useuploader(options,autoStart,fileStatusText){
    options.initialPaused=!autoStart
    const uploader =new Uploader(options)
    uploader.fileStatusText=fileStatusText

    return {uploader}
}





