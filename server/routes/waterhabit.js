import WaterhabitController from "../controllers/WaterhabitController.js";
import express from "express";
import { isAuthorized } from "../middlewares/auth.js";
const router = express.Router();

router.route("/user")
    .get(isAuthorized, WaterhabitController.getByUserId)
    .patch(isAuthorized, WaterhabitController.updateByUserId)

router
  .route("/:id")
  .get(WaterhabitController.get)
  .put(WaterhabitController.update)
  .delete(WaterhabitController.delete);

export default router;