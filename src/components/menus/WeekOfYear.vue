<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <div class="display-1 cursor-menu" v-on="on">
          Week {{ weekYear.week }}
          <span class="text--secondary">{{ weekYear.year }}</span>
        </div>
      </template>

      <v-list class="px-2" @click.native.stop>
        <div class="title">Select the week of year</div>
        <v-divider class="mt-2"></v-divider>
        <v-row no-gutters align="center">
          <div style="width: 130px">
            <v-select
              v-model="week"
              class="px-1"
              :items="weeks"
              menu-props="auto"
              label="Week"
            ></v-select>
          </div>
          <div style="width:130px">
            <v-select
              v-model="year"
              class="px-1"
              :items="years"
              menu-props="auto"
              label="Year"
            ></v-select>
          </div>
          <div>
            <v-btn class="my-0 primary" @click="submit">Ok</v-btn>
          </div>
        </v-row>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    weekYear: Object
  },
  data() {
    return {
      weeks: [],
      years: [],
      week: null,
      year: null
    };
  },
  watch: {
    weekYear({ week, year }) {
      this.week = week;
      this.year = year;
    }
  },
  created() {
    for (let i = 1; i <= 52; i++) {
      this.weeks.push(i);
    }
    for (let i = 2000; i <= 2100; i++) {
      this.years.push(i);
    }
  },
  mounted() {
    this.week = this.weekYear.week;
    this.year = this.weekYear.year;
  },
  methods: {
    submit() {
      const data = {
        week: this.week,
        year: this.year
      };
      this.$emit("submit", data);
      this.menu = false;
    }
  }
};
</script>
<style scoped>
.cursor-menu {
  cursor: pointer;
}
</style>
