import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },

  mounted() {
    axios.get("/api/users").then((response) => {
      this.users = response.data;
    });
  },
};
