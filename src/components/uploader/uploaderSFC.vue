<template>
    <div class="uploader">
        <slot :files="files" :file-list="fileList" :started="started">
        <uploader-unsupport></uploader-unsupport>
        <uploader-drop>
            <p>Drop files here to upload or</p>
            <uploader-btn>select files</uploader-btn>
            <uploader-btn :directory="true">select folder</uploader-btn>
        </uploader-drop>
        <uploader-list></uploader-list>
        </slot>
    </div>
</template>
<script setup>

import UploaderBtn from './btn.vue'
import UploaderDrop from './drop.vue'
import UploaderUnsupport from './unsupport.vue'
import UploaderList from './list.vue'

import { ref } from 'vue';
import {useuploader,allEvent} from './uploader.js'
const props=defineProps({
    options: {
        type: Object,
        default () {
          return {}
        }
    },
    autoStart: {
        type: Boolean,
        default: true
    },
    fileStatusText: {
        type: [Object, Function],
        default () {
            return {
                success: 'success',
                error: 'error',
                uploading: 'uploading',
                paused: 'paused',
                waiting: 'waiting'
            }
        }
    }
})
const emit=defineEmits(["fileAdded","filesAdded"])

const files=ref([])
const fileList=ref([])
const started=ref(false)

let {uploader}=useuploader(props.options,props.autoStart)

//文件添加完成事件
const handleFileAdded=function(file){
    emit('fileAdded',file)
    if(file.ignored){
        return false
    }
}

//文件夹添加完成事件
const handleFilesAdded=function(files, fileList){
    emit('filesAdded',files, fileList)
    if(files.ignored||fileList.ignored){
        return false
    }
}

//移除文件事件
const handleFileRemoved=function(file){
    files.value=uploader.files
    fileList.value=uploader.fileList
}

//文件添加完成事件
const handleFileSubmitted=function(){
    files.value=uploader.files
    fileList.value=uploader.fileList
    if(props.autoStart){
        uploader.upload()
    }
}

uploader.on('catchAll',allEvent)
uploader.on('fileAdded',handleFileAdded)
uploader.on('filesAdded',handleFilesAdded)
uploader.on('fileRemoved',handleFileRemoved)
uploader.on("filesSubmitted",handleFileSubmitted)
onUnmounted(()=>{
    uploader.off("catchAll",allEvent)
    uploader.off("fileAdded",handleFileAdded)
    uploader.off('filesAdded',handleFilesAdded)
    uploader.off('fileRemoved',handleFileRemoved)
    uploader.off("filesSubmitted",handleFileSubmitted)
})
</script>

<style>
.uploader {
    position: relative;
}
</style>