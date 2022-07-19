<template>
    <div class="uploader">
        <slot :files="files" :file-list="fileList" :started="started">
        <!-- <uploader-unsupport></uploader-unsupport>
        <uploader-drop>
            <p>Drop files here to upload or</p>
            <uploader-btn>select files</uploader-btn>
            <uploader-btn :directory="true">select folder</uploader-btn>
        </uploader-drop>
        <uploader-list></uploader-list> -->
        </slot>
    </div>
</template>
<script setup>

// import UploaderBtn from '.btn/btn.vue'
// import UploaderDrop from './drop/drop.vue'
// import UploaderUnsupport from './unsupport/unsupport.vue'
// import UploaderList from './list/list.vue'

import { ref } from 'vue';
import useuploader from './uploader.js'
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
const emit=defineEmits(["fileAdded"])

const files=ref([])
const fileList=ref([])
const started=ref(false)

let {uploader}=useuploader(props.options,props.autoStart)
uploader.on('fileAdded',(file)=>{
    emit('fileAdded',file)
})
onUnmounted(()=>{
    uploader.off("catchAll",allEvent)
})
</script>