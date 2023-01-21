import Controller from "./Controller.js";
import SleephabitService from "../services/SleephabitService.js";
import Sleephabit from "../models/sleephabit.js";
import autoBind from "auto-bind";

const sleephabitService = new SleephabitService(Sleephabit);

class SleephabitController extends Controller {
  constructor(service) {
    super(service);
    autoBind(this);
  }

  async getByUserId(req, res) {
    const userId = req.user._id;

    try {
      const response = await this.service.getByUserId(userId);

      return res.status(response.statusCode).json(response);
    } catch (e) {
      return res
        .status(e.statusCode || 500)
        .json({ error: true, message: e.message || "Something went wrong" });
    }
  }

  async updateByUserId(req, res) {
    const userId = req.user._id;

    try {
      const response = await this.service.updateByUserId(userId, req.body);

      return res.status(response.statusCode).json(response);
    } catch (e) {
      return res
        .status(e.statusCode || 500)
        .json({ error: true, message: e.message || "Something went wrong" });
    }
  }
  
  async addLog(req, res) {

    const userId = req.user._id;

    try {
      const response = await this.service.addLog(userId, req.body);
      
      return res.status(200).json(response);
    } catch (e) {
      return res
        .status(e.statusCode || 500)
        .json({ error: true, message: e.message || "Something went wrong" });
    }
  }
}

export default new SleephabitController(sleephabitService);
