<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12 col-md-8">
                <question v-for="question in questions" :key="question.path" :data=question></question>
            </div>
            <div class="col-sm-12 col-md-4">
                <app-sidebar></app-sidebar>
            </div>
        </div>
    </div>
</template>

<script>
    import question from './question'
    import AppSidebar from "./Appsidebar";
    export default {
        data() {
            return {
                questions: {}
            }
        },
        components: {
            AppSidebar,
            question
        },
        created (){
            axios.get('/api/question')
                .then(res => this.questions = res.data.data)
                .catch(error => console.log(error.response.data))
        },
        name: "Forum"
    }
</script>

<style scoped>

</style>