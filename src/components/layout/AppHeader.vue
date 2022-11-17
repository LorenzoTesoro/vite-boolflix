<script>
import SearchBox from "../SearchBox.vue";
import { store } from "../../store.js";

export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
  components: {
    SearchBox,
  },
};
</script>

<template>
  <header>
    <div class="container">
      <h1 class="text-uppercase">Boolfix</h1>
      <!-- /. logo -->
      <SearchBox @searchMovie="store.callApi(store.API_URL, store.config)" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: black;
  color: white;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
