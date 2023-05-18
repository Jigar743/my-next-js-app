// // This file is for get user by IDs

import handler from "../../../Helpers/Handle";
import Users from "../../../Models/Users";

handler.get(userById).put(updateUserById);

function updateUserById(req, res) {
  const { id } = req.query;
  console.log(id);

  res.status(405).json({ message: "Method is not Allowed!" });
}

async function userById(req, res) {
  const { id } = req.query;
  try {
    const newUser = await Users.create({
      email: "jigarmodi456@gmail.com",
      password: "Jigar456@",
      createdAt: Date.now(),
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
  }

  res.status(405).json({ message: "Method is not Allowed!" });
}

export default handler;
