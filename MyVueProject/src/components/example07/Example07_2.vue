<template>
<!-- 這是父元件 -->
  <div class="container-fluid text-left">
    <div class="row">
      <div class="col-sm-6">
        <h2 style="color:red">This is Example07_2.vue Start(父)</h2>
        <p>這是由子元件傳過來的值 => {{fatherGetData}}</p>
        <!-- 父元件接收子元件資料  將父元件資料傳給子元件-->
        <example07 @lookhere="fatherMethod" :getDataFromFather="father_data"></example07>
      </div>
    </div><br>
    <h2 style="color:red">This is Example07_2.vue End(父)</h2>
  </div>
</template>

<script>
import example07 from '@/components/example07/Example07_1'
// import example07 from './Example07_1'     兩種引入都可以
export default {
  data(){
    return{
      fatherGetData:"",
      father_data:[
        'teacher',
        'student',
        'mother',
        'grandmother',
        'uncle'
      ]
    }
  },
  components:{example07},
  methods:{
    fatherMethod(value){
      this.fatherGetData = value;
    }
  }
}
</script>
