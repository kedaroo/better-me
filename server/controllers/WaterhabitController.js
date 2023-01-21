import Controller from "./Controller.js";
import WaterhabitService from "../services/WaterhabitService.js";
import Waterhabit from "../models/waterhabit.js";
import autoBind from "auto-bind";

const waterhabitService = new WaterhabitService(Waterhabit);

class WaterhabitController extends Controller {
  constructor(service) {
    super(service);
    autoBind(this);
  }
}

export default new WaterhabitController(waterhabitService);
