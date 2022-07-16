<template>
  <div>
    <!-- <el-card style="margin: 20px 0"></el-card>
    <el-card style="margin: 20px 0"></el-card> -->
    <el-button type="primary" icon="el-icon-plus">添加spu</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="index" label="序号" width="180" align="center">
      </el-table-column>
      <el-table-column prop="name" label="spu名称" width="180">
      </el-table-column>
      <el-table-column prop="address" label="spu描述"> </el-table-column>
      <el-table-column prop="date" label="spu操作">
        <template slot-scope="{ row, $index }">
          <el-button type="success" icon="el-icon-plus" size="mini"></el-button>
          <el-button type="warning" icon="el-icon-edit" size="mini"></el-button>
          <el-button type="info" icon="el-icon-info" size="mini"></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination
      :current-page.sync="currentPage2"
      :page-sizes="[3, 5, 10]"
      :page-size="3"
      layout="sizes, prev, pager, next"
      :total="23"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Spu",
  data() {
    return {
      tableData: [],
    };
  },
  mounted() {
    this.getSpu();
  },
  methods: {
    getSpu() {
      this.axios.get("/test.json/spu.json").then((res) => {
        console.log(res);
        this.tableData = res.data.tableData;
      });
    },
  },
};
</script>

<style></style>
