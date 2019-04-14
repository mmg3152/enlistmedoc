<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 md12>
        <v-card>
          <v-card-title class="mx-4 pb-1 mb-3" style="border-bottom: 2px solid #000;">
            <h4 class="headline">Add Secretary</h4>
          </v-card-title>
          <v-container grid-list-lg>
            <v-layout row wrap justify-center>
              <v-flex xs12 md6>
                <v-container>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-text-field v-model="first_name" label="First Name"></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field v-model="last_name" label="Last Name"></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field v-model="email" label="Email Address"></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field v-model="password" label="Default Password"></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
              <!-- <v-flex xs12 md8>
                <v-container>
                  <v-layout row wrap>
                    <v-flex xs12 md6>
                      <v-select :items="departments" label="Select Department"></v-select>
                    </v-flex>
                    <v-flex xs12 md6>
                      <v-select :items="doctors" label="Select Doctor"></v-select>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>-->
              <v-flex xs12 text-xs-center>
                <v-btn depressed dark color="#075525" class="px-5">Save</v-btn>
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
  name: "AddSecretary",
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      departments: [
        "Orthopaedics",
        "Anaesthestic",
        "Cardiology",
        "Gasteroenterology",
        "Internal Medicine",
        "Neurology",
        "Orthopaedics",
        "Pulmonary"
      ],
      doctors: [
        "Dr. Diego Uy",
        "Dr. Paul Castillo",
        "Dr. Traeni Paulino",
        "Dr. Renn Remula",
        "Dr. Ailyn Nerves",
        "Dr. Hazel Ngo",
        "Dr. Genez Cruz",
        "Dr. Hannah Dailo",
        "Dr. Gener Cruz",
        "Dr. Sherwin Castro"
      ]
    };
  }
};
</script>

<style>
</style>
