<template>
  <div class="row justify-content-center mt-5">
      <div class="col-md-4">
        <div class="card text-center">
            <div class="card-header">
                Login
            </div>
            <div class="card-body">

                    <a class="btn btn-github btn-block" :href="express_server_url+'/auth'"><img src="../assets/github.png" alt=""> <br> Login With Github</a>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  created(){
      if(localStorage.getItem("github_access_token") != undefined){
          this.$router.push({name: 'Home'})
      }
      this.express_server_url = express_server_url;
  },
  data(){
    return{
      express_server_url: "",
    }
  }
}
</script>

<style>

</style>