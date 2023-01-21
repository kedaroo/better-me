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

  async login(req, res) {
    try {
      if (req.user) {
        return res.status(200).json({ error: false, data: req.user });
      }

      return res.status(400).json({ error: true, data: null });
    } catch (err) {
      return res.status(400).json({ error: true, data: null });
    }
  }
}

export default new UserController(user);
