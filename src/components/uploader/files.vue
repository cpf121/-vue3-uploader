<template>
  <div class="uploader-files">
    <slot :files="files">
      <ul>
        <li v-for="file in files" :key="file.id">
          <uploader-file :file="file"></uploader-file>
        </li>
      </ul>
    </slot>
  </div>
</template>
<script setup>
import { computed, inject } from 'vue'
import UploaderFile from './file.vue'
const uploader=inject("uploader")

const files=computed(()=>{
  return uploader.files
})
</script>
<style>
  .uploader-files {
    position: relative;
  }
  .uploader-files > ul {
    list-style: none;
    margin: 0;
    padding: 0
  }
</style>