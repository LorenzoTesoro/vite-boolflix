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
    <p>{{ movie.title }}</p>
    <p>{{ movie.original_title }}</p>
    <p>{{ movie.original_language }}</p>
    <p>{{ movie.vote_average }}</p>
  </li>
</template>
