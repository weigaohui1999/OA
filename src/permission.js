import NProgress from "nprogress";
import store from "@/store";
import router from "@/router";
import {asyncRouter} from "@/router";
import 'nprogress/nprogress.css'
const whiteList = ['/login', '/404']

router.beforeEach(async (to, from, next) => {
    NProgress.start()
    if(store.getters.token) {
        if(to.path === '/login') {
            next('/')
        } else {
            const routes = await store.dispatch('permission/filterRoutes', asyncRouter)
            router.addRoutes([...routes, { path: '*', redirect: '/404', hidden: true }])
            next()
        }
    } else {
        if (whiteList.indexOf(to.path) > -1) {
            next()
        } else {
            // next('/login')
            next()
        }
    }
    if (to.meta.title) {
        document.title = to.meta.title
    }
    if (to.meta.content) {
        let head = document.getElementByTagName('head')
        let meta = document.createElemnet('meta')
        meta.name = 'viewport'
        meta.content = "width=device-width, initial-scale=1.0, user-scalable=no"
        head[0].appendChild(meta)
    }
    next();
    sessionStorage.setItem('router-path', to.path)
    NProgress.done()
})

router.afterEach((to, from, next) => {
    NProgress.done()
})