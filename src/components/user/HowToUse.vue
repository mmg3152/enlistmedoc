<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 md10>
        <v-card color="rgba(242, 241, 239, 0.7)">
          <v-card-title>
            <h4 class="headline">{{ english ? titleE : titleF }}</h4>
            <div style="flex-grow: 1; text-align: right;">
              <v-btn flat @click="english = true;">Enlish</v-btn>
              <v-btn flat @click="english = false;">Filipino</v-btn>
            </div>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-layout row wrap justify-center>
                <v-flex
                  xs12
                  class="pa-3"
                  style="min-height: 300px; border: 1px solid grey; border-radius: 4px;"
                >
                  <p>If you need a refresher on how to use Hospital Consultation System today or you want to sign up for an account, check out this in-depth explanation of how to use the website.</p>

                  <h3 style="text-decoration: underline;">When Signing Up for an Account:</h3>
                  <ul>
                    <li>Visit Hospital Consultation System website</li>
                    <li>On the homepage, click the Sign-Up button and fill out the Account Information that includes Email Address, Password and Verify Password. And for Personal Information fil out the Full Name, Age, Birthday, Gender, Address and Contact Number</li>
                    <li>Press “Register”</li>
                  </ul>

                  <h3
                    class="mt-3"
                    style="text-decoration: underline;"
                  >When Logging In for an Account:</h3>
                  <ul>
                    <li>Visit Hospital Consultation System website</li>
                    <li>On the homepage, click the Login button and fill out the Email Address and Password</li>
                    <li>Press “Login”</li>
                    <li>You will be straightly directed to the dashboard and choose the Department and Doctor the you want to consult for by seeing their schedule or availability</li>
                    <li>The Navigation Bar above has a set of buttons which will help you to enlist</li>
                  </ul>

                  <h3 class="mt-3" style="text-decoration: underline;">Search Doctor:</h3>
                  <ul>
                    <li>This page shows that a user could search for a Doctor or Specialization to choose from by pressing the Submit button. After that. It will be directed to another page where a user can now Enlist for the searched Doctor. Once the Enlist button is pressed, a pop-up message will be shown and say that you are now enlisted and will give the user a Queue Number</li>
                  </ul>

                  <h3 class="mt-3" style="text-decoration: underline;">My Enlistment/ Enlist:</h3>
                  <ul>
                    <li>This page shows all the enlistment that a user has made. The information on this page are Doctor’s Name, Date that a user enlisted, Queue Number and the Status of a user</li>
                  </ul>

                  <h3 class="mt-3" style="text-decoration: underline;">HMO:</h3>
                  <ul>
                    <li>
                      This page shows that a user could use their Health Maintenance Organization by simply, filling out the name of their Health card and their Doctors’ Name and lastly uploading the image file of their HMO then pressing the Submit button.
                      <br>
                      <b>Note:</b>
                      <small>The Health card (HMO) must be accredited by the Doctor.</small>
                    </li>
                  </ul>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HowToUse",
  data() {
    return {
      english: true,
      titleE: "How to Use",
      titleF: "Paano Gamitin"
    };
  }
};
</script>

<style>
</style>
