import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/home/HomePage.vue'
import Portfolio from '@/views/portfolio/PortfolioPage.vue'
import WelcomePage from '@/views/welcome/WelcomePage.vue'
import AboutUs from '@/views/about_us/AboutUsPage.vue'
import JoinUs from '@/views/join_us/JoinUsPage.vue'
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
        },
        {
            path: '/welcome-page',
            name: 'Welcome',
            component: WelcomePage
        },
        {
            path: '/about-us',
            name: 'AboutUs',
            component: AboutUs
        },
        {
            path: '/join-us',
            name: 'JoinUs',
            component: JoinUs
        },
    ]
})