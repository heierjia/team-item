<template>
  <div>
    <div v-if="item">
      <van-nav-bar @click.native="$router.push('/personal')" :border="false">
        <template #left>
          <van-icon style="font-size: 20px" color="black" name="arrow-left" />
        </template>
        <template #title>
          <span style="color: black">个人信息</span>
        </template>
      </van-nav-bar>
      <van-cell is-link @click="showPopup" class="info_avatar" center>
        头像
        <van-image :src="item.avatar" />
      </van-cell>
      <van-popup v-model="show">
        <van-uploader :before-read="beforeRead" upload-text="修改头像" />
        <van-image :src="item.avatar" style="width: 80vw" />
      </van-popup>
      <van-cell center title="昵称" :value="item.user_name" is-link />
      <van-cell
        center
        title="性别"
        :value="item.gender ? '男' : '女'"
        is-link
      />
      <van-cell center title="手机号" :value="item.phone" is-link />
      <van-cell center title="邮箱" :value="item.email" is-link />
    </div>
  </div>
</template>

<script>
// import { CellGroup } from 'vant';
// import { mapState } from 'vuex';
import { Toast } from "vant";
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
      this.item = item;
    }
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    // 返回布尔值
    beforeRead(file) {
      if (file.type !== "image/jpeg") {
        Toast("请上传 jpg 格式图片");
        return false;
      }
      // let  action = "http://localhost:8081/img/avatar/"
      //  console.log('222',file)
      return (this.item.avatar = `/${file.name}`);
    },
    // 返回 Promise
    // asyncBeforeRead(file) {
    //   return new Promise((resolve, reject) => {
    //     if (file.type !== 'image/jpeg') {
    //       Toast('请上传 jpg 格式图片');
    //       reject();
    //     } else {
    //
    //       let img = new File(['foo'], 'bar.jpg', {
    //         type: 'image/jpeg',
    //       });
    //       resolve();
    //     }
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped>
.info_avatar {
  line-height: 60px;
  position: relative;
  .van-image {
    position: absolute;
    height: 55px;
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