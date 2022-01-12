import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/home/HomePage.vue'
import Portfolio from '@/views/portfolio/PortfolioPage.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/home-page',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/portfolio-page',
            name: 'Portfolio',
            component: Portfolio
        }
    ]
})