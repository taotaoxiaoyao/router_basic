<template>
  <div id="app">
    <h1 class="m-center">路由学习</h1>
    <div class="nav-box">
      <input type="button" value="前进" @click="forwardHandler"/>
      <input type="button" value="后退" @click="backHandler"/>
      <input type="button" value="go" @click="goHandler"/>
      <input type="button" value="push" @click="pushHandler"/>
      <input type="button" value="replace" @click="replaceHandler"/>
      <ul class="nav clearfix">
        <!--<li>-->
          <!--<a href="/home">主页</a>-->
          <router-link to="/" exact tag="li" event="mouseover">
            <i class="fa fa-home"></i>
            <span>主页</span>
          </router-link>
        <!--</li>-->
        <!--<li>-->
          <!--<a href="/about">关于我</a>-->
          <router-link to="/about" tag="li" active-class="activeClass" event="mouseover">
            <i class="fa fa-"></i>
            <span>关于我</span>
          </router-link>
        <!--</li>-->
        <!--<li>-->
          <!--<a href="/document">文档页面</a>-->
          <router-link to="/document" tag="li" event="mouseover">
            <i class="fa fa-"></i>
            <span>文档页面</span>
          </router-link>
        <!--</li>-->
        <router-link to="/hello" tag="li" event="mouseover">hello</router-link>
        <router-link to="/user" tag="li" event="mouseover">user</router-link>
      </ul>
    </div>
    <!--<router-view name="left_nav"></router-view>-->
    <transition :name="transition_name" mode="out-in">
      <router-view class="m-center"></router-view>
    </transition>
  </div>
</template>

<script>
  import 'assets/css/app'
  import 'assets/css/reset'

  export default {
    name: 'app',
    data () {
      return {
        transition_name: ''
      }
    },
    watch: {
      $route (to, from) {
//        console.log(to, from)
        if (to.meta.index < from.meta.index) {
          this.transition_name = 'right'
        } else {
          this.transition_name = 'left'
        }
//        console.log(this.transition_name)
      }
    },
    methods: {
      forwardHandler () {
        this.$router.forward()
      },
      backHandler () {
        this.$router.back()
      },
      goHandler () {
//        this.$router.go(-1)
//        this.$router.go(-2)
//        this.$router.go(2)
        this.$router.go(0)
      },
      pushHandler () {
        this.$router.push('/document')
      },
      replaceHandler () {
        this.$router.replace('/about')
      }
    }
  }
</script>

<style>
   .v-enter {
     opacity: 0;
   }
   .v-enter-to {
     opacity: 1;
   }
   .v-enter-active {
     transition: opacity 1s;
   }
   .v-leave {
     opacity: 1;
   }
   .v-leave-to {
     opacity: 0;
   }
   .v-leave-active {
     transition: opacity 1s;
   }
   .left-enter {
     transform: translateX(100%)
   }
   .left-enter-active, .left-leave-active, .right-enter-active, .right-leave-active {
     transition: 1s
   }
   .left-leave-to {
     transform: translateX(-100%)
   }
   .right-enter {
     transform: translateX(-100%)
   }
   .right-leave-to {
     transform: translateX(100%)
   }
</style>
