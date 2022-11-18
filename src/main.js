import { createApp } from "vue";
import "./assets/style.scss";
import App from "./App.vue";

import { library } from "../node_modules/@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/vue-fontawesome";
import {
  faStar,
  faMagnifyingGlass,
} from "../node_modules/@fortawesome/free-solid-svg-icons";

library.add(faStar, faMagnifyingGlass);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
