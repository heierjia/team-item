<template>
  <div>
    <van-nav-bar :border="false">
      <template #left>
        <van-icon style="font-size: 20px" color="black" name="arrow-left" @click.native="$router.push('/personal')"  />
      </template>
      <template #title>
        <span style="color: black">设置</span>
      </template>
    </van-nav-bar>
    <van-cell title="账户与安全" is-link to="" />
    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
    <van-cell title="新消息通知" is-link to="" />
    <van-cell title="通用" is-link to="" />
    <van-cell title="关于" is-link to="" />
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