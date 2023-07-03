import User from "../Models/UsersModal";

const getAllUsers = async (req, res) => {
  await User.find({})
    .then((allUsers) => {
      res.status(200).json({ allUsers });
    })
    .catch((e) => {
      res.status(404).json({ message: "please try again later!" });
    });
};

const updateUserById = async (req, res) => {};

const deleteUserById = async (req, res) => {};

const getUserById = async (req, res) => {};

export { getAllUsers, updateUserById, deleteUserById, getUserById };
