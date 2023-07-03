import { getAllTodos } from "../../../Controllers/TodosController";
import { protectedHandler } from "../../../Helpers/Handle";

protectedHandler.get(getAllTodos);

export default protectedHandler;
