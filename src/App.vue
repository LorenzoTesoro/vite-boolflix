<script>
import { config, store } from "./store.js";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      store,
      title: "",
      originalTitle: "",
      language: "",
      mark: "",
    };
  },
  methods: {
    callApi(url, params) {
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
    this.callApi(this.store.API_URL, config);
  },
};
</script>

<template>
  <input type="search" />
  <button>Cerca</button>
  <p>{{ title }}</p>
  <p>{{ originalTitle }}</p>
  <p>{{ language }}</p>
  <p>{{ mark }}</p>
</template>

<style scoped></style>

<!-- 

1. Collegare l'input al config.query per popolarlo dinamicamente - v-model
2. intercettare l'evento al click sul botttone - @click  e richiamo la funzione callApi()
3. la funzione mi restituisce i dati richiesti e li stampa a schermo nei paragrafi
 -->
