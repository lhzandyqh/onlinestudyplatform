<template>
  <div class="app-container">
    <div class="information_container">
      <div class="information_item">
        <div class="information_title">
          <div class="information_one">
            <span>个人信息</span>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="information_content">
          <el-row>
            <el-col :span="4">
              <span style="color: #9397a2">姓名：</span>
            </el-col>
            <el-col :span="4">
              <span>YQH</span>
            </el-col>
            <el-col :span="4">
              <span style="color: #9397a2">性别：</span>
            </el-col>
            <el-col :span="4">
              <span>男</span>
            </el-col>
            <el-col :span="4">
              <span style="color: #9397a2">学历:</span>
            </el-col>
            <el-col :span="4">
              <span>无</span>
            </el-col>
          </el-row>
          <el-row style="margin-top: 30px">
            <el-col :span="4">
              <span style="color: #9397a2">学校/公司：</span>
            </el-col>
            <el-col :span="4">
              <span>无</span>
            </el-col>
            <el-col :span="4">
              <span style="color: #9397a2">职位：</span>
            </el-col>
            <el-col :span="4">
              <span>无</span>
            </el-col>
            <el-col :span="4">
              <span style="color: #9397a2">工作年限:</span>
            </el-col>
            <el-col :span="4">
              <span>无</span>
            </el-col>
          </el-row>
          <el-row style="margin-top: 30px">
            <el-col :span="4">
              <span style="color: #9397a2">生日：</span>
            </el-col>
            <el-col :span="4">
              <span>无</span>
            </el-col>
            <el-col :span="4">
              <span style="color: #9397a2">地区：</span>
            </el-col>
            <el-col :span="4">
              <span>无</span>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="information_item" style="margin-top: 30px">
        <div class="information_title">
          <div class="information_one">
            <span>账号信息</span>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="information_content">
          <el-row>
            <el-col :span="4">
              <span style="color: #9397a2">账号ID：</span>
            </el-col>
            <el-col :span="4">
              <span>14493747</span>
            </el-col>
            <el-col :span="4">
              <span style="color: #9397a2">手机号码：</span>
            </el-col>
            <el-col :span="4">
              <span>+86186****0776</span>
              <el-button type="text">更换</el-button>
            </el-col>
            <el-col :span="4">
              <span style="color: #9397a2">当前登录:</span>
            </el-col>
            <el-col :span="4">
              <span>手机</span>
            </el-col>
          </el-row>
          <el-row style="margin-top: 30px">
            <el-col :span="4">
              <span style="color: #9397a2">邮箱：</span>
            </el-col>
            <el-col :span="4">
              <span>无</span>
              <el-button type="text">更换</el-button>
            </el-col>
            <el-col :span="4">
              <span style="color: #9397a2">密码：</span>
            </el-col>
            <el-col :span="4">
              <span>******</span>
              <el-button type="text">更换</el-button>
            </el-col>
            <el-col :span="4">
              <span style="color: #9397a2">第三方账号:</span>
            </el-col>
            <el-col :span="4">
              <span>无</span>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'personalInformation'
}
</script>

<style scoped>
  .app-container {
    padding:30px;
  }
  .information_title {
    height: 50px;
  }
  .information_one span {
    display: block;
    height: 50px;
    width: 200px;
    line-height: 50px;
    padding-left: 50px;
    border-left-style: solid;
    border-left-width: 4px;
    border-left-color: #a0b9ec;
  }
</style>
