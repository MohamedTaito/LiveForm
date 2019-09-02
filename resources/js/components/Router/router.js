import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../login/Login'
import SignUp from "../login/SignUp";
import Forum from "../forum/Forum";
import Read from "../forum/Read";
import Logout from "../login/Logout";
import Create from "../forum/Create";
const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/signup', component: SignUp },
    { path: '/ask', component: Create },
    { path: '/forum', component: Forum , name:'forum'},
    { path: '/question/:slug', component: Read , name:'read'},
]



const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang : false,
    mode : 'history',
})

export default router