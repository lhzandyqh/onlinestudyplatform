<template>
  <div class="app-container">
    <div class="app-content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="正在学习" name="first">
          <div class="studying">
            <div class="class-item">
              <img style="background-color: #a68b56;height: 150px;width: 400px;border-radius: 20px 20px 0 0" :src="pictwo">
              <div class="text-container">
                <h5>python计算思维实践基础课</h5>
                <p>适合零基础的同学，学会简单语法和简单编程逻辑思维，掌握调用模块的能力，然后独立完成小型项目。</p>
              </div>
              <div>
                <el-row>
                  <el-col :span="6">
                    <div style="margin-left: 20px;margin-top: -2px">
                      <span style="font-size: 14px">学习进度：</span>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <el-progress :percentage="50"></el-progress>
                  </el-col>
                  <el-col :span="6">
                    <div style="margin-top: -10px">
                      <el-button type="text">继续学习</el-button>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="学习完成" name="second">
          <div class="second-container">
            <div class="picture">
              <img :src="nocontent">
            </div>
            <div style="text-align: center;margin-top: 20px">
              <span style="color: #636363">暂无内容</span>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="课程收藏" name="third">
          <div class="second-container">
            <div class="picture">
              <img :src="nocontent">
            </div>
            <div style="text-align: center;margin-top: 20px">
              <span style="color: #636363">暂无内容</span>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myLesson',
  data () {
    return {
      activeName: 'first',
      pictwo: require('@/assets/picturetwo.jpg'),
      nocontent: require('@/assets/nocontent.png')
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
  .app-content {
    padding: 30px;
  }
  .class-item {
    width: 400px;
    height: 300px;
    background-color: #f4f4f4;
    border-radius: 20px;
  }
  .text-container {
    padding: 20px;
  }
  .picture {
    text-align: center;
    margin-top: 40px;
  }
</style>
