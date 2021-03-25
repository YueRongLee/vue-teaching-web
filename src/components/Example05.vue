<template>
  <div class="container-fluid">
    <!-- 迴圈顯示多筆數據 -->
    <br>
    <h3><b>迴圈顯示多筆數據</b></h3><hr><br><br>
    <div class="row">
      <div class="col-sm-3 text-left">
      <b>v-for (物件object)</b><hr>
        <ul>
          <li v-for="(obj,key,index) in my_obj" :key="obj.name">
            {{index + 1}}. My {{key}} is {{obj}}.
          </li>
        </ul>
      </div>

      <div class="col-sm-3 text-left">
      <b>v-for (陣列array)</b><hr>
        <ul>
          <li v-for="(arr,index) in my_array" :key="arr">
            {{index + 1}}. {{arr}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      my_obj:{
        name:'Jason',
        sex:'male',
        age:25,
        favorite:'playing game'
      },
      my_array:[
        'apple',
        'banana',
        'lemon',
        'pineapple',

      ]
    }
  }
}
</script>
