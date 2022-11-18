<script>
export default {
  name: "MovieItem",
  props: {
    movie: Object,
    serie: Object,
  },
  data() {
    return {
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
      <div class="card-body">
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
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
p img {
  width: 25px;
  height: 10px;
  padding-left: 0.5rem;
}

.card {
  background-repeat: no-repeat;
  background-size: cover;

  &:hover .card-body {
    background-color: rgba($color: #000000, $alpha: 0.8);

    .card-title,
    .card-text {
      display: block;
    }
  }
}

.card-body {
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  padding-inline: 1rem;
  height: 400px;
  overflow-y: hidden;
  font-size: 0.8rem;
  padding-top: 1rem;
  .card-text,
  .card-title {
    display: none;
  }
  .fa-star {
    color: goldenrod;
  }
}
</style>
