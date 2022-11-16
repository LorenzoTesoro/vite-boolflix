<script>
export default {
  name: "MovieItem",
  props: {
    movie: Object,
    serie: Object,
  },
};
</script>

<template>
  <li>
    <p>Titolo: {{ movie.title || movie.name }}</p>
    <p>Titolo originale: {{ movie.original_title || movie.original_name }}</p>
    <p>
      Lingua originale:
      <img
        src="../img/fr-flag.gif"
        alt=""
        v-if="movie.original_language === 'fr'"
      />
      <img
        src="../img/it-flag.gif"
        alt=""
        v-else-if="movie.original_language === 'it'"
      />
      <img
        src="../img/rs-flag.gif"
        alt=""
        v-else-if="movie.original_language === 'ru'"
      />
      <img
        src="../img/us-flag.gif"
        alt=""
        v-else-if="movie.original_language === 'en'"
      />
      <span v-else>{{ movie.original_language }}</span>
    </p>
    <p>Voto medio: {{ movie.vote_average }}</p>
  </li>
</template>

<style lang="scss" scoped>
img {
  width: 20px;
  aspect-ratio: 1;
}
</style>
