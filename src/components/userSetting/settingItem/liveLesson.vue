<template>
  <div class="app-container">
    <div class="app-content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="正在直播" name="first">
          <div class="first-content">
            <ul>
              <li>
                <div class="living-item">
                  <el-row>
                    <el-col :span="8">
                      <div class="living-name">
                        <span style="margin-left: 30px">python人工智能大讲堂系列五</span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="living-time">
                        <span>2019-06-01 14:00 </span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="living-logo">
                        <img :src="zhibotwo">
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </li>
              <li>
                <div class="living-item">
                  <el-row>
                    <el-col :span="8">
                      <div class="living-name">
                        <span style="margin-left: 30px">python人工智能大讲堂系列四</span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="living-time">
                        <span>2019-05-01 14:00 </span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="living-logo">
                        <img :src="zhibotwo">
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </li>
              <li>
                <div class="living-item">
                  <el-row>
                    <el-col :span="8">
                      <div class="living-name">
                        <span style="margin-left: 30px">python人工智能大讲堂系列三</span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="living-time">
                        <span>2019-04-01 16:00  </span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="living-logo">
                        <img :src="zhibotwo">
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </li>
              <li>
                <div class="living-item">
                  <el-row>
                    <el-col :span="8">
                      <div class="living-name">
                        <span style="margin-left: 30px">python人工智能大讲堂系列二</span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="living-time">
                        <span>2019-03-01 14:00  </span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="living-logo">
                        <img :src="zhibotwo">
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </li>
              <li>
                <div class="living-item">
                  <el-row>
                    <el-col :span="8">
                      <div class="living-name">
                        <span style="margin-left: 30px">python人工智能大讲堂系列一</span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="living-time">
                        <span>2019-02-01 14:00 </span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="living-logo">
                        <img :src="zhibotwo">
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </li>
            </ul>
          </div>
          <div class="fenye">
            <el-pagination
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="直播结束" name="second">
          <div class="second-content">
            <ul>
              <li>
                <div class="living-item">
                  <el-row>
                    <el-col :span="8">
                      <div class="living-name">
                        <span style="margin-left: 30px">python人工智能大讲堂系列五</span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="living-time">
                        <span>2019-06-01 16:00 </span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="living-logo">
                        <img :src="ending">
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </li>
              <li>
                <div class="living-item">
                  <el-row>
                    <el-col :span="8">
                      <div class="living-name">
                        <span style="margin-left: 30px">python人工智能大讲堂系列四</span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="living-time">
                        <span>2019-05-01 14:00  </span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="living-logo">
                        <img :src="ending">
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </li>
              <li>
                <div class="living-item">
                  <el-row>
                    <el-col :span="8">
                      <div class="living-name">
                        <span style="margin-left: 30px">python人工智能大讲堂系列三</span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="living-time">
                        <span>2019-04-01 16:00  </span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="living-logo">
                        <img :src="ending">
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </li>
              <li>
                <div class="living-item">
                  <el-row>
                    <el-col :span="8">
                      <div class="living-name">
                        <span style="margin-left: 30px">python人工智能大讲堂系列二</span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="living-time">
                        <span>2019-03-01 14:00 </span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="living-logo">
                        <img :src="ending">
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </li>
              <li>
                <div class="living-item">
                  <el-row>
                    <el-col :span="8">
                      <div class="living-name">
                        <span style="margin-left: 30px">python人工智能大讲堂系列一</span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="living-time">
                        <span>2019-02-01 14:00 </span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="living-logo">
                        <img :src="ending">
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </li>
            </ul>
          </div>
          <div class="fenye">
            <el-pagination
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'liveLesson',
  data () {
    return {
      activeName: 'first',
      zhibotwo: require('@/assets/zhibotwo.png'),
      ending: require('@/assets/ending.png')
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
  .first-content {
    margin-left: 40px;
  }
  .first-content li {
    margin-bottom: 20px;
    list-style: none;
  }
  .first-content li:before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: skyblue;
    border-radius: 50%;
    margin-right: 25px;
    vertical-align: middle;
  }
  .second-content {
    margin-left: 40px;
  }
  .second-content li {
    margin-bottom: 20px;
    list-style: none;
  }
  .second-content li:before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: skyblue;
    border-radius: 50%;
    margin-right: 25px;
    vertical-align: middle;
  }
  .living-name,
  .living-time,
  .living-logo {
    margin-top: -17px;
  }
  .living-logo img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  .fenye {
    text-align: center;
  }
</style>
