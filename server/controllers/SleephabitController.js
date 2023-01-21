import Controller from "./Controller";
import SleephabitService from "../services/SleephabitService";
import Sleephabit from "../models/sleephabit";
import autoBind from "auto-bind";

const sleephabitService = new SleephabitService(Sleephabit);

class SleephabitController extends Controller {
  constructor(service) {
    super(service);
    autoBind(this);
  }
}

export default new SleephabitController(sleephabitService);
