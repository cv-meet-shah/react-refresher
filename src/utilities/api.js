import axios from "axios";

const baseURL = "https://developers.zomato.com/api/v2.1/";
const userKey = "7c100bb6080e5ee389e50fadac7cd707";

const headers = {
  "user-key": userKey,
  Accept: "application/json",
};

/**
 * Default config, Will be used in app whenever we need API call with zomato configuration.
 */
const axiosConfig = {
  baseURL,
  headers,
};

export default axios.create(axiosConfig);
