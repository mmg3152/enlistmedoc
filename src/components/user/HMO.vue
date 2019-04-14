<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h4 class="headline">HEALTH MAINTENANCE ORGANIZATION (HMO)</h4>
          </v-card-title>
          <v-container grid-list-lg>
            <v-layout row wrap>
              <v-flex xs12>
                <span class="pr-4" style="vertical-align: middle;">Health Card:</span>
                <v-select :items="healthCards" class="d-inline-block"></v-select>
              </v-flex>
              <v-flex xs12>
                <span class="pr-4" style="vertical-align: middle;">Doctors Name:</span>
                <!-- <v-select :items="doctors" class="d-inline-block"></v-select> -->
                <v-autocomplete
                  :items="doctors"
                  :loading="loading"
                  :search-input.sync="search"
                  cache-items
                  flat
                  hide-no-data
                  hide-details
                  class="d-inline-block"
                ></v-autocomplete>
              </v-flex>
              <v-flex xs12>
                <span>Upload Health Card Image</span>
              </v-flex>
              <v-flex xs12>
                <input type="file">
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn depressed color="#075525" dark class="px-5" @click="submitHMO">Submit</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HMO",
  data() {
    return {
      loading: false,
      search: null,
      headers: [
        {
          text: "Doctors Name",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Date", align: "right", value: "date" },
        { text: "Queue Number", align: "right", value: "queue" },
        { text: "Status", align: "right", value: "status" }
      ],
      enlistments: [
        {
          name: "Dr. Diego Uy",
          date: "04/18/2019",
          queue: "6",
          status: "CANCEL"
        },
        {
          name: "Dr. Renn Remula",
          date: "02/08/2019",
          queue: "2",
          status: "COMPLETED"
        }
      ],
      healthCards: ["Maxicare"],
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
  },
  methods: {
    submitHMO() {
      const that = this;
      this.$swal({
        title:
          "Please wait for your LOA request to be approved. An SMS notification will be sent",
        type: "success",
        confirmButtonColor: "#075525",
        confirmButtonText: "Close",
        allowOutsideClick: false
      }).then(result => {
        if (result.value) {
          this.$router.push({ name: "User" });
        }
      });
    }
  }
};
</script>

<style>
</style>
