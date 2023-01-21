import Controller from "./Controller";
import WaterhabitService from "../services/WaterhabitService";
import Waterhabit from "../models/waterhabit";
import autoBind from "auto-bind";

const waterhabitService = new WaterhabitService(Waterhabit);

class WaterhabitController extends Controller {
  constructor(service) {
    super(service);
    autoBind(this);
  }
}

export default new WaterhabitController(waterhabitService);
