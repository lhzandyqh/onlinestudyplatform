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
              <span>学堂：运用Python画图</span>
            </div>
          </el-col>
          <el-col :span="11">
            <div class="head_two">
              <img src="../../assets/numbertwo.png">
              <span @click="gotoExercises">练习：画正方形</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="classcontent_container contaier">
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>海龟画图是什么？</span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>海龟（turtle）是python提供给开发者的一个绘图的标准库，我们可以利用turtle绘制出各种各样有趣的图形也可以绘制出令人惊奇的图片。</span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span><img style="width: 400px;height: 250px;background-color: #a0b9ec" src="../../assets/classTwoPicture/pic2.jpg"></span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>使用海龟作图，我们不仅能够只用几行代码就创建出令人印象深刻的视觉效果，而且还可以跟随海龟看看每行代码如何影响到它的移动。这能够帮助我们理解代码的逻辑。</span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>让我们使用海龟作图来编写第一个程序。</span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span><img style="width: 726px;height: 354px;background-color: #a0b9ec" src="../../assets/classTwoPicture/pic3.png"></span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>当这段代码运行时，我们会得到衣服漂亮整齐的图片。</span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span><img style="width: 596px;height: 396px;background-color: #a0b9ec" src="../../assets/classTwoPicture/pic4.png"></span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>程序是怎么工作的呢</span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>让我们来逐行分析这个程序，仔细解读这个程序是怎么工作的。</span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>第1行是注释。正如我们之前所讲过的那样，注释是以一个井号（#）开头，允许我们在井号后写入一些提示，给自己或者以后阅读该程序的其他人一些提示，计算机不会阅读或者编译井号后的内容。在这个例子中，我们将这个程序是做什么的做一个简单说的说明。</span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>
          第2行导入（import）了绘制海龟图形的功能，导入已经编写过的模块（也是由代码编写）或者称为库，这是编程工作非常有趣的事情之一。如果我们编写了一些有趣并有用的程序，也可以将其与其他人分享，同时也可以自己重用它。当我们输入import turtle，就表示我们的程序能够使用那些python程序员所编写的代码。图上中的小黑色箭头就表示海龟，它在屏幕上移动的时候会使用海龟绘图。
        </span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>
          第3行t = turtle.Pen( )，它是让计算机知道我们将使用字母t表示海龟的画笔。这样的编码使得我们只需要录入t.forward( )，而不是turtle.Pen( ).forward( )，就可以让海龟在屏幕上用海龟画笔进行画图。字母t是告诉海龟怎么做的一种快捷方式。
        </span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>
          第4行最为复杂。我们创建了一个循环（loop）精确的说是for循环，它重复一组指令很多次。这个循环设置了一个范围（range），从0~99的100个数字（计算机总是从0开始计数，而不是像我们通常那样从1开始）。在该循环中，字母x遍历了0~99中的每一个数字。因此x从0开始，然后变为1，然后在变为2，依次知道99，一共执行了100次。其中x叫做变量（小读者可能会把x当做未知数，就像当他们求解x + 4 = 6中未知数x一样。年龄大一点的读者可能会通过代数课或者其他的数学课程认识x，早期的程序员正是从代数和数学中借用了变量的概念）变量在程序执行过程中存储了一个可以修改（变化）的值。我们在编程过程，每一个程序都会用到变量。
        </span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>
         第5行第6行代码，这两行代码缩进了，或者说，在左边留出了空格。这意味着他们在for循环结构当中（in the loop）并且是和第4行代码是一起的，每次x从0~99的范围中获取一个新的数字的时候，这些代码都会执行一次，直到达到100次时，跳出循环。
        </span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>
        第5行，命令t.forward( x )（forward是turtle库中画笔的一个属性，其表示向当前画笔方向移动x像素长度）是让海龟的画笔在屏幕上向前移动x个点，因为第一个数字是0，所以画笔根本不会移动。
              第6行，t.left( 90 )是让海龟向左转90°，或者说转四分之一个圈。
        </span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>
          下面我们来深刻介绍一下for循环。由于for循环，程序持续运行并且回到循环的开始位置。计算机加1后将x移动到范围中的下一个值，以为1依然位于从0~99的范围中，所以循环继续。现在x是1，因此画笔向前移动1个点，然后，画笔向左移动90°，因为代码是t.left( 90 )，这样一次for循环执行完毕，没有超出范围，回到for循环起始位置，执行下一次循环，依次类推，当x到达99是，for循环的最后一次迭代（执行），画笔围绕着正方形螺旋线的外围化了一条长长的线条，for循环结束，正方形螺旋图形就画出来了。
            下面我们随着x从0增加到12，将循环的每一步可视化得表示出来。
        </span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span><img style="width: 724px;height: 153px;background-color: #a0b9ec" src="../../assets/classTwoPicture/pic5.png"></span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>for循环0到4：绘制了前4条线（在x=5停止，0画笔不移动）
                   for循环5到8：绘制了另外四条线；正方形开始出现（x=9）
                for循环8到12：正方形螺旋线变为12条（3个正方形，x=13）计算机屏幕上的点或像素可能太小了，以至于我们无法很好地看到它们。但是随着x变得越来越大，t.forward( x )画的线条会越来越长。最后我们有了一个炫目的正方形螺旋的图形。
        </span>
      </div>
      <div class="classcontent_item">
        <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;border-radius: 50%;float: left;margin-left: -50px">
        <span>
          在这个案例中，我们之所以得到一个螺旋线，是因为每次转弯的时候，画笔都会走的更远一点。绘制的第一条线条只是1步长（x=1的时候），然后是2（循环的下一次的迭代），然后是3，以此类推，直到100，这个时候，线条的长度为99步长（像素）。再一次强调一下，屏幕上的像素可能太小了，以至于我们无法很容易地看到单个的点，但是一定要知道它们是存在的，而且我们会看到随着程序运行会包含更多的像素，线条会变得越来越长。
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
      this.$router.push('/testtwo')
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
