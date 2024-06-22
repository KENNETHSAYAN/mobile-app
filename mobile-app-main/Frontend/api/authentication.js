import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const BASE_URL = "http://192.168.43.128:8000/api/v1";

const instance = axios.create({
  baseURL: BASE_URL,
});

const login = async (email, password) => {
  try {
    const response = await instance.post("/auth/token/login", { email, password });
    await AsyncStorage.setItem("auth_token", response.data.auth_token); // Assuming the token is in response.data.auth_token
    return response;
  } catch (error) {
    throw error;
  }
};

const registration = async (first_name, last_name, email, password, confirm_password) => {
  try {
    const response = await instance.post("/auth/users/", { first_name, last_name, email, password, confirm_password });
    return response;
  } catch (error) {
    throw error;
  }
};

const me = async () => {
  try {
    const token = await AsyncStorage.getItem("auth_token");
    if (!token) {
      throw new Error("No token found");
    }
    const response = await instance.get("/auth/users/me/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const updateProfile = async (userData) => {
  try {
    const token = await AsyncStorage.getItem("auth_token");
    if (!token) {
      throw new Error("No token found");
    }
    const response = await instance.put("/auth/users/me/", userData, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default { login, registration, me, updateProfile };