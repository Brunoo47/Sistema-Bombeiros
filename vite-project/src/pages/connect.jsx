import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

axios.get("/api/users").then((response) => {
  console.log(response.data);
});
