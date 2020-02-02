<template>
  <div class="app_container">
    <header>
      <nav>
        <div class="logo">
          <img src="../../assets/new.png">
        </div>
        <div class="navbar">
          <ul>
            <li @click="gotoHomePage"><span>首页</span></li>
            <li><span>全部课程</span></li>
            <li @click="gotoCompetition"><span>编程比赛</span></li>
          </ul>
        </div>
        <div class="personal">
          <!--          <a href="#"><img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;margin-right:20px;border-radius: 50%">杨启航</a>-->
          <user-setting-popover></user-setting-popover>
        </div>
      </nav>
    </header>
    <div class="contaier">
      <el-container>
        <el-aside width="25%">
          <div class="left_head">
            <div class="left_head_picture">
              <img src="../../assets/touxiang.jpg" style="width: 80px;height: 80px;border-radius: 50%">
            </div>
            <div style="margin-top: 30px">
              <span>杨启航</span>
            </div>
          </div>
          <div class="left_container">
            <div class="left_nav">
              <el-menu
                router
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-menu-item index="/userSetting/myLesson">
                  <i class="el-icon-menu"></i>
                  <span slot="title">我的课程</span>
                </el-menu-item>
<!--                <el-menu-item index="/userSetting/myClass">-->
<!--                  <i class="el-icon-document"></i>-->
<!--                  <span slot="title">我的班级</span>-->
<!--                </el-menu-item>-->
                <el-menu-item index="/userSetting/liveLesson">
                  <i class="el-icon-document"></i>
                  <span slot="title">直播课程</span>
                </el-menu-item>
                <el-menu-item index="/userSetting/personalInformation">
                  <i class="el-icon-document"></i>
                  <span slot="title">个人信息</span>
                </el-menu-item>
              </el-menu>
            </div>
          </div>
        </el-aside>
        <el-main>
          <div class="main_content">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </div>
    <div class="copyrightContainer">
      <span style="font-size: 12px">Copyright&nbsp;&nbsp;&nbsp;中科智禾教育大大数据中心   ©2019</span>
    </div>
  </div>
</template>

<script>
import userSettingPopover from '@/components/userSetting/userSettingPopover'
export default {
  name: 'index',
  components: { userSettingPopover },
  data () {
    return {
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    gotoCompetition: function () {
      console.log('我要跳转界面了')
      this.$router.push('/codingCompetition')
    },
    gotoHomePage: function () {
      console.log('我要跳转界面了')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .contaier {
    width: 1400px;
    margin: 0 auto;
  }
  a {
    color: #050505;
    text-decoration: none;
  }
  header{
    width: 100%;
    height: 100px;
    background-color: white;
    overflow: hidden;
  }
  nav {
    width: 1400px;
    height: 60px;
    background-color: white;
    margin: 0 auto;
    margin-top: 20px;
  }
  .logo {
    float: left;
    margin-left: 5%;
  }
  .navbar {
    float: left;
    height: 60px;
    line-height: 60px;
    margin-left: 100px;
  }
  .navbar li {
    float: left;
    list-style-type: none;
    margin-left: 150px;
    height: 60px;
    cursor: pointer;
  }
  .logo img {
    height: 50px;
    width: 150px;
  }
  .navbar li span {
    padding:0 8px;
    /*border-bottom: 1px solid red ;*/
    height: 60px;
    display: block;
    cursor: pointer;
  }
  .navbar li span:hover {
    border-bottom: 2px solid #a68b56;
    cursor: pointer;
  }
  .personal {
    float: right;
    height: 60px;
    line-height: 60px;
    margin-right: 15px;
  }
  .left_container {
    padding: 30px;
  }
  .left_head {
    height: 200px;
    background-color: #ffffff;
    border-right-style: solid;
    border-right-color: #e6e6e6;
    border-right-width: 1px;
    margin: 30px 30px -30px 30px;
    text-align: center;
    padding-top: 30px;
  }
  .left_head_picture {
    margin-top: 20px;
  }
  .left_nav {
  }
  .main_content {
    border-radius: 20px;
    /*height: 600px;*/
    background-color: white;
  }
  .copyrightContainer {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 20px;
  }
</style>
