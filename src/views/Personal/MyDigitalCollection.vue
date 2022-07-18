<template>
  <div>
    <van-nav-bar @click.native="$router.push('/personal')" :border="false">
      <template #left>
        <van-icon style="font-size: 20px" color="black" name="arrow-left" />
      </template>
      <template #title>
        <span style="color: black">我的数字藏品</span>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>