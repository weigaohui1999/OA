import {getToken, removeToken, setToken} from "@/utils/auth";

const state = {
    token: getToken(),
    userinfo: {}
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
        setToken(state.token)
    },
    REMOVE_TOKEN: (state) => {
        state.token = null
        removeToken()
    },
}

const actions = {

}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}