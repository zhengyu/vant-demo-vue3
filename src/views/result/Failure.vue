<!--
 * @Name: 失败页面
 -->

<template>
  <div class="content">
    <van-icon name="clear" size="100" color="#e64340" />
    <div class="message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      message: ''
    }
  },
  created () {
    this.message = (this.$route.params || {}).message || ''
  },
  methods: {}
}
</script>
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}
.message {
  text-align: center;
  margin: 20px;
  white-space: pre-line;
}
</style>
