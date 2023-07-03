import { signupUser } from "../../../Controllers/AuthController";
import handler from "../../../Helpers/Handle";

handler.post(signupUser);

export default handler;
