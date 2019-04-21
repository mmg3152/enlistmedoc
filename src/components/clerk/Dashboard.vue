<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-card>
          <v-container grid-list-lg px-0>
            <v-layout row wrap>
              <v-flex xs12>
                <v-data-table :headers="headers" :items="desserts" class="elevation-0">
                  <template v-slot:items="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.doctor }}</td>
                    <td class="text-xs-right">{{ props.item.card }}</td>
                    <td class="text-xs-right">
                      <img
                        src="../../assets/x.jpg"
                        width="70"
                        height="40"
                        style="vertical-align: middle;"
                        @click="showImage = true;"
                      >
                    </td>
                    <td class="text-xs-right">{{ props.item.birthday }}</td>
                    <td class="text-xs-right">{{ props.item.number }}</td>
                    <td class="text-xs-right">
                      <v-btn flat>Accept</v-btn>
                      <v-btn flat>Decline</v-btn>
                    </td>
                  </template>
                </v-data-table>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="showImage" width="350">
      <v-card>
        <v-card-text class="text-xs-center">
          <img
            src="../../assets/x.jpg"
            width="300"
            height="300"
            style="vertical-align: middle;"
            @click="showImage = true;"
          >
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "ClerkDashboard",
  data() {
    return {
      headers: [
        {
          text: "Patient Name",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Doctor", align: "right", value: "doctor" },
        { text: "Health Card", align: "right", value: "card" },
        { text: "Health Card Image", align: "right", value: "cardImage" },
        { text: "Birthday", align: "right", value: "birthday" },
        { text: "Contact Number", align: "right", value: "number" },
        { text: "Status", align: "right", value: "status" }
      ],
      desserts: [
        {
          name: "Juan Dela Cruz",
          doctor: "Dr. Diego Uy",
          card: "Maxicare",
          cardImage: "maxicare",
          birthday: "01/01/1990",
          number: "09354495399"
        }
      ],
      showImage: false
    };
  }
};
</script>

<style>
</style>
