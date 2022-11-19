<script>
import SearchBox from "../SearchBox.vue";
import { store } from "../../store.js";
import NavBar from "../NavBar.vue";

export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
  components: {
    SearchBox,
    NavBar,
  },
};
</script>

<!-- TODO: 

- search icon: hover on it, show input
- add icons: category, user, notifications
-->

<template>
  <header>
    <div class="container">
      <NavBar />
      <SearchBox
        @clickSearch="store.callApi(store.API_URL, store.config)"
        @keySearch="store.callApi(store.API_URL, store.config)"
      />
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: black;
  color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 10vh;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
