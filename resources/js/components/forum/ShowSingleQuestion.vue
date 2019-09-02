<template>
    <div class="card text-center">
        <div class="card-header">
            {{data.user}} said from {{data.created_at}}
            <i class="fas fa-pen fas1" @click="edit" v-if="own"></i>
            <i class="fas fa-trash fas2" @click="destroy" v-if="own"></i>
        </div>
        <div class="card-body">
            <h5 class="card-title">{{data.title}}</h5>
            <p class="card-text" v-html="body"></p>
        </div>
        <div class="card-footer text-muted">
            5 replies
        </div>
    </div>

</template>

<script>

    export default {
        props:['data'],
        data(){
            return {
                own: User.own(this.data.user_id)
            }
        },
        computed:{
            body(){
                return md.parse(this.data.body)
            }
        },
        methods: {
            destroy(){
                axios.delete(`/api/question/${this.data.slug}`)
                    .then(res => this.$router.push('/forum'))
                    .catch(error => console.log(error.resposne.data))
            },
            edit(){
                EventBus.$emit('startEditing')
            }
        },
        name: "ShowSingleQuestion"
    }
</script>

<style scoped>
    .card {
        margin:2% 0 ;
    }
    .fas1 {
        position: absolute;
        right: 4%;
        bottom: 37%;
        cursor:pointer;
        color: orange;
    }
    .fas2 {
        position: absolute;
        right: 2%;
        bottom: 37%;
        cursor:pointer;
        color: red;
    }
    .card-header {
        position: relative;
    }

</style>