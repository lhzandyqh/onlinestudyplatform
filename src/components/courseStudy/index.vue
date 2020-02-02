<template>
  <div class="app-container">
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
          <user-setting-popover></user-setting-popover>
<!--          <a href="#" style="text-decoration:none;color: black"><img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;margin-right:20px;border-radius: 50%">杨启航</a>-->
        </div>
      </nav>
    </header>
    <div class="course_head">
      <div class="contaier">
        <el-row>
          <el-col :span="1">
            <img src="../../assets/back.png">
          </el-col>
          <el-col :span="1">
            <span @click="gotoAllclass" style="display: inline-block;height: 50px;width: 200px;color: #bfbfbf">返回课程中心</span>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="course_total contaier">
      <div class="course_total_head">
        <el-row>
          <el-col :span="6">
            <div style="margin-left: 40px;margin-top: 50px">
              <h2>Python编程语言基础课程</h2>
            </div>
          </el-col>
          <el-col :span="3">
            <div>
              <span>第一学期</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="course_total_head_two">
        <h4>课程进度</h4>
        <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
      </div>
      <div class="course_total_head_three">
        <el-row>
          <el-col :span="4">
            <h4>最近学习章节:</h4>
          </el-col>
          <el-col :span="4">
            <span>第一章 第一节 初识海龟画图</span>
          </el-col>
          <el-col :span="16">
            <div class="course_button">
              <span> 继续学习</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="course_content contaier">
      <div class="course_content_head">
        <el-row>
          <el-col :span="12">
            <h3>第一章 初识Python</h3>
          </el-col>
          <el-col :span="12">
            <img src="../../assets/xiangxia.png" @click="controlShow">
          </el-col>
        </el-row>
      </div>
      <div v-if="isShow" class="course_content_body">
        <div class="course_content_item">
          <el-row class="course_content_item_head">
            <div>
              <h3>第一节</h3>
              <h3>我的第一个Python程序</h3>
              <span>本节完成</span>
            </div>
          </el-row>
          <el-row :gutter="2" style="margin-top: 10px">
            <el-col :span="12">
              <div class="course_content_item_first" @click="gotoClassContent">
                <img src="../../assets/kaimen.png">
                <h3>学堂 为你打开Python之门</h3>
                <img style="width: 30px;height: 30px;position: absolute;margin-left: 550px;margin-top: -60px;border-radius: 0;background-color: white" src="../../assets/wancheng.png">
              </div>
            </el-col>
            <el-col :span="12">
              <div class="course_content_item_two" >
                <img src="../../assets/lianxi.png">
                <h3>作业：打印HelloWorld！</h3>
                <img style="width: 30px;height: 30px;position: absolute;margin-left: 370px;margin-top: -50px;border-radius: 0;background-color: white" src="../../assets/wancheng.png">
                <span>必做练习</span>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="course_content_item">
          <el-row class="course_content_item_head">
            <div>
              <h3>第二节</h3>
              <h3>海龟画图</h3>
<!--              <span>本节完成</span>-->
            </div>
          </el-row>
          <el-row :gutter="2" style="margin-top: 10px">
            <el-col :span="12">
              <div class="course_content_item_first" @click="gotoClassContentTwo">
                <img src="../../assets/huahua.png">
                <h3>学堂 运用Python库画图</h3>
                <img style="width: 30px;height: 30px;position: absolute;margin-left: 550px;margin-top: -60px;border-radius: 0;background-color: white" src="../../assets/zhengzai.png">
                <div style="width: 300px;margin-left: 250px;margin-top: 120px">
                  <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="course_content_item_two" >
                <img src="../../assets/lianxi.png">
                <h3>作业：画正方形</h3>
                <img style="width: 30px;height: 30px;position: absolute;margin-left: 370px;margin-top: -50px;border-radius: 0;background-color: white" src="../../assets/zhengzai.png">
                <span>必做练习</span>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="course_content_item">
          <el-row class="course_content_item_head">
            <div>
              <h3>第三节</h3>
              <h3>海龟画圆</h3>
