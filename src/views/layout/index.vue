<template>
    <div class="layout_container">
      <router-view></router-view>
      <van-tabbar v-model="active">
        <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/qa" icon="search">问答</van-tabbar-item>
        <van-tabbar-item replace to="/video" icon="video-o">视频</van-tabbar-item>
        <van-tabbar-item replace to="/my" icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>

</style>
