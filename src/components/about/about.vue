<template>
    <div id="about">
      <h2>About页面</h2>
      <ul class="nav clearfix">
        <router-link :to="{name: 'study'}" tag="li" exact>study</router-link>
        <router-link :to="{name: 'work'}" tag="li">work</router-link>
        <router-link :to="{name: 'hobby'}" tag="li">hobby</router-link>
      </ul>
      <router-view class="m-center"></router-view>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {

    }
</script>
