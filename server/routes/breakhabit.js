import BreakhabitController from "../controllers/BreakhabitController.js";
import express from "express";
const router = express.Router();

router
  .route("/")
  .get(BreakhabitController.getAll)
  .post(BreakhabitController.insert);

router
  .route("/:id")
  .get(BreakhabitController.get)
  .put(BreakhabitController.update)
  .delete(BreakhabitController.delete);

export default router;
