import {
  deleteTodoById,
  getTodoById,
  updateTodoById,
} from "../../../Controllers/TodosController";
import { protectedHandler } from "../../../Helpers/Handle";

protectedHandler.get(getTodoById).put(updateTodoById).delete(deleteTodoById);

export default protectedHandler;
