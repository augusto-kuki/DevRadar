import axios from "axios";

const api = axios.create({
  baseUrl: "http://10.1.1.22:3333/"
});

export default api;
