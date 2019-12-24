<template>
  <div class="app-container">
    <div class="saishi_title">
      <span>竞赛纪律</span>
    </div>
    <el-divider></el-divider>
    <div class="saishi_content">
      <h4>小学组---贪吃蛇游戏</h4>
      <p>①每组选手提交自己的程序编程代码；</p>
      <p>②参加比赛的每组选手在相同标准下进行比赛，并完成赛项规定任务；</p>
      <p>③按照小学组赛项评价标准，进行排名。</p>
      <p>禁止事项：禁止带入与比赛相关的资料</p>
      <p>比赛检录时间：2019/11/03  8:00-9:00</p>
      <p>竞赛时间：2019/11/03   9:00-12:00</p>
      <h4>中学组---贪吃蛇博弈算法对抗</h4>
      <p>比赛总流程：正式比赛循环赛 > 答辩</p>
      <p>①每组选手提交自己的算法博弈代码；</p>
      <p>②进行比赛的两组选手的代码在屏幕上对抗演示，采取5局3胜制确定胜利方，胜利方获得10分；</p>
      <p>③决赛小组选手进行答辩评分。</p>
      <p>禁止事项：禁止带入与比赛相关的资料</p>
      <p>比赛检录时间：2019/11/03  8:00-9:00</p>
      <p>竞赛时间：2019/11/03   9:00-12:00</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'competitionDiscipline'
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
