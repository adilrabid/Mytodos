import axios from "axios";
const axiosAuth = axios.create({
  //base url for authentication.
  baseURL: "https://identitytoolkit.googleapis.com/v1",
});
export default axiosAuth;
