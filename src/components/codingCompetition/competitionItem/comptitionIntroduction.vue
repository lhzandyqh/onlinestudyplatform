<template>
  <div class="app-container">
   <div class="saishi_title">
     <span>赛事简介</span>
   </div>
    <el-divider></el-divider>
    <div class="saishi_content">
      <p>AlphaGo机器人战胜了人类顶尖围棋选手，擅长聊天的机器人可以成为你的朋友，人工智能离我们越来越近，强大的人工智能算法在进行着认知、学习和预测，为我们提供医疗、法律、金融等方面的建议和决策。青少年编程博弈算法挑战赛正是利用python编程语言来实现博弈算法，作为博弈者可以最大程度利用游戏的规则开发出最佳的算法策略；通过比赛，参赛者用python语言编程来解决人工智能问题，提升自己，训练逻辑思维能力。</p>
      <p>在人工智能的时代，Python语言变得日益流行。对于Python数据科学，顾名思义，就是通过Python进行数据的处理与分析。Python数据科学是从事AI所必须的技能，因此学习Python数据科学是非常有必要的。人工智能在过去几年发展迅速。面向人工智能的开发一方面是使用Python与人工智能开源框架进行快速开发，另一方面是利用各个主要云计算提供商发布的人工智能服务，通过面向开发者人工智能API快速搭建实用的人工智能应用。</p>
      <p>博弈算法编程挑战赛，以Python语言为基础，对涉及到的机器学习中的分类、回归和聚类等的相关算法与实例用到的机器学习库在开源数据上进行算法测试和调节相关参数，以有趣的效果体会人工智能的魅力。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comptitionIntroduction'
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
