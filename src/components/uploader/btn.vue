<template>
  <label class="uploader-btn" ref="btn" v-show="support">
    <slot></slot>
  </label>
</template>

<script setup>
import { inject, nextTick, onMounted, ref } from "vue"
const uploader=inject("uploader")
const support=ref(true)

const props=defineProps({
  directory: {
    type: Boolean,
    default: false
  },
  single: {
    type: Boolean,
    default: false
  },
  attrs: {
    type: Object,
    default () {
      return {}
    }
  }
})
const btn=ref(null)
onMounted(()=>{
  support.value=uploader.uploader.support
  uploader.uploader.assignBrowse(btn.value, props.directory, props.single, props.attrs)
})
</script>

<style>
  .uploader-btn {
    display: inline-block;
    position: relative;
    padding: 4px 8px;
    font-size: 100%;
    line-height: 1.4;
    color: #666;
    border: 1px solid #666;
    cursor: pointer;
    border-radius: 2px;
    background: none;
    outline: none;
  }
  .uploader-btn:hover {
    background-color: rgba(0, 0, 0, .08);
  }
</style>