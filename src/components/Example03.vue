<template>
  <div class="container-fluid">
    <!-- input類與資料綁定v-model -->
    <br>
    <h3><b>input類與資料綁定</b></h3><hr><br><br>
    <div class="row">
      <div class="col-sm-2 text-left">
        <b>v-model (checkbox)</b><hr>
        <input type="checkbox" value="chocolate" v-model="my_checkbox">chocolate
        <input type="checkbox" value="flower" v-model="my_checkbox">flower
        <input type="checkbox" value="tea" v-model="my_checkbox">tea
      </div><br>
      <div class="col-sm-5 text-left">
        你的選擇是：{{my_checkbox}}
      </div>
    </div><br><br><br><br>

    <div class="row">
      <div class="col-sm-2 text-left">
        <b>v-model (select)</b><hr>
        <select v-model="my_select">
          <option value="chocolate">chcolate</option>
          <option value="flower">flower</option>
          <option value="tea">tea</option>
        </select>
      </div><br>
      <div class="col-sm-5 text-left">
        你的選擇是：{{my_select}}
      </div>
    </div><br><br><br><br>

    <div class="row">
      <div class="col-sm-2 text-left">
        <b>v-model (radio)</b><hr>
        <input type="radio" value="Chocolate" v-model="my_radio">Chocolate
        <input type="radio" value="flower" v-model="my_radio">flower
        <input type="radio" value="tea" v-model="my_radio">tea
      </div><br>
      <div class="col-sm-5 text-left">
        你的選擇是：{{my_radio}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      my_checkbox:[],
      my_select:"",
      my_radio:""
    }
  }
}
</script>
