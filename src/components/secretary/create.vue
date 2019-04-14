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
              <v-flex xs12>
                <v-select
                  :items="doctors"
                  item-text="name"
                  label="Select Doctor"
                  style="display: inline-block;"
                  @change="selectDoctor"
                ></v-select>
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
                  <span class="grey--text">Department: {{ selectedDoctor.department }}</span>
                </template>
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
          name: "Dr. Diego Uy",
          department: "Sample 1",
          schedule: [
            {
              day: "Monday",
              time: "10:00-2:00pm",
              room: "CTH 204"
            }
          ]
        },
        {
          name: "Dr. Paul Castillo",
          department: "Sample 2",
          schedule: [
            {
              day: "Monday",
              time: "10:00-2:00pm",
              room: "CTH 204"
            }
          ]
        },
        {
          name: "Dr. Traeni Paulino",
          department: "Sample 3",
          schedule: [
            {
              day: "Monday",
              time: "10:00-2:00pm",
              room: "CTH 204"
            }
          ]
        },
        {
          name: "Dr. Renn Remula",
          department: "Sample 4",
          schedule: [
            {
              day: "Monday",
              time: "10:00-2:00pm",
              room: "CTH 204"
            }
          ]
        },
        {
          name: "Dr. Ailyn Nerves",
          department: "Sample 5",
          schedule: [
            {
              day: "Monday",
              time: "10:00-2:00pm",
              room: "CTH 204"
            }
          ]
        },
        {
          name: "Dr. Hazel Ngo",
          department: "Sample 6",
          schedule: [
            {
              day: "Monday",
              time: "10:00-2:00pm",
              room: "CTH 204"
            }
          ]
        },
        {
          name: "Dr. Genez Cruz",
          department: "Sample 7",
          schedule: [
            {
              day: "Monday",
              time: "10:00-2:00pm",
              room: "CTH 204"
            }
          ]
        },
        {
          name: "Dr. Hannah Dailo",
          department: "Sample 8",
          schedule: [
            {
              day: "Monday",
              time: "10:00-2:00pm",
              room: "CTH 204"
            }
          ]
        },
        {
          name: "Dr. Gener Cruz",
          department: "Sample 9",
          schedule: [
            {
              day: "Monday",
              time: "10:00-2:00pm",
              room: "CTH 204"
            }
          ]
        },
        {
          name: "Dr. Sherwin Castro",
          department: "Sample 10",
          schedule: [
            {
              day: "Monday",
              time: "10:00-2:00pm",
              room: "CTH 204"
            }
          ]
        }
      ]
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
  }
};
</script>

<style>
</style>
