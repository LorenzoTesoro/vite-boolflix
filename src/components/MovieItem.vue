<script>
export default {
  name: "MovieItem",
  props: {
    movie: Object,
  },
};
</script>

<template>
  <li>
    <p>Titolo: {{ movie.title }}</p>
    <p>Titolo originale: {{ movie.original_title }}</p>
    <p>Lingua originale: {{ movie.original_language }}</p>
    <p>Voto medio: {{ movie.vote_average }}</p>
  </li>
</template>
