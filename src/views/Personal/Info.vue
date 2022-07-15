<template>
  <div>
    <van-nav-bar
      title="个人信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      style="color: #000"
    >
    </van-nav-bar>
    <van-cell is-link @click="showPopup" class="info_avatar">
      头像
      <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
    </van-cell>
    <van-popup v-model="show">
      <van-button to="/avater">修改头像</van-button>
      <van-image  
        src="https://img01.yzcdn.cn/vant/apple-3.jpg"
        style="width: 80vw; border-radius: 25px"
      />
    </van-popup>
    <van-cell center title="昵称" value="内容"  is-link	/>
    <van-cell center title="性别" value="内容"  is-link	/>
    <van-cell center title="手机号" value="内容"  is-link	/>
    <van-cell center title="邮箱" value="内容"  is-link	/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    onClickLeft() {
      this.$router.push("/personal");
      // this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.info_avatar {
  line-height: 40px;
  position: relative;
  .van-image {
    position: absolute;
    width: 45px;
    right: 10px;
    border-radius: 5px;
  }
}
</style>