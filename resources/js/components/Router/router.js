import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../login/Login'
import SignUp from "../login/SignUp";
import Forum from "../forum/Forum";
import Logout from "../login/Logout";
const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/signup', component: SignUp },
    { path: '/forum', component: Forum , name:'forum'},
]



const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang : false,
    mode : 'history',
})

export default router