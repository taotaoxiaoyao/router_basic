<template>
    <div id="user">
      <h2>user页面</h2>
      <router-link style="padding: 0 30px;" :to="'/user/' + item.tip + '/' + item.id" key="index" v-for="item, index in users">{{item.name}}</router-link>
      <div class="user-info" v-if="userInfo">
        <p>ID：{{userInfo.id}}</p>
        <p>Name：{{userInfo.name}}</p>
      </div>
      <div class="info-list" v-if="userInfo">
        <!--<router-link exact to="?info=follow" tag="li">{{userInfo.name}}的关注</router-link>-->
        <!--<router-link exact to="?info=me" tag="li">{{userInfo.name}}的分享</router-link>-->
        <router-link exact :to="{ path: '', query: {info : 'follow'}}" tag="li">{{userInfo.name}}的关注</router-link>
        <router-link exact :to="{ path: '', query: {info : 'me'}}" tag="li">{{userInfo.name}}的分享</router-link>
      </div>
      <div v-if="$route.query.info">
        {{$route.query}}
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
      data () {
        return {
          users: [
            {
              id: 1,
              tip: 'vip',
              name: 'leo'
            }, {
              id: 2,
              tip: 'common',
              name: 'zn'
            }, {
              id: 3,
              tip: 'other',
              name: 'jj'
            }
          ],
          userInfo: null
        }
      },
      watch: {
        $route (to, from) {
          console.log('监控route')
          this.showUser()
        }
      },
      created () {
        console.log('created')
        this.showUser()
      },
      methods: {
        showUser () {
          let id = this.$route.params.userId
          if (id) {
            this.userInfo = this.users.filter((user) => {
              return user.id == id
            })[0]
          }
        }
      }
    }
</script>
