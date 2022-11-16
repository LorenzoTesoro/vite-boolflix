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
      this.store.movies = [];
      this.store.config.params.query = this.queryInput;
      axios
        .get(url, params)
        .then((response) => {
          console.log(response, "response");

          response.data.results.forEach((item) => {
            if (item.media_type === "movie" || item.media_type === "tv") {
              this.store.movies.push(item);
            }
          });

          console.log(response.data.results);
          console.log(this.store.movies, "store.moviesarray");
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
