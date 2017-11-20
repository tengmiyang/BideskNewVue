<template>
  <div class="app-container">
    <el-tabs v-model="activeName2" type="card">
      <el-tab-pane label="全部" name="first">
        <el-row style="margin-bottom: 10px" :gutter="20">
          <el-col :span="8">
            <el-input placeholder="请输入项目名称" v-model="input">
            </el-input>
          </el-col>
          <el-col :span="8">
            <el-input placeholder="请输入项目编号" v-model="input">
            </el-input>
          </el-col>
          <el-col :span="8">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </el-col>
        </el-row>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="前期准备项目" name="first">
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
                width="65"
              >
              </el-table-column>
              <el-table-column align="center" label="立项名称">
                <template slot-scope="scope">
                  <el-button type="text">{{scope.row.name}}</el-button>

                </template>
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
                               label="公布(通知)时间">
              </el-table-column>
              <el-table-column align="center"
                               prop="address"
                               label="截标时间">
              </el-table-column>
              <el-table-column align="center"
                               prop="address"
                               label="采购方式">
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
                               label="委托时间">
              </el-table-column>
            </el-table>
            <div class="block" style="margin-top: 20px">
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
          <el-tab-pane label="正在执行项目" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="已到期项目" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="已完结项目" name="fourth">定时任务补偿</el-tab-pane>
          <el-tab-pane label="异常项目" name="five">任务补偿</el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="委托代理项目" name="second">
        <el-row style="margin-bottom: 10px" :gutter="20">
          <el-col :span="7">
            <el-input placeholder="请输入项目名称" v-model="input">
            </el-input>
          </el-col>
          <el-col :span="7">
            <el-input placeholder="请输入项目编号" v-model="input">
            </el-input>
          </el-col>
          <el-col :span="7">
            <el-input placeholder="请输入代理机构" v-model="input">
            </el-input>
          </el-col>
          <el-col :span="3">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </el-col>
        </el-row>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="前期准备项目" name="first">
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
                width="65"
              >
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
                               label="公布(通知)时间">
              </el-table-column>
              <el-table-column align="center"
                               prop="address"
                               label="截标时间">
              </el-table-column>
              <el-table-column align="center"
                               prop="address"
                               label="采购方式">
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
                               label="委托时间">
              </el-table-column>
            </el-table>
            <div class="block" style="margin-top: 20px">
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
          <el-tab-pane label="正在执行项目" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="已到期项目" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="已完结项目" name="fourth">定时任务补偿</el-tab-pane>
          <el-tab-pane label="异常项目" name="five">任务补偿</el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="自行采购项目" name="third">
        <el-row style="margin-bottom: 10px" :gutter="20">
          <el-col :span="8">
            <el-input placeholder="请输入项目名称" v-model="input">
            </el-input>
          </el-col>
          <el-col :span="8">
            <el-input placeholder="请输入项目编号" v-model="input">
            </el-input>
          </el-col>
          <el-col :span="8">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </el-col>
        </el-row>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="正在执行项目" name="first">
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
                width="65"
              >
              </el-table-column>
              <el-table-column align="center"
                               prop="date"
                               label="项目名称">
              </el-table-column>
              <el-table-column align="center"
                               prop="name"
                               label="项目编号">
              </el-table-column>
              <el-table-column align="center"
                               prop="name"
                               label="采购方式">
              </el-table-column>
            </el-table>
            <div class="block" style="margin-top: 20px">
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
          <el-tab-pane label="已到期项目" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="已完结项目" name="fourth">定时任务补偿</el-tab-pane>
          <el-tab-pane label="异常项目" name="five">任务补偿</el-tab-pane>
        </el-tabs>
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
        }]
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

