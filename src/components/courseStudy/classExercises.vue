<template>
  <div class="app_container" >
    <div class="course_head">
      <div class="contaier">
        <el-row>
          <el-col :span="1">
            <img src="../../assets/back.png">
          </el-col>
          <el-col :span="1">
            <span style="display: inline;height: 50px;width: 200px;color: #bfbfbf">返回</span>
          </el-col>
<!--          <el-col :span="11">-->
<!--            <div class="head_one">-->
<!--              <img src="../../assets/numberone.png">-->
<!--              <span>学堂：为你打开Python之门</span>-->
<!--            </div>-->
<!--          </el-col>-->
<!--          <el-col :span="11">-->
<!--            <div class="head_two">-->
<!--              <img src="../../assets/numbertwo.png">-->
<!--              <span @click="gotoExercises">练习：打印 Hello World！</span>-->
<!--            </div>-->
<!--          </el-col>-->
        </el-row>
      </div>
      <div class="main_body">
        <el-row>
          <el-col :span="8">
            <div class="left_container">
              <div class="left_head">
                <el-row>
<!--                  <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">-->
<!--                    <el-menu-item index="/testone" >-->
<!--                      步骤-->
<!--                    </el-menu-item>-->
<!--                    <el-menu-item index="/testtwo">文件</el-menu-item>-->
<!--                  </el-menu>-->
                  <el-col :span="12">
                    <span :class="[buzhou?'dianji':'nodianji']" style="cursor: pointer" @click="dianjiBuzhou">步骤</span>
                  </el-col>
                  <el-col :span="12">
                    <span :class="[wenjian?'dianji':'nodianji']" style="cursor: pointer" @click="dianjiwenjian">文件</span>
                  </el-col>
                </el-row>
              </div>
              <div class="left_content">
                <div v-if="buzhou">
                  <div class="left_content_head" style="margin-top: 70px">
                    <el-row>
                      <el-col :span="2">
                        <div style="margin-left: 50px;margin-top: -2px">
                          <img style="width:30px;height: 30px" src="../../assets/oneyellow.png">
                        </div>
                      </el-col>
                      <el-col :span="13">
                        <span style="margin-left: 50px">代码实操</span>
                      </el-col>
                    </el-row>
                  </div>
                  <div class="left_content_body">
                    <div style="margin-left: 60px;margin-top: 20px">
                      <span>使用print()函数，以及三引号，打印皮卡丘</span>
                    </div>
                    <div style="margin-left: 60px;margin-top: 30px">
                      <img style="width: 300px;height: 300px;background-color: #716b8b;border-radius: 20px">
                    </div>
                    <div style="margin-top: 20px;margin-left: 70px">
                      <el-row>
                        <el-col :span="4">
                          <div style="float: right">
                            <el-button type="text">仍有疑惑</el-button>
                          </div>
                        </el-col>
                        <el-col :span="2">
                          <div style="margin-left: 20px;margin-top: 5px">
                            <img style="width:30px;height: 30px" src="../../assets/wenhao.png">
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                 </div>
                </div>
                <div v-if="wenjian">
                  <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="一致性 Consistency" name="1">
                      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="root" name="2">
                      <div class="wenjian_item" style="padding-left: 100px;cursor: pointer">main.py</div>
                    </el-collapse-item>
                  </el-collapse>
                  <div style="text-align: center;margin-top: 300px">
                    <span style="display: inline-block;width: 200px;height: 60px;line-height: 60px;text-align: center;border-radius: 20px;background-color: #ffac5e;font-size: 15px;color: white;font-weight: bolder;cursor: pointer">新建文件</span>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="center_container">

            </div>
          </el-col>
          <el-col :span="8">
            <div class="right_container">

            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
<!--  <div class="app">-->
<!--    <div class="one">-->

<!--    </div>-->
<!--    <div class="two">-->

<!--    </div>-->
<!--    <div class="three">-->

<!--    </div>-->
<!--  </div>-->
</template>

<script>
export default {
  name: 'classExercises',
  data () {
    return {
      activeIndex: '1',
      buzhou: true,
      wenjian: false
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    dianjiBuzhou: function () {
      this.buzhou = true
      this.wenjian = false
    },
    dianjiwenjian: function () {
      this.buzhou = false
      this.wenjian = true
    }
  }
}
</script>

<style scoped>
  .contaier {
    width: 100%;
    margin: 0 auto;
  }
  .course_head {
    width: 100%;
    height: 50px;
    background-color: #34333c;
    /*position: fixed;*/
    /*margin-top: 100px;*/
    /*margin-top: -50px;*/
    /*left: 0;*/
  }
  .contaier img {
    display: inline;
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
  .main_body {
    width: 100%;
    height: 100%;
    background-color: #716b8b;
  }
  .left_container{
    width: 100%;
    height: 670px;
    background-color: #ffffff;
  }
  .left_head {
    width: 100%;
    height: 50px;
    background-color: #f4f4f4;
  }
  .center_container
  {
    width: 100%;
    height: 670px;
    background-color: #19171d;
  }
  .right_container{
    width: 100%;
    height: 670px;
    background-color: #121017;
  }
  .dianji {
    display: block;
    text-align: center;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom-style: solid;
  }
  .nodianji {
    display: block;
    text-align: center;
    width: 100%;
    height: 50px;
    line-height: 50px;
  }
  .left_content {
    /*width: 100%;*/
    /*height: 400px;*/
    /*background-color: gold;*/
  }
  .wenjian_item:hover {
    height: 40px;
    background-color: #f4f4f4;
    line-height: 40px;
  }
  .app{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #42b983;
  }
  .one{
    width: 30%;
    height: 100%;
    background-color: #f4f4f4;
    float: left;
  }
  .two{
    width: 30%;
    height: 100%;
    background-color: #f34;
    float: left;
  }
  .three{
    width: 30%;
    height: 100%;
    background-color: burlywood;
    float: left;
  }
</style>
