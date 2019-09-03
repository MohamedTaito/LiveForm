<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-12 header-text">Replies</div>
        <div class="col-sm-12">
        <reply class="mb-4" v-if="question.replies" :index="index" v-for="(reply,index) in content" :data="reply" :key="reply.id">
        </reply>
        </div>
    </div>
</div>
</template>

<script>
    import Reply from "./reply";
    export default {
        components: {Reply},
        data(){
            return {
                content: this.question.replies
            }
        },
        props:['question'],
        created(){
            this.listen()
        },
        methods: {
            listen(){
                EventBus.$on('newReply' , (reply => {
                    this.content.unshift(reply)
                }))

                EventBus.$on('deleteReply',(index) =>{
                    axios.delete(`/api/question/${this.question.slug}/reply/${this.content[index].id}`)
                        .then(res => {
                            this.content.splice(index,1)
                        })

                })
            },

        },
        name: "replies"
    }
</script>

<style scoped>
    .header-text {
        font-weight: 700;
        font-size: 30px;
        color: #272727;
    }

</style>