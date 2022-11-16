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
      MoviesList,
      queryInput: "",
    };
  },
  methods: {
    callApi(url, params) {
      this.config.params.query = this.queryInput;
      axios
        .get(url, params)
        .then((response) => {
          console.log(response);
          this.store.movies = response.data;
          console.log(this.store.movies);
        })
        .catch((err) => {
          console.error(err.message);
          this.store.error = err.message;
        });
    },
  },
  mounted() {
    //this.callApi(this.store.API_URL, config);
  },
};
</script>

<template>
  <input type="search" v-model="queryInput" />
  <button @click="callApi(store.API_URL, config)">Cerca</button>
  <MoviesList />
</template>

<style scoped></style>

<!-- 

1. Collegare l'input al config.query per popolarlo dinamicamente - v-model - ok
2. intercettare l'evento al click sul botttone - @click  e richiamo la funzione callApi() - ok
3. la funzione mi restituisce i dati richiesti e li stampa a schermo nei paragrafi
 -->
