<template>
    <v-app>
        <v-app-bar
            app
            dark
            shrink-on-scroll
            src='https://www.desktopbackground.org/download/o/2014/01/03/695388_magenta-backgrounds-free-vector-art-10551-free-downloads_1400x980_h.jpg'>
            <v-btn
                icon
                v-show="$store.state.user.loggedIn === true"
                @click="$store.commit('user/SET_LOGOUT')"
                title="Logout">
                <v-icon>mdi-logout</v-icon>
            </v-btn>
            <v-toolbar-title>
                <h2 v-show="$store.state.user.loggedIn===false">Merlin</h2>
                <h3 v-show="$store.state.user.loggedIn===true">Hello {{ $store.state.user.user.user.name }}</h3>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <v-scroll-x-transition v-bind:hide-on-leave='true'>
                <LoginCard v-if="$store.state.user.loggedIn === false"></LoginCard>
                <!-- visible only for registered users-->
                <MenuCards v-else-if="$store.state.user.loggedIn === true && $store.state.app.menuGuide ===''"></MenuCards>
                <MenuTool
                    v-else-if="$store.state.user.loggedIn === true && $store.state.app.menuGuide === 'MenuTool'"></MenuTool>
                <MenuRequests
                    v-else-if="$store.state.user.loggedIn === true && $store.state.app.menuGuide === 'MenuRequests'"></MenuRequests>
                <MenuSearch
                    v-else-if="$store.state.user.loggedIn === true && $store.state.app.menuGuide === 'MenuSearch'"></MenuSearch>
                <MenuProfile
                    v-else-if="$store.state.user.loggedIn === true && $store.state.app.menuGuide === 'MenuProfile'"></MenuProfile>
            </v-scroll-x-transition>
        </v-main>
    </v-app>
</template>

<script>
import TestdataService from "../services/TestdataService";
import {mapActions, mapMutations, mapState} from 'vuex';
import MenuTool from "./components/MenuTool";
import MenuCards from "./components/MenuCards";
import TestForm from "./components/TestForm";
import LoginCard from "./components/LoginCard";
import MenuSearch from "./components/MenuSearch";
import MenuProfile from "./components/MenuProfile";
import MenuRequests from "./components/MenuRequests";
import store from "../store";

export default {
    name: "App",

    components: {
        MenuTool,
        MenuSearch,
        MenuProfile,
        MenuRequests,
        MenuCards,
        TestForm,
        LoginCard,

    },
    data: () => ({}),
    methods: {},
    computed: {}


}
</script>

<style scoped>

</style>
