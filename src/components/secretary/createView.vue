<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h4 class="headline">Create Schedule</h4>
          </v-card-title>

          <v-container>
            <v-layout row wrap>
              <v-flex xs12>
                <v-avatar :tile="true" :size="100" color="grey lighten-4">
                  <img
                    v-bind:src="!selectedDoctor ? imagePlaceholder : require(`@/assets/${selectedDoctor.image}`)"
                    alt="avatar"
                  >
                </v-avatar>
                <div
                  class="ml-3"
                  style="display: inline-block; vertical-align: middle; height: 100px"
                >
                  <v-select
                    hide-details
                    v-model="selectedDoctor"
                    :items="doctors"
                    item-text="name"
                    item-value="id"
                    label="Select Doctor"
                    style="display: inline-block"
                    @change="updateSelectedDoctor"
                  ></v-select>
                  <p class="mt-2 mb-0 font-weight-bold">{{ selectedDoctor.description }}</p>
                  <p class="mb-0">{{ selectedDoctor ? 'October 18, 2018': '' }}</p>
                </div>
              </v-flex>
              <v-flex xs12>
                <v-select :items="days" label="Day" class="d-inline-block"></v-select>
                <v-select :items="rooms" label="Room" class="d-inline-block"></v-select>
              </v-flex>
              <v-flex xs12>
                <p class="body-1 mb-0">Time</p>
                <v-dialog
                  ref="startDialog"
                  v-model="startModal"
                  persistent
                  lazy
                  full-width
                  width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="start"
                      label="Start"
                      readonly
                      v-on="on"
                      class="d-inline-block"
                    ></v-text-field>
                  </template>
                  <v-time-picker v-model="start">
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="$refs.startDialog.save(from)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>

                <v-dialog
                  ref="endDialog"
                  v-model="endModal"
                  persistent
                  lazy
                  full-width
                  width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="end"
                      label="End"
                      readonly
                      v-on="on"
                      class="d-inline-block"
                    ></v-text-field>
                  </template>
                  <v-time-picker v-model="end">
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="$refs.endDialog.save(from)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>

                <v-text-field label="Maximum Patients" class="d-inline-block"></v-text-field>
              </v-flex>
              <v-flex xs12 text-xs-right>
                <v-btn depressed dark color="#075525" class="px-5" style="float: right;">Create</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import find from "lodash/find";
export default {
  name: "SecretaryCreateSchedule",
  data() {
    return {
      selectedDoctor: "",
      doctors: [
        {
          id: 1,
          name: "Dr. Diego Uy",
          description: "ORTHOPEDICS - Sports Medicine",
          image: "johndoe.jpg",
          currentPatient: 1
        },
        {
          id: 2,
          name: "Dr. Traeni Paulino",
          description: "DENTIST",
          image: "johndoe2.jpg",
          currentPatient: 2
        }
      ],
      imagePlaceholder: require("@/assets/placeholder-person.jpg"),
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      rooms: ["CTH 201", "CTH 202", "CTH 203", "CTH 204"],
      startModal: false,
      start: "",
      endModal: false,
      end: ""
    };
  },
  methods: {
    updateSelectedDoctor(id) {
      const selected = find(this.doctors, { id: id });

      this.selectedDoctor = selected;
    }
  }
};
</script>

<style>
</style>
