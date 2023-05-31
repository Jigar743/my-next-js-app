import dbConnect from "../../../Helpers/DBConnect";
import handler from "../../../Helpers/Handle";
import { generateToken } from "../../../Helpers/tokenGenerate";
import Users from "../../../Models/Users";
import * as bcrypt from "bcrypt";

handler.post(loginUser);

async function loginUser(req, res) {
  const { email, password } = req.body;

  await Users.findOne({ email: email })
    .then((user) => {
      if (!user) {
        res
          .status(404)
          .json({ error: true, message: "email or password is wrong" });
      }

      bcrypt.compare(password, user.password, (err, valid) => {
        if (!valid) {
          res
            .status(404)
            .json({ error: true, message: "email or password is wrong" });
        }

        var token = generateToken(user);

        res.status(200).json({
          user,
          token,
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(404)
        .json({ error: true, message: "email or password is wrong" });
    });
}

export default handler;
