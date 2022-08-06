<template>
  <div class="uploader-drop" :class="dropClass" ref="drop" v-show="support">
    <slot></slot>
  </div>
</template>
<script setup>
import { inject, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
const uploader=inject("uploader")
const support=ref(true)
onMounted(()=>{
  support.value=uploader.uploader.support
})
const dropClass=ref("")

const onDragEnter=()=>{
  dropClass.value="uploader-dragover"
}

const onDragLeave=()=>{
  dropClass.value=""
}

const onDrop=()=>{
  dropClass.value="uploader-droped"
}
const drop=ref(null)
onMounted(()=>{
  nextTick(()=>{
    uploader.uploader.assignDrop(drop.value)
    uploader.uploader.on('dragenter', onDragEnter)
    uploader.uploader.on('dragleave', onDragLeave)
    uploader.uploader.on('drop', onDrop)
  })
})
onBeforeUnmount(()=>{
  uploader.uploader.off('dragenter', onDragEnter)
  uploader.uploader.off('dragleave', onDragLeave)
  uploader.uploader.off('drop', onDrop)
  uploader.uploader.unAssignDrop(drop.value)
})
</script>
<style>
  .uploader-drop {
    position: relative;
    padding: 10px;
    overflow: hidden;
    border: 1px dashed #ccc;
    background-color: #f5f5f5;
  }
  .uploader-dragover {
    border-color: #999;
    background-color: #f7f7f7;
  }
</style>