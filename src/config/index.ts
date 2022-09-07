const isDevEnv = process.env.NODE_ENV !== "production";

const API_SERVER_DEV = "http://localhost:3000";
const API_SERVER_PROD = "https://myapp.netlify.com";
const API_SERVER = isDevEnv ? API_SERVER_DEV : API_SERVER_PROD;

export {
  API_SERVER,
  // API_SERVER_PROD,
  // API_SERVER_DEV
};
