<template>
    <show-single-question :data = question></show-single-question>
</template>

<script>
    import ShowSingleQuestion from  './ShowSingleQuestion'
    export default {
        components:{ShowSingleQuestion},
        data() {
            return {
                question:{}
            }
        },
        created(){
            axios.get(`/api/question/${this.$route.params.slug}`)
                .then(res => this.question = res.data.data)
        },
        name: "Read"
    }
</script>

<style scoped>

</style>