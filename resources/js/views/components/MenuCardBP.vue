<template>
    <v-col :cols="6">
        <v-hover
            close-delay="200"
            v-slot="{ hover }"
        >
            <v-card
                id="hover"
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                class="mx-auto"
                max-width="400">
                <v-img
                    class="white--text align-end"
                    height="200px"
                    src='https://wallpapercave.com/wp/OdfgNTa.jpg'
                >
                    <v-card-title>{{ CardTitle }}</v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0">
                    {{ CardSubTitle }}
                </v-card-subtitle>

                <v-card-text class="text--primary">


                    <div>{{ CardText }}</div>
                </v-card-text>

                <v-card-actions>
                    <v-btn
                        color="orange"
                        text
                        elevation="24"
                    >
                        <v-icon>mdi-file-eye-outline</v-icon>
                        Confluence
                    </v-btn>

                </v-card-actions>
            </v-card>
        </v-hover>
    </v-col>
</template>

<script>

export default {
    name: "MenuCardBP",
    props: ['CardTitle', 'CardSubTitle', 'CardText']
}
</script>

<style scoped>

#hover {
    transition: opacity .4s ease-in-out;
}
#hover:not(.on-hover) {
    opacity: 0.6;
}

</style>
