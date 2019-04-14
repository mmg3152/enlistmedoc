<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 md12>
        <v-card color="rgba(242, 241, 239, 0.7)">
          <v-container grid-list-lg>
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
              <v-flex xs12 md8>
                <v-list style="overflow-y: scroll; height: 300px;">
                  <v-list-tile
                    v-for="(patient, index) in this.patients[this.selectedDoctor['id']]"
                    :key="index"
                  >
                    <v-list-tile-content>
                      <v-list-tile-title>{{ index + 1 }}. {{ patient.name }}</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <v-checkbox disabled v-model="patient.status"></v-checkbox>
                    </v-list-tile-action>
                  </v-list-tile>
                </v-list>
              </v-flex>
              <v-flex xs12 md4>
                <template v-if="selectedDoctor">
                  <v-card class="text-xs-center serving-card" style="height: 250px">
                    <p>NOW SERVING</p>
                    <p>{{ selectedDoctor.currentPatient }}</p>
                  </v-card>
                  <v-btn dark color="#075525">
                    <v-icon>remove</v-icon>
                  </v-btn>
                  <v-btn dark color="#075525" style="float: right;">
                    <v-icon>add</v-icon>
                  </v-btn>
                  <v-btn color="#075525" dark block large @click="updateCurrentPatient">Update</v-btn>
                </template>
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
  name: "SecretaryDashboard",
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
      patients: {
        1: [
          { name: "John Paul Monreal", status: true },
          { name: "Juan Dela Cruz", status: false },
          { name: "Gerald Anthony Reyes", status: false },
          { name: "Mary Angelie Santos", status: false },
          { name: "Camille Visa", status: false }
        ],
        2: [
          { name: "Felix San Pedro", status: true },
          { name: "Josefina Vicente", status: true },
          { name: "Paulo Rodriguez", status: false },
          { name: "Renzo Enriquez", status: false }
        ]
      },
      imagePlaceholder: require("@/assets/placeholder-person.jpg")
    };
  },
  methods: {
    updateSelectedDoctor(id) {
      const selected = find(this.doctors, { id: id });

      this.selectedDoctor = selected;
    },
    updateCurrentPatient() {
      const patients = this.patients[this.selectedDoctor.id];
      const currentPatient = this.selectedDoctor.currentPatient;

      if (patients.length != currentPatient) {
        this.selectedDoctor.currentPatient += 1;
        this.patients[this.selectedDoctor.id][currentPatient]["status"] = true;
      }
    }
  }
};
</script>

<style scoped>
.serving-card p:first-child {
  font-size: 24px;
  font-weight: bold;
}
.serving-card p:nth-child(2) {
  font-size: 8rem;
  font-weight: bold;
}
</style>
