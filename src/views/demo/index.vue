<template>
  <div class="demo">

  </div>
</template>

<script>
import { demo } from '@/api/demo'

export default {

  data() {
    return {
      demoText: ''
    };
  },

  methods: {
    init() {
      demo({'test':'demo'})
    }
  },
  created() {
    this.init();
  }
};
</script>

<style lang="less">

</style>
