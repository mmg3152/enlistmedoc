<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-card>
          <v-card-title class="mx-4 pb-1 mb-3" style="border-bottom: 2px solid #000;">
            <h4 class="headline">Add Doctor</h4>
          </v-card-title>
          <v-container grid-list-lg>
            <v-layout row wrap>
              <v-flex xs12 md4>
                <v-text-field label="Doctor"></v-text-field>
                <span class="body-2">Choose Image:</span>
                <input type="file" style="display: inline-block;">
              </v-flex>
              <v-flex xs12 md4>
                <v-select :items="secretary" label="Select Secretary"></v-select>
              </v-flex>
              <v-flex xs12 md4>
                <v-container pa-0 text-xs-center>
                  <v-layout row wrap>
                    <v-flex xs12>
                      Day
                      <v-select :items="weeks" multiple chips label="Select Day"></v-select>
                    </v-flex>
                    <v-flex xs12>
                      Time
                      <v-container pa-0>
                        <v-layout row wrap>
                          <!-- <template v-for="n in sched"> -->
                          <v-flex xs12 md6>
                            <v-dialog
                              ref="fromDialog"
                              v-model="fromModal"
                              persistent
                              lazy
                              full-width
                              width="290px"
                            >
                              <template v-slot:activator="{ on }">
                                <v-text-field v-model="from" label="From" readonly v-on="on"></v-text-field>
                              </template>
                              <v-time-picker v-model="from">
                                <v-spacer></v-spacer>
                                <v-btn flat color="primary" @click="$refs.fromDialog.save(from)">OK</v-btn>
                              </v-time-picker>
                            </v-dialog>
                          </v-flex>
                          <v-flex xs12 md6>
                            <v-dialog
                              ref="toDialog"
                              v-model="toModal"
                              persistent
                              lazy
                              full-width
                              width="290px"
                            >
                              <template v-slot:activator="{ on }">
                                <v-text-field v-model="to" label="To" readonly v-on="on"></v-text-field>
                              </template>
                              <v-time-picker v-model="to">
                                <v-spacer></v-spacer>
                                <v-btn flat color="primary" @click="$refs.toDialog.save(to)">OK</v-btn>
                              </v-time-picker>
                            </v-dialog>
                          </v-flex>
                          <!-- </template> -->
                        </v-layout>
                      </v-container>
                    </v-flex>
                    <v-flex xs12>
                      <!-- <v-btn depressed dark color="#075525" @click="addSched">Add Another</v-btn> -->
                    </v-flex>
                  </v-layout>
                </v-container>
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
  name: "AddDepartment",
  data() {
    return {
      fromModal: false,
      fromModal2: false,
      fromModal3: false,
      toModal: false,
      toModal2: false,
      toModal3: false,
      from: null,
      to: null,
      sched: 1,
      secretary: [
        "Ms. Joy Tajedas",
        "Ms. Arvy Cruz",
        "Ms. Alyssa San Juan",
        "Ms. Herjane Reyes",
        "Ms. Hannah Dela Cruz"
      ],
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
      weeks: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ]
    };
  },
  watch: {
    fromModal: function(x, y) {
      console.log(x, y);
    }
  },
  methods: {
    addSched() {
      let currentKey = this.sched - 1;

      this.fromModal.push(false);
      this.toModal.push(false);
      // this.from.push(null);
      // this.to.push(null);
      this.sched += 1;
    },
    close(key) {
      this.fromModal[key] = false;
      console.log(this.fromModal);
    }
  }
};
</script>

<style>
</style>
