<template>
  <v-container mt-5>
    <v-layout row wrap justify-center>
      <v-flex xs12 md4>
        <v-card color="rgba(242, 241, 239, 0.7)">
          <v-container>
            <v-layout row wrap>
              <v-flex xs12>
                <h2>SEARCH</h2>
                <v-text-field label="Doctors Name" type="text" required></v-text-field>
                <div>
                  <span my-2 class="d-block text-sm-center or">OR</span>
                </div>
                <v-select :items="items" label="Specialization"></v-select>
              </v-flex>
              <v-flex xs12>
                <v-btn
                  block
                  depressed
                  dark
                  color="#075525"
                  @click="$router.push({ name: 'Search Result'})"
                >Submit</v-btn>
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
  name: "SearchDoctor",
  data: () => ({
    items: [
      "Allergists/Immunologists",
      "Anesthesiologists",
      "Cardiologists",
      "Colon and Rectal Surgeons",
      "Critical Care Medicine Specialists"
    ]
  })
};
</script>

<style scoped>
.or {
  font-size: 18px;
  font-weight: bold;
}
.or::before,
.or::after {
  display: inline-block;
  content: "";
  border-top: 2px solid black;
  width: 37%;
  margin: 0 1rem;
  transform: translateY(-0.3rem);
}
</style>
