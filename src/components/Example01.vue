<template>
  <div class="container-fluid">
    <!-- 資料顯示與綁定 -->
    <br>
    <h3><b>資料顯示與綁定</b></h3><hr><br><br>
    <div class="row text-left">
      <div class="col-sm-3">
        <b>雙括號</b><hr>
        {{message}}
      </div>
      <div class="col-sm-3">
        <b>v-text</b><hr>
        <p v-text="message"></p>
      </div>
      <div class="col-sm-3">
        <b>v-html</b><hr>
        <span v-html="message"></span>
      </div><hr>
      <div class="col-sm-3">
        <b>4.v-once：</b><hr>
        <span v-once>{{message}}</span>
      </div><hr>
    </div><br><br><br>
    <div style="width:500px">
      使用v-model綁定：<hr><input class="form-control" style="width:500px" type="text" v-model="message">
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      message:'<span style="color:red">These are Vue Directives</span>'
    }
  }
}
</script>

