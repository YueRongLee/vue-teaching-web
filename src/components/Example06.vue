<template>
  <div class="container-fluid">
    <!-- 事件監聽 -->
    <br>
    <h3><b>事件監聽</b></h3><hr><br><br>
    <div class="row">

      <div class="col-sm-4">
        The count is {{my_count}}
        <button v-on:click="count">點我</button><br>
      </div>

      <div class="col-sm-8 text-left">
        <h5 style="background:-webkit-linear-gradient(left, #fff6bc, #e5dcdc);width:200px">猜數字</h5>
        <form>
          <input type="number" class="form-control" style="width:150px" v-model="my_guess" v-on:keypress.enter="check">
          <button v-on:click="check">Go</button>
          <input type="reset" value="reset">
          <span style="color:red" :style="my_style">{{my_message}}</span><br>
          <label><input type="checkbox" v-model="my_hint"> 是否顯示答案？ </label>
          <p v-show="my_hint">提示：The random is {{my_random}}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      my_count:0,
      my_random:Math.floor(Math.random()*100+1),
      my_guess:0,
      my_message:"",
      my_style:"",
      my_hint:false,
      my_low:0,
      my_high:100
    }
  },
  methods:{
    count(){
      this.my_count ++ ; 
      if(this.my_count > 10){
        alert("The count is over 10.");
        console.log(typeof(this.my_random));
        console.log(typeof(this.my_guess));
      }
    },
    check(){
      if(this.my_guess>100 || this.my_guess <= 0){
        this.my_message = "請輸入1-100的數";
      }else if(this.my_guess < this.my_random){
        this.my_low = this.my_guess;
        this.my_message = "請輸入"+this.my_low + "~"+this.my_high+"的數";
      }else if(this.my_guess > this.my_random){
        this.my_high = this.my_guess;
        this.my_message = "請輸入"+this.my_low+"~"+this.my_high+"的數";
      }else{
        this.my_message = "恭喜猜對囉！";
        this.my_style="color:green";
      }
    }
  }
}
</script>
