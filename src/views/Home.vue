<template>
  <div class="row">
    <navbar/>
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
            repositories
        </div>
        <div class="card-body">
           <form class="d-flex mb-3">
        <input class="form-control me-2" v-model="searchQuery" type="search" placeholder="Search" aria-label="Search">
      </form>
            <ul>
              <li v-for="(repo,index) in filterRepo" :key="index"><a :href="repo.clone_url">{{repo.name}}</a> <br></li>
            </ul>
        </div>
      </div>
    </div>
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
    if(checktokenexist <1){
       this.$router.push({ name:'Login' });
      return;
    }else{
      this.getUserData(this.$route.query.token);
    }
  },
  data(){
    return {
      searchQuery: "",
      userinfo : {},
      repositories: []
    }
  },
  methods:{
    getUserData(token){
      console.log(token)
        axios.defaults.headers.common['Authorization'] = 'token '+token;

        axios.get('https://api.github.com/user')
        .then((res) => {
          this.userinfo = res.data;
          this.getUserRepo(res.data.repos_url);
          console.log(res);
    
        })
        .catch( (e) => {
          this.$router.push({ name:'Login' });
        })
    },

    getUserRepo(repos_url){
      axios.get(repos_url)
      .then( (res) => { 
          this.repositories = res.data;
      })
      .catch( (e) => { 
          console.log(e);
      })
    }
  },
  computed: {
    filterRepo(){
      if(this.searchQuery){
      return this.repositories.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
      })
      }else{
        return this.repositories;
      }
  }
  },
  name: 'Home',
  components: {
    Navbar
  }
}
</script>
