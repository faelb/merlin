import Vue from 'vue';
import Vuex from 'vuex';


const state = {
    menuGuide: "",
}

const actions = {}

const mutations = {
    SET_MENU_GUIDE(state,string){
        state.menuGuide=string
    },
    RESET_APP_STATE(state){
        state.menuGuide=""
        //all the other states, if there are any
    }

}

const getters = {

}


export default {
    namespaced: true, //why?
    state,
    actions,
    mutations,
    getters
}
