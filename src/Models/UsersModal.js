import mongoose, { Schema } from "mongoose";

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Account already exists!"],
    },
    password: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

let User;

if (mongoose.models && mongoose.models.users) {
  User = mongoose.models.users;
} else {
  User = mongoose.model("users", userSchema);
}

export default User;
