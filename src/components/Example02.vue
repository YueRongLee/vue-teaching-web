<template>
  <div class="container-fluid">
    <!-- 資料顯示於特定條件v-if(else)/v-show -->
    <br>
    <h3><b>資料顯示於特定條件</b></h3><hr><br><br>
    <div class="row">
      <div class="col-sm-12 text-left">
        <input type="checkbox" v-model="displayMe">顯示或隱藏(請按F12看兩者差異)
      </div>
      <div class="col-sm-2">
        <b>v-if：</b><hr>
        <span v-if="displayMe">v-if ... rendered</span>
      </div>

      <div class="col-sm-2">
        <b>v-show：</b><hr>
        <span v-show="displayMe">v-show ... rendered</span>
      </div>
    </div>
    
    <br><br><br><hr>

    <div class="row">
      <div class="col-sm-6">
        <b>v-if-else</b><hr>
        <input type="text" placeholder="type a keyword" class="form-control" v-model.lazy="condition">
        <span v-if="condition==='showVueImage'"><br><img src="../assets/logo.png" alt=""></span>
        <span v-else-if="condition==='showMyLogo'"><br><img src="../assets/my_logo.jpg" alt=""></span>
        <span style="color:red" v-else>You have typed wrong keywords, try again.</span>
        <div :title="hint" class="my_hint">滑鼠hover可顯示提示</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      displayMe:true,
      condition:"",
      hint:"可打的選項有：showVueImage, showMyLogo"
    }
  }
}
</script>

<style>
.my_hint{
  position:absolute;
  top:90px;
  left:600px;
  cursor:pointer;
}
</style>
