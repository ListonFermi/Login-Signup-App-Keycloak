import axios from "axios";
import { getBackendUrl } from "./constants";

const apiClient = axios.create({
  baseURL: getBackendUrl(),
  withCredentials: true,
  timeout: 120000,
});

const backendUrl = getBackendUrl()

export async function fetchUserData(token: string) {
  const response = await axios.get(`${backendUrl}/userData`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
