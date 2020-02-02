<template>
  <div class="app_container">
    <header>
      <nav>
        <div class="logo">
          <img src="../../assets/new.png">
        </div>
        <div class="navbar">
          <ul>
            <li><span>首页</span></li>
            <li @click="gotoAllclasses"><span>全部课程</span></li>
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
    <div class="banner contaier">
      <div class="banner-in">
        <el-carousel height="420px">
          <el-carousel-item  v-for="(item, index) in schna" :key="index">
            <img :src="item" alt="" style="width: 100%;height: 100%">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="recom-products contaier">
      <div class="recom-hd">
        <h4>推荐课程</h4>
        <a>查看全部</a>
      </div>
      <div class="recom-bd contaier" style=" display: table;content: none;">
        <ul>
          <li>
            <img style="background-color: #a68b56;height: 150px;width: 400px;border-radius: 20px 20px 0 0" src="../../assets/picturetwo.jpg">
            <h5 @click="goToCourseIndex">python计算思维实践基础课</h5>
            <p>适合零基础的同学，学会简单语法和简单编程逻辑思维，掌握调用模块的能力，然后独立完成小型项目。</p>
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
    </div>
    <div class="fea-class contaier">
      <div class="fea-head">
        <h4>精选直播课程</h4>
      </div>
      <div class="fea-body">
        <el-row>
          <el-col :span="12">
            <div class="fea-img">
              <img style="width: 600px;height: 250px;background-color: #a68b56" src="../../assets/pictureone.jpg">
            </div>
          </el-col>
          <el-col :span="12">
            <div class="fea-content">
              <ul>
                <li>
                  <div>
                    <el-row>
                      <el-col :span="8">
                        <h4>Python人工智能大讲堂系列五</h4>
                        <p>2019-06-01  16:00</p>
                      </el-col>
                      <el-col :span="8">
                        <span style="font-size: 16px;color: skyblue">直播中</span>
                        <img src="../../assets/zhibo.png">
                      </el-col>
                      <el-col :span="8">
                        <el-button type="primary">观看直播</el-button>
                      </el-col>
                    </el-row>
                  </div>
                </li>
                <li>
                  <div>
                    <el-row>
                      <el-col :span="8">
                        <h4>Python人工智能大讲堂系列四</h4>
                        <p>2019-05-01  14:00</p>
                      </el-col>
                      <el-col :span="8">
                        <span style="font-size: 16px;color: skyblue">直播中</span>
                        <img src="../../assets/zhibo.png">
                      </el-col>
                      <el-col :span="8">
                        <el-button type="primary">观看直播</el-button>
                      </el-col>
                    </el-row>
                  </div>
                </li>
                <li>
                  <div>
                    <el-row>
                      <el-col :span="8">
                        <h4>Python人工智能大讲堂系列三</h4>
                        <p>2019-04-01  16:00</p>
                      </el-col>
                      <el-col :span="8">
                        <span style="font-size: 16px;color: skyblue">直播中</span>
                        <img src="../../assets/zhibo.png">
                      </el-col>
                      <el-col :span="8">
                        <el-button type="primary">观看直播</el-button>
                      </el-col>
                    </el-row>
                  </div>
                </li>
                <li>
                  <div>
                    <el-row>
                      <el-col :span="8">
                        <h4>Python人工智能大讲堂系列二</h4>
                        <p>2019-03-01  14:00</p>
                      </el-col>
                      <el-col :span="8">
                        <span style="font-size: 16px;color: skyblue">直播中</span>
                        <img src="../../assets/zhibo.png">
                      </el-col>
                      <el-col :span="8">
                        <el-button type="primary">观看直播</el-button>
                      </el-col>
                    </el-row>
                  </div>
                </li>
                <li>
                  <div>
                    <el-row>
                      <el-col :span="8">
                        <h4>Python人工智能大讲堂系列一</h4>
                        <p>2019-02-01  14:00</p>
                      </el-col>
                      <el-col :span="8">
                        <span style="font-size: 16px;color: skyblue">直播中</span>
                        <img src="../../assets/zhibo.png">
                      </el-col>
                      <el-col :span="8">
                        <el-button type="primary">观看直播</el-button>
                      </el-col>
                    </el-row>
                  </div>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
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
      value1: '5',
      schna: ['http://58.119.112.11:11028/picture/ai/20191228161134.jpg', 'http://58.119.112.11:11028/picture/ai/20191227160509.jpg'],
      bannerthree: require('../../assets/bannerthree.jpg')
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
    gotoAllclasses: function () {
      console.log('我要跳转界面了')
      this.$router.push('/allclasses')
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
  .banner {
    height:420px;
    background-color: hotpink;
  }
  .banner-in{
    background-color: #42b983;
  }
  /*.el-carousel__item:nth-child(1) {*/
  /*  background-image: url("../../assets/lunboone.jpg");*/
  /*}*/
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .recom-products {
    margin-top: 35px;
  }
  .recom-hd {
    height: 40px;
  }
  .recom-hd h4 {
    float: left;
    color: #494949;
  }
  .recom-hd a {
    float: right;
    margin-top: 10px;
    margin-right: 30px;
    font-size: 14px;
    color: #a5a5a5;
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
    font-size: 14px;
  }
  .recom-bd li h5 {
    margin-top: 12px;
    line-height: 22px;
    cursor:pointer
  }
  .recom-bd li p {
    color:#999;
  }
  .fea-class {
    margin-top: 30px;
    /*height: 300px;*/
    margin-bottom: 30px;
  }
   .fea-head h4 {
    color: #494949;
  }
   .fea-body {
     width: 1400px;
     background-color: white;
     box-shadow: 0 3px 2px rgba(0,0,0,0.4) ;;
     border-radius: 20px;
     margin-top: 15px;
     padding-bottom: 20px;
   }
   .fea-img{
     padding: 20px;
   }
   .fea-content ul li {
     list-style-type: circle;
     list-style-type: none;
     margin-top: 20px;
   }
   .fea-content p{
     font-size: 14px;
     color: #999;
   }
   .fea-content img {
     width: 30px;
     height: 30px;
     display: block;
     margin-top: -7px;
     float: left;
     margin-right: 30px
   }
   /*.fea-pic-con{*/
   /*  padding: 20px;*/
   /*  float: left;*/
   /*}*/
   /*.fea-content-con {*/
   /*  padding: 20px;*/
   /*  display: block;*/
   /*}*/

  /*// 清除浮动*/
  .clearfix:before, .clearfix:after {
    display: table;
    content: none;
  }
  .clearfix:after {
    clear: both;
  }
  .clearfix {
    *zoom: 1;
  }
  .copyrightContainer {
    text-align: center;
    margin-bottom: 20px;
  }
</style>
