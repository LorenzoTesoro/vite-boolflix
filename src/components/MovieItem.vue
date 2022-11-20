<script>
import { store } from "../store.js";
import axios from "axios";

export default {
  name: "MovieItem",
  props: {
    movie: Object,
    serie: Object,
  },
  data() {
    return {
      store,
      genres: [],
      actors: [],
      starsNumber: Math.ceil(Math.round(this.movie.vote_average / 2)),
      flags: ["it", "fr", "en", "rs"],
    };
  },
  methods: {
    generateFlag(lang) {
      if (this.flags.includes(lang)) {
        return new URL(`../assets/img/${lang}.gif`, import.meta.url).href;
      }
    },
    is_a_flag(lang) {
      if (this.flags.includes(lang)) {
        return lang;
      }
    },
    callCastGenresApi(id) {
      const url = `${store.urls.cast_url}/${id}/credits?api_key=${store.config.params.api_key}`;

      this.actors = [];
      this.genres = [];

      axios
        .get(url)
        .then((response) => {
          response.data.cast.forEach((actor) => {
            if (this.actors.length < 5) {
              this.actors.push(actor);
            }
          });
        })
        .catch((err) => {
          console.error(err.message);
          this.store.error = err.message;
        });

      const genres_url = `${store.urls.genres_url}?api_key=${store.config.params.api_key}`;

      axios
        .get(genres_url)
        .then((response) => {
          response.data.genres.forEach((genre) => {
            if (this.genres.length < 4) {
              this.genres.push(genre.name);
            }
          });
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
  <div class="col">
    <div
      class="card"
      :style="{
        backgroundImage: `url('https://image.tmdb.org/t/p/w342${movie.poster_path}')`,
      }"
    >
      <div class="card-body" @click="callCastGenresApi(movie.id)">
        <h5 class="card-title py-2 fs-5">
          Titolo: {{ movie.title || movie.name }}
        </h5>
        <h5
          class="card-title py-2"
          v-show="movie.title !== movie.original_title"
        >
          Titolo originale:
          {{ movie.original_title || movie.original_name }}
        </h5>
        <p class="card-text">
          Lingua originale:
          <img
            :src="generateFlag(movie.original_language)"
            alt=""
            v-if="is_a_flag(movie.original_language)"
          />
          <span v-else>{{ movie.original_language }}</span>
        </p>
        <div class="star card-text">
          Voto:
          <font-awesome-icon icon="fa-solid fa-star" v-for="n in starsNumber" />
        </div>
        <p class="card-text pt-3">Overview: {{ movie.overview }}</p>
        <div class="movie_genres py-2">
          Genere:
          <span class="" v-for="genre in genres">{{ genre }},</span>
        </div>
        <div class="movie_actors">
          Attori:
          <span class="" v-for="actor in actors"> {{ actor.name }}, </span>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- TODO:
- Milestone 6:
  Creare una lista di generi richiedendo quelli disponibili all'API e creare dei filtri con i
  generi tv e movie per mostrare/nascondere le schede ottenute con la ricerca.
-->
