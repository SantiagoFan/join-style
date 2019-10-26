<template>
  <div>
    <div class="mobile-demo-menu">
      <div class="mobile-demo-menu__title">
        <p class="mobile-demo-menu__title__main">Join Style</p>
        <p class="mobile-demo-menu__title__meta">移动端预览</p>
      </div>
      <div v-for="title in (Object.keys(navConf))" :key="title">
        <div class="group-container" v-if="title !== '开发指南'">
          <p class="side-nav-title" v-if="title !== '组件'">{{title}}</p>
          <div class="group-items" v-for="nav in navConf[title]" :key="nav.name">
            <template v-if="nav.desc">
              <router-link
                :class="$route.name === nav.name ? 'active' : ''"
                v-if="nav.name"
                :to="{name: nav.name}"
              >{{nav.desc}}
              </router-link>

              <p v-else class="group-title">{{nav.desc}}</p>

              <router-link 
                  v-for="(item,index) in nav.items" :key="index"
                  :to="{name: item.name}"
                  :class="$route.name === item.name ? 'active' : ''"
                >
                <div  class="item" :class="classList[index%10]">
                  <div class="item-name">{{item.desc}}</div>
                  <div class="item-ename">{{item.name}}</div>
                </div>
                </router-link>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navConf from '@/nav.config.json'
export default {
  data () {
    return {
      navConf,
      classList:[
        'bg-cyan','bg-blue','bg-purple','bg-mauve','bg-pink','bg-brown','bg-red','bg-orange','bg-olive','bg-green'
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.mobile-demo-menu {

  background: url('../assets/bg.png') no-repeat;
  background-size: 100% auto;

  min-height: 100vh;
  &__title {
    text-align: center;
    color: #fff;
    height: 3.6rem;
    padding-top: 60px;
    &__main {
      font-size: 23px;
      font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial,
        sans-serif;
    }
    &__meta {
      font-size: 14px;
      color: #455a64;
      margin: 0 0 30px;
    }
  }
}
.group-container {
  padding: .1rem;
  .group-items {    
    margin-bottom: 15px;
    .group-title {
      text-align: center;
      font-size: 18px;
      margin-bottom: 10px;
    }
    .item {
      box-sizing: border-box;
      width: 45%;
      margin: 0 2.5% 22px;
      padding: 16px;
      border-radius: 6px;
      display: inline-block;
      background-image: url('../assets/item_bg.png');
      background-size: cover;
      background-position: 50%;
      position: relative;
      z-index: 1;
      .item-name{
        line-height: .6rem;
        &:first-letter {
            font-weight: 700;
            font-size: 19px;
            margin-right: 1px;
        }
      }
      .item-ename{
        position: relative;
        line-height: .6rem;
        &:before{
          content: "";
          position: absolute;
          display: block;
          width: 22px;
          height: 3px;
          background: #fff;
          bottom: 0;
          right: 0;
          opacity: .5;
        }
        &:after{
          content: "";
          position: absolute;
          display: block;
          width: 55px;
          height: 1px;
          background: #fff;
          bottom: 0;
          right: 22px;
          opacity: .3;
        }
      }
      &:after {
        content: "";
        position: absolute;
        z-index: -1;
        background-color: inherit;
        width: 100%;
        height: 100%;
        left: 0;
        bottom: -10%;
        border-radius: 5px;
        opacity: .2;
        -webkit-transform: scale(.9);
        -ms-transform: scale(.9);
        transform: scale(.9);
      }
    }
  }
}
</style>