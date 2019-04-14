<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-card color="rgba(242, 241, 239, 0.7)">
          <v-card-title>
            <h4 class="headline">SEND SMS NOTIFICATIONS</h4>
          </v-card-title>

          <v-container grid-list-lg>
            <v-layout row wrap>
              <v-flex xs12 md4>
                <v-select
                  hide-details
                  v-model="selectedNumbers"
                  :items="numbers"
                  label="Select Patients"
                  chips
                ></v-select>
              </v-flex>
              <v-flex xs12 md8>
                <v-textarea name label="Type a message here"></v-textarea>
                <div class="text-xs-center">
                  <v-btn color="#075525" depressed dark class="px-5">Send SMS</v-btn>
                </div>
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
  name: "SecretarySMS",
  data() {
    return {
      selectedNumbers: "",
      numbers: [
        "09354495399",
        "09278394035",
        "09176374852",
        "09378465734",
        "09223478946",
        "09558329384",
        "09102749379",
        "09237486579",
        "09776384972"
      ]
    };
  }
};
</script>

<style>
h4 {
  text-decoration: underline;
}
</style>
