<template>
  <div>
    <!-- 标题栏 -->
    <van-nav-bar title="个人中心" id="header" >
      <template #left>
        <van-icon name="/gerenzhongxin_saoyisao.png" size="35" />
      </template>
      <template #right>
        <van-icon name="/BTC_xiaoxi@3x.png" size="35" />
      </template>
    </van-nav-bar>

    <van-tabs
      line-width="0"
      class="menu--tabs"
      style="margin-top: 20px"
      title-active-color="white"
    >
      <van-tab title="加密货币"></van-tab> 
      <van-tab title="股票基金"></van-tab> 
    </van-tabs>

    <van-tabbar v-model="active" fixed class="tabbar">
      <van-tabbar-item icon="wap-home-o">我的</van-tabbar-item>
      <van-tabbar-item icon="pending-payment">钱包</van-tabbar-item>
      <van-tabbar-item
        ><van-image src="/gerenzhongxin_gengsuo@3x.png"></van-image>
      </van-tabbar-item>
      <van-tabbar-item icon="chat-o">消息</van-tabbar-item>
      <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>
<style >
#header {
  background-color: white;
  margin-top: 1em;
  color: black;
}

.menu--tabs .van-tab--active {
  background-color: #4496f9;
  border-radius: 20px;
}
.van-tabs__nav {
  background-color: #f6f7fb;
   border-radius: 20px;
   border: 1px solid #f6f7fb;
}
</style>
