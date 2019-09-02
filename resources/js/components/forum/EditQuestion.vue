<template>
    <div class="container-fluid">
        <div class="row">
            <form class="question-form" @submit.prevent="editQuestion">
                <div class="form-group">
                    <label for="exampleInputTitle">Title</label>
                    <input v-model="form.title" type="text" class="form-control" id="exampleInputTitle" aria-describedby="titleHelp" placeholder="Enter title">
                </div>
                <vue-simplemde v-model="form.body" ref="markdownEditor" />
                <button class="fas fa-save fas3" type="submit"></button>
                <!--<i class="fas fa-save fas3" type="submit"></i>-->
                <i class="fas fa-times fas4" @click="cancel"></i>

            </form>
        </div>
    </div>
</template>

<script>
    export default {
        props:['data'],
        data() {
            return {
                form: {
                    title: null,
                    body: null,
                }
            }
        },
        methods:{
            editQuestion(){
                axios.patch(`/api/question/${this.form.slug}` , this.form)
                    .then(res => this.cancel())
            },
            cancel(){
                EventBus.$emit('cancelEditing')
            }
        },
        created() {
            this.form = this.data
        },
        name: "EditQuestion"
    }
</script>

<style scoped>
    .question-form{
        width: 80%;
        margin: 0 auto;
    }
    .fas3 {
        color: teal;
        cursor: pointer;
        font-size: 30px;
        margin: 0 1%;
        border:none;
        background-color: transparent;

    }
    .fas4{
        color: black;
        font-size: 30px;
        margin: 0 1%;
        cursor: pointer;
    }
</style>