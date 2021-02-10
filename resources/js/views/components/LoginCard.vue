<template>
    <v-container id="loginContainer">
        <v-row>
            <v-col :cols="12">
                <v-card
                    class="mx-auto"
                    width="400">
                    <v-card-title primary-title>
                        <h1>Login</h1>
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                label="Username"
                                prepend-icon="mdi-account-circle"/>
                            <v-text-field
                                :type="showPassword ? 'text' : 'password'"
                                label="Password"
                                prepend-icon="mdi-lock"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="showPassword = !showPassword"
                            />
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="success">Register</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="info">Login</v-btn>
                    </v-card-actions>
                </v-card
                >
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
export default {
    name: "LoginCard",
    data: () => ({
        state: "login",
        name: "",
        password: "",
        showPassword: false
    }),
}
</script>

<style scoped>

</style>
