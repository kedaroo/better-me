import SleephabitController from "../controllers/SleephabitController.js";
import express from "express";
import { isAuthorized } from "../middlewares/auth.js";
const router = express.Router();

router.route("/user")
    .get(isAuthorized, SleephabitController.getByUserId)
    .patch(isAuthorized, SleephabitController.updateByUserId)

router.route("/addlog").patch(isAuthorized, SleephabitController.addLog)

router
  .route("/:id")
  .get(SleephabitController.get)
  .put(SleephabitController.update)
  .delete(SleephabitController.delete);

export default router;
