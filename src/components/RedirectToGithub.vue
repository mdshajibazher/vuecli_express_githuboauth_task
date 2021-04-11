<template>
  <div></div>
</template>

<script>
export default {
    mounted(){
      window.location.href = `http://github.com/login/oauth/authorize?client_id=${GITHUB.CLIENT_ID}`;

        //this.$router.push('https://www.example.com');
    }
}
</script>

<style>

</style>