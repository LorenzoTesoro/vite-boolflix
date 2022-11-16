import { reactive } from "vue";

export const store = reactive({
  API_URL: "https://api.themoviedb.org/3/search/movie",
  movies: [],
  error: null,
});

import axios from "axios";

export const config = {
  method: "get",
  url: "https://api.themoviedb.org/3/search/movie",
  params: {
    api_key: "63d68752590a1ed32e2214c0e46f4a63",
    query: "",
  },
};

axios(config)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
