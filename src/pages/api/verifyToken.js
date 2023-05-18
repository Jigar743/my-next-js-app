import handler from "../../../Helpers/Handle";
import { generateToken } from "../../../Helpers/tokenGenerate";
import Users from "../../../Models/Users";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

handler.get(verifytToken);

async function verifytToken(req, res) {
  const { token } = req.body;

  if (!token) {
    res.status(401).json({ message: "token is required!" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    Users.findById(
      {
        _id: user._id,
      },
      (err, user) => {
        res.status(200).json({ user });
      }
    );
  });
}

export default handler;
