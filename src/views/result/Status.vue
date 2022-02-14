<!--
 * @Name: 多状态页面
 -->

<template>
  <div class="content">
    <van-icon :name="info.status.icon" size="100" :color="info.status.color" />
    <div class="message">{{ info.message }}</div>
    <div class="message">患者名：{{ info.name }}</div>
    <div class="message">预约就诊时间：{{ info.visitDate }}</div>
    <div class="message notice-message">请出示此截图给预检分诊工作人员</div>
  </div>
</template>

<script>

const state = {
  '-1': { icon: 'clear', color: '#e64340' },
  '0': { icon: 'checked', color: '#07c160' },
  '1': { icon: 'warning', color: '#e64340' },
}

export default {
  components: {},
  data () {
    return {
      state,
      info: {
        status: state['-1'],
        message: '未知异常',
        visitDate:'',
        name:''
      }
    }
  },
  created () {
    console.info(this.$route.params);
    this.info = {
      status: this.state[((this.$route.params || {}).status) + ''] || this.state['-1'],
      message: (this.$route.params || {}).message || '未知异常',
      visitDate:(this.$route.params || {}).visitDate,
      name:(this.$route.params || {}).name
    }
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

.notice-message {
  color: red;
  font-size: 34px;
}
</style>

