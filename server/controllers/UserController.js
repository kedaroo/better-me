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

  async getStats(req, res) {
    
    const userId = req.user._id;

    try {
      const response = await this.service.getStats(userId);

      return res.status(200).json(response);
    } catch (e) {
      return res
        .status(e.statusCode || 500)
        .json({ error: true, message: e.message || "Something went wrong" });
    }
  }
}

export default new UserController(user);
