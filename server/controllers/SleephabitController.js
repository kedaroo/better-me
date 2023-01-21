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
}

export default new SleephabitController(sleephabitService);
