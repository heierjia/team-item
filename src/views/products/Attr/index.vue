<template>
  <div>
    <el-button type="primary" icon="el-icon-plus" style="marign: 10px 0px"
      >添加</el-button
    >

    <!-- 表格组件 data:表格组件将来需要展示的数据---数组类型 -->
    <el-table style="width: 100%" border>
      <el-table-column prop="prop" label="序号" width="80" align="center">
      </el-table-column>
      <el-table-column prop="prop" label="货币种类" width="width">
      </el-table-column>
      <el-table-column prop="prop" label="货币的形式" width="width">
      </el-table-column>
      <el-table-column prop="prop" label="操作" width="width">
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Attr",
};
</script>

<style></style>
