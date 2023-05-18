import dbConnect from "../../../Helpers/DBConnect";
import handler from "../../../Helpers/Handle";
import { generateToken } from "../../../Helpers/tokenGenerate";
import Users from "../../../Models/Users";
import * as bcrypt from "bcrypt";

handler.post(createUser);

async function createUser(req, res) {
  const { name, email, password: plainText } = req.body;

  const password = await bcrypt.hash(plainText, 10);

  const newUser = await Users.create({
    name,
    email,
    password,
    createdAt: Date.now(),
    active: true,
  });

  await newUser
    .save()
    .then((user) => {
      var token = generateToken(user);
      res.status(200).json({
        newUser,
        token,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(501).json({ message: "can't able to create user, " + error });
    });
}

export default handler;
