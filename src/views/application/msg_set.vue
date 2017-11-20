<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick" type="card">

      <el-tab-pane label="短信发送设置" name="first">
        <el-table :data="tableData">
          <el-table-column prop="number" label="序号" width="50">
          </el-table-column>
          <el-table-column prop="proname" label="事项">
          </el-table-column>
          <el-table-column prop="procurement" label="是否系统自动发送短信">
            <template slot-scope="scope">
              <el-radio v-model="radio" label="1">开启</el-radio>
              <el-radio v-model="radio" label="2">关闭</el-radio>
            </template>
          </el-table-column>
          <el-table-column prop="agency" label="操作">
            <template slot-scope="scope">
              <el-button type="text">编辑</el-button>
            </template>
          </el-table-column>

        </el-table>
      </el-tab-pane>
      <el-tab-pane label="短信模板设置" name="second">
        <el-table :data="tableData2">
          <el-table-column prop="number" label="序号" width="50">
          </el-table-column>
          <el-table-column prop="proname" label="模板名称">
          </el-table-column>
          <el-table-column prop="agency" label="操作">
            <template slot-scope="scope">
              <el-button type="text">编辑</el-button>
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
      const item1 = {
        number: '1',
        proname: '邀请供应商的模板',
      };
      const item = {
        number: '1',
        proname: '钱钱钱',
        procurement: '8888888888',
        stage: '采购一部',
        procurementmet: '1988-2-25/2017-11-20'
      };
      return {
        radio: '1',
        activeName: 'first',
        tableData: Array(4).fill(item),
        tableData2: Array(4).fill(item1),
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


