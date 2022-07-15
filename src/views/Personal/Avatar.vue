<template>
  <div>
    <van-uploader v-model="fileList" multiple />
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [
        { url: "https://img01.yzcdn.cn/vant/leaf.jpg" },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: "https://cloud-image", isImage: true },
      ],
    };
  },
    methods: {
    onOversize(file) {
      console.log(file);
      Toast('文件大小不能超过 500kb');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>