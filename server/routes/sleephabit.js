import SleephabitController from "../controllers/SleephabitController.js";
import express from "express";
const router = express.Router();

router
  .route("/")
  .get(SleephabitController.getAll)
  .post(SleephabitController.insert);

router
  .route("/:id")
  .get(SleephabitController.get)
  .put(SleephabitController.update)
  .delete(SleephabitController.delete);

export default router;
