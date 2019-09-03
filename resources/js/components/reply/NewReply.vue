<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="header-text">
                    Leave Reply
                </div>
            </div>
            <div class="col-sm-12">
                <vue-simplemde v-model="body" ref="markdownEditor" />
                <button class="btn btn-success fas1" type="submit" @click="addReply">Reply</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['questionSlug'],
        data(){
            return {
                body:null
            }
        },
        methods: {
            addReply(){
                axios.post(`/api/question/${this.questionSlug}/reply`,{body:this.body})
                    .then(res => {
                        this.body = ''
                        EventBus.$emit('newReply', res.data.reply)
                        window.scrollTo(0,0)

                    })

            }
        },
        name: "NewReply"
    }
</script>

<style scoped>
    .header-text {
        font-weight: 700;
        font-size: 30px;
        color: #272727;
    }
    .fas1{
        font-size: 25px;
        float: right;
    }
    html {
        scroll-behavior: smooth;
    }
</style>