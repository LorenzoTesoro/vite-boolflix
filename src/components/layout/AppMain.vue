<script>
import MoviesList from "../MoviesList.vue";

export default {
  name: "AppMain",
  components: {
    MoviesList,
  },
};
</script>

<template>
  <main>
    <div class="container">
      <MoviesList />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.container {
  padding-bottom: 1rem;
}
main {
  padding: 2rem;
  color: white;
}
</style>
