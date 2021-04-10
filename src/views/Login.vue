<template>
  <div class="row justify-content-center mt-5">
      <div class="col-md-4">
        <div class="card">
            <div class="card-header">
                Login
            </div>
            <div class="card-body">
                <img :src="'../assets/Github-Mark.png'" alt="">
                <a class="btn btn-dark" href="/auth">Login With Github</a>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  created(){
    console.log(process.env)
  }
}
</script>

<style>

</style>