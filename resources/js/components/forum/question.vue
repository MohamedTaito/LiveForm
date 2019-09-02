<template>
    <div class="card">
        <h5 class="card-header">
            <router-link :to="data.path">
                {{data.title}}
            </router-link>
        </h5>
        <div class="card-body">
            <h6 class="card-text text-muted">
                {{data.user}} said from {{data.created_at}}
            </h6>
            <p class="card-title" v-html="body"></p>
        </div>
    </div>
</template>

<script>
    export default {
        props:[
            'data'
        ],
        computed:{
            body(){
                return md.parse(this.data.body)
            }
        },
        name: "question"
    }
</script>

<style scoped>
    .card {
        margin-bottom: 2%;
    }

</style>