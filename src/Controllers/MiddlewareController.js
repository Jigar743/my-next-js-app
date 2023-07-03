import User from "../Models/UsersModal";
import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(403).json({ message: "UnAuthorised User!" });
  } else {
    jwt.verify(
      token,
      process.env.JWT_SECRET,
      {
        algorithm: "HS256",
      },
      async (err, tmp) => {
        if (err) {
          res.status(403).json({ message: "UnAuthorized User!" });
        }
        await User.findById({ _id: tmp._id })
          .then((user) => {
            if (user) {
              req.user = user;
              next();
            }
          })
          .catch((err) =>
            res.status(403).json({ message: "UnAuthorized User!" })
          );
      }
    );
  }
};

export { verifyToken };
