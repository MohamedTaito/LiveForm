<template>
    <div v-if="question">
        <edit-question v-if="editing" :data = question></edit-question>
        <show-single-question :data = question  v-else></show-single-question>
        <replies :question="question"></replies>
        <new-reply :question-slug="question.slug"></new-reply>
    </div>
</template>

<script>
    import ShowSingleQuestion from  './ShowSingleQuestion'
    import EditQuestion from "./EditQuestion";
    import Replies from "../reply/replies";
    import NewReply from "../reply/NewReply";
    export default {
        components:{NewReply, Replies, EditQuestion, ShowSingleQuestion},
        data() {
            return {
                question:null,
                editing:false
            }
        },
        created(){
            this.listen()
            this.getQuestion()
        },
        methods: {
            listen() {
                EventBus.$on('startEditing' , () =>{
                this.editing = true
                })

                EventBus.$on('cancelEditing' , () => {
                    this.editing = false
                })
            },
            getQuestion() {
                axios.get(`/api/question/${this.$route.params.slug}`)
                    .then(res => this.question = res.data.data)
            }
        },
        name: "Read"
    }
</script>

<style scoped>

</style>