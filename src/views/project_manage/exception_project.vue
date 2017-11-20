<template>
  <div class="app-container">
    <el-tabs v-model="activeName2" type="card">
      <el-tab-pane label="全部" name="first">
        <el-row style="margin-bottom: 10px" :gutter="10">
          <el-col :span="6">
            <el-input placeholder="请输入项目名称" v-model="input">
            </el-input>
          </el-col>
          <el-col :span="6">
            <el-input placeholder="请输入项目编号" v-model="input">
            </el-input>
          </el-col>
          <el-col :span="2" align="center">
            <el-button type="text" disabled>异常时间:
            </el-button>
          </el-col>
          <el-col :span="8">
            <el-time-picker
              is-range
              v-model="value4"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              placeholder="选择异常时间">
            </el-time-picker>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </el-col>
        </el-row>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="待处理" name="first">
            <el-table
              :data="tableData"
              border
              stripe
              style="width: 100%">
              <el-table-column
                align="center"
                prop="id"
                type="index"
                label="序号"
                width="100">
              </el-table-column>
              <el-table-column
                align="center"

                prop="date"

                label="立项名称">
              </el-table-column>
              <el-table-column
                align="center"

                prop="name"

                label="采购项目名称">
              </el-table-column>
              <el-table-column
                align="center"

                prop="address"

                label="包件/标段">
              </el-table-column>
              <el-table-column
                align="center"
                prop="address"
                label="代理机构">
              </el-table-column>
              <el-table-column
                align="center"

                prop="address"

                label="项目负责人">
              </el-table-column>
              <el-table-column
                align="center"

                prop="address"

                label="异常类型">
              </el-table-column>
              <el-table-column
                align="center"

                prop="address"

                label="异常发生时间">
              </el-table-column>
            </el-table>
            <div class="block" style="margin-top: 10px">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage1"
                :page-size="100"
                layout="total, prev, pager, next"
                :total="1000">
              </el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane label="已处理" name="second">
            <el-table
              :data="tableData"
              border
              stripe
              style="width: 100%">
              <el-table-column
                prop="id"
                type="index"
                label="序号"
                align="center"
                width="65">
              </el-table-column>
              <el-table-column align="center"
                               prop="date"
                               label="立项名称">
              </el-table-column>
              <el-table-column align="center"
                               prop="name"
                               label="采购项目名称">
              </el-table-column>
              <el-table-column align="center"
                               prop="address"
                               label="包件/标段">
              </el-table-column>
              <el-table-column align="center"
                               prop="address"
                               label="代理机构">
              </el-table-column>
              <el-table-column align="center"
                               prop="address"
                               label="项目负责人">
              </el-table-column>
              <el-table-column align="center"
                               prop="address"
                               label="异常类型">
              </el-table-column>
              <el-table-column align="center"
                               prop="address"
                               label="异常发生时间">
              </el-table-column>
              <el-table-column align="center"
                               prop="address"
                               label="异常操作人">
              </el-table-column>
            </el-table>
            <div class="block" style="margin-top: 10px">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage1"
                :page-size="100"
                layout="total, prev, pager, next"
                :total="1000">
              </el-pagination>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="委托代理项目" name="second">
        <el-row style="margin-bottom: 10px" :gutter="10">
          <el-col :span="6">
            <el-input placeholder="请输入项目名称" v-model="input">
            </el-input>
          </el-col>
          <el-col :span="6">
            <el-input placeholder="请输入项目编号" v-model="input">
            </el-input>
          </el-col>
          <el-col :span="2" align="center">
            <el-button type="text" disabled>异常时间:
            </el-button>
          </el-col>
          <el-col :span="8">
            <el-time-picker
              is-range
              v-model="value4"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              placeholder="选择异常时间">
            </el-time-picker>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </el-col>
        </el-row>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="待处理" name="first">
            <el-table
              :data="tableData"
              border
              stripe
              style="width: 100%">
              <el-table-column align="center"
                               prop="id"
                               type="index"
                               label="序号"
                               width="100">
              </el-table-column>
              <el-table-column align="center"
                               prop="date"
                               label="立项名称">
              </el-table-column>
              <el-table-column align="center"
                               prop="name"
                               label="采购项目名称">
              </el-table-column>
              <el-table-column align="center"
                               prop="address"
                               label="包件/标段">
              </el-table-column>
              <el-table-column align="center"
                               prop="address"
                               label="代理机构">
              </el-table-column>
              <el-table-column align="center"
                               prop="address"
                               label="项目负责人">
              </el-table-column>
              <el-table-column align="center"
                               prop="address"
                               label="异常类型">
              </el-table-column>
              <el-table-column align="center"
                               prop="address"
                               label="异常发生时间">
              </el-table-column>
            </el-table>
            <div class="block" style="margin-top: 10px">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage1"
                :page-size="100"
                layout="total, prev, pager, next"
                :total="1000">
              </el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane label="已处理" name="second">
            <el-table
              :data="tableData"
              border
              stripe
              style="width: 100%">
              <el-table-column
                prop="id"
                type="index"
                label="序号"
                align="center"
                width="65">
              </el-table-column>
              <el-table-column align="center"
                               prop="date"
                               label="立项名称">
              </el-table-column>
              <el-table-column align="center"
                               prop="name"
                               label="采购项目名称">
              </el-table-column>
              <el-table-column align="center"
                               prop="address"
                               label="包件/标段">
              </el-table-column>
              <el-table-column align="center"
                               prop="address"
                               label="代理机构">
              </el-table-column>
              <el-table-column align="center"
                               prop="address"
                               label="项目负责人">
              </el-table-column>
              <el-table-column align="center"
                               prop="address"
                               label="异常类型">
              </el-table-column>
              <el-table-column align="center"
                               prop="address"
                               label="异常发生时间">
              </el-table-column>
              <el-table-column align="center"
                               prop="address"
                               label="异常操作人">
              </el-table-column>
            </el-table>
            <div class="block" style="margin-top: 10px">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage1"
                :page-size="100"
                layout="total, prev, pager, next"
                :total="1000">
              </el-pagination>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="自行采购项目" name="third">
        <el-row style="margin-bottom: 10px" :gutter="10">
          <el-col :span="6">
            <el-input placeholder="请输入项目名称" v-model="input">
            </el-input>
          </el-col>
          <el-col :span="6">
            <el-input placeholder="请输入项目编号" v-model="input">
            </el-input>
          </el-col>
          <el-col :span="2" align="center">
            <el-button type="text" disabled>异常时间:
            </el-button>
          </el-col>
          <el-col :span="8">
            <el-time-picker
              is-range
              v-model="value4"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              placeholder="选择异常时间">
            </el-time-picker>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </el-col>
        </el-row>
        <el-table
          :data="tableData"
          border
          stripe
          style="width: 100%">
          <el-table-column align="center"
                           prop="id"
                           type="index"
                           label="序号"
                           width="100">
          </el-table-column>
          <el-table-column align="center"
                           prop="date"
                           label="立项名称">
          </el-table-column>
          <el-table-column align="center"
                           prop="address"
                           label="包件/标段">
          </el-table-column>
          <el-table-column align="center"
                           prop="address"
                           label="代理机构">
          </el-table-column>
          <el-table-column align="center"
                           prop="address"
                           label="异常类型">
          </el-table-column>
          <el-table-column align="center"
                           prop="address"
                           label="异常发生时间">
          </el-table-column>
        </el-table>
        <div class="block" style="margin-top: 10px">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentPage1: 5,
        input: '',
        activeName2: 'first',
        activeName: 'first',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  };
</script>

