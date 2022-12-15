// 设置时间戳
export function setTimeStamp() {
    return sessionStorage.setItem('timekey', Date.now())
}

// 获取时间戳
export function getTimeStamp() {
    return sessionStorage.getItem('timekey')
}

export function getToken() {
    return sessionStorage.getItem('token')
}

export function setToken(token) {
    return sessionStorage.setItem('token', token)
}

export function removeToken() {
    return sessionStorage.removeItem('token')
}