const dev = process.env.NODE_ENV !== "production";

// for calling api in client side
const clientURL = "/api";

// for server side api call
export const serverURL = dev
  ? process.env.DEVELOPMENT_BASE_URL
  : process.env.PRODUCTION_BASE_URL;

export const API_ROUTES = {
  signupUser: `${clientURL}/auth/signup`,
  loginUser: `${clientURL}/auth/signin`,
  getAllUsers: `${clientURL}/users`,
  updateUsers: (id) => `${clientURL}/users/${id}`,
};
