<template>
  <div class="app">
    <div class="exe_head">
      <div class="contaier">
        <el-row>
          <el-col :span="1">
            <img src="../../assets/back.png">
          </el-col>
          <el-col :span="1">
            <span style="display: inline;height: 50px;width: 200px;color: #bfbfbf">返回</span>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="exe_container">
      <div class="left_container">
        <div class="left_head">
          <el-row>
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
                <span>使用print()函数，以及引号，打印皮卡丘</span>
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
      <div class="center_container">
        <div class="center_head">
        </div>
        <textarea id="code" ref="mycode" class="codesql" v-model="code" style="height:700px;width:100%;"></textarea>
        <div class="center_bottom">
          <div style="display: inline-block;margin-top: 20px;margin-left: 20px">
            <img id='shuaxin' style="width: 30px;height: 30px" src="../../assets/shuaxin.png" @click="shuxin">
          </div>
          <div style="display: inline-block;margin-top: 10px;margin-left: 400px">
            <el-button type="text" id="test" @click="run">运行</el-button>
          </div>
        </div>
      </div>
      <div class="right_container">
        <div class="right_head">
          <div class="right_head_title">
            <span>终端(显示代码运行结果)</span>
          </div>
        </div>
        <div class="right_content">
          <div class="zhongdaun">
            <span>bash:root$ python/practice</span>
          </div>
          <div class="zhongdaun_outcome_container">
            <div class="outcome">
              <span>{{codeOutput}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios'

import 'codemirror/theme/ambiance.css'
import 'codemirror/theme/abcdef.css'
import 'codemirror/theme/shadowfox.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/hint/show-hint.css'

let CodeMirror = require('codemirror/lib/codemirror')
require('codemirror/addon/edit/matchbrackets')
require('codemirror/addon/selection/active-line')
require('codemirror/mode/python/python')
require('codemirror/addon/hint/show-hint')
require('codemirror/addon/hint/sql-hint')

export default {
  name: 'testone',
  data () {
    return {
      activeIndex: '1',
      buzhou: true,
      wenjian: false,
      code: '//按Ctrl键进行代码',
      codeData: '',
      codeOutput: ''
    }
  },
  mounted () {
    debugger
    let mime = 'python'
    // let mime = 'text/x-mariadb'
    // let theme = 'ambiance'// 设置主题，不设置的会使用默认主题
    let theme = 'shadowfox'// 设置主题，不设置的会使用默认主题
    // eslint-disable-next-line no-unused-vars
    var editor = CodeMirror.fromTextArea(this.$refs.mycode, {
      mode: mime, // 选择对应代码编辑器的语言，我这边选的是数据库，根据个人情况自行设置即可
      indentWithTabs: true,
      smartIndent: false,
      lineNumbers: true,
      matchBrackets: true,
      indentUnit: 4,
      theme: theme,
      // autofocus: true,
      // extraKeys: { Ctrl: 'autocomplete' }, // 自定义快捷键
      hintOptions: {
        // 自定义提示选项
        tables: {
          users: ['name', 'score', 'birthDate'],
          countries: ['name', 'population', 'size']
        }
      }
    })
    editor.setSize('auto', '80%')
    editor.on('onchange', function () {
      editor.showHint()
    })
    var that = this
    var test = document.getElementById('test')
    test.onclick = function () {
      that.codeData = editor.getValue()
      console.log('检查' + that.codeData)
    }
    var shuaxin = document.getElementById('shuaxin')
    shuaxin.onclick = function () {
      editor.setValue('//按Ctrl键进行代码')
    }
  },
  methods: {
    shuxin: function () {
      this.code = '//按Ctrl键进行代码'
      this.codeOutput = ''
    },
    run: function () {
      console.log('开始编译')
      setTimeout(() => {
        const params = new window.FormData()
        console.log(this.codeData)
        params.append('code', this.codeData)
        this.$axios({
          method: 'post',
          url: 'http://114.242.223.253/snake_python/python/api/runcode',
          data: params
        }).then(res => {
          console.log(res)
          console.log('输出处理后的代码结果')
          this.codeOutput = res.data.data.substring(0, res.data.data.length - 1)
          console.log(this.codeOutput)
        })
      }, 1000)
    },
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
  .codesql {
    font-size: 11pt;
    font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
  }
  .app {
    position: absolute;
    width: 100%;
    height: 100%;
    /*background-color: #f7f7fb;*/
    background-color: skyblue;
  }
  .contaier {
    width: 100%;
    margin: 0 auto;
  }
  .contaier img {
    display: inline;
    margin-left: 20px;
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
  .exe_head {
    position: absolute;
    width: 100%;
    height: 50px;
    background-color: #34333c;
  }
  .exe_container {
    position: absolute;
    width: 100%;
    height: 94.7%;
    margin-top: 50px;
  }
  .left_container {
    float: left;
    width: 33.3%;
    height: 100%;
    background-color: #f4f4f4;
  }
  .center_container {
    float: left;
    width: 33.3%;
    height: 100%;
    background-color: #19171d;
  }
  .right_container {
    float: left;
    width: 33.4%;
    height: 100%;
    background-color: #121017;
  }
  .left_head {
    width: 100%;
    height: 50px;
    background-color: #f4f4f4;
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
  .center_head {
    height: 50px;
    width: 100%;
    background-color: #262530;
  }
  .center_bottom{
    width: 100%;
    height: 10%;
    background-color: #262530;
  }
  .right_head {
    height: 50px;
    width: 100%;
    background-color: #121017;
  }
  .right_head_title {
    margin-left: 30px;
  }
  .right_head_title span {
    display: inline-block;
    width: 200px;
    height: 50px;
    color: #717074;
    line-height: 50px;
    font-size: 16px;
  }
  .zhongdaun {
    margin-top: 10px;
    margin-left: 30px;
  }
  .zhongdaun span {
    color: #c2c1c6;
  }
  .zhongdaun_outcome_container {
    margin-left: 30px;
    margin-top: 30px;
  }
  .outcome span {
    color: #c2c1c6;
  }
</style>
