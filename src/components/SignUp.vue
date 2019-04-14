<template>
  <v-container mt-5>
    <v-layout row wrap justify-center>
      <v-flex xs12 lg11>
        <v-card flat color="rgba(242, 241, 239, 0.7)">
          <v-container grid-list-lg>
            <v-layout row wrap justify-center class="wrapper" pt-5 px-3 my-1>
              <span>create an account for your consultation.</span>
              <v-flex xs12 md4 pr-3>
                <p class="text-sm-center">ACCOUNT INFORMATION</p>
                <v-text-field label="Email Address" type="email" required></v-text-field>
                <v-text-field
                  label="Password"
                  required
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
                <v-text-field
                  label="Verify Password"
                  required
                  :type="showVerify ? 'text' : 'password'"
                  :append-icon="showVerify ? 'visibility' : 'visibility_off'"
                  @click:append="showVerify = !showVerify"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4 pl-3>
                <p class="text-sm-center">PERSONAL INFORMATION</p>
                <v-container pa-0>
                  <v-layout row wrap>
                    <v-flex xs12 md6>
                      <v-text-field label="Full Name" type="email" required></v-text-field>
                      <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        :return-value.sync="date"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                      >
                        <v-text-field slot="activator" v-model="date" label="Birthday" readonly></v-text-field>
                        <v-date-picker v-model="date" no-title scrollable>
                          <v-spacer></v-spacer>
                          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                        </v-date-picker>
                      </v-menu>
                      <v-text-field
                        v-model="age"
                        label="Age"
                        type="number"
                        class="age"
                        required
                        readonly
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md6>
                      <v-select :items="items" label="Gender"></v-select>
                      <!-- <v-text-field label="Address" type="text" required></v-text-field> -->
                      <v-text-field label="Contact Number" type="number" prefix="+63" required></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
              <v-flex xs12 md4 mt-5 class="text-sm-center">
                <v-btn color="#075525" dark block large>Register</v-btn>
                <v-btn
                  color="#075525"
                  flat
                  dark
                  block
                  large
                  @click="$router.push({ name: 'Login' })"
                >Back to Login</v-btn>
              </v-flex>
              <v-flex xs12>
                <v-select label="Region" style="display: inline-block;"></v-select>
                <v-select label="City" style="display: inline-block;"></v-select>
                <v-select label="Barangay" style="display: inline-block;"></v-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "SignUp",
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    age: null,
    menu: false,
    items: ["Male", "Female"],
    showPassword: false,
    showVerify: false
  }),
  watch: {
    date: function(n, o) {
      let d = new Date();
      let selectedBirthdayYear = this.$moment(n).format("YYYY");

      this.age = d.getFullYear() - parseInt(selectedBirthdayYear);
    }
  }
};
</script>

<style scoped>
.wrapper {
  border: 2px solid #000;
  border-radius: 4px;
  position: relative;
}
.wrapper span {
  position: absolute;
  top: -15px;
  left: 16px;
  font-size: 18px;
  background: rgb(188, 187, 184);
  padding: 0px 11px;
  color: #075525;
  font-weight: bold;
}
.wrapper p {
  font-weight: bold;
  font-size: 16px;
}
</style>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}
</style>
