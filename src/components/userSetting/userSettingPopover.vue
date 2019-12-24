<template>
  <div class="appContainer">
    <el-popover
      placement="bottom"
      width="200"
      trigger="hover">
      <div class="content">
<!--        <span style="font-weight: bolder">当前用户：</span>-->
<!--        <span>{{this.toPopoverData}}</span>-->
        <span @click="gotoUserSetting">我的课程</span>
        <span @click="gotoUserSetting">我的直播</span>
        <span @click="gotoUserSetting">个人信息</span>
        <el-divider style="padding-top: 10px"></el-divider>
        <div class="function_item">
          <div class="functionLogo">
            <i class="el-icon-unlock"></i>
          </div>
          <div class="functionTitle">
            <el-button type="text">修改密码</el-button>
          </div>
        </div>
        <div class="function_item">
          <div class="functionLogo">
            <i class="el-icon-open"></i>
          </div>
          <div class="functionTitle">
            <el-button type="text">退出登录</el-button>
          </div>
        </div>
      </div>
      <div class="personal" slot="reference" >
        <a href="#"><img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;margin-right:20px;border-radius: 50%">杨启航</a>
      </div>
<!--      <i class="el-icon-s-custom" slot="reference"></i>-->
<!--      <span slot="reference">杨启航</span>-->
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'userSettingPopover',
  data () {
    return {
    }
  },
  methods: {
    gotoUserSetting: function () {
      console.log('我要跳转界面了')
      this.$router.push('/userSetting')
    }
  }
}
</script>

<style scoped>
  a {
    color: #050505;
    text-decoration: none;
  }
  .content{
    text-align: center;
  }
  .function_item{
    float: left;
    display: inline-block;
  }
  .functionLogo{
    float: left;
    margin-left: 30px;
  }
  .functionTitle{
    float: left;
    margin-left: 60px;
    margin-top: -10px;
  }
  .content span {
    display: block;
    margin-bottom: 20px;
    cursor: pointer;
  }
</style>
