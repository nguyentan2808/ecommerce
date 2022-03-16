import axios from "axios";

interface ILogin {
  username: string;
  password: string;
}

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    req!.headers!.Authorization = `Bearer ${token}`;
  }

  return req;
});

/* Users APIs */
export const login = ({ username, password }: ILogin) =>
  API.post("/login", { username, password });
