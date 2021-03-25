<template>
  <div class="container-fluid">
    <!-- 綁定DOM上的標籤屬性 v-bind -->
    <br>
    <h3><b>綁定DOM上的標籤屬性</b></h3><hr><br><br>
    <div class="row">
      <div class="col-sm-3 text-left">
        <b>v-bind</b><hr>
        Please input backgroundColor : 
        <input type="text" class="form-control" style="width:100px" v-model="my_backgroundColor"><br>
        Please input fontSize :
        <input type="text" class="form-control" style="width:100px" v-model="my_fontSize"><br><br><br>

        <div style="width:500px" v-bind:style="{backgroundColor:my_backgroundColor, fontSize: my_fontSize + 'px'}">This is a div</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      my_backgroundColor:"",
      my_fontSize:""
    }
  }
}
</script>
