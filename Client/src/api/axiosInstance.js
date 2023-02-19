import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://commercefox.ml/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axios;
