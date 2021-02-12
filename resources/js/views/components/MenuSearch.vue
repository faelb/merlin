<template>
    <v-container>
        <v-row>
            <v-col :cols="12">
                <v-card
                    class="mx-auto"
                    max-width="800">
                    <v-img
                        class="white--text align-end"
                        height="200px"
                        src='https://wallpaperaccess.com/full/1549288.jpg'
                    >
                        <v-card-title>Search Requests</v-card-title>
                    </v-img>
                    <v-card-subtitle class="pb-0">
                        Nothing here yet
                    </v-card-subtitle>

                    <v-card-text class="text--primary">

                        <div>Someday I will be a great wizard. The greatest of all!</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="pink lighten-2"
                               text>Request
                        </v-btn>
                        <v-btn color="pink lighten-2"
                               text
                               >Reset
                        </v-btn>
                        <v-btn color="orange"
                               text
                               @click="$store.commit('app/RESET_APP_STATE')">Cancel
                        </v-btn>
                    </v-card-actions>
                </v-card>

            </v-col>

        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "MenuSearch"
}
</script>

<style scoped>

</style>
