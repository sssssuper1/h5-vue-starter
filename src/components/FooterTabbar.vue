<template>
  <van-tabbar route
              :safe-area-inset-bottom="true">
    <van-tabbar-item icon="home-o"
                     replace
                     to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="orders-o"
                     replace
                     to="/article">列表</van-tabbar-item>
    <van-tabbar-item icon="user-o"
                     replace
                     to="/mine">个人</van-tabbar-item>
  </van-tabbar>

</template>
<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'FooterTabbar',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
}
</script>
