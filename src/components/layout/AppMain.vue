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
main {
  padding: 2rem;
  background-color: rgb(41, 37, 37);
  color: white;
}
</style>

<!-- tODO: FIX MAIN HEIGHT -->
