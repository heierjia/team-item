<template>
  <div>
    <van-nav-bar @click.native="$router.push('/message')" :border="false">
      <template #left>
        <van-icon style="font-size: 20px" color="black" name="arrow-left" />
      </template>
      <template #title>
        <span style="color: black">系统通知</span>
      </template>
    </van-nav-bar>
    <van-pull-refresh
      v-model="isLoading"
      success-text="刷新成功"
      default="上次更新时间"
      @refresh.native.prevent="onRefresh"
    >
      <p>刷新次数: {{ count }}</p>
    </van-pull-refresh>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      isLoading: false,
      count: 0,
    };
  },
  mounted() {
    this.onRefresh();
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>