<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card color="rgba(242, 241, 239, 0.7)">
          <v-card-title>
            <h4 class="headline">ENLISTMENT SETTINGS</h4>
          </v-card-title>

          <v-container>
            <v-layout row wrap>
              <v-flex xs12 md4>
                <div>
                  <span class="title">Opening</span>
                </div>
                <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="date"
                  persistent
                  lazy
                  full-width
                  width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="date"
                      label="Picker in dialog"
                      prepend-icon="event"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
                <v-dialog
                  ref="dialog2"
                  v-model="modal2"
                  :return-value.sync="time"
                  persistent
                  lazy
                  full-width
                  width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="time"
                      label="Picker in dialog"
                      prepend-icon="access_time"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker v-if="modal2" v-model="time" full-width>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="modal2 = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog2.save(time)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>
                <v-text-field label="Maximum Patients"></v-text-field>
              </v-flex>
              <v-flex xs12 class="text-xs-center">
                <v-btn color="#075525" dark depressed class="px-4">Save Setting</v-btn>
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
  name: "SecretarySettings",
  data() {
    return {
      modal: false,
      modal2: false,
      date: "",
      time: ""
    };
  }
};
</script>

<style>
h4 {
  text-decoration: underline;
}
</style>
