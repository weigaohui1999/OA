import Cookies from "js-cookie"

// 设置时间戳
export function setTimeStamp() {
    return Cookies.set('timekey', Date.now())
}

// 获取时间戳
export function getTimeStamp() {
    return Cookies.get('timekey')
}

export function getToken() {
    return Cookies.get('token')
}

export function setToken(token) {
    return Cookies.set('token', token)
}

export function removeToken() {
    return Cookies.remove('token')
}