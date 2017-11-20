<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
      <el-tab-pane label="全部" name="first">
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
          <el-table-column prop="proname" label="立项名称">
          </el-table-column>
          <el-table-column prop="procurement" label="采购项目名称">
          </el-table-column>
          <el-table-column prop="stage" label="包件/标段" width="80">
          </el-table-column>
          <el-table-column prop="artime" label="公布(通知)时间" width="120">
          </el-table-column>
          <el-table-column prop="sabtime" label="截标时间" width="100">
          </el-table-column>
          <el-table-column prop="procurementmet" label="采购方式" width="80">
          </el-table-column>
          <el-table-column prop="agency" label="代理机构" width="170">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <!--<p>姓名: 钱钱钱</p>-->
                <!--<p>住址: 接电话科技时代防火防盗会计师</p>-->
                <template>
                  <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                      prop="number"
                      label="序号"
                      width="50">
                    </el-table-column>
                    <el-table-column
                      prop="principal"
                      label="姓名">
                    </el-table-column>
                    <el-table-column
                      prop="tel"
                      label="联系方式" width="150">
                    </el-table-column>
                    <el-table-column
                      prop="stage"
                      label="说明">
                    </el-table-column>
                  </el-table>
                </template>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.agency }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="principal" label="项目负责人" width="100">
          </el-table-column>
          <el-table-column prop="entrusttime" label="委托(立项)时间">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="委托代理项目" name="second">
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
          <el-table-column prop="proname" label="立项名称">
          </el-table-column>
          <el-table-column prop="procurement" label="采购项目名称">
          </el-table-column>
          <el-table-column prop="stage" label="包件/标段" width="80">
          </el-table-column>
          <el-table-column prop="artime" label="公布(通知)时间" width="120">
          </el-table-column>
          <el-table-column prop="sabtime" label="截标时间" width="100">
          </el-table-column>
          <el-table-column prop="procurementmet" label="采购方式" width="80">
          </el-table-column>
          <el-table-column prop="agency" label="代理机构" width="170">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <!--<p>姓名: 钱钱钱</p>-->
                <!--<p>住址: 接电话科技时代防火防盗会计师</p>-->
                <template>
                  <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                      prop="number"
                      label="序号"
                      width="50">
                    </el-table-column>
                    <el-table-column
                      prop="principal"
                      label="姓名">
                    </el-table-column>
                    <el-table-column
                      prop="tel"
                      label="联系方式" width="150">
                    </el-table-column>
                    <el-table-column
                      prop="stage"
                      label="说明">
                    </el-table-column>
                  </el-table>
                </template>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.agency }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="principal" label="项目负责人" width="100">
          </el-table-column>
          <el-table-column prop="entrusttime" label="委托(立项)时间">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="自行采购项目" name="third">
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
          <el-table-column prop="proname" label="立项名称">
          </el-table-column>
          <el-table-column prop="procurement" label="采购项目名称">
          </el-table-column>
          <el-table-column prop="stage" label="包件/标段" width="80">
          </el-table-column>
          <el-table-column prop="artime" label="公布(通知)时间" width="120">
          </el-table-column>
          <el-table-column prop="sabtime" label="截标时间" width="100">
          </el-table-column>
          <el-table-column prop="procurementmet" label="采购方式" width="80">
          </el-table-column>
          <el-table-column prop="principal" label="项目负责人" width="100">
          </el-table-column>
          <el-table-column prop="entrusttime" label="委托(立项)时间">
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
        proname: '燃气报警设备维修台PRO-124568',
        procurement: '南京建工集团燃气报警设备维修台',
        stage: '-',
        artime: '2017-01-18',
        sabtime: '2017-11-18',
        procurementmet: '自行采购',
        agency: '新华国际招标有限公司',
        principal: '张东强',
        entrusttime: '2016-05-13 88.88.88',
        tel: '88888888888'
      };
      return {
        activeName: 'first',
        tableData: Array(3).fill(item),
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
  .exeparepro {
    margin-left: 20px;
    margin-top: 10px;
  }

  .el-table .cell {
    text-align: center;
  }
</style>


