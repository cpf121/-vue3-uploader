import Uploader from './components/uploader.vue'
import UploaderBtn from './components/btn.vue'
import UploaderDrop from './components/drop.vue'
import UploaderUnsupport from './components/unsupport.vue'
import UploaderList from './components/list.vue'
import UploaderFiles from './components/files.vue'
import UploaderFile from './components/file.vue'

const uploader = {
  install,
  Uploader,
  UploaderBtn,
  UploaderDrop,
  UploaderUnsupport,
  UploaderList,
  UploaderFiles,
  UploaderFile
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default uploader

function install (Vue) {
  if (install.installed) {
    return
  }
  Vue.component('uploader', Uploader)
  Vue.component('uploader-btn', UploaderBtn)
  Vue.component('uploader-drop', UploaderDrop)
  Vue.component('uploader-unsupport', UploaderUnsupport)
  Vue.component('uploader-list', UploaderList)
  Vue.component('uploader-files', UploaderFiles)
  Vue.component('uploader-file', UploaderFile)
}