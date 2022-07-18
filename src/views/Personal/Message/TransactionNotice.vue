<template>
  <div>
    <van-nav-bar :border="false" fixed>
      <template #left>
        <van-icon
          style="font-size: 20px"
          color="black"
          name="arrow-left"
          @click.native="$router.push('/message')"
        />
      </template>
      <template #title>
        <span style="color: black">系统通知</span>
      </template>
    </van-nav-bar>
    <div class="systeminforms">
      <van-pull-refresh
        v-model="isLoading"
        @refresh="onRefresh"
        :head-height="80"
        :animation-duration="1000"
      >
        <template #pulling>
          <p title="单元格" icon="shop-o">下拉即可刷新...</p>
          <p class="timeup">上次更新时间 {{ time }}</p>
        </template>
        <!-- 释放提示 -->
        <template #loosing>
          <p>释放即可刷新...</p>
          <p class="timeup">上次更新时间 {{ time }}</p>
        </template>

        <!-- 加载提示 -->
        <template #loading>
          <van-loading size="24px" type="spinner">
            正在刷新...
            <p class="timeup">上次更新时间 {{ time }}</p></van-loading
          >
        </template>
      </van-pull-refresh>
    </div>
    <van-empty description="暂无通知" style="margin-top:-90vh" />
  </div>
</template>

<script>
import { Toast } from "vant";
import moment from "moment";
export default {
  data() {
    return {
      isLoading: false,
      time: moment().format("MM-DD HH:mm:ss"),
    };
  },
  mounted() {
    this.onRefresh();
  },
  methods: {
    onRefresh() {
      this.isLoading = true;
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.systeminforms {
  margin-top: 40px;
  background-color: rgb(243, 240, 240);
  .van-pull-refresh {
    height: 100vh;
  }
  .timeup {
    font-size: 0.5rem;
    margin-top: -30px;
  }
}
</style>