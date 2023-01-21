import Controller from "./Controller";
import BreakhabitService from "../services/BreakhabitService";
import Breakhabit from "../models/breakhabit";
import autoBind from "auto-bind";

const breakhabitService = new BreakhabitService(Breakhabit);

class BreakhabitController extends Controller {
  constructor(service) {
    super(service);
    autoBind(this);
  }
}

export default new BreakhabitController(breakhabitService);
