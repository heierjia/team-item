<template>
  <div>
    <van-nav-bar :border="false">
      <template #left>
        <van-icon
          style="font-size: 20px"
          color="black"
          name="arrow-left"
          @click.native="$router.push('/setup')"
        />
      </template>
      <template #title>
        <span style="color: black">关于NFT</span>
      </template>
    </van-nav-bar>
    <div class="guany_nft">
      <div class="log">
        <van-image width="35" height="30" src="/logo.png" />
        <h2>NFT</h2>
        <small>Version 1.0</small>
      </div>
    </div>
    <van-cell is-link title="功能介绍" />
    <van-cell is-link title="反馈建议" />
    <van-cell is-link @click="showPopup">检查新版本</van-cell>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showPopup() {
      // this.show = true;
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      setTimeout(() => {
        Toast({
          message: "已是最新版本",
          position: "bottom",
        });
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.guany_nft {
  width: 100%;
  height: 11rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .log {
    width: 5.5rem;
    height: 5rem;
    text-align: center;
    h2 {
      margin-bottom: 0;
    }
  }
}
</style>