<!--              <span>本节完成</span>-->
            </div>
          </el-row>
          <el-row :gutter="2" style="margin-top: 10px">
            <el-col :span="12">
              <div class="course_content_item_first">
                <img src="../../assets/yanse.png">
                <h3>学堂 给圆形添加颜色</h3>
                <img style="width: 30px;height: 30px;position: absolute;margin-left: 550px;margin-top: -60px;border-radius: 0;background-color: white" src="../../assets/suo.png">
              </div>
            </el-col>
            <el-col :span="12">
              <el-row>
                <div class="course_content_item_two" >
                  <img src="../../assets/lianxi.png">
                  <h3>作业: 不同颜色的圆形</h3>
                  <img style="width: 30px;height: 30px;position: absolute;margin-left: 370px;margin-top: -50px;border-radius: 0;background-color: white" src="../../assets/suo.png">
                  <span>必做练习</span>
                </div>
              </el-row>
              <el-row style="margin-top: 10px">
                <div class="course_content_item_two" >
                  <img src="../../assets/lianxi.png">
                  <h3>作业：不同颜色的椭圆形</h3>
                  <img style="width: 30px;height: 30px;position: absolute;margin-left: 370px;margin-top: -50px;border-radius: 0;background-color: white" src="../../assets/suo.png">
                  <span>必做练习</span>
                </div>
              </el-row>
            </el-col>
          </el-row>
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
      isShow: true
    }
  },
  methods: {
    gotoAllclass: function () {
      console.log('我要跳转界面了')
      this.$router.push('/allclasses')
    },
    controlShow: function () {
      this.isShow = !this.isShow
    },
    gotoClassContent: function () {
      console.log('我要跳转界面了')
      this.$router.push('/classcontent')
    },
    gotoClassContentTwo: function () {
      console.log('我要跳转界面了')
      this.$router.push('/classcontenttwo')
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
  header{
    height: 100px;
    background-color: #f4f4f4;
    overflow: hidden;
  }
  nav {
    width: 1400px;
    height: 60px;
    background-color: #f4f4f4;
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
    text-decoration:none;
    color: black;
    cursor: pointer;
  }
  .navbar li span:hover {
    border-bottom: 2px solid #a68b56;
  }
  .personal {
    float: right;
    height: 60px;
    line-height: 60px;
    margin-right: 15px;
  }
  .course_head {
    height: 50px;
    background-color: white;
  }
  .contaier img {
    display: inline-block;
    margin-top: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  .contaier span {
    line-height: 50px;
    padding-top: -30px;
    cursor: pointer;
  }
  .course_total{
    margin-top: 30px;
    height: 350px;
    background-color: white;
    box-shadow: 0 3px 2px rgba(0,0,0,0.3) ;
    border-radius: 20px;
  }
  .course_total_head {
    height: 140px;
    border-radius: 20px 20px 0 0;
    background-color: skyblue;
  }
  .course_total_head h2 {
    color: white;
  }
  .course_total_head span {
    font-size: 15px;
    display: block;
    height: 50px;
    width: 100px;
    border-radius: 20px;
    background-color: #a0b9ec;
    color: white;
    text-align: center;
    margin-top: 40px;
  }
  .course_total_head_two {
    margin-top: 40px;
    padding-left: 40px;
    padding-right: 40px;
  }
  .course_total_head_two h4 {
    color: #bfbfbf;
    margin-bottom: 20px;
  }
  .course_total_head_three {
    margin-top: 40px;
    margin-left: 40px;
  }
  .course_total_head_three span {
    display: block;
    height: 70px;
    width: 250px;
    margin-top: -10px;
    color: #bfbfbf;
    font-size: 16px;
  }
  .course_button {
    float: right;
    margin-right: 70px;
  }
  .course_button span {
    display: block;
    height: 50px;
    width: 100px;
    text-align: center;
    background-color: #bce6e6;
    color: white;
    border-radius: 20px;
  }
  .course_content {
    margin-top: 40px;
    border-radius: 20px;
    background-color: #f1f1f7;
  }
  .course_content_head{
    height: 80px;
    border-radius: 20px 20px 0 0;
    background-color: #e5e5f0;
  }
  .course_content_head h3 {
    display: block;
    margin-top: 30px;
    margin-left: 30px;
  }
  .course_content_head img {
    float: right;
    margin-right: 30px;
    margin-top: 30px;
  }
  .course_content_body {
    padding-bottom: 20px;
    margin-bottom: 30px;
  }
  .course_content_item {
    margin: 30px;
    cursor: pointer;
  }
  .course_content_item_head h3 {
    display: inline-block;
    font-weight: normal;
    color: #716b8b;
  }
  .course_content_item_head span {
    display: inline-block;
    height: 45px;
    width: 100px;
    text-align:center;
    background-color: #c99ddf;
    color:#31285d;
    margin-left: 50px;
    border-radius: 20px;
  }
  .course_content_item_first {
    padding: 20px;
    width: 600px;
    height: 250px;
    background-color: white;
    border-radius: 20px;
    position: relative;
  }
  .course_content_item_first:hover {
    box-shadow: 0 2px 10px 0 rgba(56,35,219,.07) ;
  }
  .course_content_item_first img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    background-color: #ffbdce ;
  }
  .course_content_item_first h3 {
    margin-left: 250px;
    margin-top: -180px;
  }
  .course_content_item_two {
    padding: 20px;
    width: 400px;
    height: 100px;
    background-color: white;
    border-radius: 20px;
    position: relative;
  }
  .course_content_item_two:hover {
    box-shadow: 0 2px 10px 0 rgba(56,35,219,.07) ;
  }
  .course_content_item_two img {
    width: 100px;
    height: 100px;
    border-radius: 20px;
    background-color: #56cdf8;
  }
  .course_content_item_two h3 {
    margin-left: 130px;
    margin-top: -90px;
  }
  .course_content_item_two span {
    height: 40px;
    width: 100px;
    display: block;
    color: #a5a2b8;
    line-height: 40px;
    background-color: #f3f3f4;
    margin-top: 20px;
    margin-left: 150px;
    text-align: center;
    border-radius: 20px;
  }
  .copyrightContainer {
    text-align: center;
    margin-bottom: 20px;
  }
</style>
