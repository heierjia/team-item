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
        <span style="color: black">通用</span>
      </template>
    </van-nav-bar>
    <van-cell title="更换主题模式" value="跟随系统" is-link />
    <van-cell title="更换字体大小" value="跟随系统" is-link />
    <van-cell title="多语言" value="跟随系统" is-link />
    <van-cell title="清除缓存" is-link  />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>