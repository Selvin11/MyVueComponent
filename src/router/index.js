import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import Paging from '@/pages/Paging'
import Loading from '@/pages/Loading'
import Button from '@/pages/Button'
import Swiper from '@/pages/Swiper'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Hello',
        component: Hello
    }, {
        path: '/paging',
        name: 'Paging',
        component: Paging
    }, {
        path: '/loading',
        name: 'Loading',
        component: Loading
    }, {
        path: '/button',
        name: 'Button',
        component: Button
    }, {
        path: '/swiper',
        name: 'Swiper',
        component: Swiper
    }]
})