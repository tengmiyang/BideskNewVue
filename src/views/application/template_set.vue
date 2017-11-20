<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
      <el-tab-pane label="模板管理" name="first">
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
      return {
        radio: '1',
        activeName: 'first',
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
</style>


