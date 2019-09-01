<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">Live Fourm</a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item active" v-for="item in items" :key="item.title"  v-if="item.show">
                    <router-link class="nav-link" :to="item.to">{{item.title}}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
                items: [
                    {
                        title: 'Forum',
                        to: '/forum',
                        show: true,

                    },
                    {
                        title: 'Ask Question',
                        to: '/ask',
                        show: User.loggedIn(),

                    },
                    {
                        title: 'Category',
                        to: '/category',
                        show: User.loggedIn(),

                    },
                    {
                        title: 'LogIn',
                        to: '/login',
                        show: !User.loggedIn(),

                    },
                    {
                        title: 'Logout',
                        to: '/logout',
                        show: User.loggedIn(),

                    },
                ]
            }
        },
        created() {
            EventBus.$on('logout' , () => {
                User.logout()
            })
        }
    }
</script>

<style scoped>

</style>