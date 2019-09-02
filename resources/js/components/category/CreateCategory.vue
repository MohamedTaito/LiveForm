<template>
    <div class="container">
        <div class="row">
            <form class="login-form" @submit.prevent="creatCategory">
                <div class="form-group">
                    <label for="exampleInputName">Name</label>
                    <input v-model="form.name" type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter category name">
                </div>
                <button type="submit" class="btn btn-danger" v-if="editSlug">Update</button>
                <button type="submit" class="btn btn-primary" v-else>Create</button>

            </form>
           <div class="col-sm-12">
               <v-card tile>
                   <v-toolbar color="indigo" dark dense>
                       <v-toolbar-title>Categories</v-toolbar-title>
                   </v-toolbar>
                   <div v-for="(category , index) in categories" :key="category.id">
                       <v-list-item>
                           <v-list-item-action class="margin">
                               <i class="fas fa-pen fas1" @click="edit(index)"></i>
                           </v-list-item-action>

                           <v-list-item-content>
                               <v-list-item-title>{{category.name}}</v-list-item-title>
                           </v-list-item-content>
                           <v-list-item-action>
                               <i class="fas fa-trash fas2" @click="destroy(category.slug,index)"></i>
                           </v-list-item-action>
                       </v-list-item>
                       <v-divider></v-divider>
                   </div>

               </v-card>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name:null,
                },
                categories:{},
                editSlug:null,
            }
        },
        methods: {
            creatCategory() {
                this.editSlug ? this.update() :this.create()

            },
            update() {
                axios.patch(`/api/category/${this.editSlug}`,this.form)
                    .then(res => {
                        this.categories.unshift(res.data)
                        this.form.name = null
                        this.editSlug = null
                    })
            },
            create(){
                axios.post('/api/category',this.form)
                    .then(res => {
                        this.categories.unshift(res.data)
                        this.form.name = null
                    })
            },
            destroy(slug,index){
                axios.delete(`/api/category/${slug}`)
                    .then(res => this.categories.splice(index,1))
            },
            edit(index) {
                this.form.name = this.categories[index].name
                this.editSlug = this.categories[index].slug
                this.categories.splice(index,1)
            }
        },
        created() {
            // if(!User.admin()) {
            //     this.$router.push('/forum')
            // }
            axios.get('/api/category')
                .then(res => this.categories = res.data.data)
        },
        name: "CreateCategory"
    }
</script>

<style scoped>
    .login-form {
        width: 70%;
        margin: 0 auto;
    }
    .fas1 {
        color: orange;
        cursor: pointer;
    }
    .fas2 {
        color: red;
        cursor: pointer;
    }
    .margin {
        margin: 0 1%;
    }
</style>