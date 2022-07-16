<template>
  <div>
    <el-button type="primary" icon="el-icon-plus" style="marign: 10px 0px"
      >添加</el-button
    >

    <!-- 表格组件 data:表格组件将来需要展示的数据---数组类型 -->

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="index" label="序号" width="180" align="center">
      </el-table-column>
      <el-table-column prop="name" label="货币的种类" width="180">
      </el-table-column>
      <el-table-column prop="address" label="货币的形式"> </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="paimary" icon="el-icon-edit" round>编辑</el-button>
          <el-button
            @click="del(scope.$index)"
            type="danger"
            icon="el-icon-delete"
            round
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- <el-table style="width: 100%" border :data="list" v-if="qb">
      <el-table-column
        type="index"
        label="序号"
        width="80"
        align="center"
        v-for="item in qb"
        :key="item.index"
      >
      </el-table-column> -->
    <!-- <el-table-column prop="prop" label="货币种类" width="width">
      </el-table-column>
      <el-table-column prop="prop" label="货币的形式" width="width">
      </el-table-column>
      <el-table-column prop="prop" label="操作" width="width">
      </el-table-column> -->
    <!-- </el-table> -->
    <!-- 分页器   
     @size-change="handleSizeChange"
      @current-change="handleCurrentChange"-->
    <el-pagination
      style="margin-top: 20px; textalign: center"
      :current-page.sync="currentPage2"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      :pager-count="5"
      layout="sizes, prev, pager, next"
      :total="40"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Attr",
  data() {
    return {
      page: "1",
      limit: 3,
      total: 0,
      list: [],
      qb: null,
      tableData: [],
    };
  },
  mounted() {
    // 获取列表数据的方法
    this.getPageList();
    // this.getData();
  },
  methods: {
    del(index) {
      this.tableData.splice(index, 1);
    },
    getPageList() {
      // // 解构出数据
      // const { page, limit } = this;
      // // let result=awit this.$API.attr.reqattrList(page,limit);
      // if (result.code == 200) {
      //   this.total = result.data.total;
      //   this.list = result.data.list; //看是否是list
      // }
      this.axios.get("/test.json/attr.json").then((res) => {
        console.log("res", res);
        this.tableData = res.data.tableData;
        // console.log("tableData", this.tableData);
      });
    },
    // getData() {
    //   this.axios.get("/test.json/attr1.json").then((res) => {
    //     console.log("546", res);
    //   });
    // },
  },
};
</script>

<style></style>
