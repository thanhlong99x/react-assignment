import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://60f7acd19cdca00017454f2e.mockapi.io",
  headers: {
    "content-type": "application/json",
  }
});
export default axiosClient;