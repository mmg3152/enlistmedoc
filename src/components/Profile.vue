<template>
  <v-container mt-5>
    <v-layout row wrap justify-center>
      <v-flex xs12 lg11>
        <v-card flat color="rgba(242, 241, 239, 0.7)">
          <template v-if="type === 'User'">
            <v-container grid-list-lg>
              <v-layout row wrap justify-space-around>
                <v-flex xs12 md5>
                  <h2 class="text-sm-center">ACCOUNT INFORMATION</h2>
                  <v-text-field
                    :disabled="isDisabled"
                    label="Email Address"
                    type="email"
                    value="juandelacruz@gmail.com"
                  ></v-text-field>
                  <v-text-field
                    :disabled="isDisabled"
                    label="Password"
                    type="password"
                    value="dummypassword"
                  ></v-text-field>
                  <template v-if="isEdit">
                    <v-text-field :disabled="isDisabled" label="Current Password" type="password"></v-text-field>
                    <v-text-field :disabled="isDisabled" label="New Password" type="password"></v-text-field>
                    <v-text-field
                      :disabled="isDisabled"
                      label="Verify New Password"
                      type="password"
                    ></v-text-field>
                  </template>
                </v-flex>
                <v-flex xs12 md5>
                  <h2 class="text-sm-center">PERSONAL INFORMATION</h2>
                  <v-text-field
                    :disabled="isDisabled"
                    label="Full Name"
                    type="email"
                    value="Juan Dela Cruz"
                  ></v-text-field>
                  <v-text-field
                    :disabled="isDisabled"
                    label="Age"
                    type="number"
                    class="age"
                    value="29"
                  ></v-text-field>
                  <v-select :disabled="isDisabled" :items="genders" label="Gender" value="Male"></v-select>
                  <v-text-field
                    :disabled="isDisabled"
                    label="Address"
                    type="text"
                    value="Zone 1A, Dasmarinas Cavite"
                  ></v-text-field>
                  <v-text-field
                    :disabled="isDisabled"
                    label="Contact Number"
                    type="number"
                    value="09354495399"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 lg3 mt-5 class="text-sm-center">
                  <v-btn
                    color="#075525"
                    dark
                    block
                    large
                    @click="edit"
                  >{{ isEdit ? 'Save' : 'Edit' }}</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </template>
          <template v-else>
            <v-container grid-list-lg>
              <v-layout row wrap>
                <v-flex xs12>
                  <h2 class="text-sm-center">ACCOUNT INFORMATION</h2>
                  <v-text-field
                    :disabled="isDisabled"
                    label="Email Address"
                    type="email"
                    value="juandelacruz@gmail.com"
                  ></v-text-field>
                  <v-text-field
                    :disabled="isDisabled"
                    label="Password"
                    type="password"
                    value="dummypassword"
                  ></v-text-field>
                  <template v-if="isEdit">
                    <v-text-field :disabled="isDisabled" label="Current Password" type="password"></v-text-field>
                    <v-text-field :disabled="isDisabled" label="New Password" type="password"></v-text-field>
                    <v-text-field
                      :disabled="isDisabled"
                      label="Verify New Password"
                      type="password"
                    ></v-text-field>
                  </template>
                </v-flex>
                <v-flex xs12 offset-md4 md4 mt-5 class="text-xs-center">
                  <v-btn color="#075525" dark block @click="edit">{{ isEdit ? 'Save' : 'Edit' }}</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </template>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { getCookie } from "../helper";

export default {
  name: "Profile",
  data() {
    return {
      isDisabled: true,
      isEdit: false,
      type: null,
      genders: ["Male", "Female"]
    };
  },
  methods: {
    edit() {
      this.isEdit = !this.isEdit;
      this.isDisabled = !this.isDisabled;
    }
  },
  created() {
    this.type = getCookie("type");
  }
};
</script>

<style scoped>
/* .wrapper {
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
} */
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
