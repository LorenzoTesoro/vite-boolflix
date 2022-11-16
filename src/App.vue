<script>
import { config, store } from "./store.js";
import axios from "axios";
import MoviesList from "./components/MoviesList.vue";

export default {
  name: "App",
  data() {
    return {
      store,
      config,
      queryInput: "",
    };
  },
  components: {
    MoviesList,
  },
  methods: {
    callApi(url, params) {
      this.config.params.query = this.queryInput;
      axios
        .get(url, params)
        .then((response) => {
          console.log(response, "response");
          this.store.movies = response.data.results;
          console.log(response.data, "response.data");
          console.log(store.movies, "store.moviesarray");
        })
        .catch((err) => {
          console.error(err.message);
          this.store.error = err.message;
        });
    },
  },
};
</script>

<template>
  <input type="search" v-model="queryInput" />
  <button @click="callApi(store.API_URL, config)">Cerca</button>
  <MoviesList />
</template>

<style scoped></style>
