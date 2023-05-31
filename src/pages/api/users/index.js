// This file is for fetching all the users

import dbConnect from "../../../Helpers/DBConnect";
import handler from "../../../Helpers/Handle";
import { generateToken } from "../../../Helpers/tokenGenerate";
import Users from "../../../Models/Users";
import * as bcrypt from "bcrypt";

handler.get(getUsers);

async function getUsers(req, res) {
  try {
    const allUsers = await Users.find({});

    res.status(200).json({ allUsers });
  } catch (e) {
    res.status(404).json({ message: "please try again later!" });
  }
}

export default handler;
