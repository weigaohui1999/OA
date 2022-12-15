import Vue from "vue";
import Router from "vue-router";
import Layout from "@/layout/index.vue";

Vue.use(Router);

const viewport = {
  content: "width=device-width, initial-scale=1.0, user-scalable=no"
}

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/workspace',
    children: [{
      path: "workspace",
      component: () => import("@/views/workspace/index.vue"),
      meta: {title: '审批列表', icon: 'workspace', viewport: viewport}
    }]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  }
]
export const asyncRouter = [
  {
    path: '/pending',
    component: Layout,
    name: 'pending',
    children: [{
      path: '',
      component: () => import('@/views/pending'),
      meta: {title: '待我处理', icon: 'pending', viewport: viewport}
    }]
  },
  {
    path: "/processed",
    component: Layout,
    children: [{
      path: "",
      name: "processed",
      component: () => import("@/views/processed"),
      meta: {title: '已处理的', icon: 'processed', viewport: viewport},
    }]
  },
  {
    path: "/launch",
    component: Layout,
    children: [{
      path: "",
      component: () => import("@/views/launch/index.vue"),
      meta: {title: '我发起的', icon: 'launch', viewport: viewport}
    }]
  },
  {
    path: "/about",
    component: Layout,
    children: [{
      path: "",
      meta: {title: '关于我的', icon: 'about', viewport: viewport},
      component: () => import("@/views/about/index.vue"),
    }]
  },
  {
    path: "/instances",
    component: Layout,
    children: [{
      path: "",
      meta: {title: '数据管理', icon: 'instances', viewport: viewport},
      component: () => import("@/views/instances/index.vue"),
    }]
  },
  {
    path: "/formsPanel",
    component: Layout,
    children: [{
      path: "",
      meta: {title: '流程管理', icon: 'formsPanel', viewport: viewport},
      component: () => import("@/views/formsPanel/index.vue"),
    }]
  }
]

const createRouter = () => new Router({
  // 路由有两种模式： 1.hash模式 前端路由模式，#后面的地址不会经过请求服务器  2.histoty模式：正常的/访问模式，特点是后端访问，任意地址的变化都会访问服务器
  mode: 'history', // require service support
  // base: '/hr/', // 配置项目的基础地址
  // routes: [...constantRoutes, ...asyncRouter] // 临时合并
  routes: [...constantRoutes, ...asyncRouter]  // 路由权限之后的管理
})

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

const router = createRouter()

export default router;
