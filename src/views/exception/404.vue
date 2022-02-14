<!--
 * @Name: 404
 -->

<template>
  <div class="empty">
    <van-empty image="error" description="页面走丢了 404" />
  </div>
</template>

<script>
export default {
  name: '404',
  components: {},
  data () { return {} },
  methods: {}
}
</script>

<style lang="less" scoped>
.empty {
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
