<template>
    <v-app>
        <v-app-bar
            app
            dark
            shrink-on-scroll
            src='https://www.desktopbackground.org/download/o/2014/01/03/695388_magenta-backgrounds-free-vector-art-10551-free-downloads_1400x980_h.jpg'>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>
                <h2>Merlin</h2>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="INCREMENT">
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <MenuTool v-if="$store.state.count === 2"></MenuTool>
                <TestForm v-if="$store.state.count === 3"></TestForm>
                <LoginCard></LoginCard>
                <MenuCards v-if="$store.state.count === 1"></MenuCards>

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

export default {
    name: "App",
    components: {
        MenuTool,
        MenuCards,
        TestForm,
        LoginCard,
    },
    data: () => ({
        menus: ["Login","MenuCards","Menutool","Form"],
        counter: 0
}),
    methods:{
        ...mapMutations([
           'INCREMENT',
        ]),
        switchMenus(){
            this.counter++
            if(this.counter===4){
                this.counter=0
            }
            console.log(this.counter)
        }
    },
    computed: {

    }


}
</script>

<style scoped>

</style>
