import Controller from "./Controller.js";
import BreakhabitService from "../services/BreakhabitService.js";
import Breakhabit from "../models/breakhabit.js";
import autoBind from "auto-bind";

const breakhabitService = new BreakhabitService(Breakhabit);

class BreakhabitController extends Controller {
  constructor(service) {
    super(service);
    autoBind(this);
  }
}

export default new BreakhabitController(breakhabitService);
