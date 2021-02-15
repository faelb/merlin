

const state = {
    user: {'user': {name:'null'}},//the user as an Object - get it from login or register, its null now because else there is a renderfailure at the beginning
    loggedIn: false,//will trigger the visibility of menucards
    error: false,//will trigger alert at login or register
    //missing expiretokentime if we want to show that somewhere
}

const actions = {}

const mutations = {

    SET_AUTH_SUCCESS(state, payload) {
        //after registration or login if successful
        state.loggedIn = true
        state.error = false
        state.user = payload
    },
    SET_LOGOUT(state) {
        //resets the whole user state
        state.loggedIn = false
        state.error = false
        state.user = {'user': {name:'null'}}
    },
    SET_AUTH_ERROR(state) {
        state.loggedIn = false
        state.error = true
        state.user = {'user': {name:'null'}}

    }
}

const getters = {
    //not sure about that getter yet
    getToken: state => {
        console.log(state.user)
        return state.user ? state.user.access_token : ''
    }
}


export default {
    namespaced: true, //why?
    state,
    actions,
    mutations,
    getters
}
