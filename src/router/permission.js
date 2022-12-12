import NProgress from "nprogress";
import store from "@/store";
import router from "@/router/index";
import 'nprogress/nprogress.css'

const whiteList = ['/login', '/404']

router.beforeEach((to, from, next) => {
    NProgress.start()
    if(store.getters.token) {
        if(to.path === '/login') {
            next()
        } else {
            if (whiteList.indexOf(to.path) > -1) {
                next()
            } else {
                next('/login')
            }
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
    NProgress.end()
})