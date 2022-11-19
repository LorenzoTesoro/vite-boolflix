import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  API_URL: "https://api.themoviedb.org/3/search/multi",
  cast_url: "https://api.themoviedb.org/3/movie",
  genres_url: "https://api.themoviedb.org/3/genre/movie/list",
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
        console.log(response, "response");

        response.data.results.forEach((item) => {
          if (item.media_type === "movie" || item.media_type === "tv") {
            store.movies.push(item);
          }
        });
        console.log(response.data.results);
        console.log(store.movies, "store.moviesarray");
        console.log(store.ids);
      })
      .catch((err) => {
        console.error(err.message);
        this.store.error = err.message;
      });
    store.config.params.query = "";
  },
});

// TODO:
// - ADD CASTCALLAPI TO STATE
// - REFACTORING
