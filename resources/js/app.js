require('./bootstrap');

import Vue from 'vue';
import vuetify from '@/plugins/vuetify'; // path to vuetify export

//store for vuex state
import store from "./store/index";

//Main pages
import App from './views/App';


const app = new Vue({
    vuetify,
    store,
    el: '#app',
    components: { App }
});
