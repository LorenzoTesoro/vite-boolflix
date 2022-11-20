<script>
import { store } from "../store.js";

export default {
  name: "SearchBox",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="searchbox">
    <input
      class="rounded"
      type="search"
      @keypress.enter="$emit('keySearch')"
      v-model="store.config.params.query"
      placeholder="Search"
    />
    <button class="mx-2" @click="$emit('clickSearch')">
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="search-icon"
      />
    </button>
  </div>
</template>

<!-- Todo: aggiungere icone user, notifiche, user_category -->
