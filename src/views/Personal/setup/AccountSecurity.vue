<template>
  <div>
    <div v-if="item">
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
          <span style="color: black">账户与安全</span>
        </template>
      </van-nav-bar>
      <van-cell title="换绑手机号" :value="item.phone" is-link />
      <van-cell title="换绑邮箱账号" :value="item.email" is-link />
      <van-cell title="更换密码" is-link />
      <van-cell title="声音锁" is-link />
      <van-cell title="更多安全设置" is-link />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: null,
    };
  },
  mounted() {
    // console.log("userInfo", this.$store.state.userInfo);
    for (let item of this.$store.state.userInfo) {
      // console.log(item);
      this.item = item;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>