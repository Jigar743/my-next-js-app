import mongoose from "mongoose";

const todoScheema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    completed: {
      type: Boolean,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

let Todo;
if (mongoose.models && mongoose.models.todos) {
  Todo = mongoose.models.todos;
} else {
  Todo = mongoose.model("todos", userSchema);
}

export default Todo;
