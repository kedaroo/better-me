import Controller from "./Controller.js";
import UserService from "../services/UserService.js";
import User from "../models/user.js";
import autoBind from "auto-bind";

const user = new UserService(User);

class UserController extends Controller {
  constructor(service) {
    super(service);
    autoBind(this);
  }
}

export default new UserController(user);
