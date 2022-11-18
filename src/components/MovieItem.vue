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
    };
  },
};
</script>

<template>
  <div class="col">
    <div class="card" :style="{backgroundImage: `url('https://image.tmdb.org/t/p/w342${movie.poster_path}')`}">
      <div class="card-body">
        <p class="card-title py-2 fs-5">
          Titolo: <span>{{ movie.title || movie.name }}</span>
        </p>
        <p class="card-title py-2" v-show="movie.title !== movie.original_title">
          Titolo originale:
          <span>{{ movie.original_title || movie.original_name }}</span>
        </p>
        <p class="card-text">
          Lingua originale:
          <!-- TODO: Aggiungere bandierine e esportare il tutto in un singolo file -->
          <img
            src="../assets/img/fr-flag.gif"
            alt=""
            v-if="movie.original_language === 'fr'"
          />
          <img
            src="../assets/img/it-flag.gif"
            alt=""
            v-else-if="movie.original_language === 'it'"
          />
          <img
            src="../assets/img/rs-flag.gif"
            alt=""
            v-else-if="movie.original_language === 'ru'"
          />
          <img
            src="../assets/img/us-flag.gif"
            alt=""
            v-else-if="movie.original_language === 'en'"
          />
          <span v-else>{{ movie.original_language }}</span>
        </p>
        <p class="star card-text">
          Voto:
          <font-awesome-icon icon="fa-solid fa-star" v-for="n in starsNumber" />
        </p>
        <p class="card-text">Overview: {{ movie.overview }}</p>
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

.card{
  background-repeat: no-repeat;
  background-size: cover;

  &:hover .card-body{
    background-color:rgba($color: #000000, $alpha: 0.8);

    .card-title, .card-text{
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
  .card-text, .card-title {
    display: none;
  }
  .fa-star {
    color: goldenrod;
  }
}
</style>
