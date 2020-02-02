<template>
  <div class="app-container">
    <div class="saishi_title">
      <span>实况记录</span>
    </div>
    <el-divider></el-divider>
    <div class="photo-container">
      <img src="../../../assets/photo/photofive.jpg">
    </div>
    <div class="photo-container">
      <img src="../../../assets/photo/photonine.jpg">
    </div>
    <div class="photo-container">
      <img src="../../../assets/photo/photoone.jpg">
    </div>
    <div class="photo-container">
      <img src="../../../assets/photo/photoseven.jpg">
    </div>
    <div class="photo-container">
      <img src="../../../assets/photo/photosix.jpg">
    </div>
    <div class="photo-container">
      <img src="../../../assets/photo/phototwo.jpg">
    </div>
    <div class="photo-container">
      <img src="../../../assets/photo/photothree.jpg">
    </div>
    <div class="photo-container">
      <img src="../../../assets/photo/photofour.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'compitionphoto',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .app-container{
    padding: 30px;
  }
  .photo-container {
    text-align: center;
    padding: 30px;
    margin-bottom: 30px;
  }
  .photo-container img {
    width: 600px;
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

</style>
