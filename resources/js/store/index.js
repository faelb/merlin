import Vue from 'vue';
import Vuex from 'vuex';
import app from './module/app.store'
import user from './module/user.store'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        app,
        user,
    },
    plugins :[]//TODO add vuex persistence!

});

export default store;
