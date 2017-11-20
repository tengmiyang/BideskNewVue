<template>
  <div id="tmpl">

    <!--功能菜单-->
    <el-container style="height: 500px;">

      <!--表格信息-->
      <el-container>
        <el-main>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="项目名称">
              <el-input v-model="formInline.user" placeholder="项目名称"></el-input>
            </el-form-item>
            <el-form-item label="项目编号">
              <el-input v-model="formInline.user" placeholder="项目编号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
          <el-table :data="tableData">
            <el-table-column prop="number" label="序号" width="50">
            </el-table-column>
            <el-table-column prop="proname" label="立项名称" width="260">
            </el-table-column>
            <el-table-column prop="procurement" label="采购项目名称" width="260">
            </el-table-column>
            <el-table-column prop="stage" label="包件/标段" width="100">
            </el-table-column>
            <el-table-column prop="agency" label="委托单位" width="160">
            </el-table-column>
            <el-table-column prop="principal" label="项目负责人">
            </el-table-column>
            <el-table-column prop="entrusttime" label="委托时间">
            </el-table-column>
          </el-table>
        </el-main><br>
        <div class="block">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000">
          </el-pagination>
        </div>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  export default {
    name: 'preparapro',
    data() {
      const item = {
        number: '1',
        proname: '燃气报警设备维修台PRO-124568',
        procurement: '南京建工集团燃气报警设备维修台',
        stage: '-',
        agency: '新华国际招标有限公司',
        principal: '张东强',
        entrusttime: '2016-05-13 88.88.88'
      };
      return {
        tableData: Array(7).fill(item),
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style scoped>

  .el-header {
    background-color: #608FC7;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
    background-color: #608FC7;
    height: 100vh;
  }

  .el-submenu {
    background-color: #608FC7;
    font-size: 20px;
    color: #fff;
  }

  .el-menu-item {
    background-color: rgb(96, 143, 199);
    color: #fff;
  }

  .block {
    position: absolute;
    top: 85vh;
    right: 0;
  }
</style>
