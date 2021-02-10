import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        INCREMENT(state) {
            state.count++;
            if(state.count === 4){
                state.count = 0;
            }
        },
    },
    actions: {}
});

export default store;
