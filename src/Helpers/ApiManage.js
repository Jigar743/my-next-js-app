const BaseUrl = "/api";

export const API_ROUTES = {
  signupUser: `${BaseUrl}/users/signupApi`,
  loginUser: `${BaseUrl}/users/loginApi`,
  updateUsers: (id) => `${BaseUrl}/users/${id}`,
};
