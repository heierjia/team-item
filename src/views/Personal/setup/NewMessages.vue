<template>
  <div>
    <van-nav-bar :border="false">
      <template #left>
        <van-icon
          style="font-size: 20px"
          color="black"
          name="arrow-left"
          @click.native="$router.push('/setup')"
        />
      </template>
      <template #title>
        <span style="color: black">新消息通知</span>
      </template>
    </van-nav-bar>
    <van-cell-group title="通知开关">
      <van-cell title="接收系统消息通知">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-switch
            v-model="SystemInforms"
            size="20px"
            active-color="#73c991"
          />
        </template>
      </van-cell>
      <van-cell title="接收交易消息通知">
        <template #right-icon>
          <van-switch
            v-model="TransactionNotice"
            size="20px"
            active-color="#73c991"
          />
        </template>
      </van-cell>
      <van-cell title="接收活动消息通知">
        <template #right-icon>
          <van-switch
            v-model="EventNotification"
            size="20px"
            active-color="#73c991"
          />
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group title="声音与振动">
      <van-cell title="消息提示音" value="跟随系统" is-link />
      <van-cell title="消息振动" value="跟随系统" is-link />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      EventNotification: true,
      SystemInforms: true,
      TransactionNotice: true,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>