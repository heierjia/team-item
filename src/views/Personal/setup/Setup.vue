<template>
  <div>
    <van-nav-bar :border="false">
      <template #left>
        <van-icon
          style="font-size: 20px"
          color="black"
          name="arrow-left"
          @click.native="$router.push('/personal')"
        />
      </template>
      <template #title>
        <span style="color: black">设置</span>
      </template>
    </van-nav-bar>
    <van-cell title="账户与安全" is-link to="/AccountSecurity" />
    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
    <van-cell title="新消息通知" is-link to="/NewMessages" />
    <van-cell title="通用" is-link to="/general" />
    <van-cell title="关于" is-link to="/guany" />
    <van-cell is-link title="分享" @click="showShare = true" />
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
    />
  </div>
</template>
 
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      showShare: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "朋友圈", icon: "wechat-moments" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
          { name: "小程序码", icon: "weapp-qrcode" },
        ],
      ],
    };
  },
  methods: {
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>