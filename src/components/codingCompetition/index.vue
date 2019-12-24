<template>
  <div class="app_container">
    <header>
      <nav>
        <div class="logo">
          <img src="../../assets/new.png">
        </div>
        <div class="navbar">
          <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">全部课程</a></li>
            <li><a href="#">编程比赛</a></li>
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
          <div class="left_container">
            <div class="left_nav">
              <el-menu
                router
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-menu-item index="/codingCompetition/competitionIntroduction">
                  <i class="el-icon-menu"></i>
                  <span slot="title">博弈算法挑战赛简介</span>
                </el-menu-item>
                <el-menu-item index="/codingCompetition/competitionAwardItem">
                  <i class="el-icon-document"></i>
                  <span slot="title">博弈算法挑战赛赛项介绍</span>
                </el-menu-item>
                <el-menu-item index="/codingCompetition/competitionRules">
                  <i class="el-icon-document"></i>
                  <span slot="title">博弈算法挑战赛竞赛规则</span>
                </el-menu-item>
                <el-menu-item index="/codingCompetition/ competitionDiscipline">
                  <i class="el-icon-document"></i>
                  <span slot="title">博弈算法挑战赛竞赛纪律</span>
                </el-menu-item>
                <el-menu-item index="/codingCompetition/ compitionPrepare">
                  <i class="el-icon-document"></i>
                  <span slot="title">博弈算法挑战赛比赛准备及流程</span>
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
  .navbar li a {
    padding:0 8px;
    /*border-bottom: 1px solid red ;*/
    height: 60px;
    display: block;
    cursor: pointer;
  }
  .navbar li a:hover {
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
  .left_nav {
  }
  .main_content {
    border-radius: 20px;
    /*height: 600px;*/
    background-color: white;
  }
</style>
