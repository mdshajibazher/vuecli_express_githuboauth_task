<template>
  <div class="row">
    <navbar/>
    <div class="col-md-6"></div>
    <div class="col-md-6">
        <div class="card">
          <div class="card-header">
              Userinfo
          </div>
          <div class="card-body">
              <table class="table">
                <tr>
                    <th>Name</th>
                    <td>{{userinfo.name}}</td>
                  </tr>
                  <tr>
                    <th>Image</th>
                    <td><img style="width: 200px;border-radius: 100%;border:1px soldi #ddd" :src="userinfo.avatar_url" alt=""></td>
                  </tr>
                  <tr>
                    <th>Bio</th>
                    <td>{{userinfo.bio}}</td>
                  </tr>
                  <tr>
                    <th>Blog</th>
                    <td>{{userinfo.blog}}</td>
                  </tr>
                  <tr>
                    <th>Total Public Repo</th>
                    <td>{{userinfo.public_repos}}</td>
                  </tr>
                   <tr>
                    <th>Followers</th>
                    <td>{{userinfo.followers}}</td>
                  </tr>
                   <tr>
                    <th>Followings</th>
                    <td>{{userinfo.followings}}</td>
                  </tr>
                  
                  <tr>
                    <th>Created At</th>
                    <td>{{userinfo.created_at}}</td>
                  </tr>
                  <tr>
                    <th>Node Id</th>
                    <td>{{userinfo.node_id}}</td>
                  </tr>
                  
              </table>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '../components/Navbar.vue';
export default {
  mounted(){
    let checktokenexist = Object.entries(this.$route.query).length;
    console.log(checktokenexist);
    if((localStorage.github_access_token == undefined) && (checktokenexist <1)){
      this.$router.push({ name:'Login' });
      return;
    }else if(checktokenexist < 1){
      localStorage.setItem('github_access_token',this.$route.query.token);
      this.getUserData(this.$route.query.token);
    }else{
      let token = localStorage.getItem("github_access_token");
      this.getUserData(token);
    }

    
  },
  data(){
    return {
      userinfo : {},
    }
  },
  methods:{
    getUserData(token){
      console.log(token)
        axios.defaults.headers.common['Authorization'] = 'token '+token;
        axios.get('https://api.github.com/user')
        .then((res) => {
          this.userinfo = res.data;
            console.log(res);
        })
        .catch( (e) => {
          //localStorage.clear();
        })
    }
  },
  name: 'Home',
  components: {
    Navbar

  }
}
</script>
