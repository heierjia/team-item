<template>
  <div>
    <van-nav-bar :border="false">
      <template #left>
        <van-icon style="font-size: 20px" color="black" name="arrow-left" @click.native="$router.push('/personal')"  />
      </template>
      <template #title>
        <span style="color: black">消息中心</span>
      </template>
    </van-nav-bar>
    <van-cell title="系统通知" icon="volume-o" is-link to="/systeminforms"  value="07月25日" label="项目正式上线"/>
    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
    <van-cell title="交易通知" icon="after-sale" is-link to="/transaction" />
    <van-cell title="活动通知" icon="gift-o" is-link to="/eventnotif" />
    <van-cell title="在线客服" icon="service-o" is-link to="/OnlineService" label="暂无消息"/>
  </div>
</template>
 
<script>
export default {
  methods: {
  },
};
</script>

<style lang="scss" scoped>
</style>