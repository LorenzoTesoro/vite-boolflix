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
