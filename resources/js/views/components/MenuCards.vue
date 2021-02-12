<template>
    <v-container>
        <v-row>
<MenuCardBP
    v-for="Menu in Menutiles"
    v-bind:key="Menu.id"
    v-bind:card-title="Menu.Title"
    v-bind:card-sub-title="Menu.Subtitle"
    v-bind:card-text="Menu.CardText"
    v-bind:link="Menu.link"
>
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
            {id:0, Title: "The Tool", Subtitle: "create new Requests", CardText: "request your Testdata", link: "MenuTool"},
            {id:1, Title: "My Requests", Subtitle: "see my Requests", CardText: "get your Testdata", link: "MenuRequests"},
            {id:2, Title: "Search Requests", Subtitle: "Requests from other users", CardText: "get your colleagues Testdata", link: "MenuSearch"},
            {id:3, Title: "My Profile", Subtitle: "your Profile settings", CardText: "change your Profile", link: "MenuProfile"}
        ]
    }),
    components: {
    MenuCardBP,
    }
}
</script>

<style scoped>

</style>
