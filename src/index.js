import Uploader from './components/uploader/uploaderSFC.vue'
import UploaderBtn from './components/uploader/btn.vue'
import UploaderDrop from './components/uploader/drop.vue'
import UploaderUnsupport from './components/uploader/unsupport.vue'
import UploaderList from './components/uploader/list.vue'
import UploaderFiles from './components/uploader/files.vue'
import UploaderFile from './components/uploader/file.vue'

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

export {uploader}

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