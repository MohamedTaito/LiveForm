<template>
    <vue-simplemde v-model="reply.reply" ref="markdownEditor" />
</template>

<script>
    export default {
        props:['reply'],
        name: "EditReply"
    }
</script>

<style scoped>

</style>