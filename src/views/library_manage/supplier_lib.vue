<template>
  <div class="app-container">
    <el-tabs v-model="activeName2" type="card">
      <el-tab-pane label="货物类" name="first">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-input placeholder="请输入供应商名称" style="width:300px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button type="primary" @click="onSubmit">添加供应商</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="tableData">
          <el-table-column prop="number" label="序号" width="50">
          </el-table-column>
          <el-table-column prop="proname" label="供应商名称">
          </el-table-column>
          <el-table-column prop="procurement" label="联系人">
          </el-table-column>
          <el-table-column prop="stage" label="手机号">
          </el-table-column>
          <el-table-column prop="procurementmet" label="状态">
          </el-table-column>
          <!--<el-table-column prop="agency" label="添加人">-->
          <!--</el-table-column>-->
          <!--<el-table-column prop="principal" label="添加时间">-->
          <!--</el-table-column>-->
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="text">管理联系人</el-button>
              <el-button type="text">移除供应商</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="服务类" name="second">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-input placeholder="请输入供应商名称" style="width:300px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button type="primary" @click="onSubmit">添加供应商</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="tableData">
          <el-table-column prop="number" label="序号" width="50">
          </el-table-column>
          <el-table-column prop="proname" label="供应商名称">
          </el-table-column>
          <el-table-column prop="procurement" label="联系人">
          </el-table-column>
          <el-table-column prop="stage" label="手机号">
          </el-table-column>
          <el-table-column prop="procurementmet" label="状态">
          </el-table-column>
          <!--<el-table-column prop="agency" label="添加人">-->
          <!--</el-table-column>-->
          <!--<el-table-column prop="principal" label="添加时间">-->
          <!--</el-table-column>-->
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="text">管理联系人</el-button>
              <el-button type="text">移除供应商</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="工程类" name="three">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-input placeholder="请输入供应商名称" style="width:300px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button type="primary" @click="onSubmit">添加供应商</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="tableData">
          <el-table-column prop="number" label="序号" width="50">
          </el-table-column>
          <el-table-column prop="proname" label="供应商名称">
          </el-table-column>
          <el-table-column prop="procurement" label="联系人">
          </el-table-column>
          <el-table-column prop="stage" label="手机号">
          </el-table-column>
          <el-table-column prop="procurementmet" label="状态">
          </el-table-column>
          <!--<el-table-column prop="agency" label="添加人">-->
          <!--</el-table-column>-->
          <!--<el-table-column prop="principal" label="添加时间">-->
          <!--</el-table-column>-->
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="text">管理联系人</el-button>
              <el-button type="text">移除供应商</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      const item = {
        number: '1',
        proname: 'lenovo公司',
        procurement: '钱钱钱',
        stage: '88888888888',
        artime: '2017-01-18',
        sabtime: '2017-11-18',
        procurementmet: '正常',
        agency: '新华国际招标有限公司',
        principal: '张东强',
//        entrusttime: '管理联系人',
        tel: '88888888888'
      };
      return {
        tableData: Array(4).fill(item),
        activeName2: 'first',
      }
    },
    methods: {
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    }
  };
</script>
<style scoped>
  .manageage{
    margin-top: 10px;
    padding-left: 980px;
  }

</style>
