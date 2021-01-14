import axios from "axios";

let BaseApi = axios.create({
  baseURL: "https://lpnb.dev/api"
});

let Api = function() {
  let token = localStorage.getItem("token");

  if (token) {
    BaseApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return BaseApi;
};

export default Api;
