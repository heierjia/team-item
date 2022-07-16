<template>
  <div>
  <div v-if="item">
    <van-nav-bar
      @click.native="onClickLeft"
      style="background-color: #3090ec"
      :border="false"
    >
      <template #left>
        <van-icon style="font-size: 20px" color="white" name="arrow-left" />
      </template>
      <template #title>
        <span style="color: white">个人信息</span>
      </template>
    </van-nav-bar>
    <van-cell is-link @click="showPopup" class="info_avatar">
      头像
      <van-image :src="item.avatar" />
    </van-cell>
    <van-popup v-model="show">
      <van-button to="/avater">修改头像</van-button>
      <van-image
        :src="item.avatar"
        style="width: 80vw; border-radius: 25px"
      />
    </van-popup>
    <van-cell center title="昵称" :value="item.user_name" is-link />
    <van-cell center title="性别" :value="(item.gender) ? '男' : '女' " is-link />
    <van-cell center title="手机号" :value="item.phone" is-link />
    <van-cell center title="邮箱" :value="item.email" is-link />
  </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex';
export default {
  // ...mapState(['userInfo']),
  computed: {},
  data() {
    return {
      show: false,
      item: null,
    };
  },
  mounted() {
    // console.log("userInfo", this.$store.state.userInfo);
    for (let item of this.$store.state.userInfo) {
      console.log(item);
       this.item = item 
    }
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
  .icon-back {
    position: absolute;
    left: 2px;
    top: 15px;
  }
}
</style>