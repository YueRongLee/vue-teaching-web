<template>
  <div>
    <!-- <hello-world></hello-world> -->
    <h2><b>{{msg}}</b></h2>
    <table class="table form-control-lg">
      <tr>
        <td v-for="list in mylist" :key="list"><b>{{list}}</b></td>
      </tr>
      <tr v-for="list in listData" :key="list.name.first">
        <td><img :src="list.picture.thumbnail" alt=""></td>
        <td>{{list.name.first}}&#160;{{list.name.last}}</td>
        <td>{{list.gender}}</td>
        <td>{{list.login.username}}</td>
        <td>{{list.login.password}}</td>
        <td>{{list.location.city}}</td>
        <td>{{list.phone}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld";
export default {
  name: "list",
  components: { HelloWorld },
  data() {
    return {
      msg: "Random User Table",
      listData: [],
      mylist: [
        "picture",
        "name",
        "gender",
        "username",
        "userpassword",
        "location",
        "phone"
      ]
    };
  },
  methods: {
    getData() {
      var vm = this;
      vm.axios
        .get("https://randomuser.me/api/?&results=10&seed=ddd")
        .then(function(response) {
          console.log(response);
          vm.listData = response.data.results;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>



