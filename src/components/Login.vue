<template>
  <v-container mt-3>
    <v-layout row wrap justify-center>
      <v-flex xs12 mb-5 class="text-lg-center header">
        <h1>Book your consultation today.</h1>
      </v-flex>

      <v-flex xs12 lg6>
        <v-container>
          <v-layout row wrap justify-center>
            <v-flex xs11>
              <v-text-field
                label="Email Address"
                type="email"
                v-model="email_address"
                required
                solo
                :rules="[emailRules.required, emailRules.isEmail]"
              ></v-text-field>
            </v-flex>
            <v-flex xs11>
              <v-text-field
                label="Password"
                type="password"
                v-model="password"
                required
                solo
                :rules="[passwordRules.required]"
              ></v-text-field>
            </v-flex>
            <v-flex xs10 mb-3>
              <v-btn color="#075525" dark block large @click="login">Login</v-btn>
            </v-flex>
            <v-flex xs12 text-sm-center mb-4>
              <a href="javascript:;" @click="forgotPassword = true">Forgot Password?</a>
            </v-flex>
            <v-flex xs10 mb-3>
              <v-btn color="#075525" dark block large @click="redirectToSignUp">Sign up now</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <v-dialog v-model="forgotPassword" width="350">
      <v-card>
        <v-card-title>
          <h4 class="headline">Forgot Password</h4>
        </v-card-title>
        <v-card-text>
          <v-text-field label="Email" required :rules="[emailRules.required, emailRules.isEmail]"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" depressed @click="forgotPassword = false;">Cancel</v-btn>
          <v-btn color="#075525" dark depressed @click="forgotPassword = false;">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import isemail from "isemail";
import { storeCookie } from "../helper";
export default {
  name: "Login",
  data() {
    return {
      email_address: "",
      forgotPassword: false,
      forgot_email: "",
      password: null,
      emailRules: {
        isEmail: v => isemail.validate(v) || "Email is invalid",
        required: v => !!v || "Email is required"
      },
      passwordRules: {
        required: v => !!v || "Password is required"
      }
    };
  },
  methods: {
    redirectToSignUp() {
      this.$router.push("signup");
    },
    login() {
      if (!this.email_address || !this.password) {
        this.$swal({
          title: "Please fill required fields",
          type: "error"
        });
        return;
      }

      if (isemail.validate(this.email_address)) {
        const types = [
          { type: "User", email: "user@test.com", password: "user@test" },
          {
            type: "Secretary",
            email: "secretary@test.com",
            password: "secretary@test"
          },
          { type: "Clerk", email: "clerk@test.com", password: "clerk@test" },
          { type: "Admin", email: "admin@test.com", password: "admin@test" }
        ];

        types;
        const type = types.forEach(element => {
          if (element.email === this.email_address) {
            if (element.password === this.password) {
              storeCookie("token", "dummy-token");
              storeCookie("type", element.type);

              this.$router.go({ name: element.type });
            } else {
              this.$swal({
                title: "Credential error",
                type: "error"
              });
            }
          }
        });
      } else {
        this.$swal({
          title: "Email is required",
          type: "error"
        });
      }
    }
  }
};
</script>

<style scoped>
h1 {
  color: #fff;
}
a {
  color: #fff;
}

@media only screen and (max-width: 425px) {
  h1 {
    font-size: 24px;
  }
  .container {
    margin-top: 0px !important;
    padding-bottom: 0px !important;
  }
  .header {
    margin-bottom: 0px !important;
  }
}
</style>
