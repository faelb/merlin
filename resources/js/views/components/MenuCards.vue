<template>
    <v-container>
        <v-row>
<MenuCardBP v-bind:key="Menu.id" v-for="Menu in Menutiles" v-bind:card-title="Menu.Title" v-bind:card-sub-title="Menu.Subtitle" v-bind:card-text="Menu.CardText">
</MenuCardBP>
        </v-row>
    </v-container>
</template>

<script>
import MenuCardBP from "./MenuCardBP";

export default {
name: "MenuCards",
    data: () => ({
        Menutiles: [
            {id:0, Title: "The Tool", Subtitle: "create new Requests", CardText: "request your Testdata"},
            {id:1, Title: "My Requests", Subtitle: "see my Requests", CardText: "get your Testdata"},
            {id:2, Title: "Search Requests", Subtitle: "Requests from other users", CardText: "get your colleagues Testdata"},
            {id:3, Title: "My Profile", Subtitle: "your Profile settings", CardText: "change your Profile"}
        ]
    }),
    components: {
    MenuCardBP,
    }
}
</script>

<style scoped>

</style>
