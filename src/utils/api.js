import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN = import.meta.env.VITE_APP_TMDB;

const headers = {
  Authorization: "bearer " + TOKEN,
};

export const fetchDataFromAPi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
