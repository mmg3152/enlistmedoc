<template>
  <div>
    <v-container style="min-height: 80vh;">
      <v-layout row wrap justify-center>
        <v-flex xs12 md10>
          <v-card color="rgba(242, 241, 239, 0.7)">
            <v-card-title>
              <h4 class="headline">Patient Guides</h4>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-layout row wrap justify-center>
                  <v-flex xs12 mb-5>
                    <p
                      class="title"
                    >Welcome to the more convenient way to enlist and manage your HealthCare consultations...</p>
                  </v-flex>
                  <v-flex xs12 text-xs-center>
                    <v-btn
                      depressed
                      color="#075525"
                      dark
                      @click="$router.push({ name: 'How to Use' })"
                    >How to Use</v-btn>
                    <v-btn
                      depressed
                      color="#075525"
                      dark
                      @click="$router.push({ name: 'Patient Education' })"
                    >Patient Education</v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer style="min-height: 120px; height: fit-content;" color="rgba(242, 241, 239, 0.7)">
      <v-container fluid mt-0 pt-3>
        <v-layout row wrap>
          <v-flex xs12 md6 text-xs-center>
            <h4 class="headline">Follow Us</h4>

            <div class="text-xs-center">
              <font-awesome-icon
                :icon="['fab', 'facebook-f']"
                size="5x"
                class="mr-3 mt-4"
                style="cursor: pointer; vertical-align: middle;"
              />
              <font-awesome-icon
                :icon="['fab', 'twitter']"
                size="5x"
                class="mr-3 mt-4"
                style="cursor: pointer; vertical-align: middle;"
              />
              <font-awesome-icon
                :icon="['fab', 'instagram']"
                size="5x"
                class="mr-3 mt-4"
                style="cursor: pointer; vertical-align: middle;"
              />
            </div>
          </v-flex>
          <v-flex xs12 md6 text-xs-center>
            <h4 class="headline">Contact Us</h4>
            <div class="text-xs-center">
              <p class="title">
                Tel:
                <small>(02) 356-1234</small>
              </p>
              <p class="title">
                Ph:
                <small>0917-1234-567</small>
                <br>
                <span style="visibility: hidden;">Ph:</span>
                <small>0999-1234-567</small>
                <br>
                <span style="visibility: hidden;">Ph:</span>
                <small>0933-1234-567</small>
              </p>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "PatientGuide"
};
</script>

<style>
</style>
