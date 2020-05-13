import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About.vue'
import Home from '@/components/HelloWorld'

Vue.use(Router)

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'about',
        path: '/about',
        component: About
    }
    
]

const router = new Router({
    routes, 
    //this mode removes # from the url
    mode: 'history'})

export default router
