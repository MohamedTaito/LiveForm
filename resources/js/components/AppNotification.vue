<template>


    <div class="text-center">
        <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <i class="fas fa-bell fas10" v-on="on"></i> 5
            </template>
            <v-list>
                <v-list-item>
                    <v-list-item-title>Notification</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
    export default {
        data(){
          return {
              read:{},
              unread:{},
              unreadCount:0
          }
        },
        created(){
          if(User.loggedIn()){
              this.getNotifications()
          }
        },
        methods:{
            getNotifications(){
                axios.get('/api/notifications')
                    .then(res => {
                        this.read = res.data.read
                        this.unread = res.data.unread
                        this.unreadCount = res.data.unread.length
                    })
            }
        },
        name: "AppNotification"
    }
</script>

<style scoped>
    .fas10 {
        font-size: 20px;
        color: red;
        margin: 12px 0 0 5px;
        cursor:pointer;
    }

</style>