import axios from "axios";

const baseURL = 'http://10.10.4.173:3001'
const api = axios.create({
  baseURL,
});

export default api;