import axios from "axios";

const baseURL = "https://gym-management-steel.vercel.app/api/v1";

const apiClient = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: false,
});

apiClient.interceptors.request.use(
  (config) => {
    try {
      const raw = localStorage.getItem("authTokens");
      if (raw) {
        const tokens = JSON.parse(raw);
        if (tokens?.access) {
          config.headers.Authorization = `JWT ${tokens.access}`;
        }
      }
    } catch (e) {
      // ignore parse errors
      // console.warn("api-client: failed to parse authTokens", e);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
