<template>
    <div>
        <i class="fas fa-heart fas5"  @click="likeIt" v-bind:class="[ {red: color }]"></i>
        <span class="no">{{count}}</span>
    </div>
</template>

<script>
    export default {
        props:['content'],
        data(){
            return {
                liked:this.content.liked,
                count:this.content.like_count
            }
        },
        computed:{
            color() {
                console.log(this.liked ? true : false)
                return this.liked ? true : false
            }
        },
        methods:{
            likeIt(){
                if(User.loggedIn()){
                    this.liked ? this.decr() : this.incr()
                    this.liked = !this.liked
                }
            },
            incr(){
                axios.post(`/api/like/${this.content.id}`)
                    .then(res => this.count ++)

            },
            decr(){
                axios.delete(`/api/like/${this.content.id}`)
                    .then(res => this.count --)
            }
        },
        name: "Like"
    }
</script>

<style scoped>
    .fas5{
        position: absolute;
        right: 3%;
        top: 21%;
        cursor:pointer;
        color:rosybrown;
        font-size: 30px;
    }
    .no{
        position: absolute;
        right: 1.5%;
        top: 11%;
        font-size:25px;
    }
    .red {
        color:red;
    }
    .redlight{
        color: rosybrown;
    }
</style>