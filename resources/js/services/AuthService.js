import store from "../store"
import api from "./API"

const baseUrl = "/api/auth/"

class AuthServiceClass {

    async register(credentials) {
        try {
            console.log('register', credentials)
            const {data} = await api.post(baseUrl + 'register', credentials)
            console.log(data)
            store.commit('user/SET_AUTH_SUCCESS', data)
            return data
        } catch (e) {
            console.log('error', e)
            store.commit('user/SET_AUTH_ERROR')
            console.error(e)
            return Promise.reject(e)
        }
    }

    async login(credentials) {
        try {
            console.log('login', credentials)
            const {data} = await api.post(baseUrl + 'login', credentials)
            console.log(data)
            store.commit('user/SET_AUTH_SUCCESS', data)
            return data
        } catch (e) {
            //console.log('error', e)
            store.commit('user/SET_AUTH_ERROR')
            //console.error(e)
            return Promise.reject(e)
        }
    }


    async logout() {
        try {
            await api.post(baseUrl + 'logout')
            store.commit('user/SET_LOGOUT')
        } catch (e) {
            console.log(e)
        }
    }

}
const AuthService = new AuthServiceClass()
export default AuthService
