<script>
import { store } from "./store.js";
import axios from "axios";
import MoviesList from "./components/MoviesList.vue";

export default {
  name: "App",
  data() {
    return {
      store,
      queryInput: "",
    };
  },
  components: {
    MoviesList,
  },
  methods: {
    callApi(url, params) {
      this.store.config.params.query = this.queryInput;
      axios
        .get(url, params)
        .then((response) => {
          console.log(response, "response");
          this.store.movies = response.data.results;
          console.log(store.movies.media_type, "store.moviesarray");
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
  <button @click="callApi(store.API_URL, store.config)">Cerca</button>
  <MoviesList />
</template>

<style scoped></style>

<!-- Con la stessa azione di ricerca
dovremo prendere sia i film che corrispondono alla query, sia le serie tv-->
