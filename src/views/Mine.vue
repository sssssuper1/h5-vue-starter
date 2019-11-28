<template>
  <div class='container'>
    <van-cell-group>
      <van-cell title='我的订单' is-link />
      <van-cell title='订单统计' is-link />
    </van-cell-group>
    <footer-tabbar/>
  </div>
</template>
<script>
import { Cell, CellGroup } from 'vant';
import FooterTabbar from 'components/FooterTabbar'
export default {
  name: 'Mine',
  data () {
    return {}
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    FooterTabbar
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>