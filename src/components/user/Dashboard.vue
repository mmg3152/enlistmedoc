<template>
  <v-container grid-list-md>
    <v-layout row wrap justify-center>
      <v-flex xs12 md12>
        <v-card color="rgba(242, 241, 239, 0.7)">
          <v-container grid-list-lg>
            <v-layout row wrap>
              <v-flex xs12 md4>
                <v-select v-model="selectedDepartment" :items="list" label="Select Department">
                  <template v-slot:item="{ item, index }">
                    <span>{{ item.department }}</span>
                  </template>
                  <template v-slot:selection="{ item, index }">
                    <span>{{ item.department }}</span>
                  </template>
                </v-select>
                <template v-if="!isAuthenticated">
                  <v-text-field label="First Name"></v-text-field>
                  <v-text-field label="Last Name"></v-text-field>
                  <v-text-field label="Contact" prefix="+63"></v-text-field>
                </template>
              </v-flex>
              <v-flex xs12 md3>
                <v-select
                  :items="selectedDepartment.doctors"
                  v-if="selectedDepartment"
                  label="Select Doctor"
                >
                  <template v-slot:item="{ item, index }">
                    <span>{{ item }}</span>
                  </template>
                  <!-- <template v-slot:selection="{ item, index }">
                    <span>{{ item.doctors }}</span>
                  </template>-->
                </v-select>
              </v-flex>
              <v-flex xs12 md5>
                <span class="headline font-weight-bold">Doctors Schedule</span>
                <v-card class="sched-container" color="rgba(242, 241, 239, 0.7)">
                  <v-container>
                    <v-layout wrap row>
                      <v-flex xs12 md3 text-xs-center>
                        <span class="font-weight-bold d-block mb-4">DAY</span>
                        <p>Tuesday</p>
                        <p>Thursday</p>
                        <p>Saturday</p>
                      </v-flex>
                      <v-flex xs12 md6 text-xs-center>
                        <span class="font-weight-bold d-block mb-4">TIME</span>
                        <p>2:00pm - 4:00pm</p>
                        <p>2:00pm - 4:00pm</p>
                        <p>2:00pm - 5:00pm</p>
                      </v-flex>
                      <v-flex xs12 md3 text-xs-center>
                        <span class="font-weight-bold d-block mb-4">ROOM</span>
                        <p>1104</p>
                        <p>1104</p>
                        <p>1105</p>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-flex>
              <v-flex xs12 text-xs-center>
                <v-btn color="#075525" depressed dark class="px-5" @click="submit">Enlist</v-btn>
              </v-flex>
              <v-flex xs12 text-xs-center>
                <template v-if="!isAuthenticated">
                  <v-btn
                    color="#075525"
                    flat
                    depressed
                    dark
                    class="px-5"
                    @click="$router.push({ name: 'Login'})"
                  >Back to Login</v-btn>
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
import { getCookie } from "../../helper";
export default {
  name: "UserDashboard",
  data() {
    return {
      isAuthenticated: false,
      selectedDepartment: {
        department: "Anaesthetics",
        doctors: ["Dr. Paul Castillo"]
      },
      list: [
        { department: "Anaesthetics", doctors: ["Dr. Paul Castillo"] },
        { department: "Cardiology", doctors: ["Dr. Traeni Paulino"] },
        { department: "Gastroenterology", doctors: ["Dr. Renn Remula"] },
        { department: "Gynaecology", doctors: ["Dr. Ailyn Nerves"] },
        { department: "Internal Medicine", doctors: ["Dr. Hazel Ngo"] },
        { department: "Nuerology", doctors: ["Dr. Genez Cruz"] },
        {
          department: "Orthopaedics",
          doctors: ["Dr. Sherwin Castro", "Dr. Hannah Dailo"]
        }
      ]
    };
  },
  methods: {
    submit() {
      this.$swal({
        title: "You are now enlisted. Your queue number is #21",
        type: "success"
      });
    }
  },
  created() {
    const authenticatedType = getCookie("type");

    if (authenticatedType) {
      this.isAuthenticated = true;
    }
  }
};
</script>

<style scoped>
.sched-container {
  min-height: 250px;
}
.sched-container p {
  font-size: 18px;
}
</style>

