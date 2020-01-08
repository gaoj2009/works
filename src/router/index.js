import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Main from '@/views/main'
import MainList from '@/views/mainList'
import FriendsList from '@/views/friendsList'
import SearchList from '@/views/seachList'
import MineList from '@/views/mineList'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Main,
        name: 'main',
        redirect: {
            name: 'mainList'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/main',
        name: 'main',
        component: Main,
        children: [
            {
                path: '/mainList',
                name: 'mainList',
                component: MainList
            },
            {
                path: '/friendsList',
                name: 'friendsList',
                component: FriendsList
            },
            {
                path: '/searchList',
                name: 'searchList',
                component: SearchList
            },
            {
                path: '/mineList',
                name: 'mineList',
                component: MineList
            }
        ]
    },

]

const router = new VueRouter({
    routes
})

export default router
