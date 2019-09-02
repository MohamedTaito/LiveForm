<template>
    <div class="container-fluid">
        <div class="row">
            <form class="question-form" @submit.prevent="addQuestion">
                <div class="form-group">
                    <label for="exampleInputTitle">Title</label>
                    <input v-model="form.title" type="text" class="form-control" id="exampleInputTitle" aria-describedby="titleHelp" placeholder="Enter title">
                </div>
                <!--<div class="form-group">-->
                    <!--<label for="formGroupExampleInput">Question</label>-->
                    <!--<input v-model="form.body" type="text" class="form-control" id="formGroupExampleInput" aria-describedby="bodyHelp" placeholder="Question body">-->
                <!--</div>-->
                <v-autocomplete
                        label="Choose Category"
                        v-model="form.category_id"
                        :items="categories"
                        item-text="name"
                        item-value="id"
                >
                </v-autocomplete>

                <vue-simplemde v-model="form.body" ref="markdownEditor" />
                <button type="submit" class="btn btn-success">Create</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                form: {
                    title: null,
                    body:null,
                    category_id:null,
                },
                categories:{},
                errors:{},
            }

        },
        name: "Create",
        created(){
            axios.get('/api/category')
                .then(res => this.categories = res.data.data)
        },
        methods: {
            addQuestion(){
                axios.post('/api/question' , this.form)
                    .then(res => this.$router.push(res.data.path))
                    .catch(error => this.errors = error.response.data.error)
            }
        }

    }
</script>

<style scoped>
    .question-form{
        width: 80%;
        margin: 0 auto;
    }

</style>