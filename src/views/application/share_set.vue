<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick" type="card">

      <el-tab-pane label="日程共享" name="first">
        <div class="sharename">
          <el-button type="primary" plain size="small">添加共享人</el-button>
        </div>
        <el-table :data="tableData">
          <el-table-column prop="number" label="序号" width="50">
          </el-table-column>
          <el-table-column prop="proname" label="用户名称">
          </el-table-column>
          <el-table-column prop="procurement" label="手机号码">
          </el-table-column>
          <el-table-column prop="stage" label="部门名称">
          </el-table-column>
          <el-table-column prop="procurementmet" label="共享时间段">
          </el-table-column>
          <el-table-column prop="agency" label="操作">
            <template slot-scope="scope">
              <el-button type="text">更改授权时间</el-button>
              <el-button type="text">取消共享</el-button>
            </template>
          </el-table-column>

        </el-table>
      </el-tab-pane>
      <el-tab-pane label="项目共享" name="second">
        <div class="sharename">
          <el-button type="primary" plain size="small">添加共享人</el-button>
        </div>
        <el-table :data="tableData">
          <el-table-column prop="number" label="序号" width="50">
          </el-table-column>
          <el-table-column prop="proname" label="用户名称">
          </el-table-column>
          <el-table-column prop="procurement" label="手机号码">
          </el-table-column>
          <el-table-column prop="stage" label="部门名称">
          </el-table-column>
          <el-table-column prop="procurementmet" label="共享时间段">
          </el-table-column>
          <el-table-column prop="agency" label="操作">
            <template slot-scope="scope">
              <el-button type="text">更改授权时间</el-button>
              <el-button type="text">取消共享</el-button>
            </template>
          </el-table-column>

        </el-table>
      </el-tab-pane>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

  export default {
    data() {
      const item = {
        number: '1',
        proname: '钱钱钱',
        procurement: '8888888888',
        stage: '采购一部',
        procurementmet: '1988-2-25/2017-11-20'
      };
      return {
        activeName: 'first',
        tableData: Array(4).fill(item),
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    computed: {},
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>

  .el-table .cell{
    text-align: center;
  }
  .sharename{
    padding-left: 980px;
  }
</style>


