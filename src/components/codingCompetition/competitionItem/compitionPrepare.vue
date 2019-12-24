<template>
  <div class="app-container">
    <div class="saishi_title">
      <span>比赛准备及流程</span>
    </div>
    <el-divider></el-divider>
    <div class="saishi_content">
      <h4>参赛选手准备</h4>
      <p>①笔记本电脑一台：
        操作系统：windows7，8或10
        i5以上配置、安装python3.5.1、pycharm编译器
      </p>
      <p>②U盘：2GB以上</p>
      <p>③纸+笔</p>
      <h4>小学组---贪吃蛇游戏比赛流程</h4>
      <p>①裁判宣读比赛要求</p>
      <p>②各小组向裁判领取比赛代码</p>
      <p>③比赛时间：90分钟</p>
      <p>④各小组向裁判提交比赛代码</p>
      <p>⑤进行正式比赛</p>
      <p>⑥公布正式比赛积分结果</p>
      <h4>中学组---贪吃蛇博弈算法对抗比赛流程</h4>
      <p>①裁判宣读比赛规则</p>
      <p>②各小组向裁判领取比赛代码</p>
      <p>③比赛时间：90分钟</p>
      <p>④各小组向裁判提交比赛代码</p>
      <p>⑤进行循环赛，并公布循环赛积分结果</p>
      <p>⑥代码展示答辩，评委打分</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'compitionPrepare'
}
</script>

<style scoped>
  .app-container {
    padding: 30px;
  }
  .saishi_title {
    height: 50px;
    width: 200px;
    /*background-color: #716b8b;*/
    border-left-style: solid;
    border-left-color: #a0b9ec;
    border-left-width: 7px;
  }
  .saishi_title span {
    display: block;
    height: 50px;
    width: 200px;
    text-align: center;
    line-height: 50px;
    color: #707070;
  }
  .saishi_content p {
    line-height: 50px;
    text-indent: 2em;
  }
</style>
