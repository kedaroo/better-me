import WaterhabitController from "../controllers/WaterhabitController.js";
import express from "express";
const router = express.Router();

router.route("/")
    .get(WaterhabitController.getAll)
    .post(WaterhabitController.insert);

router
  .route("/:id")
  .get(WaterhabitController.get)
  .put(WaterhabitController.update)
  .delete(WaterhabitController.delete);

export default router;