<template>
  <div>
    <v-toolbar height="100" color="rgba(242, 241, 239, 0.3)">
      <v-toolbar-title class="text-lg-center">
        <router-link to="/" class="header-link">
          <span class="d-block header">Hospital</span>
          <span class="subheader">Consultation System</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <template v-if="!type">
          <v-btn flat color="#fff" @click="navigate('About Us')">About Us</v-btn>
          <v-btn flat color="#fff" @click="navigate('User')">Guest Enlist</v-btn>
          <v-btn flat color="#fff" @click="navigate('Search Doctor')">Search Doctor</v-btn>
          <v-btn flat color="#fff" @click="navigate('Patient Guide')">Patient Guide</v-btn>
        </template>
        <template v-if="type === 'Clerk'">
          <v-btn flat color="#fff" @click="navigate('Loa Request')">Loa Request</v-btn>
          <v-btn flat color="#fff" @click="navigate('Accredited Doctors')">Accredited Doctors</v-btn>
        </template>
        <template v-if="type === 'User'">
          <v-btn flat color="#fff" @click="navigate('About Us')">About Us</v-btn>
          <v-btn flat color="#fff" @click="navigate('User')">Enlist</v-btn>
          <v-btn flat color="#fff" @click="navigate('Search Doctor')">Search Doctor</v-btn>
          <v-btn flat color="#fff" @click="navigate('Enlistment')">My Enlistments</v-btn>
          <v-btn flat color="#fff" @click="navigate('HMO')">HMO</v-btn>
          <v-btn flat color="#fff" @click="navigate('Patient Guide')">Patient Guide</v-btn>
        </template>
        <template v-if="type == 'Secretary'">
          <v-btn flat color="#fff" @click="navigate('Secretary View')">Schedules</v-btn>
          <v-btn flat color="#fff">Enlistments</v-btn>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn flat dark v-on="on">
                Notify Patients
                <v-icon dark>keyboard_arrow_down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-tile @click="navigate('Secretary SMS')">
                <v-list-tile-title>SMS</v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click="navigate('Secretary Online')">
                <v-list-tile-title>Online</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </template>
        <template
          v-if="type === 'Admin' || type === 'Secretary' || type === 'Department' || type === 'User' || type === 'Clerk'"
        >
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn flat dark v-on="on">
                Settings
                <v-icon dark>keyboard_arrow_down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <template v-if="type === 'Secretary'">
                <v-list-tile @click="navigate('Secretary Settings')">
                  <v-list-tile-title>Enlistment Settings</v-list-tile-title>
                </v-list-tile>
              </template>
              <v-list-tile v-for="(item, index) in items" :key="index" @click="action(index)">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </template>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-md-and-up">
        <v-btn flat icon color="#fff" @click="drawer = true">
          <v-icon>menu</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list class="pa-1">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Hospital Consultation System</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list>
        <v-divider></v-divider>

        <template v-if="!type">
          <v-list-tile @click="navigate('About Us')">
            <v-list-tile>About Us</v-list-tile>
          </v-list-tile>
          <v-list-tile @click="navigate('User')">
            <v-list-tile>Guest Enlist</v-list-tile>
          </v-list-tile>
          <v-list-tile @click="navigate('Search Doctor')">
            <v-list-tile>Search Doctor</v-list-tile>
          </v-list-tile>
          <v-list-tile @click="navigate('Patient Guide')">
            <v-list-tile>Patient Guide</v-list-tile>
          </v-list-tile>
        </template>
        <template v-if="type === 'Clerk'">
          <v-list-tile @click="navigate('Loa Request')">
            <v-list-tile>Loa Request</v-list-tile>
          </v-list-tile>
          <v-list-tile @click="navigate('Accredited Doctors')">
            <v-list-tile>Accredited Doctors</v-list-tile>
          </v-list-tile>
        </template>
        <template v-if="type === 'User'">
          <v-list-tile @click="navigate('About Us')">
            <v-list-tile>About Us</v-list-tile>
          </v-list-tile>
          <v-list-tile @click="navigate('User')">
            <v-list-tile>Enlist</v-list-tile>
          </v-list-tile>
          <v-list-tile @click="navigate('Search Doctor')">
            <v-list-tile>Search Doctor</v-list-tile>
          </v-list-tile>
          <v-list-tile @click="navigate('Enlistment')">
            <v-list-tile>Enlistments</v-list-tile>
          </v-list-tile>
          <v-list-tile @click="navigate('HMO')">
            <v-list-tile>HMO</v-list-tile>
          </v-list-tile>
          <v-list-tile @click="navigate('Patient Guide')">
            <v-list-tile>Patient Guide</v-list-tile>
          </v-list-tile>
        </template>
        <template v-if="type == 'Secretary'">
          <v-list-tile>
            <v-list-tile>Enlistments</v-list-tile>
          </v-list-tile>

          <v-list-group prepend-icon value="true">
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Notify Patients</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile @click="navigate('Secretary SMS')">
              <v-list-tile-title>SMS</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="navigate('Secretary Online')">
              <v-list-tile-title>Online</v-list-tile-title>
            </v-list-tile>
          </v-list-group>
        </template>
        <template
          v-if="type === 'Admin' || type === 'Secretary' || type === 'Department' || type === 'User' || type === 'Clerk'"
        >
          <v-list-group prepend-icon value="true">
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Settings</v-list-tile-title>
              </v-list-tile>
            </template>

            <template v-if="type === 'Secretary'">
              <v-list-tile @click="navigate('Secretary Settings')">
                <v-list-tile-title>Enlistment Settings</v-list-tile-title>
              </v-list-tile>
            </template>
            <v-list-tile v-for="(item, index) in items" :key="index" @click="action(index)">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { getCookie, removeCookie } from "../../helper";
export default {
  name: "Navbar",
  data() {
    return {
      type: null,
      drawer: false,
      items: [{ title: "Profile" }, { title: "Logout" }]
    };
  },
  methods: {
    action(index) {
      if (index === 0) {
        this.$router.push({ name: "Profile" });
      } else if (index === 1) {
        removeCookie("token");
        removeCookie("type");

        window.location = "/";
        // this.$router.push({ name: "Login" });
      }
    },
    navigate(data) {
      if (data === "Loa Request") {
        this.$swal({
          title: "To: 09354495399",
          text:
            "Your LOA request is approved. By using this LOA, you agree to the Terms and Conditions",
          confirmButtonColor: "#075525",
          confirmButtonText: "Send SMS",
          type: "info",
          allowOutsideClick: false
        });
      } else if (data === "Accredited Doctors") {
        this.$router.push({ name: "Accredited Doctors" });
      } else if (data === "Search Doctor") {
        this.$router.push({ name: "Search Doctor" });
      } else if (data === "Enlistment") {
        this.$router.push({ name: "Enlistment" });
      } else if (data === "HMO") {
        this.$router.push({ name: "HMO" });
      } else if (data === "Enlistment") {
        this.$router.push({ name: "Enlistment" });
      } else if (data === "About Us") {
        this.$router.push({ name: "About Us" });
      } else if (data === "Patient Guide") {
        this.$router.push({ name: "Patient Guide" });
      } else {
        this.$router.push({ name: data });
      }
    }
  },
  created() {
    this.type = getCookie("type");
  }
};
</script>

<style>
.header-link {
  text-decoration: none;
}
.header {
  font-size: 34px;
  font-weight: bold;
  line-height: 34px;
  color: #fff;
}
.subheader {
  font-size: 16px;
  color: #075525;
}
</style>
