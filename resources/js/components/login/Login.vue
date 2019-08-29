<template>
  <div class="container">
      <div class="row">
          <form class="login-form" @submit.prevent="login">
              <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input v-model="form.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <button type="submit" class="btn btn-primary">Login</button>
          </form>
      </div>
  </div>
</template>

<script>
    export default {
        data(){
            return {
                form :{
                    email:null,
                    password:null
                }
            }
        },
        name: "Login.vue",

        methods : {
            login(){
                // console.log(User)
                User.login(this.form)
            }
        }
    }
</script>

<style scoped>
    .login-form {
        width: 70%;
        margin: 0 auto;
    }

</style>