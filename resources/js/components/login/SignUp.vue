<template>
    <div class="container">
        <div class="row">
            <form class="login-form"  @submit.prevent="signUp">
                <div class="form-group">
                    <label for="exampleInputName">Name</label>
                    <input v-model="form.name" type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter Name" >
                    <span class="red--text" v-if="errors.name">{{errors.name[0]}}</span>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" >
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input v-model="form.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" >
                    <span class="red--text" v-if="errors.password">{{errors.password[0]}}</span>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword2">Confirm Password</label>
                    <input v-model="form.password_confirmation" type="password" class="form-control" id="exampleInputPassword2" placeholder="Password Confirmation" >
                    <span class="red--text" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</span>
                </div>
                <button type="submit" class="btn btn-success">SignUp</button>
                <router-link class="btn btn-primary" to="/login">Login</router-link>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                form :{
                    name:null,
                    email:null,
                    password:null,
                    password_confirmation:null,
                },
                errors : {

                }
            }
        },
        name: "SignUp.vue",
        created() {
            if(User.loggedIn()){
                this.$router.push({name:'forum'})
            }
        },
        methods : {
            signUp(){
                axios.post('/api/auth/signup' , this.form)
                    .then(res => {
                        User.responseAfterLogin(res)
                        this.$router.push({name:'forum'})
                    })
                    .catch(error => this.errors = error.response.data.errors)
            }
        }
    }
</script>

<style scoped>
    .login-form {
        width: 70%;
        margin: 0 auto;
    }
    .red--text {
        color: red;
    }

</style>