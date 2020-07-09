import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '@/views/Register.vue'
import login from '@/views/Login.vue'
import home from '@/views/Home.vue'
import user from '@/views/User.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/register',
        component: register
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/user',
        component: user
    },
    {
        path: '/',
        component: home
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
