<script>
import SearchBox from "../SearchBox.vue";

export default {
  name: "AppHeader",
  components: {
    SearchBox,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <h1>ciao</h1>
  <SearchBox />
</template>

<style lang="scss" scoped></style>
