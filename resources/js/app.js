require('./bootstrap');

import Vue from 'vue';
import vuetify from '@/plugins/vuetify'; // path to vuetify export
import VueSweetalert2 from "vue-sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

//store for vuex state
import store from "./store/index";

//Main pages
import App from './views/App';

Vue.use(VueSweetalert2)

const app = new Vue({
    vuetify,
    store,
    el: '#app',
    components: { App }
});
