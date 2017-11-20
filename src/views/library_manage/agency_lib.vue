<template>
  <div class="app-container">
    <el-tabs v-model="activeName2" type="card">
      <el-tab-pane label="我的采购代理" name="first">
        <!--管理我的采购代理按钮的dome-->
        <div class="manageage">
          <el-button type="primary" plain size="small" v-popover:popover1>
            管理我的采购代理</el-button>
        </div>
        <!--管理我的采购代理的弹出框的信息-->
        <el-popover ref="popover1" placement="right" width="800" trigger="click">
          <el-button type="primary" plain size="small" >添加联系人</el-button>
          <el-table :data="gridData1">
            <el-table-column width="50" property="date" label="序号"></el-table-column>
            <el-table-column width="100" property="name" label="联系人"></el-table-column>
            <el-table-column width="150" property="address" label="手机号码"></el-table-column>
            <el-table-column width="200" property="address" label="邮箱"></el-table-column>
            <el-table-column width="70" property="addres" label="状态"></el-table-column>
            <el-table-column width="200" property="address" label="操作">
              <template slot-scope="scope">
                <el-button type="text">移除</el-button>
                <el-button type="text">上移</el-button>
                <el-button type="text">下移</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-button type="primary" plain size="small">关闭</el-button>
        </el-popover>



        <!--我的采购代理的表格数据-->
        <el-table :data="tableData">
          <el-table-column prop="number" label="序号" width="50">
          </el-table-column>
          <el-table-column prop="proname" label="单位名称">
          </el-table-column>
          <el-table-column prop="procurementmet" label="状态">
          </el-table-column>
          <el-table-column label="操作">
            <!--操作中的管理联系人的弹出框dome-->
            <template slot-scope="scope">
              <el-dialog title="添加联系人" :visible.sync="centerDialogVisible4" width="1000" center>
                <el-button type="primary" plain size="small" >添加联系人</el-button>
                <el-table :data="gridData">
                  <el-table-column width="50" property="date" label="序号"></el-table-column>
                  <el-table-column width="100" property="name" label="联系人"></el-table-column>
                  <el-table-column width="150" property="address" label="手机号码"></el-table-column>
                  <el-table-column width="200" property="address" label="邮箱"></el-table-column>
                  <el-table-column width="70" property="addres" label="状态"></el-table-column>
                  <el-table-column width="200" property="address" label="操作">
                    <template slot-scope="scope">
                      <el-button type="text">移除</el-button>
                      <el-button type="text">上移</el-button>
                      <el-button type="text">下移</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible4 = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible4 = false">确 定</el-button>
  </span>
              </el-dialog>

              <el-button type="text" @click="centerDialogVisible4 = true">管理联系人</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>



      <el-tab-pane label="采购代理库管理" name="second">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="添加采购代理">
            <el-input placeholder="添加采购代理"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="dialogVisible = true">添加</el-button>
          </el-form-item>
        </el-form>
        <el-dialog title="添加联系人" :visible.sync="dialogVisible" width="30%"
          :before-close="handleClose">
          <div class="demo-input-suffix">
            单位名称：
            <el-input placeholder="请输入单位名称" v-model="input2"></el-input>
          </div>
          <div class="demo-input-suffix">
            联系人：
            <el-input placeholder="请输入联系人名称" v-model="input23"></el-input>
          </div>
          <div class="demo-input-suffix">
            手机号：
            <el-input placeholder="请输入手机号码" v-model="input23"></el-input>
          </div>

          <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
        </el-dialog>
        <el-table :data="tableData">
          <el-table-column prop="number" label="序号" width="50">
          </el-table-column>
          <el-table-column prop="proname" label="单位名称">
          </el-table-column>
          <el-table-column prop="procurement" label="管理员">
          </el-table-column>
          <el-table-column prop="stage" label="手机号">
          </el-table-column>
          <el-table-column prop="procurementmet" label="状态">
          </el-table-column>
          <el-table-column prop="agency" label="添加人">
          </el-table-column>
          <el-table-column prop="principal" label="添加时间">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="text" @click="centerDialogVisible1 = true">停用</el-button>
              <el-button type="text" @click="centerDialogVisible2 = true">移除</el-button>
              <el-button type="text" @click="centerDialogVisible3 = true">重新邀请</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <!--采购代理库管理的弹出框dome-->
      <el-dialog title="停用" :visible.sync="centerDialogVisible1" width="30%" center>
        <span>确定该单位需要停用</span>
        <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible1 = false">确 定</el-button>
  </span>
      </el-dialog>
      <el-dialog title="移除" :visible.sync="centerDialogVisible2" width="30%" center>
        <span>该单位有业务不能移除</span>
        <span slot="footer" class="dialog-footer">
    <!--<el-button @click="centerDialogVisible = false">取 消</el-button>-->
    <el-button type="primary" @click="centerDialogVisible2 = false">确 定</el-button>
  </span>
      </el-dialog>
      <el-dialog title="停用" :visible.sync="centerDialogVisible3" width="30%" center>
        <span>确定该单位需要重新邀请</span>
        <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible3 = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible3 = false">确 定</el-button>
  </span>
      </el-dialog>
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
        tel: '88888888888'
      };
      return {
        input2: '',
        input21: '',
        input22: '',
        input23: '',
        dialogVisible: false,
        centerDialogVisible1: false,
        centerDialogVisible2: false,
        centerDialogVisible3: false,
        centerDialogVisible4: false,
        activeName: 'first',
        activeName2: 'first',
        tableData: Array(1).fill(item),
        gridData: [{
          date: '1',
          name: '王小虎',
          address: '88888888888',
          addres: '正常'
        }],
        gridData1: [{
          date: '1',
          name: '王小虎',
          address: '88888888888',
          addres: '正常'
        }]
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
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
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
