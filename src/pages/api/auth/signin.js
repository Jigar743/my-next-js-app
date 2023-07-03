import { loginUser } from "../../../Controllers/AuthController";
import handler from "../../../Helpers/Handle";

handler.post(loginUser);

export default handler;
