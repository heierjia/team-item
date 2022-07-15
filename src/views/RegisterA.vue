<template>
  <div>
    <van-field label="手机号" v-model="phone" center required placeholder="请输入手机号" :border="true" />
    <van-field v-model="sms" center required clearable label="验证码" placeholder="请输入验证码" :border="false" use-button-slot>
      <van-button slot="button" size="small" type="primary" @click="gainCode">{{time}}</van-button>
    </van-field>

  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      isClick: true,
      time: '获取验证码',
      phone: '',
      sms: '',
    }
  },
  methods: {
    // 获取验证码
    async gainCode() {
      if (this.isClick) {
        if (/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(this.phone)) {
          // const res = await sendVerifyCode({ phone: this.phone })  // 获取验证码接口
          this.isClick = false
          let s = 60
          this.time = s + 's'
          let interval = setInterval(() => {
            s--
            this.time = s + 's'
            if (s < 0) {
              this.time = '重新获取'
              this.isClick = true
              clearInterval(interval)
            }
          }, 1000)
        } else {
          Toast.fail('请输入正确的手机号码')
        }
      }
    },
  }



};
</script>

<style scoped>
.icon-back {
  position: absolute;
  left: 2px;
  top: 15px;
}
</style>
