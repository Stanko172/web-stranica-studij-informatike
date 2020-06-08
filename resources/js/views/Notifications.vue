<template>
  <v-container class="container-margin">
    <v-app>
      <v-skeleton-loader
        :loading="loading"
        type="card"
        transition="scale-transition"
        v-for="(notification, i) in visiblePages"
        :key="i"
      >
        <v-hover
          v-slot:default="{ hover }"
          close-delay="80"
        >
          <v-card
            class="mx-auto mt-6"
            v-model="page"
            shaped
            outlined
            width="90%"
            :elevation="hover ? 8 : 2"
          >
            <v-card-text>
              <p class="display-1" color="blue darken-1">{{ notification.title }}</p>
              <p class="mt-n3">{{ formatDate(notification.created) }}</p>
              <div class="text--primary" v-html="notification.introtext"></div>
              <div class="d-flex flex-row-reverse">
                <v-btn text class="float-right" color="deep-purple accent-4">Opširnije</v-btn>
              </div>

            </v-card-text>
          </v-card>
        </v-hover>
      </v-skeleton-loader>

      <v-pagination
        v-model="page"
        :length="Math.ceil(notifications.length/perPage)"
        class="pagination-margin"
      ></v-pagination>
    </v-app>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    notifications: [{}, {}, {}, {}, {}, {}],
    loading: true,
    api: 'http://localhost:8000/api/articles',
    months: [
      'Siječanj',
      'Veljača',
      'Ožujak',
      'Travanj',
      'Svibanj',
      'Lipanj',
      'Srpanj',
      'Kolovoz',
      'Rujan',
      'Listopad',
      'Studeni',
      'Prosinac'
    ],
    days: [
      'Nedjelja',
      'Ponedjeljak',
      'Utorak',
      'Srijeda',
      'Četvrtak',
      'Petak',
      'Subota'
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
        ${('0' + new Date(date).getHours()).slice(-2)}:${(
        '0' + new Date(date).getMinutes()
      ).slice(-2)}
      `;
    },
    fetchData() {
      this.axios.get(this.api).then(response => {
        this.notifications = response.data;
        this.notifications = response.data;
        this.notifications = response.data;
        this.notifications = response.data;
        this.notifications = response.data;
        this.loading = false;
      });
    },
    scrollToTop() {
      this.$vuetify.goTo(0, {
        duration: 1000,
        offset: 0,
        easing: 'easeInOutCubic'
      });
    }
  },
  computed: {
    visiblePages() {
      this.scrollToTop();
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
#app .pagination-margin {
  margin: 32px 0 70px 0;
}
</style>