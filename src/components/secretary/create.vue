<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h4 class="headline">View Schedule</h4>
          </v-card-title>

          <v-container>
            <v-layout row wrap>
              <v-flex xs12 md6>
                <v-avatar
                  :tile="true"
                  :size="100"
                  color="grey lighten-4"
                  class="hidden-sm-and-down"
                >
                  <img
                    v-bind:src="!selectedDoctor ? imagePlaceholder : require(`@/assets/${selectedDoctor.image}`)"
                    alt="avatar"
                  >
                </v-avatar>
                <div class="hidden-md-and-up text-xs-center">
                  <v-avatar :tile="true" :size="200" color="grey lighten-4">
                    <img
                      v-bind:src="!selectedDoctor ? imagePlaceholder : require(`@/assets/${selectedDoctor.image}`)"
                      alt="avatar"
                    >
                  </v-avatar>
                </div>
                <div
                  class="ml-3"
                  style="display: inline-block; vertical-align: middle; height: 100px"
                >
                  <v-select
                    hide-details
                    :items="doctors"
                    item-text="name"
                    label="Select Doctor"
                    style="display: inline-block;"
                    @change="selectDoctor"
                  ></v-select>
                  <p
                    class="mt-2 mb-0 font-weight-bold"
                  >{{ selectedDoctor ? selectedDoctor.description : "" }}</p>
                  <p class="mb-0">{{ selectedDoctor ? 'October 18, 2018': '' }}</p>
                </div>
              </v-flex>
              <v-flex xs12 md6>
                <v-btn
                  depressed
                  dark
                  color="#075525"
                  class="px-5"
                  style="float: right;"
                  @click="$router.push({ name: 'Secretary Create' })"
                >Create</v-btn>
              </v-flex>
              <v-flex xs12>
                <template v-if="selectedDoctor">
                  <v-data-table :headers="headers" :items="selectedDoctor.schedule">
                    <template v-slot:items="props">
                      <td>{{ props.item.day }}</td>
                      <td class="text-xs-right">{{ props.item.time }}</td>
                      <td class="text-xs-right">{{ props.item.room }}</td>
                      <td class="text-xs-right">
                        <v-menu offset-y>
                          <template v-slot:activator="{ on }">
                            <v-btn color="#075525" dark v-on="on">Actions</v-btn>
                          </template>
                          <v-list>
                            <v-list-tile @click>
                              <v-list-tile-title>Edit</v-list-tile-title>
                            </v-list-tile>
                            <v-list-tile @click="confirmDelete">
                              <v-list-tile-title>Delete</v-list-tile-title>
                            </v-list-tile>
                          </v-list>
                        </v-menu>
                      </td>
                    </template>
                  </v-data-table>
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
  name: "SecretaryViewSchedule",
  data() {
    return {
      headers: [
        {
          text: "Day",
          align: "left",
          sortable: false,
          value: "day"
        },
        {
          text: "Time",
          align: "right",
          sortable: false,
          value: "time"
        },
        {
          text: "Room",
          align: "right",
          sortable: false,
          value: "room"
        },
        {
          text: "Actions",
          align: "right",
          sortable: false,
          value: ""
        }
      ],
      selectedDoctor: null,
      doctors: [
        {
          id: 1,
          name: "Dr. Diego Uy",
          description: "ORTHOPEDICS - Sports Medicine",
          image: "johndoe.jpg",
          currentPatient: 1,
          schedule: [
            {
              day: "Monday",
              time: "10:00-2:00pm",
              room: "CTH 204"
            }
          ]
        },
        {
          id: 2,
          name: "Dr. Traeni Paulino",
          description: "DENTIST",
          image: "johndoe2.jpg",
          currentPatient: 2,
          schedule: [
            {
              day: "Monday",
              time: "10:00-2:00pm",
              room: "CTH 204"
            }
          ]
        }
      ],
      imagePlaceholder: require("@/assets/placeholder-person.jpg")
    };
  },
  methods: {
    selectDoctor(name) {
      const data = find(this.doctors, { name: name });

      this.selectedDoctor = data;
    },
    confirmDelete() {
      this.$swal({
        title: "Are you sure you want to delete this schedule?",
        type: "warning",
        showCancelButton: true
      });
    }
  },
  created() {
    console.log(this);
  }
};
</script>

<style>
</style>
