<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 md6>
        <v-card>
          <v-card-title class="mx-4 pb-1 mb-3" style="border-bottom: 2px solid #000;">
            <h4 class="headline">Add Industrial Clerk</h4>
          </v-card-title>
          <v-container grid-list-lg>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field label="First Name"></v-text-field>
                <v-text-field label="Last Name"></v-text-field>
                <v-text-field label="Email"></v-text-field>
                <v-text-field label="Default Password"></v-text-field>
              </v-flex>
              <v-flex xs12 md4 offset-md4>
                <v-btn block depressed dark color="#075525">Save</v-btn>
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
  name: "AddClerk"
};
</script>

<style>
</style>
