<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 text-center logo" :title="message">
          <img src="../assets/logo.png" alt="">
          <h2>歡迎來到Vue的教學首頁</h2>
          <h2>本教學需搭配範例程式碼</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      msg: "Welcome to my App",
      message: "頁面加載於" + new Date().toLocaleString()
    };
  }
};
</script>

<style>
.logo{
  margin-top: 9%;
}
</style>

