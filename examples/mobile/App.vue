<template>
  <div id="mobile">
    <router-view class="demo-view" :class="{'is-inner':showNav}"></router-view>
  </div>
</template>

<script>
import '~/style/main.css'
import '~/style/icon.css'

export default {
  name: 'mobile-app',
  data () {
    return {
      showNav: false
    }
  },
  watch: {
    $route (to, from) {
      this.showNav = to.name !== 'index'
      if (to.name !== 'index') {
        window.parent.location.hash = to.name //本页修改同时修改pc 页面的地址 =》pc监听刷新地址
      }
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/index';
.demo-view {
  &.is-inner {
    padding-top: 55px;
  }
}
</style>