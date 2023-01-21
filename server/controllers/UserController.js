import Controller from "./Controller";
import UserService from "../services/UserService";
import User from "../models/user";
import autoBind from "auto-bind";

const user = new UserService(User);

class UserController extends Controller {
  constructor(service) {
    super(service);
    autoBind(this);
  }
}

export default new UserController(user);
