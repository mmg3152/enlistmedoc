<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-card color="rgba(242, 241, 239, 0.7)">
          <v-card-title>
            <h4 class="headline">ONLINE UPDATES</h4>
          </v-card-title>

          <v-container grid-list-lg>
            <v-layout row wrap>
              <v-flex xs12>
                <v-select
                  hide-details
                  v-model="selectedDoctor"
                  :items="doctors"
                  item-text="name"
                  item-value="id"
                  label="Select Doctor"
                  style="display: inline-block;"
                ></v-select>
                <v-btn color="#075525" dark style="float: right;" @click="addUpdate">
                  Post
                  <v-icon>add</v-icon>
                </v-btn>
              </v-flex>
              <template v-if="selectedDoctor">
                <v-flex xs12 md8>
                  <template v-for="update in updates[selectedDoctor]">
                    <div class="grey lighten-1 pt-3 pb-1 px-4 mb-3" :key="update.id">
                      <h2>{{ update.message }}</h2>
                      <div class="text-xs-right">
                        <span>Posted on {{ update.created_at }}</span>
                      </div>
                    </div>
                  </template>
                </v-flex>
              </template>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="showDialog" persistent width="600">
      <v-card>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12>
              <v-textarea v-model="message" label="Type message here"></v-textarea>
            </v-flex>
            <v-flex xs12 class="text-xs-center">
              <v-btn color="#075525" dark class="px-4" @click="saveUpdate">Submit</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import last from "lodash/last";

export default {
  name: "SecretaryOnline",
  data() {
    return {
      showDialog: false,
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
      updates: {
        1: [
          {
            id: 1,
            message:
              "Dr. Uy will not be around April 18 to April 19, 2019. Clinic will resume on April 22",
            created_at: "April 15, 2019"
          }
        ],
        2: [
          {
            id: 1,
            message:
              "No Clinic on April 9, 2019 in lieu of Araw ng Kagitingan. Clinic will resume on April 10, 2019",
            created_at: "April 8, 2019"
          }
        ]
      },
      message: ""
    };
  },
  methods: {
    addUpdate() {
      if (this.selectedDoctor) {
        this.showDialog = true;
      } else {
        this.$swal({
          title: "Please select doctor first",
          type: "error"
        });
      }
    },
    saveUpdate() {
      const currentDoctor = this.selectedDoctor;
      const currentUpdate = last(this.updates[this.selectedDoctor]);
      const d = new Date();

      const data = {
        id: currentUpdate.id + 1,
        message: this.message,
        created_at: this.$moment(d).format("MMMM D, YYYY")
      };

      this.updates[this.selectedDoctor].unshift(data);
      this.message = "";
      this.showDialog = false;
    }
  }
};
</script>

<style>
</style>
