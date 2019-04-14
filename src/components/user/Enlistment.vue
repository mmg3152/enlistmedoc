<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h4 class="headline">MY ENLISTMENT</h4>
          </v-card-title>
          <v-container grid-list-lg px-0>
            <v-layout row wrap>
              <v-flex xs12>
                <template v-if="enlistments.length > 1">
                  <v-data-table :headers="headers" :items="enlistments" class="elevation-0">
                    <template v-slot:items="props">
                      <td
                        style="cursor: pointer;"
                        @click="showInformation(props.item.id)"
                      >{{ props.item.name }}</td>
                      <td class="text-xs-right">{{ props.item.date }}</td>
                      <td class="text-xs-right">{{ props.item.queue }}</td>
                      <td class="text-xs-right">
                        <v-btn
                          flat
                          :disabled="props.item.status === 'COMPLETED'"
                          @click="showConfirmation"
                        >{{ props.item.status }}</v-btn>
                      </td>
                    </template>
                  </v-data-table>
                </template>
                <template v-else>
                  <div class="pa-4">
                    <h4 class="headline">
                      You have not enlisted yet for any schedule?
                      <span
                        @click="$router.push({ name: 'User'})"
                        style="cursor: pointer; text-decoration: underline;"
                      >Enlist here</span>
                    </h4>
                  </div>
                </template>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialogInformation" persistent width="500">
      <template v-if="selectedInformation">
        <v-card>
          <v-card-title>
            <div>
              <span>{{ this.selectedInformation.name }}</span>
              <br>
              <span class="grey--text">{{ selectedInformation.department }}</span>
            </div>
          </v-card-title>

          <v-card-text>
            <v-card class="text-xs-center serving-card" elevation="0" style="height: 250px">
              <p>NOW SERVING</p>
              <p>{{ selectedInformation.serving }}</p>
            </v-card>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" depressed @click="dialogInformation = false;">Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-container>
</template>

<script>
import find from "lodash/find";

export default {
  name: "Enlistment",
  data() {
    return {
      headers: [
        {
          text: "Doctors Name",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Date", align: "right", value: "date" },
        { text: "Queue Number", align: "right", value: "queue" },
        { text: "Status", align: "right", value: "status" }
      ],
      enlistments: [
        {
          id: 1,
          name: "Dr. Diego Uy",
          department: "Sample 1",
          date: "04/18/2019",
          queue: "6",
          serving: "3",
          status: "CANCEL"
        },
        {
          id: 2,
          name: "Dr. Renn Remula",
          department: "Sample 2",
          date: "02/08/2019",
          queue: "2",
          serving: "1",
          status: "COMPLETED"
        }
      ],
      dialogInformation: false,
      selectedInformation: null
    };
  },
  methods: {
    showConfirmation() {
      this.$swal({
        title: "Are you sure you want to cancel?",
        type: "warning",
        showCancelButton: true
      });
    },
    showInformation(id) {
      const x = find(this.enlistments, { id: id });

      this.selectedInformation = x;
      this.dialogInformation = true;
    }
  }
};
</script>

<style>
.serving-card p:first-child {
  font-size: 24px;
  font-weight: bold;
}
.serving-card p:nth-child(2) {
  font-size: 8rem;
  font-weight: bold;
}
</style>
