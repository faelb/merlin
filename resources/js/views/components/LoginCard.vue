<template>
  <v-container id="loginContainer">
    <v-row>
      <v-col :cols="12">
        <!--Login Card-->
        <v-scroll-x-transition :hide-on-leave="true">
          <v-card
            v-show="state==='login'"
            class="mx-auto"
            width="400"
          >
            <v-card-title primary-title>
              <h1>Login</h1>
            </v-card-title>
            <v-card-text>
              <v-form ref="loginform">
                <v-text-field
                  v-model="form.name"
                  color="orange"
                  label="username"
                  prepend-icon="mdi-account-circle"
                  :rules="[v => !!v || 'name is required']"
                />
                <v-text-field
                  v-model="form.password"
                  color="orange"
                  :type="showPassword ? 'text' : 'password'"
                  label="Password"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[v => !!v || 'password is required']"
                  @click:append="showPassword = !showPassword"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="pink lighten-2"
                text
                :loading="waiting"
                @click="loginUser()"
              >
                Login
              </v-btn>
              <v-spacer />
              <v-btn
                color="pink lighten-2"
                text
                @click="changeState"
              >
                Register
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-scroll-x-transition>
        <!--Register Card-->
        <v-scroll-x-transition :hide-on-leave="true">
          <v-card
            v-show="state==='register'"
            class="mx-auto"
            width="400"
          >
            <v-card-title primary-title>
              <h1>Register</h1>
            </v-card-title>
            <v-card-text>
              <v-form ref="registerform">
                <v-text-field
                  v-model="form.name"
                  color="orange"
                  label="username"
                  prepend-icon="mdi-account-circle"
                />
                <v-text-field
                  v-model="form.email"
                  color="orange"
                  label="email"
                  prepend-icon="mdi-email"
                />
                <v-text-field
                  v-model="form.password"
                  color="orange"
                  :type="showPassword ? 'text' : 'password'"
                  label="password"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @input="showConfirmation = true"
                  @click:append="showPassword = !showPassword"
                />
                <v-text-field
                  v-show="showConfirmation"
                  v-model="form.password_confirmation"
                  color="orange"
                  :type="showPassword ? 'text' : 'password'"
                  label="confirm password"
                  prepend-icon="mdi-lock-alert"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="pink lighten-2"
                text
                :loading="waiting"
                @click="registerUser()"
              >
                Create
              </v-btn>
              <v-spacer />
              <v-btn
                color="orange"
                text
                @click="changeState"
              >
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-scroll-x-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from '../../services/AuthService'


export default {
    name: "LoginCard",
    data: () => ({
        //state changes cardset
        state: "login",
        showPassword: false,
        showConfirmation: false,
        waiting: false,
        form: {
            name: "",
            password: "",
            password_confirmation: "",//syntax is a trigger for laravel validation
            email: "",
        }
    }),
    methods: {
        changeState() {
            //to switch between login and Register Card
            //also clean all the form data
            this.form.name = ""
            this.form.password = ""
            this.form.password_confirmation = ""
            this.form.email = ""
            if (this.state === "login") {
                this.state = "register"
            } else {
                this.state = "login"
            }
        },
        async registerUser() {
            if (this.$refs.registerform.validate()) {
                //TODO first make validation here! -all required, email is email, confirmed password is same and so on
                try {
                    this.waiting = true
                    const user = await AuthService.register(this.form)
                } catch (e) {
                    let out = e.errors.forEach((object) => {
                        object[0]
                    });
                    console.log(out)
                    //this.$swal(out)
                } finally {
                    this.waiting = false //damit das Loading aufhört
                }


            }
        },
        async loginUser() {
            if (this.$refs.loginform.validate()) {
                try {
                    this.waiting = true
                    const user = await AuthService.login(this.form)
                } catch (e) {
                    this.$swal(e)
                } finally {
                    this.waiting = false
                }
            }
        }

    }
}
</script>

<style scoped>

</style>
