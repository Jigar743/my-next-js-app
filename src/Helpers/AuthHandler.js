import jwt from "jsonwebtoken";
import User from "../Models/UsersModal";

export const getLoggiedInUser = async (user) => {
  const currUser = await User.findById({ _id: user._id })
    .then((user) => {
      // console.log({ user });
      return user;
    })
    .catch((err) => {
      console.log({ err });
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
    const loggedInUser = await getLoggiedInUser(tmp);

    if (!loggedInUser) {
      return { isLoggedIn: false, user: null };
    }
    return {
      isLoggedIn: true,
      user: JSON.parse(JSON.stringify(loggedInUser)),
    };
  }
};
