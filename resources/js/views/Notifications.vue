<template>
  <v-app v-show="notifications.length">
    <v-card
      class="mx-auto mt-6"
      v-for="(notification, i) in notifications"
      v-model="page"
      :key="i"
      shaped
      outlined
      width="90%"
    >
      <v-card-text>
        <p class="display-1" color="blue darken-1">{{ notification.title }}</p>
        <p class="mt-n3">{{ formatDate(notification.created) }}</p>
        <div class="text--primary" v-html="notification.introtext"></div>
      </v-card-text>
      <v-card-actions class="float-right">
        <v-btn text color="deep-purple accent-4">Opširnije</v-btn>
      </v-card-actions>
    </v-card>

    <v-pagination v-model="page" :length="Math.ceil(notifications.length/perPage)"></v-pagination>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    notifications: [],
    api: "http://localhost:8000/api/articles",
    months: [
      "Siječanj",
      "Veljača",
      "Ožujak",
      "Travanj",
      "Svibanj",
      "Lipanj",
      "Srpanj",
      "Kolovoz",
      "Rujan",
      "Listopad",
      "Studeni",
      "Prosinac"
    ],
    days: [
      "Nedjelja",
      "Ponedjeljak",
      "Utorak",
      "Srijeda",
      "Četvrtak",
      "Petak",
      "Subota"
    ],
    page: 1,
    perPage: 8
  }),
  methods: {
    formatDate(date) {
      return `
        ${this.days[new Date(date).getDay()]},
        ${new Date(date).getDate()}
        ${this.months[new Date(date).getMonth()]}
        ${new Date(date).getFullYear()}
        ${("0" + new Date(date).getHours()).slice(-2)}:${(
        "0" + new Date(date).getMinutes()
      ).slice(-2)}
      `;
    },
    fetchData() {
      this.axios.get(this.api).then(response => {
        this.notifications = response.data;
      });
    }
  },
  computed: {
    visiblePages() {
      window.scrollTo(0, 0);
      return this.notifications.slice(
        (this.page - 1) * this.perPage,
        this.perPage * this.page
      );
    }
  },
  created() {
    this.fetchData();
  }
};
</script>
<style>
#app .v-card--shaped {
  border-radius: 24px 4px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
