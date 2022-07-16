<template>
  <div class="my-container">
    <div class="header">
      <van-nav-bar>
        <template #right>
          <van-icon name="bullhorn-o" size="30" color="#000" />
          <span>&nbsp;&nbsp;&nbsp;</span>
          <van-icon name="setting-o" size="30" color="#000" />
        </template>
      </van-nav-bar>
      <div class="header-top" v-for="item in userInfo" :key="item.id">
        <div class="left">
          <van-image
            v-if="item.avatar"
            :src="item.avatar"
            fit="fill"
            round
            class="img-tx"
            @click="$router.push('/info')"
          />
          <div v-else class="img-tx">点击上传头像</div>
          <div>
            <span class="name">{{ item.user_name }}</span>
            <van-button size="mini" round>+ 状态</van-button>
          </div>
        </div>
        <div class="right">
          <van-button size="mini" round @click="$router.push('/info')"
            >编辑资料</van-button
          >
        </div>
      </div>
      <div class="data-stats">
        <van-cell title="收益数据" style="font-size: 20px" />
        <van-grid :column-num="4">
          <van-grid-item icon="records" text="内容管理" />
          <van-grid-item icon="chart-trending-o" text="内容数据" />
          <van-grid-item icon="balance-list-o" text="收益管理" />
          <van-grid-item icon="cash-back-record" text="收益明细" />
        </van-grid>
      </div>
    </div>
    <!-- 单元格组件 -->
    <van-cell title="更多服务" style="font-size: 20px" />
    <van-cell title="我的数字藏品" is-link />
    <van-cell title="我的钱包" is-link />
    <van-cell title="在线客服" is-link />
    <van-cell
      class="logout-cell"
      clickable
      title="退出登录"
      @click.native="onLogout"
    />
  </div>
</template>
<script>
// import { getUserInfo } from "@/api/user";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      userInfo: [], // 用户信息
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  watch: {},
  // created() {
  //   // 初始化的时候，如果用户登录了，我才请求获取当前登录用户的信息
  //   if (this.$store.state.user) {
  //     this.getUserInfo();
  //   }
  // },
  mounted() {
    // location.reload();
    this.getUserInfo();
  },
  methods: {
    ...mapMutations(["saveUsername"]),
    // async loadUser() {
    //   try {
    //     const { data } = await getUserInfo();
    //     this.user = data.data;
    //   } catch (err) {
    //     console.log(err);
    //     this.$toast("获取数据失败");
    //   }
    // },
    getUserInfo() {
      let user = this.$store.state.user;
      if (!user) {
        this.$router.push("/login");
      }
      let url = `http://127.0.0.1:3000/v2/user/getinfo?uname=${user}`;
      this.axios.get(url).then((res) => {
        console.log(res);
        this.userInfo = res.data.data;
        this.$store.commit("userInfo",this.userInfo);
      });
    },
    // 点击退出登录x
    onLogout() {
      // 退出提示
      // 在组件中需要使用 this.$dialog 来调用弹框组件
      this.$dialog
        .confirm({
          title: "是否确认退出",
        })
        .then(() => {
          this.$store.commit("saveUsername", null);
          sessionStorage.removeItem("user");
          this.$router.push("/login");
        })
        .catch((err) => {
          // console.log("取消了执行");
          return;
        });
    },
  },
};
</script>

<style scoped lang="scss">
.my-container {
  .header-top {
    height: 231px;
    padding: 10px 15px 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      .img-tx {
        width: 125px;
        height: 132px;
        border: 2px solid #fff;
        margin-right: 15px;
        border-radius: 50%;
        text-align: center;
        line-height: 132px;
      }
      .name {
        display: block;
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 5rem;
      }
    }
  }
  // 单元格组件
  .logout-cell {
    text-align: center;
    color: #d86262;
  }
}
</style>
