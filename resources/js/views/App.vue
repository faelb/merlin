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
            <v-btn icon @click="switchMenus">
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <MenuTool></MenuTool>
                <TestForm v-if="counter === 'Form'"></TestForm>
                <LoginCard v-if="counter === 'Login'"></LoginCard>
                <MenuCards v-if="counter === 'MenuCards'"></MenuCards>

        </v-main>
    </v-app>
</template>

<script>
import TestdataService from "../services/TestdataService";
import MenuCards from "./components/MenuCards";
import TestForm from "./components/TestForm";
import LoginCard from "./components/LoginCard";
import MenuTool from "./components/MenuTool";

export default {
    name: "App",
    components: {
        MenuTool,
        MenuCards,
        TestForm,
        LoginCard,
    },
    data: () => ({
        counter: "Logn"
}),
    methods:{
        switchMenus(){
            if(this.counter==="Login"){
                this.counter = "MenuCards"
            }
            console.log(this.counter)
        }
    }

}
</script>

<style scoped>

</style>
