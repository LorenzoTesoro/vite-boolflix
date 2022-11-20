import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  urls: {
    base_url: "https://api.themoviedb.org/3/search/multi",
    cast_url: "https://api.themoviedb.org/3/movie",
    genres_url: "https://api.themoviedb.org/3/genre/movie/list",
  },
  ids: [],
  movies: [],
  error: null,
  config: {
    method: "get",
    params: {
      api_key: "63d68752590a1ed32e2214c0e46f4a63",
      query: "",
    },
  },
  callApi(url, params) {
    store.movies = [];
    axios
      .get(url, params)
      .then((response) => {
        response.data.results.forEach((item) => {
          if (item.media_type === "movie" || item.media_type === "tv") {
            store.movies.push(item);
          }
        });
      })
      .catch((err) => {
        console.error(err.message);
        this.store.error = err.message;
      });
    store.config.params.query = "";
  },
});
