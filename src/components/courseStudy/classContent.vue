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
<!--          <a style="text-decoration:none;color: black" href="#"><img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;margin-right:20px;border-radius: 50%;">杨启航</a>-->
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
            <span @click="goBack" style="display: inline-block;height: 50px;width: 200px;color: #bfbfbf">返回</span>
          </el-col>
          <el-col :span="11">
            <div class="head_one">
              <img src="../../assets/numberone.png">
              <span>学堂：为你打开Python之门</span>
            </div>
          </el-col>
          <el-col :span="11">
            <div class="head_two">
              <img src="../../assets/numbertwo.png">
              <span @click="gotoExercises">练习：打印 Hello World！</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="classcontent_container contaier">
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>为什么学习python</span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>那些最好的程序员不是为了得到更高的薪水或者得到公众的仰慕而编程，他们只是觉得这是一件有趣的事情。 ——Linux 之父 Linus Torvalds</span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>作为一个实用主义的学习者，最关心的问题一定是 “我为什么要选择学 Python，学会之后我可以用来做什么？”</span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>首先，对于初学者来说，比起其他编程语言，Python 更容易上手。Python 的设计哲学是优雅、明确、简单。在官方的 The Zen of Python（《Python 之禅》）中，有这样一句话，
            There should be one and preferably only one obvious way to do it.
                 Python追求的是找到最好的解决方案。相比之下，其他语言追求的是多种解决方案。如果你试着读一段写的不错的 Python 代码，会发现像是在读英语一样。这也是 Python 的最大优点，它使你能够专注于解决问题而不是去搞明白语言本身。
        </span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span><img style="width: 600px;height: 250px;background-color: #a0b9ec" src="../../assets/classPicture/picture1.png"><br>漫画《口渴的 Python 开发者》，形容Python 开发者非常轻松，来自 Pycot 网站</span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>Python 能做的事情有许多。在职场中，使用 Python 工作的主要是这样几类人：</span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>网站后端程序员：使用 Python 搭建网站、后台服务会比较容易维护，当需要增加新功能，用 Python 可以比较容易的实现。不少知名网站都使用了 Python 开发。</span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span><img style="width: 600px;height: 300px;background-color: #a0b9ec" src="../../assets/classPicture/picture2.png"><br>各知名网站</span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>网站的开发：借助功能丰富的网站框架 django、flask 等等，你可以快速搭建自己的网站，还可以做到移动端自适应。</span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span><img style="width: 600px;height: 500px;background-color: #a0b9ec" src="../../assets/classPicture/picture3.png"><br>Python 全栈实战课程的项目：十分钟短视频平台</span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>用爬虫爬取或处理大量信息：当你需要获取大批量数据或是批量处理的时候，Python 爬虫可以快速做到这些，从而节省你的重复劳动时间。比如：微博私信机器人、批量下载美剧、运行投资策略、刷折扣机票、爬合适房源、系统管理员的脚本任务等等。</span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span><img style="width: 600px;height: 362px;background-color: #a0b9ec" src="../../assets/classPicture/picture4.png"><br>ython 爬虫实战课程的项目：二手行情网站</span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>
          初学者经常会遇到的困惑是，看书上或是听课都懂，但还是不明白要怎么编程。这是因为缺乏足够多的实践。正如我们在婴儿时期学习说话的时候，最初是模仿父母的发音，逐渐才能学会表达自己的想法。学习编程也是一样，在你阅读这本教程的时候，需要模仿着示例敲一遍代码，不要怕麻烦、不要嫌简单，当你动手敲代码的时候，就会发现很多眼睛会忽略的细节：小到中文标点还是英文标点、大到语句之间的逻辑关系。当然，在你发现亲手写出的程序运行成功之后，你也会感受到无比的喜悦，你能用程序计算数学题了！你能实现小功能了！我会带着你循序渐进地完成一个个实践，直到你有能力脱离模仿、开始创造。
        </span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span><img style="width: 429px;height: 124px;background-color: #a0b9ec" src="../../assets/classPicture/picture5.jpg"></span>
      </div>
      <div>
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span><img style="width: 972px;height: 178px;background-color: #a0b9ec" src="../../assets/classPicture/picture6.png"></span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>打印是 Python中最常用的功能，顾名思义，我们现在就简单把print()这个功能理解为展示打印的结果。使用方法是把你要打印查看结果的对象塞进括号中，这样就可以了。（如果你的 print 不用括号也能使用，请检查你的 Python 版本是不是 Python2，为了方便快速理解编程概念和少走弯路，后面的所有例子都会用 Python 3.x 实现。）</span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>
          如果你使用命令行或终端直接输入 print（a），你会得到这样的结果： name 'a' is not defined 。这是因为你漏掉了变量的赋值，Python 是无法打印不存在的对象的。在今后的学习中，我们还有很多很多的东西要进行“打印”，我们需要知道要打印的东西是什么。即便变量是最容易理解的基础知识，也不要因为简单就随意命名，一定要保持 Python 的可读性。
        </span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>接下来让我们进入练习，尝试一下吧！</span>
      </div>
    </div>
  </div>
</template>

<script>
import userSettingPopover from '@/components/userSetting/userSettingPopover'
export default {
  name: 'classContent',
  components: { userSettingPopover },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    gotoExercises: function () {
      console.log('我要跳转界面了')
      this.$router.push('/testone')
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
  .app-container {
    background-color: #0a080f;
    margin-bottom: -100px;
  }
  .contaier {
    width: 1300px;
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
    background-color: #34333c;
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
  .head_one{
    color: #ffffff;
    float: right;
    margin-top: 5px;
    height: 40px;
    width: 300px;
    background-color: #484750;
    border-radius: 20px;
    cursor: pointer;
  }
  .head_one img {
    display: block;
    width: 30px;
    height: 30px;
    margin-left: 20px;
    margin-top: 6px;
  }
  .head_one span {
    display: block;
    height: 40px;
    width: 200px;
    font-size: 15px;
    margin-top: -40px;
    margin-left: 80px;
  }
  .head_two{
    color: #ffffff;
    margin-left: 30px;
    float: left;
    margin-top: 5px;
    height: 40px;
    width: 300px;
    background-color: #484750;
    border-radius: 20px;
    cursor: pointer;
  }
  .head_two img {
    display: block;
    width: 30px;
    height: 30px;
    margin-left: 20px;
    margin-top: 6px;
  }
  .head_two span {
    display: block;
    height: 40px;
    width: 200px;
    font-size: 15px;
    margin-top: -40px;
    margin-left: 80px;
  }
  .classcontent_container {
    /*height: 600px;*/
    padding-top: 15px;
    background-color: #201f26;
    padding-bottom: 15px;
    /*margin-bottom: 30px;*/
    padding-right: 30px;
  }
  .classcontent_item {
    position: relative;
    margin-bottom: 20px;
  }
  .classcontent_item span {
    color: #c2c1bc;
    display: inline-block;
    border-left-style: solid;
    border-left-color: #54432f;
    padding-left: 20px;
  }
  /*.classcontent_item span{*/
  /*  background-color: #fff;*/
  /*  padding: 5px 8px;*/
  /*  display: inline-block;*/
  /*  border-radius: 20px;*/
  /*  margin:10px 0 10px 10px;*/
  /*  position: relative;*/

  /*}*/
  /*.classcontent_item span::after{*/
  /*  content: '';*/
  /*  border: 8px solid #ffffff00;*/
  /*  border-right: 8px solid #fff;*/
  /*  position: absolute;*/
  /*  top: 13px;*/
  /*  left: -16px;*/
  /*}*/

</style>
