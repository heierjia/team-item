<template>
  <div id="register">
    <van-nav-bar
      @click.native="tologin"
      style="background-color: #3090ec"
      :border="false"
    >
      <template #left>
        <van-icon style="font-size: 20px" color="white" name="arrow-left" />
      </template>
      <template #title>
        <span style="color: white">注册</span>
      </template>
    </van-nav-bar>
    <!--  -->
    <!-- 用户注册区 -->
    <van-form>
      <!-- 头像上传 -->
      <van-field name="uploader" label="上传头像">
        <template #input>
          <van-uploader :max-count="1" v-model="uploader" />
        </template>
      </van-field>
      <!--  -->
      <van-cell-group>
        <!-- 手机号码验证 -->
        <van-field
          label="用户名"
          v-model="name"
          center
          required
          placeholder="请输入用户名"
          :border="true"
        />
        <van-field
          @blur.native.capture="check_user"
          label="手机号"
          v-model="phone"
          center
          required
          placeholder="请输入手机号"
          :border="true"
        />
        <van-field
          v-model="sms"
          center
          required
          clearable
          label="验证码"
          placeholder="请输入6位验证码"
          :border="false"
          use-button-slot
        >
          <van-button
            slot="button"
            size="small"
            type="primary"
            @click="gainCode"
            >{{ time }}</van-button
          >
        </van-field>
        <!-- 密码确认 -->
        <van-field
          v-model="password"
          required
          :type="isPassword"
          label="密码"
          placeholder="请输入密码"
        >
          <template #right-icon>
            <van-icon
              name="eye-o"
              @click.native.capture="onPassword"
            /> </template
        ></van-field>
        <van-field
          v-model="password1"
          required
          :type="isPassword"
          label="确认密码"
          placeholder="请再次输入密码"
        >
          <template #right-icon>
            <van-icon
              name="eye-o"
              @click.native.capture="onPassword"
            /> </template
        ></van-field>
      </van-cell-group>
      <!-- 城市选择 -->
      <van-field
        readonly
        clickable
        name="picker"
        :value="value"
        label="选择地区"
        placeholder="点击选择城市"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
      <!-- 同意协议 勾选框 -->
      <input type="CheckBox" name="test" checked />
      <span style="color: #ccc; font-size: 10px">我已阅读并同意</span>
      <span style="color: #009aef; font-size: 10px" size="mini">
        《用户服务协议》
      </span>
      <span style="color: #ccc; font-size: 10px">及</span>
      <span style="color: #009aef; font-size: 10px">《隐私服务》 </span>
    </van-form>
    <!-- 注册按钮 -->
    <div style="margin: 16px">
      <van-button
        round
        block
        type="info"
        native-type="submit"
        @click="onsubmit"
      >
        注册
      </van-button>
    </div>
    <router-link to="/login" content-position="center" style="color: #aaa">
      已有账号,立即登录
    </router-link>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      name: "",
      phone: "",
      sms: "",
      isClick: true,
      time: "获取验证码",
      password: "",
      password1: "",
      isPassword: "password", //密码的type类型
      isText: true,
      uploader: [],
      value: "",
      columns: [
        "福田区",
        "罗湖区",
        "龙岗区",
        "龙华区",
        "宝安区",
        "光明区",
        "南山区",
      ],
      showPicker: false,
    };
  },
  methods: {
    // 获取验证码
    async gainCode() {
      console.log(this.uploader[0].content);
      if (this.isClick) {
        if (this.phone) {
          // const res = await sendVerifyCode({ phone: this.phone })  // 获取验证码接口
          this.isClick = false;
          let s = 60;
          this.time = s + "s";
          let interval = setInterval(() => {
            s--;
            this.time = s + "s";
            if (s < 0) {
              this.time = "重新获取";
              this.isClick = true;
              clearInterval(interval);
            }
          }, 1000);
        } else {
          Toast.fail("验证失败,请检查输入的手机号码");
        }
      }
    },
    // 城市选择确认地址
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    // 返回上一页
    tologin() {
      this.$router.push("/login");
    },
    //检查用户名
    check_user() {
      if (this.phone == "") {
        Toast("手机号不能为空");
        this.$notify({ type: "danger", message: "手机号不能为空" });
        return;
      }
      if (
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(
          this.phone
        )
      ) {
        let url = "/check_phone?phone=" + this.phone;
        this.axios.get(url).then((res) => {
          // console.log(res);
          if (res.data === "exists") {
            Toast("手机号已被注册");
            this.$notify({ type: "danger", message: "手机号已被注册" });
          }
        });
      } else {
        Toast.fail("请输入正确的手机号码");
      }
    },
    //点击切换密码的type类型
    onPassword() {
      this.isText = !this.isText;
      if (this.isText) {
        this.isPassword = "password";
      } else {
        this.isPassword = "text";
      }
    },
    // 提交注册
    onsubmit() {
      if (
        this.name == "" ||
        this.phone == "" ||
        this.sms == "" ||
        this.password == "" ||
        this.password1 == ""
      ) {
        Toast("验证失败！信息未完善");
      } else if (this.password != this.password1) {
        Toast("密码输入两次不一致！");
      } else {
        this.axios
          .post(
            "/register",
            `uname=${this.name}&upwd=${this.password}&phone=${this.phone}&avatar=${this.uploader[0].content}`
          )
          .then((res) => {
            console.log("注册请求", res);
            if (res.data.code == 200) {
              Toast.success("注册成功");
              this.$toast({
                message: "注册完成,跳转登录...",
              });
              this.$notify({
                type: "success",
                message: "注册成功,3s后返回登录",
                duration: 3000,
              });
              // localStorage.setItem("user", this.phone);
              setTimeout(() => {
                this.tologin();
              }, 3000);
            }
          });
      }
    },
  },
};
</script>

<style scoped>
#register {
  text-align: center;
}
.icon-back {
  position: absolute;
  left: 2px;
  top: 15px;
}
</style>
