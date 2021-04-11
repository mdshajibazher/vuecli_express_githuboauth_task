<template>
<div>
  ll
</div>
</template>

<script>
export default {
    mounted(){
    //instantiate axios
    const axios = require('axios');
    //query parameter
    let code = this.$route.query.code;
    const body = {
    client_id: GITHUB.CLIENT_ID,
    client_secret: GITHUB.CLIENT_SECRET,
    code,
  };

  // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  axios
    .post('http://github.com/login/oauth/access_token', body)
    .then((_res) => _res.data.access_token)
    .then((token) => {
      console.log('My token:', token);
      this.$router.push({name: 'Home', params:{token: token} })
    })
    .catch((err) => {
        console.log(err);
    });
     }
}
</script>

<style>

</style>