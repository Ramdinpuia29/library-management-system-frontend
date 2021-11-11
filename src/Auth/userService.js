import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:8081/LibraryManagementSystem/";

class UserService {
  getBooks() {
    return axios.get(API_URL + "books");
  }

  getStaffs() {
    return axios.get(API_URL + "staffs", { headers: authHeader() });
  }
}

export default new UserService();
