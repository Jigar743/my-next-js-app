import { generateToken } from "../Helpers/tokenGenerate";
import User from "../Models/UsersModal";
import * as bcrypt from "bcrypt";

const signupUser = async (req, res) => {
  const { name, email, password: plainText } = req.body;
  const password = await bcrypt.hash(plainText, 10);

  const newUser = await User.create({
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
      res.status(201).json({
        newUser,
        token,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "can't able to create user, " + error });
    });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  await User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        res.status(404).json({ error: true, message: "email is wrong!" });
      }

      bcrypt.compare(password, user.password, (err, valid) => {
        if (!valid) {
          res.status(404).json({ error: true, message: "password is wrong!" });
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
};

export { signupUser, loginUser };
