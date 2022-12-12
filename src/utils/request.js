import axios from "axios";
import { Notification, MessageBox, Message } from 'element-ui'
import store from '@/store'

// 超时时间
const timeout = 3000
//创建一个axios 实例
const service = axios.create({
    // 指定一个baseUrl
    baseURL: process.env.VUE_APP_BASE_API,
    // 设置超时时间
    timeout: 5000
})
service.defaults.withCredentials = true; // 让ajax携带cookie

// 请求拦截器
service.interceptors.request.use(
    config => {
        if(store.getters.token) {
            config.headers['Authorization'] = store.getters.token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.request.use()

export default service