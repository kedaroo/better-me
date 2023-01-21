import BreakhabitController from "../controllers/BreakhabitController.js";
import express from "express";
import { isAuthorized } from "../middlewares/auth.js";
const router = express.Router();

router
  .route("/user")
  .get(isAuthorized, BreakhabitController.getByUserId)
  .patch(isAuthorized, BreakhabitController.updateByUserId);

router.route("/addlog").patch(isAuthorized, BreakhabitController.addLog)

router
  .route("/:id")
  .get(BreakhabitController.get)
  .put(BreakhabitController.update)
  .delete(BreakhabitController.delete);

export default router;
