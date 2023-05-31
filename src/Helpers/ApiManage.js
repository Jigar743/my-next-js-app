const BaseUrl = "/api";

export const API_ROUTES = {
  signupUser: `${BaseUrl}/users/signupApi`,
  loginUser: `${BaseUrl}/users/loginApi`,
  verifyToken: `${BaseUrl}/verifyToken`,
  getAllUsers: `${BaseUrl}/users`,
  updateUsers: (id) => `${BaseUrl}/users/${id}`,
};
