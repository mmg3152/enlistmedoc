<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h4 class="headline">View Users</h4>
          </v-card-title>
          <v-data-table :headers="headers" :items="users">
            <template v-slot:items="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.type }}</td>
              <td class="text-xs-right">{{ props.item.created_at }}</td>
              <td class="text-xs-right">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark v-on="on">Actions</v-btn>
                  </template>
                  <v-list>
                    <v-list-tile @click>
                      <v-list-tile-title>Edit</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="confirmDelete">
                      <v-list-tile-title>Delete</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
              </td>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "ViewUsers",
  data() {
    return {
      headers: [
        {
          text: "name",
          align: "left",
          sortable: false,
          value: "name"
        },
        {
          text: "Type",
          align: "right",
          sortable: true,
          value: "type"
        },
        {
          text: "Date Added",
          align: "right",
          sortable: false,
          value: "created_at"
        },
        {
          text: "Actions",
          align: "right",
          sortable: false,
          value: "id"
        }
      ],
      users: [
        {
          id: 2,
          name: "Aguilar Jestony",
          type: "Patient",
          created_at: "April 15 2019"
        },
        {
          id: 3,
          name: "Sabio Dwight",
          type: "Clerk",
          created_at: "April 15 2019"
        },
        {
          id: 4,
          name: "Smith Clara",
          type: "Admin",
          created_at: "April 15 2019"
        },
        {
          id: 5,
          name: "Bautista Kendall",
          type: "Admin",
          created_at: "April 15 2019"
        }
      ]
    };
  },
  methods: {
    confirmDelete() {
      this.$swal({
        title: "Are you sure you want to delete this user?",
        type: "warning",
        showCancelButton: true
      });
    }
  }
};
</script>

<style>
</style>
