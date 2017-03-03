import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Paging from '@/components/Paging'
import Loading from '@/components/Loading'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/paging',
            name: 'Paging',
            component: Paging
        },
        {
            path: '/loading',
            name: 'Loading',
            component: Loading
        }
    ]
})