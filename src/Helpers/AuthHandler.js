import jwt from "jsonwebtoken";
import Users from "../Models/Users";

export const getLoggiedInUser = async (user) => {
  const currUser = await Users.findById({ _id: user._id })
    .then((user) => {
      return user;
    })
    .catch((err) => {
      return null;
    });
  return currUser;
};

export const isAuthenticated = async (context) => {
  const { token } = context.req.cookies;
  if (!token) {
    return { isLoggedIn: false, user: null };
  } else {
    const tmp = jwt.verify(token, process.env.JWT_SECRET, {
      algorithm: "HS256",
    });
    console.log({ tmp });
    const loggedInUser = await getLoggiedInUser(tmp);

    if (!loggedInUser) {
      return { isLoggedIn: false, user: null };
    }
    return { isLoggedIn: true, user: JSON.parse(JSON.stringify(loggedInUser)) };
  }
};
