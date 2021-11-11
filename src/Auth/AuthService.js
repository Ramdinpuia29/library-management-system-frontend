import axios from "axios";

const API_URL = "http://localhost:8081/LibraryManagementSystem/";

class AuthService {
  login = async (username, password) => {
    await axios
      .post(API_URL + "Login1", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.role) {
          localStorage.setItem("user", JSON.stringify(response.data.role));
          console.log(response.data);
        }
        console.log(response.data);
        return response.data;
      });
  };

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
