<template>
  <div class="app-container">
    <header>
      <nav>
        <div class="logo">
          <img src="../../assets/new.png">
        </div>
        <div class="navbar">
          <ul>
            <li @click="gotoHome"><span>首页</span></li>
            <li><span>全部课程</span></li>
            <li @click="gotoCompetition"><span>编程比赛</span></li>
          </ul>
        </div>
        <div class="personal">
          <user-setting-popover></user-setting-popover>
          <!--          <el-button @click="gotonima">点我跳</el-button>-->
          <!--          <a href="#"><img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;margin-right:20px;border-radius: 50%">杨启航</a>-->
        </div>
      </nav>
    </header>
    <div class="main_content contaier">
      <div class="class-content">
        <div style="margin-bottom: 20px">
          <span style="color: #212121;font-size: 17px;font-weight: bolder">全部课程:</span>
        </div>
        <div class="recom-bd contaier" style=" display: table;content: none;">
          <ul>
            <li>
              <img style="background-color: #a68b56;height: 150px;width: 400px;border-radius: 20px 20px 0 0" src="../../assets/picturetwo.jpg">
              <h5 @click="goToCourseIndex">python计算思维实践基础课</h5>
              <p>适合零基础编程的同学，学习python编程逻辑思维，锻炼计算思维能力，掌握调用模块的能力，能后独立完成小型项目。</p>
              <div style="margin-top: 12px;"></div>
              <h5>推荐指数:</h5>
              <span class="star"><el-rate v-model="value1" disabled></el-rate></span>
            </li>
            <li>
              <img style="background-color: #a68b56;height: 150px;width: 400px;border-radius: 20px 20px 0 0" src="../../assets/classpicture.jpg">
              <h5>python机器人实践课</h5>
              <p>适合python零基础的同学，学习使用python编程语言控制智能机器人，锻炼动手能力，掌握python编程语言，最后完成智能机器人相关项目。</p>
              <h5>推荐指数:</h5>
              <span class="star"><el-rate v-model="value1" disabled></el-rate></span>
            </li>
            <li>
              <img style="background-color: #a68b56;height: 150px;width: 400px;border-radius: 20px 20px 0 0" src="../../assets/classpicture3.jpg">
              <h5>python算法实践高阶课程</h5>
              <p>适合python算法零基础的同学，使用python编程语言完成算法实验，学习递归、贪心、排序等主流算法与python编程语言基础，最后完成python算法实践相关项目。</p>
              <h5>推荐指数:</h5>
              <span class="star"><el-rate v-model="value1" disabled></el-rate></span>
            </li>
          </ul>
        </div>
        <div style="margin-bottom: 20px;margin-top: 60px">
          <span style="color: #212121;font-size: 17px;font-weight: bolder">我的课程:</span>
        </div>
        <div class="recom-bd contaier" style=" display: table;content: none;">
          <ul>
            <li>
              <img style="background-color: #a68b56;height: 150px;width: 400px;border-radius: 20px 20px 0 0" src="../../assets/picturetwo.jpg">
              <h5 @click="goToCourseIndex">python计算思维实践基础课</h5>
              <p>适合零基础编程的同学，学习python编程逻辑思维，锻炼计算思维能力，掌握调用模块的能力，能后独立完成小型项目。</p>
              <div style="margin-top: 12px;"></div>
              <h5>推荐指数:</h5>
              <span class="star"><el-rate v-model="value1" disabled></el-rate></span>
            </li>
          </ul>
        </div>
      </div>
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
      value1: '5'
    }
  },
  methods: {
    gotoCompetition: function () {
      console.log('我要跳转界面了')
      this.$router.push('/codingCompetition')
    },
    goToCourseIndex: function () {
      console.log('我要跳转界面了')
      this.$router.push('/coursestudy')
    },
    gotoHome: function () {
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
  .class-content {
    border-radius: 20px;
    /*height: 600px;*/
    background-color: white;
    padding: 30px;
  }
  .recom-bd {
    position: relative;
  }
  .star {
    position: absolute;
    margin-top: -23px;
    margin-left: 100px;
  }
  .recom-bd ul li {
    width:400px;
    height: 300px;
    border-radius: 20px;
    background-color: #f4f4f4;
    list-style-type: none;
    box-shadow: 0 3px 2px rgba(0,0,0,0.4) ;
    float: left;
    margin-right: 65px;
  }
  .recom-bd li h5,
  .recom-bd li p {
    padding: 0 20px 0 24px;
    font-size: 13px;
  }
  .recom-bd li h5 {
    margin-top: 12px;
    line-height: 22px;
    cursor:pointer
  }
  .recom-bd li p {
    color:#999;
  }
  .main_content {
    margin-top: 40px;
  }
  .copyrightContainer {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
