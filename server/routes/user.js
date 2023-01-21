import UserContoller from "../controllers/UserController.js";
import express from "express";
import { isAuthorized } from "../middlewares/auth.js";
const router = express.Router();

router.route("/login").get(isAuthorized, UserContoller.login);

router.route("/").get(UserContoller.getAll).post(UserContoller.insert);

router
  .route("/:id")
  .get(UserContoller.get)
  .put(UserContoller.update)
  .delete(UserContoller.delete);

export default router;
