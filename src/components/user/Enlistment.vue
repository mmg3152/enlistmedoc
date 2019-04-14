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
                      <td>{{ props.item.name }}</td>
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
  </v-container>
</template>

<script>
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
          name: "Dr. Diego Uy",
          date: "04/18/2019",
          queue: "6",
          status: "CANCEL"
        },
        {
          name: "Dr. Renn Remula",
          date: "02/08/2019",
          queue: "2",
          status: "COMPLETED"
        }
      ]
    };
  },
  methods: {
    showConfirmation() {
      this.$swal({
        title: "Are you sure you want to cancel?",
        type: "warning",
        showCancelButton: true
      });
    }
  }
};
</script>

<style>
</style>
