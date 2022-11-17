<script>
import { store } from "./store.js";
import AppMain from "./components/layout/AppMain.vue";
import AppHeader from "./components/layout/AppHeader.vue";

export default {
  name: "App",
  data() {
    return {
      store,
    };
  },
  components: {
    AppMain,
    AppHeader,
  },
};
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style scoped></style>
