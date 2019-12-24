<template>
  <div class="app-container">
    <div class="saishi_title">
      <span>竞赛规则</span>
    </div>
    <el-divider></el-divider>
    <div class="saishi_content">
      <h4>小学组---贪吃蛇游戏</h4>
      <p>小学组正式比赛为每小组（或个人）完成赛项设置的任务。</p>
      <p>小学组正式比赛评分标准：</p>
      <p>评分指标有吃到果子数量与行进步数，优先比较吃到果子数量，数量相同时比较行进步数</p>
      <p>①首先按照吃到的果子数量排名，吃到的果子越多，排名越高；</p>
      <p>②吃到相同果子数量的选手按照行进步数排名，行进步数越少，排名越高</p>
      <p>③最终成绩为：每个小组比6轮，去掉一个最高分、一个最低分，剩下4轮取平均值为最终成绩。</p>
      <p>禁止事项：禁止带入与比赛相关的资料</p>
      <h4>中学组---贪吃蛇博弈算法对抗</h4>
      <p>初高中组比赛分为正式比赛、答辩。</p>
      <p>正式比赛：采用循环赛制，积分制；</p>
      <p>答辩：核心代码现场答辩评分（可以ppt展示，也可以直接展示代码）</p>
      <p>核心代码答辩:总时间10分钟，汇报5分钟+专家提问5分钟</p>
      <p>循环赛采用5局3胜制，每胜一局积10分；</p>
      <p>禁止事项：禁止带入与比赛相关的资料</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'compitionRules'
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
