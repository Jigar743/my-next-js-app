// // This file is for get user by IDs

import {
  deleteUserById,
  getUserById,
  updateUserById,
} from "../../../Controllers/UserControllers";
import { protectedHandler } from "../../../Helpers/Handle";

protectedHandler.put(updateUserById).delete(deleteUserById);

export default protectedHandler;
