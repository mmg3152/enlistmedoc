<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 md5>
        <v-card class="card">
          <v-card-title class="mx-4 pb-1 mb-3" style="border-bottom: 2px solid #000;">
            <h4 class="headline">Add System User</h4>
          </v-card-title>
          <v-container grid-list-lg>
            <v-layout row wrap class="wrapper">
              <v-flex xs12>
                <div class="text-xs-center" @click="navigate('Add Secretary')">
                  <v-icon>add</v-icon>
                  <p class="text-xs-center link">Secretary</p>
                </div>
              </v-flex>
              <v-flex xs12>
                <div class="text-xs-center" @click="navigate('Add Department')">
                  <v-icon>add</v-icon>
                  <p class="text-xs-center link">Doctor</p>
                </div>
              </v-flex>
              <v-flex xs12>
                <div class="text-xs-center" @click="navigate('Add Clerk')">
                  <v-icon>add</v-icon>
                  <p class="text-xs-center link">Clerk</p>
                </div>
              </v-flex>
              <v-flex xs12>
                <div class="text-xs-center" @click="navigate('Add Admin')">
                  <v-icon>add</v-icon>
                  <p class="text-xs-center link">System Administrator</p>
                </div>
              </v-flex>
              <v-flex xs12>
                <div class="text-xs-center" @click="navigate('View Users')">
                  <v-icon>persons</v-icon>
                  <p class="text-xs-center link">View Users</p>
                </div>
              </v-flex>
              <v-flex xs12>
                <div class="text-xs-center" @click="navigate('View Doctors')">
                  <v-icon>healing</v-icon>
                  <p class="text-xs-center link">View Doctors</p>
                </div>
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
  name: "AdminDashboard",
  methods: {
    navigate(data) {
      this.$router.push({ name: data });
    }
  }
};
</script>

<style scoped>
/* .wrapper {
  border: 2px solid #075525;
  border-radius: 4px;
  position: relative;
}
.wrapper .container {
  text-align: center;
  position: absolute;
  top: -15px;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 18px;
  background: transparent;
  padding: 0px 11px;
  color: #000;
  font-weight: bold;
}*/

.wrapper .container .text {
  background-color: rgba(242, 241, 239, 0.7);
  padding: 2px 4px;
}

.wrapper p.link {
  font-weight: bold;
  font-size: 24px;
  text-decoration: underline;
  display: inline-block;
  cursor: pointer;
}
.wrapper .v-icon {
  vertical-align: sub;
  font-size: 17px;
  font-weight: bold;
}
</style>