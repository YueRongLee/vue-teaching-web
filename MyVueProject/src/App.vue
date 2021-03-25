<template>
  <div>
    <div class="container-fluid jumbotron text-success text-center">
      <div class="row">
        <div class="com-sm-1 my_logo">
          <img src="./assets/my_logo.jpg" alt="" height="100">
        </div>
        <div class="col-sm-11 my_title">
          <h1><b>Vue範例演示</b></h1>
          <h3>Example of Vue</h3> 
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row" style="min-height:100vh;margin-top:-32px">
        <div class="col-sm-2 col_edit my_sidebar">
          <h4 style="margin:20px 0 0 10px;">導覽列</h4>
          <hr><br>
          <ul>
            <li><router-link to="/example01">01-資料顯示與綁定</router-link><br></li>
            <li><router-link to="/example02">02-資料顯示於特定條件</router-link><br></li>
            <li><router-link to="/example03">03-input類與資料綁定</router-link><br></li>
            <li><router-link to="/example04">04-綁定DOM上的標籤屬性</router-link><br></li>
            <li><router-link to="/example05">05-迴圈顯示多筆數據</router-link><br></li>
            <li><router-link to="/example06">06-事件監聽</router-link><br></li>
            <li><router-link to="/example07">07-元件與資料傳遞</router-link><br></li>
            <li><router-link to="/data">Show the Data</router-link><br></li>
          </ul>
        </div>
        <div class="my_component col-sm-10 text-center">
          <!-- component元件 引入 -->
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
img:hover {
  cursor: pointer;
}
table,
th,
td {
  border: 3px solid blue;
  border-collapse: collapse;
  background-color: skyblue;
}
th,
td {
  padding: 5px;
  text-align: left;
}
.col_edit {
  background: #ffeded;
}
.my_logo {
  margin: -2.5% -10px;
}
.my_title {
  margin: -3% 10% ;
}
.my_component{
  background-image: url('./assets/background.jpg');
  background-size:cover;
}
.my_sidebar{
  border-radius:50px;
  font-size: 20px;
  font-family: 標楷體;
}
</style>
