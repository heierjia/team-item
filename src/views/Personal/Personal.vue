<template>
  <div class="my-container">
    <div class="header">
      <van-nav-bar>
        <template #right>
          <van-icon
            name="bullhorn-o"
            size="30"
            color="#000"
            @click.native.prevent="$router.push('/message')"
          />
          <span>&nbsp;&nbsp;&nbsp;</span>
          <van-icon
            name="setting-o"
            size="30"
            color="#000"
            @click.native.prevent="$router.push('/setup')"
          />
        </template>
      </van-nav-bar>
      <div class="header-top">
        <div class="left">
          <van-image
            v-if="userInfo.avatar"
            :src="userInfo.avatar"
            fit="fill"
            round
            class="img-tx"
            @click="$router.push('/info')"
          />
          <div v-else class="img-tx">点击上传头像</div>
          <div>
            <span class="name">{{ userInfo.uname }}</span>
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
    <van-cell title="我的数字藏品" is-link to="/MyDigitalCollection" />
    <van-cell title="我的钱包" is-link to="/MyPurse" />
    <van-cell title="在线客服" is-link to="/OnlineService" />
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
  created() {
    // 初始化的时候，如果用户登录了，我才请求获取当前登录用户的信息
    // let user = localStorage.user || this.$store.state;
    // if (!this.user) {
    //   this.$toast("获取数据失败");
    // } else {
    //   this.$router.push("/login");
    // }
  },
  mounted() {
    // location.reload();
    this.getUserInfo();
  },
  methods: {
    ...mapMutations(["saveUsername", "useDetails"]),
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
      let user = localStorage.user || this.$store.state;
      // let user = this.$store.state;
      console.log("获取信息", user);
      if (user) {
        let url = `/getinfo?phone=${user}`;
        // let url = '/Data/userInfo.json'
        this.axios.get(url).then((res) => {
          console.log("result", res);
          this.userInfo = res.data.data[0];
          console.log("useDetails", this.userInfo);
          this.$store.commit("useDetails", this.userInfo);
        });
      } else {
        this.$router.push("/login");
      }
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
          localStorage.removeItem("user");
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
    height: 200px;
    padding: 10px 10px 15px;
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
