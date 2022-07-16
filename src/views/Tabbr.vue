<template>
  <div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="我的">
        <img slot="icon" src="@/assets/BTC_jiaohuan-2@3x.png" />
        我的
      </mt-tab-item>
      <mt-tab-item id="钱包">
        <img slot="icon" src="@/assets/gerenzhongxin_qianbao@3x.png" />
        钱包
      </mt-tab-item>
      <mt-tab-item id="">
        <img slot="icon" src="@/assets/gerenzhongxin_gengsuo@3x.png" />
        
      </mt-tab-item>
      <mt-tab-item id="消息">
        <img slot="icon" src="@/assets/gerenzhongxin_xaioxi@3x.png" />
        消息
      </mt-tab-item>
      <mt-tab-item id="设置">
        <img slot="icon" src="@/assets/gerenzhongxin_shezhi@3x.png" />
        设置
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
   data() {
     return {
       selected: "1"
     }
   },
};
</script>

<style lang="scss" scoped>
</style>