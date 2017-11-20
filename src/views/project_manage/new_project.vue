<template>
  <div id="project">
    <!--立项的详情页面-->
    <div class='newpro'>
      <div class='content'>
        <!--提交按钮-->
        <div class='but'>
          <el-button type="primary">提交</el-button>
        </div>
        <!--输入框内容信息-->
        <div class='proname' v-show="inputid">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="项目名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="项目编号">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="采购方式">
              <el-select v-model="form.region" placeholder="请选择采购方式">
                <el-option label="公开招标(资格预审)" value="shanghai"></el-option>
                <el-option label="邀请招标(资格后审)" value="beijing"></el-option>
                <el-option label="公开性竞争性谈判" value="shanghai"></el-option>
                <el-option label="邀请性竞争性谈判" value="beijing"></el-option>
                <el-option label="公开性竞争性磋商" value="shanghai"></el-option>
                <el-option label="邀请性竞争性磋商" value="beijing"></el-option>
                <el-option label="公开性询价采购" value="beijing"></el-option>
                <el-option label="邀请性询价采购" value="beijing"></el-option>
                <el-option label="单一来源" value="beijing"></el-option>
                <el-option label="报名" value="beijing"></el-option>
                <el-option label="公开性的其他采购方式" value="shanghai"></el-option>
                <el-option label="邀请性的其他采购方式" value="beijing"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="">
              <el-radio-group v-model="form.resource">
                <el-radio label="委托代理机构" @click.native='weituo'></el-radio>
                <el-radio label="自行采购"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
        </div>
        <!--委托代理机构-->
        <div class='weituo' v-show="weituoid">
          <div class="patenthead">
            <div class="agency">
              <span>选择代理机构</span>
              <div class="btn">
                <button type="button" id="confirms" @click="agencyn">确定</button>
                <button type="button" @click="agencyc">取消</button>
              </div>
            </div>
            <div class="serach">
              <span>搜索：</span>
              <input type="text" placeholder="(单位名称|姓名|手机号)">
            </div>
          </div>
          <div class="patentcontent">
            <template>
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="num" label="序号" width="60">
                </el-table-column>
                <el-table-column prop="companyname" label="单位名称" width="280">
                </el-table-column>
                <el-table-column prop="contacts" label="联系人">
                </el-table-column>
                <el-table-column prop="tel" label="手机号">
                </el-table-column>
                <el-table-column prop="operate" label="委托">
                  <template slot-scope="scope">
                    <el-checkbox>委托</el-checkbox>
                    <el-radio>主负责人</el-radio>
                  </template>
                </el-table-column>
              </el-table>
            </template>

          </div>
        </div>
        <!--代理机构的名称和表格信息-->
        <div class='agencycontent' v-show="agencyid">
          <div class='content'>
            <template>
              <div>
                <el-table :data="tableData6" :span-method="objectSpanMethod" border style="width: 100%; margin-top: 20px">
                  <el-table-column prop="id" label="代理机构名称" width="180">
                  </el-table-column>
                  <el-table-column prop="name" label="联系人">
                  </el-table-column>
                  <el-table-column prop="amount1" label="联系方式">
                  </el-table-column>


                </el-table>
              </div>
            </template>
            <div class='btn' style="padding-left: 700px">
              <el-button type="primary" plain @click='again'>重新选择</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>

  export default {
    name: 'new project',

    data() {
      return {
        //输入框
        inputid:true,
        //委托框
        weituoid:false,
        //代理机构
        agencyid:false,
        flag:true,
        flag1:false,
        tableData6: [{
          id: '江苏省国际投标公司',
          name: '王小虎',
          amount1: '88888888888',
          amount2: '委托',
        }, {
          id: '江苏省国际投标公司',
          name: '王小虎',
          amount1: '88888888888',
          amount2: '委托',
        }],
        tableData: [{
          num: '1',
          companyname: '南京市长江大桥维护大队',
          contacts: '南京市长',
          tel: '88888888888',
          operate: '委托'
        }, {
          num: '1',
          companyname: '南京市长江大桥维护大队',
          contacts: '南京市长',
          tel: '88888888888',
          operate: '委托'
        }, {
          num: '1',
          companyname: '南京市长江大桥维护大队',
          contacts: '南京市长',
          tel: '88888888888',
          operate: '委托'
        }, {
          num: '1',
          companyname: '南京市长江大桥维护大队',
          contacts: '南京市长',
          tel: '88888888888',
          operate: '委托'
        }],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      //委托代理机构的函数
      weituo(){
          this.inputid=false;
          this.weituoid=true;
          this.agencyid=false;
      },
      //重新选择的函数
      again(){
        this.inputid=false;
        this.weituoid=true;
        this.agencyid=false;
        this.flag1=true;
      },
      //委托单位的确定按钮
      agencyn(){
        this.inputid=true;
        this.weituoid=false;
        this.agencyid=true;
      },
      //委托单位的取消按钮
      agencyc(){
        if(this.flag==true&&this.flag1==true){
          this.inputid=true;
          this.weituoid=false;
          this.agencyid=true;
          this.flag=false;
        }else{
          this.inputid=true;
          this.weituoid=false;
          this.agencyid=false;
          this.flag=true;
        }

      },
      arraySpanMethod({
                        row,
                        column,
                        rowIndex,
                        columnIndex
                      }) {
        if(rowIndex % 2 === 0) {
          if(columnIndex === 0) {
            return [1, 2];
          } else if(columnIndex === 1) {
            return [0, 0];
          }
        }
      },

      objectSpanMethod({
                         row,
                         column,
                         rowIndex,
                         columnIndex
                       }) {
        if(columnIndex === 0) {
          if(rowIndex % 2 === 0) {
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
      onSubmit() {
        console.log('submit!');
      },

    }
  }
</script>

<style scoped>
  #project {
    position: relative;
  }

  .newpro {
    width: 800px;
    position: absolute;
    top: 10px;
    left: 20px;
  }

  .newpro>.content>.proname {
    margin-top: 30px;
  }
  .newpro>.content>.btn {
    padding-left: 700px;
  }
  /*委托信息的样式*/

  .newpro>.content>.weituo {
    margin-top: 30px;
    margin-left: 100px;
    width: 1000px;
    border: 1px solid #409eff;
  }

  .newpro>.content>.weituo>.patenthead {
    width: 100%;
    height: 80px;
    padding-top: 20px;
  }

  .newpro>.content>.weituo>.patenthead>.agency {
    width: 100%;
    height: 40px;
    line-height: 40px;
  }

  .newpro>.content>.weituo>.patenthead>.agency>span {
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    float: left;
    padding-left: 20px;
  }

  .newpro>.content>.weituo>.patenthead>.agency>.btn {
    height: 40px;
    line-height: 40px;
    float: right;
  }

  .newpro>.content>.weituo>.patenthead>.agency>.btn>button {
    margin-right: 20px;
    padding: 5px 15px;
    border: 1px solid #409eff;
    background-color: #409eff;
    border-radius: 2px;
  }

  .newpro>.content>.weituo>.patenthead>.serach {
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    position: relative;
  }

  .newpro>.content>.weituo>.patenthead>.serach>input {
    margin-left: 10px;
    width: 400px;
    height: 30px;
    border: 1px solid #808080;
    border-radius: 4px;
    position: absolute;
    top: 5px;
  }
  .newpro>.content>.weituo>.patentcontent {
    padding-top: 25px;
  }
  /*选择委托信息后的页面*/


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
