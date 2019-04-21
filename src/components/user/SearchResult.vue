<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 mb-3>
        <div
          class="white d-inline block pl-0 pr-3 py-2"
          style="cursor: pointer;"
          @click="$router.push('/user/search')"
        >
          <v-icon light style="vertical-align: middle;">keyboard_arrow_left</v-icon>
          <h4
            class="title d-inline-block"
            style="text-decoration: underline; vertical-align: middle;"
          >Back to Search</h4>
        </div>
      </v-flex>
      <v-flex xs12>
        <v-container class="pa-0" grid-list-lg>
          <v-layout row wrap>
            <v-flex xs12 md4>
              <v-card>
                <v-card-text>
                  <v-container class="pa-0">
                    <v-layout row wrap align-center>
                      <v-flex xs12 md4>
                        <img
                          src="https://via.placeholder.com/100"
                          width="100"
                          height="100"
                          style="vertical-align: middle;"
                        >
                      </v-flex>
                      <v-flex xs12 md8>
                        <div class="d-inline-block text-xs-center">
                          <h4>DR. DIEGO UY</h4>
                          <span>ORTHOPEDICS - Sports Medicine</span>
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-text>
                  <v-tabs grow>
                    <v-tab v-for="tab in tabs" :key="tab" ripple>{{ tab }}</v-tab>
                    <v-tab-item v-for="(tab, index) in tabs" :key="tab">
                      <v-card flat>
                        <template v-if="index === 0">
                          <v-card-text>
                            <v-container class="pa-0">
                              <v-layout row wrap align-center justify-center>
                                <v-flex xs12 md5>
                                  <img
                                    src="https://via.placeholder.com/100"
                                    width="100"
                                    height="100"
                                    style="vertical-align: middle;"
                                  >
                                </v-flex>
                                <v-flex xs12 md5>
                                  <img
                                    src="https://via.placeholder.com/100"
                                    width="100"
                                    height="100"
                                    style="vertical-align: middle;"
                                  >
                                </v-flex>
                                <v-flex xs12>
                                  <div class="d-inline-block text-xs-center">
                                    <span>Deals with prevention and treatment of any related sport and exercise</span>
                                  </div>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-text>
                        </template>
                        <template v-if="index === 1">
                          <v-card-text>
                            <v-container pa-0>
                              <v-layout row wrap>
                                <v-flex xs12 md4 text-xs-center>
                                  <p>Day</p>
                                  <p>Tuesday</p>
                                  <p>Thursday</p>
                                  <p>Saturday</p>
                                </v-flex>
                                <v-flex xs12 md4 text-xs-center>
                                  <p>Time</p>
                                  <p>2:00 - 4:00 pm</p>
                                  <p>2:00 - 4:00 pm</p>
                                  <p>2:00 - 5:00 pm</p>
                                </v-flex>
                                <v-flex xs12 md4 text-xs-center>
                                  <p>Room</p>
                                  <p>2104</p>
                                  <p>2104</p>
                                  <p>2104</p>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-text>
                        </template>
                        <template v-if="index === 2">
                          <v-card-text>
                            <v-container pa-0>
                              <v-layout row wrap>
                                <v-flex xs12>
                                  <p class="mb-0">Asian Life & General Assurance Corp</p>
                                  <p class="mb-0">Cocolife Healthcare</p>
                                  <p class="mb-0">Eastwest</p>
                                  <p class="mb-0">Fortune Medicare</p>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-text>
                        </template>
                        <template v-if="index === 3">
                          <v-card-text>
                            <v-container pa-0>
                              <v-layout row wrap>
                                <v-flex xs12 text-xs-center>
                                  <h2
                                    class="mb-4"
                                    style="text-decoration: underline;"
                                  >20 PATIENTS ON QUEUE</h2>

                                  <h1>NOW SERVING #6</h1>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-text>
                        </template>
                        <template v-if="index === 4">
                          <v-card-text>
                            <v-container pa-0>
                              <v-layout row wrap>
                                <v-flex xs12 text-xs-center>
                                  <h3>No clinic on April 9, 2019 due to Araw ng Kagitingan. Clinic will resume on April 10, 2019</h3>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-text>
                        </template>
                        <template v-if="isAuthenticated()">
                          <v-card-actions class="pb-0">
                            <v-spacer></v-spacer>
                            <v-btn depressed color="#075525" dark @click="enlist">Enlist</v-btn>
                            <v-spacer></v-spacer>
                          </v-card-actions>
                        </template>
                      </v-card>
                    </v-tab-item>
                  </v-tabs>
                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex xs12 md4>
              <v-card>
                <v-card-text>
                  <v-container class="pa-0">
                    <v-layout row wrap align-center>
                      <v-flex xs12 md4>
                        <img
                          src="https://via.placeholder.com/100"
                          width="100"
                          height="100"
                          style="vertical-align: middle;"
                        >
                      </v-flex>
                      <v-flex xs12 md8>
                        <div class="d-inline-block text-xs-center">
                          <h4>DR. GENER CRUZ</h4>
                          <span>ORTHOPEDICS - Hips and Knee Surgery</span>
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-text>
                  <v-tabs grow>
                    <v-tab v-for="tab in tabs" :key="tab" ripple>{{ tab }}</v-tab>
                    <v-tab-item v-for="(tab, index) in tabs" :key="tab">
                      <v-card flat>
                        <template v-if="index === 0">
                          <v-card-text>
                            <v-container class="pa-0">
                              <v-layout row wrap align-center justify-center>
                                <v-flex xs12 md5>
                                  <img
                                    src="https://via.placeholder.com/100"
                                    width="100"
                                    height="100"
                                    style="vertical-align: middle;"
                                  >
                                </v-flex>
                                <v-flex xs12 md5>
                                  <img
                                    src="https://via.placeholder.com/100"
                                    width="100"
                                    height="100"
                                    style="vertical-align: middle;"
                                  >
                                </v-flex>
                                <v-flex xs12>
                                  <div class="d-inline-block text-xs-center">
                                    <span>Deals with prevention and treatment of any related sport and exercise</span>
                                  </div>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-text>
                        </template>
                        <template v-if="index === 1">
                          <v-card-text>
                            <v-container pa-0>
                              <v-layout row wrap>
                                <v-flex xs12 md4 text-xs-center>
                                  <p>Day</p>
                                  <p>Tuesday</p>
                                  <p>Thursday</p>
                                  <p>Saturday</p>
                                </v-flex>
                                <v-flex xs12 md4 text-xs-center>
                                  <p>Time</p>
                                  <p>2:00 - 4:00 pm</p>
                                  <p>2:00 - 4:00 pm</p>
                                  <p>2:00 - 5:00 pm</p>
                                </v-flex>
                                <v-flex xs12 md4 text-xs-center>
                                  <p>Room</p>
                                  <p>2104</p>
                                  <p>2104</p>
                                  <p>2104</p>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-text>
                        </template>
                        <template v-if="index === 2">
                          <v-card-text>
                            <v-container pa-0>
                              <v-layout row wrap>
                                <v-flex xs12>
                                  <p class="mb-0">Asian Life & General Assurance Corp</p>
                                  <p class="mb-0">Cocolife Healthcare</p>
                                  <p class="mb-0">Eastwest</p>
                                  <p class="mb-0">Fortune Medicare</p>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-text>
                        </template>
                        <template v-if="index === 3">
                          <v-card-text>
                            <v-container pa-0>
                              <v-layout row wrap>
                                <v-flex xs12 text-xs-center>
                                  <h2
                                    class="mb-4"
                                    style="text-decoration: underline;"
                                  >20 PATIENTS ON QUEUE</h2>

                                  <h1>NOW SERVING #6</h1>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-text>
                        </template>
                        <template v-if="index === 4">
                          <v-card-text>
                            <v-container pa-0>
                              <v-layout row wrap>
                                <v-flex xs12 text-xs-center>
                                  <h3>No clinic on April 9, 2019 due to Araw ng Kagitingan. Clinic will resume on April 10, 2019</h3>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-text>
                        </template>
                        <template v-if="isAuthenticated()">
                          <v-card-actions class="pb-0">
                            <v-spacer></v-spacer>
                            <v-btn depressed color="#075525" dark @click="enlist">Enlist</v-btn>
                            <v-spacer></v-spacer>
                          </v-card-actions>
                        </template>
                      </v-card>
                    </v-tab-item>
                  </v-tabs>
                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex xs12 md4>
              <v-card>
                <v-card-text>
                  <v-container class="pa-0">
                    <v-layout row wrap align-center>
                      <v-flex xs12 md4>
                        <img
                          src="https://via.placeholder.com/100"
                          width="100"
                          height="100"
                          style="vertical-align: middle;"
                        >
                      </v-flex>
                      <v-flex xs12 md8>
                        <div class="d-inline-block text-xs-center">
                          <h4>DR. HANNAH DAILO</h4>
                          <span>ORTHOPEDICS - Trauma Surgery</span>
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-text>
                  <v-tabs grow>
                    <v-tab v-for="tab in tabs" :key="tab" ripple>{{ tab }}</v-tab>
                    <v-tab-item v-for="(tab, index) in tabs" :key="tab">
                      <v-card flat>
                        <template v-if="index === 0">
                          <v-card-text>
                            <v-container class="pa-0">
                              <v-layout row wrap align-center justify-center>
                                <v-flex xs12 md5>
                                  <img
                                    src="https://via.placeholder.com/100"
                                    width="100"
                                    height="100"
                                    style="vertical-align: middle;"
                                  >
                                </v-flex>
                                <v-flex xs12 md5>
                                  <img
                                    src="https://via.placeholder.com/100"
                                    width="100"
                                    height="100"
                                    style="vertical-align: middle;"
                                  >
                                </v-flex>
                                <v-flex xs12>
                                  <div class="d-inline-block text-xs-center">
                                    <span>Deals with prevention and treatment of any related sport and exercise</span>
                                  </div>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-text>
                        </template>
                        <template v-if="index === 1">
                          <v-card-text>
                            <v-container pa-0>
                              <v-layout row wrap>
                                <v-flex xs12 md4 text-xs-center>
                                  <p>Day</p>
                                  <p>Tuesday</p>
                                  <p>Thursday</p>
                                  <p>Saturday</p>
                                </v-flex>
                                <v-flex xs12 md4 text-xs-center>
                                  <p>Time</p>
                                  <p>2:00 - 4:00 pm</p>
                                  <p>2:00 - 4:00 pm</p>
                                  <p>2:00 - 5:00 pm</p>
                                </v-flex>
                                <v-flex xs12 md4 text-xs-center>
                                  <p>Room</p>
                                  <p>2104</p>
                                  <p>2104</p>
                                  <p>2104</p>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-text>
                        </template>
                        <template v-if="index === 2">
                          <v-card-text>
                            <v-container pa-0>
                              <v-layout row wrap>
                                <v-flex xs12>
                                  <p class="mb-0">Asian Life & General Assurance Corp</p>
                                  <p class="mb-0">Cocolife Healthcare</p>
                                  <p class="mb-0">Eastwest</p>
                                  <p class="mb-0">Fortune Medicare</p>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-text>
                        </template>
                        <template v-if="index === 3">
                          <v-card-text>
                            <v-container pa-0>
                              <v-layout row wrap>
                                <v-flex xs12 text-xs-center>
                                  <h2
                                    class="mb-4"
                                    style="text-decoration: underline;"
                                  >20 PATIENTS ON QUEUE</h2>

                                  <h1>NOW SERVING #6</h1>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-text>
                        </template>
                        <template v-if="index === 4">
                          <v-card-text>
                            <v-container pa-0>
                              <v-layout row wrap>
                                <v-flex xs12 text-xs-center>
                                  <h3>No clinic on April 9, 2019 due to Araw ng Kagitingan. Clinic will resume on April 10, 2019</h3>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-text>
                        </template>
                        <template v-if="isAuthenticated()">
                          <v-card-actions class="pb-0">
                            <v-spacer></v-spacer>
                            <v-btn depressed color="#075525" dark @click="enlist">Enlist</v-btn>
                            <v-spacer></v-spacer>
                          </v-card-actions>
                        </template>
                      </v-card>
                    </v-tab-item>
                  </v-tabs>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { getCookie } from "../../helper";
export default {
  name: "SearchResult",
  data() {
    return {
      tabs: ["ABOUT", "SCHEDULE", "HMO", "QUEUE", "UPDATES"],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  methods: {
    enlist() {
      this.$swal({
        title: "You are now enlisted. Your queue number is #21",
        type: "info",
        confirmButtonColor: "#075525",
        confirmButtonText: "Close",
        allowOutsideClick: false
      });
    },
    isAuthenticated() {
      console.log(getCookie("type"));
      return getCookie("type");
    }
  }
};
</script>

<style>
</style>
