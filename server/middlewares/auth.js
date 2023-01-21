import admin from "../config/firebase.js";
import User from "../models/user.js";
import UserService from "../services/UserService.js";
const userService = new UserService(User);

export const isAuthorized = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    const decodedToken = await admin.auth().verifyIdToken(token);

    console.log(decodedToken)

    if (decodedToken) {
      const user = await userService.findByEmailOrCreateIfNotFound(
        decodedToken
      );
      console.log(user);
      req.user = user;
      return next();
    }

    return res.status(401).json({ success: false, message: "Unauthorized" });
  } catch (err) {
    console.log(err);
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};
