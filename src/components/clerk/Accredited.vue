<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 md12>
        <v-card>
          <v-container grid-list-lg>
            <v-layout row wrap>
              <v-flex xs12>
                <span class="headline">HMO</span>
                <v-select
                  v-model="selectedHMO"
                  :items="HMO"
                  label="Select Department"
                  class="d-inline-block mx-3 mt-0"
                ></v-select>
                <v-btn flat depressed @click="ok">OK</v-btn>
              </v-flex>
              <template v-if="this.accreditedDoctors.length > 0">
                <v-flex xs12>
                  <h1 class="headline">Accredited Doctors</h1>
                  <v-list>
                    <v-list-tile v-for="doctors in this.accreditedDoctors" :key="doctors">
                      <v-list-tile-title>{{ doctors }}</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-flex>
              </template>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import isEmpty from "lodash/isEmpty";
export default {
  name: "AccreditedDoctors",
  data() {
    return {
      HMO: ["Asian Life"],
      selectedHMO: null,
      accreditedDoctors: []
    };
  },
  methods: {
    ok() {
      if (this.selectedHMO === "Asian Life") {
        this.accreditedDoctors = [
          "Dr. Paul Castillo",
          "Dr. Traeni Paulino",
          "Dr. Renn Remula",
          "Dr. Ailyn Nerves",
          "Dr. Hazel Ngo",
          "Dr. Genez Cruz",
          "Dr. Hannah Dailo",
          "Dr. Gener Cruz",
          "Dr. Sherwin Castro"
        ];
      }
    }
  }
};
</script>

<style>
</style>
