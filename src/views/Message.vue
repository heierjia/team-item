<template>
  <div>
    <!-- vant导航栏 -->
    <van-nav-bar style="background-color: #3090ec">
      <template #left>
        <van-icon @click="back" color="white" name="arrow-left" />
      </template>

      <template #title>
        <span style="color: white">账号信息</span>
      </template>
    </van-nav-bar>

    <div>
      <van-button @click="exit" type="danger" block>退出登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    exit() {
      //退出登录
      this.$dialog
        .confirm({
          title: "确定要退出登录吗",
        })
        .then(() => {
          sessionStorage.removeItem("user");
          this.$router.push({
            path: "/user",
          });
        })
        .catch(() => {
          // on cancel
        });
    },
    back() {
      //返回上一级
      window.history.back();
    },
  },
};
</script>

<style></style>
