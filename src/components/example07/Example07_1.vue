<template>
<!-- 這是子元件 -->
  <div class="container-fluid">
    <!-- 元件與資料傳遞 -->
    <br>
    <h2 style="color:blue">This is Example07_1.vue Start(子)</h2>
    <h3><b>元件與資料傳遞</b></h3><hr><br><br>
    <div class="row">
      <!-- 子元件自己的資料 -->
      <div class="col-sm-4 text-left">
        <h4>子元件自己的資料</h4><hr>
        <ul>
          <li v-for="animal in animals" :key="animal.dog">
            {{animal.dog}}
          </li>
        </ul>
      </div>

      <!-- 從父元件抓取的資料 -->
      <div class="col-sm-4">
        <h4>從父元件抓取的資料</h4><hr>
        <ul>
          <li v-for="data in getDataFromFather" :key="data">
            {{data}}
          </li>
        </ul>
      </div>

      <!-- 子元件傳資料給父元件 -->
      <div class="col-sm-4">
        <h4>子元件將資料傳給父元件</h4><hr>
        <input type="button" v-on:click="childMethod('kaohsiung')" value="touch me">
      </div>
    </div>
    <h2 style="color:blue">This is Example07_1.vue End(子)</h2>
  </div>
</template>

<script>
export default {
  data(){
    return{
      animals:[
        {'dog':'哈士奇犬'},
        {'dog':'拉布拉多幼犬'},
        {'dog':'大白熊幼犬'},
        {'dog':'貴賓犬'},
        {'dog':'英國鬥牛犬'},
        {'dog':'薩摩'},
        {'dog':'阿拉斯加雪橇犬'},
        {'dog':'博美犬'},
      ]
    }
  },
  //子元件想抓父元件資料時
  props:['getDataFromFather'],
  methods:{
    childMethod(val){
      var data = {
        'cityName':val
      }
      this.$emit('lookhere', data.cityName);
    }
  }
}
</script>
